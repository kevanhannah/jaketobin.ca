export const body = {
	name: 'body',
	title: 'Body',
	type: 'array',
	of: [
		{
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
			// Paragraphs
			type: 'block',
		},
		// Custom blocks
		{
			name: 'blockAccordion',
			type: 'module.accordion',
		},
		{
			name: 'blockImageWithText',
			type: 'module.imageWithText',
		},
		// {
		//   name: 'blockCallout',
		//   type: 'module.callout',
		// },
		{
			name: 'blockPortfolioGrid',
			type: 'module.portfolioGrid',
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
