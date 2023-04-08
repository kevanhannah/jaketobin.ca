import { ImageIcon } from '@sanity/icons';

export const moduleImage = {
	name: 'module.image',
	title: 'Image',
	type: 'object',
	icon: ImageIcon,
	fields: [
		// Image
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		},
		// Aspect Ratio
		{
			name: 'aspectRatio',
			title: 'Aspect ratio',
			type: 'number',
			initialValue: 1,
			valiation: (Rule) =>
				Rule.required().precision(3).positive().greaterThan(0.1),
		},
	],
	preview: {
		select: {
			fileName: 'image.asset.originalFilename',
			image: 'image',
			variant: 'variant',
		},
		prepare(selection) {
			const { fileName, image: previewImage } = selection;

			return {
				media: previewImage,
				title: fileName,
			};
		},
	},
};
