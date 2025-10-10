/**
 * Properties for logging HTTP request information.
 * 
 * @interface LoggerRequestProps
 * @property {string} method - The HTTP method used for the request (e.g., 'GET', 'POST', 'PUT', 'DELETE')
 * @property {string} url - The URL or endpoint that was requested
 * @property {number} [statusCode] - The HTTP status code returned by the server (optional)
 * @property {number} [duration] - The time taken to process the request in milliseconds (optional)
 */
export interface LoggerRequestProps {
	method: string
	url: string
	statusCode?: number
	duration?: number
}

/**
 * Represents metadata properties for logger operations.
 * 
 * A flexible record type that allows any string key to be associated with any value,
 * providing extensible metadata support for logging contexts.
 * 
 * @example
 * ```typescript
 * const logMeta: LoggerMetaProps = {
 *   userId: '12345',
 *   requestId: 'abc-def-ghi',
 *   timestamp: Date.now(),
 *   level: 'info'
 * };
 * ```
 */
export type LoggerMetaProps = Record<string, unknown>

/**
 * Represents the context properties that can be passed to a logger.
 * Can be either a simple string message or a structured metadata object.
 */
export type LoggerContextProps = string | LoggerMetaProps

/**
 * Represents the possible types that can be passed as error properties to a logger.
 * Can be either a standard JavaScript Error object or custom logger metadata properties.
 */
export type LoggerErrorProps = Error | LoggerMetaProps
