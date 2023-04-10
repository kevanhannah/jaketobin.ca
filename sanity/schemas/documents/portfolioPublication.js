import { ComposeIcon } from '@sanity/icons';

export const portfolioPublication = {
	title: 'Portfolio Item (Writing)',
	name: 'portfolioPublication',
	type: 'document',
	icon: ComposeIcon,
	fields: [
		// Title
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		// Title Link
		{
			name: 'titleLink',
			title: 'Title Link',
			type: 'string',
			description:
				'Add a link to the title of this publication (optional; please type complete URLs with https://, etc.)',
		},
		// Description
		{
			title: 'Description',
			name: 'description',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [{ title: 'Paragraph', value: 'normal' }],
					lists: [
						{ title: 'Numbered', value: 'number' },
						{
							title: 'Bullet',
							value: 'bullet',
						},
					],
					marks: {
						decorators: [
							{ title: 'Strong', value: 'strong' },
							{ title: 'Emphasis', value: 'em' },
						],
					},
				},
			],
		},
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title = 'Untitled' }) {
			return {
				title,
				subtitle: 'Publication item',
			};
		},
	},
};
