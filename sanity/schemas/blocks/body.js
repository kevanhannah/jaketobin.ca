export const body = {
	name: 'body',
	title: 'Body',
	type: 'array',
	of: [
		{
			// Paragraphs
			type: 'block',
			styles: [
				{ title: 'Title', value: 'h2' },
				{ title: 'Heading', value: 'h3' },
				{ title: 'Normal', value: 'normal' },
			],
			lists: [
				{ title: 'Bullet', value: 'bullet' },
				{ title: 'Numbered', value: 'number' },
			],
			marks: {
				annotations: [
					// Internal Link
					{
						name: 'annotationLinkInternal',
						type: 'annotationLinkInternal',
					},
					// External Link
					{
						name: 'annotationLinkExternal',
						type: 'annotationLinkExternal',
					},
					// Email
					{
						name: 'annotationLinkEmail',
						type: 'annotationLinkEmail',
					},
				],
				decorators: [
					{
						title: 'Italic',
						value: 'em',
					},
					{
						title: 'Strong',
						value: 'strong',
					},
				],
			},
		},
		// Custom blocks
		{
			name: 'blockAccordion',
			type: 'module.accordion',
		},
		{
			name: 'blockCallToAction',
			type: 'module.callToAction',
		},
		{
			name: 'blockGrid',
			type: 'module.grid',
		},
		{
			name: 'blockNewsletter',
			type: 'module.newsletter',
		},
		{
			name: 'blockPortfolioArtwork',
			type: 'module.portfolioArtwork',
		},
		{
			name: 'blockPortfolioPublications',
			type: 'module.publications',
		},
	],
};
