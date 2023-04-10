import { IoImageOutline } from 'react-icons/io5';

export const modulePortfolioArtwork = {
	name: 'module.portfolioArtwork',
	title: 'Portfolio item (Artwork)',
	type: 'object',
	icon: IoImageOutline,
	fields: [
		{
			name: 'portfolioArtwork',
			type: 'reference',
			to: [{ type: 'portfolioItem' }],
			options: {
				disableNew: true,
				filter: '!(_id in path("drafts.**"))',
			},
			weak: true,
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			image: 'portfolioArtwork.images',
			title: 'portfolioArtwork.title',
		},
		prepare(selection) {
			const { image, title } = selection;

			if (!image) {
				return {
					title: 'Empty portfolio item (artwork) module',
				};
			}

			return {
				media: image[0].image,
				title,
				subtitle: 'Portfolio item (Artwork)',
			};
		},
	},
};
