import { PROJECTLINKS } from '@/features/landing/data'
import Link from 'next/link'

export function CTAButtons() {
	return (
		<div className="mb-20 flex flex-col justify-center gap-4 sm:flex-row">
			<Link
				className="rounded-lg bg-gray-900 px-8 py-4 font-medium text-white transition-colors hover:bg-gray-800"
				href={PROJECTLINKS.github}
				rel="noopener noreferrer"
				target="_blank"
			>
				Get Started
			</Link>
			<Link
				className="rounded-lg border-2 border-gray-200 bg-white px-8 py-4 font-medium text-gray-900 transition-colors hover:border-gray-300"
				href={`${PROJECTLINKS.github}#readme`}
				rel="noopener noreferrer"
				target="_blank"
			>
				Documentation
			</Link>
		</div>
	)
}
