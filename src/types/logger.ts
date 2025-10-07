export interface LoggerRequestProps {
	method: string
	url: string
	statusCode?: number
	duration?: number
}

export type LoggerMetaProps = Record<string, unknown>

export type LoggerContextProps = string | LoggerMetaProps

export type LoggerErrorProps = Error | LoggerMetaProps
