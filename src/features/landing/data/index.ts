const PROJECTLINKS = {
	github: 'https://github.com/ForknRoll/nextjs-boilerplate-base',
} as const

const FEATURES = [
	{
		id: 1,
		emoji: '🚀',
		emojiName: 'Rocket',
		title: 'Lightning Fast',
		description:
			'Powered by Next.js 15, Turbopack, and Bun for the fastest development experience.',
	},
	{
		id: 2,
		emoji: '🎯',
		emojiName: 'Target',
		title: 'Clean Architecture',
		description:
			'Feature-based structure with clear separation of concerns for scalable applications.',
	},
	{
		id: 3,
		emoji: '🔒',
		emojiName: 'Lock',
		title: 'Type-Safe',
		description:
			'Full TypeScript support with strict configuration and enforced code standards.',
	},
	{
		id: 4,
		emoji: '🎨',
		emojiName: 'Artist Palette',
		title: 'Tailwind CSS',
		description:
			'Utility-first CSS framework for rapid UI development with modern design.',
	},
	{
		id: 5,
		emoji: '📏',
		emojiName: 'Ruler',
		title: 'Code Standards',
		description:
			'Biome for linting and formatting with enforced conventions and best practices.',
	},
	{
		id: 6,
		emoji: '♿',
		emojiName: 'Wheelchair',
		title: 'Accessibility',
		description:
			'Built-in rules and guidelines for creating accessible components by default.',
	},
] as const

const TECHNOLOGIES = [
	'Next.js',
	'React',
	'TypeScript',
	'Tailwind CSS',
	'Bun',
	'Biome',
] as const

export { FEATURES, TECHNOLOGIES, PROJECTLINKS }
