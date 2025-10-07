import { TECHNOLOGIES } from '@/features/landing/data'

export function TechStack() {
	return (
		<section
			aria-labelledby="tech-stack-heading"
			className="mt-20 border-gray-200 border-t pt-12"
		>
			<h2 className="mb-6 text-gray-500 text-sm" id="tech-stack-heading">
				BUILT WITH
			</h2>
			<ul className="flex flex-wrap justify-center gap-6 text-gray-600">
				{TECHNOLOGIES.map((tech, index) => (
					<li className="flex items-center gap-6" key={tech}>
						<span className="font-medium">{tech}</span>
						{index < TECHNOLOGIES.length - 1 && (
							<span aria-hidden="true">•</span>
						)}
					</li>
				))}
			</ul>
		</section>
	)
}
