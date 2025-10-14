import { env } from '@/core/config/env'
import type {
	LoggerContextProps,
	LoggerErrorProps,
	LoggerMetaProps,
	LoggerRequestProps,
} from '@/types/logger'
import { type Logger, pino } from 'pino'

/**
 * A comprehensive logging utility class that wraps Pino logger with enhanced functionality.
 *
 * This class provides structured logging capabilities with support for different log levels,
 * child loggers, timing operations, and HTTP request logging. It automatically configures
 * itself based on the environment (development vs production) and includes pretty printing
 * for better readability during development.
 *
 * @example
 * ```typescript
 * // Basic usage
 * const logger = new AppLogger();
 * logger.info('Application started');
 *
 * // With context
 * const userLogger = new AppLogger('UserService');
 * userLogger.debug('User created', { userId: '123' });
 *
 * // Child logger
 * const childLogger = logger.child({ requestId: 'req-456' });
 *
 * // Timing operations
 * const timer = logger.time('database-query');
 * // ... perform operation
 * timer(); // Logs the duration
 *
 * // HTTP request logging
 * logger.request({
 *   method: 'POST',
 *   url: '/api/users',
 *   statusCode: 201,
 *   duration: 150
 * });
 * ```
 *
 * @class AppLogger
 */
class AppLogger {
	private readonly isDevelopment = env.get('NODE_ENV') === 'development'

	private logger: Logger = pino({
		level: this.isDevelopment ? 'debug' : 'info',
		transport: {
			target: 'pino-pretty',
			options: {
				colorize: true,
				translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
				ignore: 'pid,hostname',
				singleLine: false,
			},
		},
	})

	constructor(context?: LoggerContextProps) {
		if (typeof context === 'string') {
			this.logger = this.logger.child({ context })
		} else if (context && typeof context === 'object') {
			this.logger = this.logger.child(context)
		}
	}

	child(context: LoggerContextProps): AppLogger {
		const childContext = typeof context === 'string' ? { context } : context
		return new AppLogger({ ...this.logger.bindings(), ...childContext })
	}

	debug(message: string, meta?: LoggerMetaProps): void {
		this.logger.debug(meta, message)
	}

	info(message: string, meta?: LoggerMetaProps): void {
		this.logger.info(meta, message)
	}

	warn(message: string, meta?: LoggerMetaProps): void {
		this.logger.warn(meta, message)
	}

	error(message: string, error?: LoggerErrorProps): void {
		if (error instanceof Error) {
			this.logger.error({ err: error }, message)
		} else {
			this.logger.error(error, message)
		}
	}

	fatal(message: string, error?: LoggerErrorProps): void {
		if (error instanceof Error) {
			this.logger.fatal({ err: error }, message)
		} else {
			this.logger.fatal(error, message)
		}
	}

	time(label: string): () => void {
		const start = Date.now()
		return () => {
			const duration = Date.now() - start
			this.info(`Timer: ${label}`, { duration: `${duration}ms` })
		}
	}

	request({ method, url, statusCode, duration }: LoggerRequestProps): void {
		const meta: LoggerMetaProps = {
			method,
			url,
			...(statusCode && { statusCode }),
			...(duration && { duration: `${duration}ms` }),
		}

		if (statusCode && statusCode >= 400) {
			this.error('HTTP Request Error', meta)
		} else {
			this.info('HTTP Request', meta)
		}
	}
}

/**
 * Application logger instance used for logging throughout the application.
 * Provides centralized logging functionality with consistent formatting and output handling.
 */
const logger = new AppLogger()

/**
 * Creates a new AppLogger instance with optional context configuration.
 *
 * @param context - Optional logger context properties to configure the logger behavior
 * @returns A new AppLogger instance configured with the provided context
 *
 * @example
 * ```typescript
 * // Create a logger without context
 * const logger = createLogger();
 *
 * // Create a logger with context
 * const contextLogger = createLogger({ module: 'UserService', level: 'debug' });
 * ```
 */
const createLogger = (context?: LoggerContextProps): AppLogger => {
	return new AppLogger(context)
}

export { logger, createLogger }
