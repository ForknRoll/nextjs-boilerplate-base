/** biome-ignore-all lint/style/useNamingConvention: environment variables use SCREAMING_SNAKE_CASE */
import { z } from 'zod/v3'

const SERVER_SCHEMA = z.object({
	APP_NAME: z.string().default('Next.js Boilerplate'),
})

const CLIENT_SCHEMA = z.object({})

const SHARED_SCHEMA = z.object({
	NODE_ENV: z
		.enum(['development', 'production', 'test'])
		.default('development'),
})

export { SERVER_SCHEMA, CLIENT_SCHEMA, SHARED_SCHEMA }
