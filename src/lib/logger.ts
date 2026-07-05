import pino from 'pino'

const isDev = process.env.NODE_ENV === 'development'

export const logger = pino({
  level: process.env.LOG_LEVEL || (isDev ? 'debug' : 'info'),
  transport: isDev
    ? {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'HH:MM:ss',
          ignore: 'pid,hostname',
        },
      }
    : undefined,
  redact: {
    paths: ['req.headers.authorization', 'req.headers.cookie', 'password', 'secret', 'token'],
    censor: '[REDACTED]',
  },
  base: {
    service: 'agentic-site',
    env: process.env.NODE_ENV || 'development',
  },
})

export const createChildLogger = (bindings: Record<string, unknown>) => {
  return logger.child(bindings)
}

export type Logger = typeof logger
