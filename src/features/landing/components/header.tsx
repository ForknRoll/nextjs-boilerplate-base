import { PROJECTLINKS } from '@/features/landing/data'
import Link from 'next/link'

export function Header() {
	return (
		<header className="container mx-auto px-6 py-8">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<span className="text-3xl">🤘</span>
					<span className="font-bold text-gray-900 text-xl">ForknRoll</span>
				</div>
				<nav className="flex gap-6">
					<Link
						className="text-gray-600 transition-colors hover:text-gray-900"
						href={PROJECTLINKS.github}
						rel="noopener noreferrer"
						target="_blank"
					>
						GitHub
					</Link>
				</nav>
			</div>
		</header>
	)
}
