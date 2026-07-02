// The Cloudflare Workers runtime doesn't expose MessageChannel/MessagePort as
// globals, but Payload's initialization path (via its scheduler dependencies)
// references them — causing "ReferenceError: MessagePort is not defined" at
// runtime. Install a working implementation before Payload loads.
//
// Must be awaited *before* dynamically importing @payload-config so the globals
// exist by the time Payload initializes.

let installed = false

export async function installMessageChannelPolyfill(): Promise<void> {
  if (installed) return
  const g = globalThis as unknown as {
    MessageChannel?: unknown
    MessagePort?: unknown
    FinalizationRegistry?: unknown
    WeakRef?: unknown
  }

  // GC-observability globals the Workers runtime doesn't expose. Payload / its
  // dependencies reference them during init. No-op / strong-ref stand-ins are
  // safe for short-lived, request-scoped execution.
  if (!g.FinalizationRegistry) {
    g.FinalizationRegistry = class {
      register(): void {}
      unregister(): boolean {
        return false
      }
    }
  }
  if (!g.WeakRef) {
    g.WeakRef = class<T> {
      private t: T
      constructor(target: T) {
        this.t = target
      }
      deref(): T {
        return this.t
      }
    }
  }

  if (g.MessageChannel && g.MessagePort) {
    installed = true
    return
  }

  // Prefer the real implementation from Node's worker_threads (nodejs_compat).
  try {
    const wt = await import('node:worker_threads')
    if (wt?.MessageChannel && wt?.MessagePort) {
      g.MessageChannel = g.MessageChannel || wt.MessageChannel
      g.MessagePort = g.MessagePort || wt.MessagePort
      installed = true
      return
    }
  } catch {
    // fall through to the JS shim
  }

  // Minimal functional fallback: async message delivery so consumers that rely
  // on the channel to flush work (e.g. schedulers) still progress.
  type Listener = (evt: { data: unknown }) => void
  class PolyfillMessagePort {
    onmessage: Listener | null = null
    _paired: PolyfillMessagePort | null = null
    _listeners: Listener[] = []
    postMessage(data: unknown): void {
      const target = this._paired
      if (!target) return
      const evt = { data }
      setTimeout(() => {
        if (typeof target.onmessage === 'function') target.onmessage(evt)
        for (const l of target._listeners) l(evt)
      }, 0)
    }
    addEventListener(type: string, cb: Listener): void {
      if (type === 'message') this._listeners.push(cb)
    }
    removeEventListener(type: string, cb: Listener): void {
      this._listeners = this._listeners.filter((l) => l !== cb)
    }
    start(): void {}
    close(): void {}
  }
  class PolyfillMessageChannel {
    port1 = new PolyfillMessagePort()
    port2 = new PolyfillMessagePort()
    constructor() {
      this.port1._paired = this.port2
      this.port2._paired = this.port1
    }
  }
  g.MessageChannel = PolyfillMessageChannel
  g.MessagePort = PolyfillMessagePort
  installed = true
}
