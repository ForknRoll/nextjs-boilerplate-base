/** biome-ignore-all lint/style/useNamingConvention: environment variables use SCREAMING_SNAKE_CASE */
import process from 'node:process'

import {
	CLIENT_SCHEMA,
	SERVER_SCHEMA,
	SHARED_SCHEMA,
} from '@/core/config/env/schemas'
import { z } from 'zod/v3'

type EnvSchema = z.ZodObject<z.ZodRawShape>

interface EnvSchemas<
	TShared extends EnvSchema = EnvSchema,
	TClient extends EnvSchema = EnvSchema,
	TServer extends EnvSchema = EnvSchema,
> {
	/** Variables accessible on both client and server (e.g., NODE_ENV) */
	shared?: TShared
	/** Variables accessible only on client (must be prefixed with NEXT_PUBLIC_*) */
	client?: TClient
	/** Variables accessible only on server (e.g., DATABASE_URL, API_KEY) */
	server?: TServer
}

class Env<
	TShared extends EnvSchema = z.ZodObject<Record<string, never>>,
	TClient extends EnvSchema = z.ZodObject<Record<string, never>>,
	TServer extends EnvSchema = z.ZodObject<Record<string, never>>,
> {
	private schemas: {
		shared: TShared
		client: TClient
		server: TServer
	}
	private env?: z.infer<TShared> & z.infer<TClient> & z.infer<TServer>
	private readonly isClient: boolean = typeof window !== 'undefined'

	constructor(schemas: EnvSchemas<TShared, TClient, TServer>) {
		this.schemas = {
			shared: (schemas.shared ?? z.object({})) as TShared,
			client: (schemas.client ?? z.object({})) as TClient,
			server: (schemas.server ?? z.object({})) as TServer,
		}

		// Only validate on server side during construction
		// On client, validation happens lazily on first access
		if (!this.isClient) {
			const schemaToValidate = this.schemas.shared
				.merge(this.schemas.client)
				.merge(this.schemas.server)

			this.env = this.validateEnv(schemaToValidate, process.env)
		}
	}

	private validateEnv<T extends z.ZodType>(
		schema: T,
		envVars: Record<string, string | undefined>,
	): z.infer<T> {
		const parsed = schema.safeParse(envVars)

		if (!parsed.success) {
			throw new Error(
				`Invalid environment variables: ${JSON.stringify(parsed.error.flatten().fieldErrors)}`,
			)
		}

		return parsed.data
	}

	private ensureEnv(): void {
		if (!this.env && this.isClient) {
			// On client, validate only shared + client schemas
			const schemaToValidate = this.schemas.shared.merge(this.schemas.client)

			this.env = this.validateEnv(schemaToValidate, process.env)
		}
	}

	get<K extends keyof (z.infer<TShared> & z.infer<TClient> & z.infer<TServer>)>(
		key: K,
	): (z.infer<TShared> & z.infer<TClient> & z.infer<TServer>)[K] {
		// Check if it's a server-only variable
		if (key in this.schemas.server.shape) {
			if (this.isClient) {
				throw new Error(
					`Access to server-only environment variable '${String(key)}' is denied on the client side`,
				)
			}
		}

		// Ensure env is loaded (lazy load on client)
		this.ensureEnv()

		if (this.env && key in this.env) {
			return this.env[key]
		}

		throw new Error(`Environment variable ${String(key)} is not defined`)
	}
}

export const env = new Env({
	shared: SHARED_SCHEMA,
	client: CLIENT_SCHEMA,
	server: SERVER_SCHEMA,
})
