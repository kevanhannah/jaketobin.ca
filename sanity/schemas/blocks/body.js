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
			name: 'blockPortfolioGrid',
			type: 'module.portfolioGrid',
		},
		{
			name: 'blockPortfolioArtwork',
			type: 'module.portfolioArtwork',
		},
		{
			name: 'blockProductGrid',
			type: 'module.productGrid',
		},
		// {
		//   name: 'blockImages',
		//   type: 'module.images',
		// },
		// {
		//   name: 'blockInstagram',
		//   type: 'module.instagram',
		// },
		// {
		//   name: 'blockProducts',
		//   type: 'module.products',
		// },
	],
};
