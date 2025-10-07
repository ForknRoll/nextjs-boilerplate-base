import { FEATURES } from '@/features/landing/data'

export function Features() {
	return (
		<section
			aria-labelledby="features-heading"
			className="mt-20 grid gap-8 text-left md:grid-cols-3"
		>
			<h2 className="sr-only" id="features-heading">
				Key Features
			</h2>

			{FEATURES.map((feature) => (
				<article
					className="rounded-xl border border-gray-200 bg-white p-6"
					key={feature.id}
				>
					<div
						aria-label={`${feature.emojiName} emoji`}
						className="mb-4 text-3xl"
						role="img"
					>
						{feature.emoji}
					</div>
					<h3 className="mb-2 font-semibold text-gray-900 text-lg">
						{feature.title}
					</h3>
					<p className="text-gray-600">{feature.description}</p>
				</article>
			))}
		</section>
	)
}
