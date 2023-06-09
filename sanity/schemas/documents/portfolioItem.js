import { ImagesIcon } from '@sanity/icons';

export const portfolioItem = {
	title: 'Portfolio Item (Artwork)',
	name: 'portfolioItem',
	type: 'document',
	icon: ImagesIcon,
	fields: [
		// Title
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		// Images
		{
			title: 'Images',
			name: 'images',
			type: 'array',
			of: [{ type: 'module.image' }],
			validation: (Rule) => Rule.min(1),
		},
		// Description
		{
			name: 'body',
			title: 'Description',
			type: 'text',
			rows: 2,
		},
	],
	preview: {
		select: {
			images: 'images',
			title: 'title',
		},
		prepare({ images, title = 'Untitled' }) {
			return {
				media: images ? images[0].image : null,
				title,
				subtitle: 'Artwork item',
			};
		},
	},
};
