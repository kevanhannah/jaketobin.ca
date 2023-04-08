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
		},
	],
	preview: {
		select: {
			title: 'portfolioArtwork.title',
		},
		prepare(selection) {
			const { title } = selection;

			return {
				title,
				subtitle: 'Portfolio item (Artwork)',
			};
		},
	},
};
