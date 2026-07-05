// Runs once per server isolate, before any route handling. On Cloudflare
// Workers the MessageChannel/MessagePort polyfill MUST be in place before any
// module (undici's webidl layer, React scheduler paths, background ISR
// revalidation) touches those globals — the lazy install inside
// getPayloadClient() is too late for isolates whose first work is a
// background revalidation rather than a blocking render, which is how
// production began 500ing an hour after deploy (see messagechannel-polyfill.ts).
export async function register() {
  const { installMessageChannelPolyfill } = await import('./lib/messagechannel-polyfill')
  await installMessageChannelPolyfill()
}
