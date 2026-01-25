import { REST_METHODS } from '@payloadcms/next/api'
import config from '@payload-config'

export const GET = REST_METHODS.GET({ config })
export const POST = REST_METHODS.POST({ config })
export const DELETE = REST_METHODS.DELETE({ config })
export const PATCH = REST_METHODS.PATCH({ config })
export const PUT = REST_METHODS.PUT({ config })
export const OPTIONS = REST_METHODS.OPTIONS({ config })
