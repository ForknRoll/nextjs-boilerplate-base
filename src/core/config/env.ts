/** biome-ignore-all lint/style/useNamingConvention: environment variables use SCREAMING_SNAKE_CASE convention */
import { env as envProcess } from 'node:process'

import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

/**
 * Environment configuration object that validates and provides type-safe access to environment variables.
 *
 * @description This configuration uses a validation schema to ensure environment variables are properly
 * typed and validated at runtime. It separates server-side, client-side, and shared environment variables.
 *
 * @remarks
 * - Server variables are only accessible on the server side
 * - Client variables must be prefixed with 'NEXT_PUBLIC_' to be accessible in the browser
 * - Shared variables are available on both server and client sides
 * - Empty strings are treated as undefined values
 */
export const env = createEnv({
	server: {},
	clientPrefix: 'NEXT_PUBLIC_',
	client: {},
	shared: {
		NODE_ENV: z.enum(['development', 'test', 'production']),
	},
	runtimeEnv: envProcess,
	emptyStringAsUndefined: true,
})
