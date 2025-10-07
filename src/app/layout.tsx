import type { Metadata } from 'next'
import '@/core/styles/globals.css'

import type { ChildrenProps } from '@/types/children'

export const metadata: Metadata = {
	title: 'Next.js Boilerplate Base - Modern Next.js Starter',
	description:
		'A production-ready Next.js boilerplate with clean architecture, TypeScript, Tailwind CSS, and best practices built-in. Start building faster.',
	keywords: [
		'Next.js',
		'React',
		'TypeScript',
		'Tailwind CSS',
		'Boilerplate',
		'Starter',
		'Bun',
		'Turbopack',
	],
	authors: [{ name: 'ForknRoll' }],
	openGraph: {
		title: 'Next.js Boilerplate Base',
		description:
			'A modern, production-ready Next.js boilerplate with clean architecture and best practices built-in.',
		type: 'website',
	},
}

export default function RootLayout({ children }: ChildrenProps) {
	return (
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	)
}
