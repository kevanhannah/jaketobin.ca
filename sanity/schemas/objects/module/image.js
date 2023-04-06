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
