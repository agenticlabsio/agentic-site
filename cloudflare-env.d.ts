/// <reference types="@cloudflare/workers-types" />

declare global {
  interface CloudflareEnv {
    // D1 Database binding
    D1: D1Database

    // R2 Bucket binding for media storage
    R2: R2Bucket

    // Static assets binding
    ASSETS: Fetcher

    // Environment variables
    PAYLOAD_SECRET: string
    NEXT_PUBLIC_SERVER_URL: string
  }

  // Make Cloudflare env available globally
  namespace NodeJS {
    interface ProcessEnv {
      PAYLOAD_SECRET?: string
      NEXT_PUBLIC_SERVER_URL?: string
    }
  }
}

export {}
