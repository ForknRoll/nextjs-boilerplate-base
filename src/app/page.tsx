import { CTAButtons } from '@/features/landing/components/cta-buttons'
import { Features } from '@/features/landing/components/features'
import { Footer } from '@/features/landing/components/footer'
import { Header } from '@/features/landing/components/header'
import { TechStack } from '@/features/landing/components/tech-stack'

export default function HomePage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
			{/* Header */}
			<Header />

			{/* Hero Section */}
			<main className="container mx-auto px-6 py-20">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="mb-6 font-bold text-5xl text-gray-900 md:text-6xl">
						Modern Next.js Boilerplate
					</h1>
					<p className="mb-12 text-gray-600 text-xl leading-relaxed">
						A production-ready starter with clean architecture, TypeScript, and
						best practices built-in. Start building faster.
					</p>

					{/* CTA Buttons */}
					<CTAButtons />

					{/* Features Grid */}
					<Features />

					{/* Tech Stack */}
					<TechStack />
				</div>
			</main>

			{/* Footer */}
			<Footer />
		</div>
	)
}
