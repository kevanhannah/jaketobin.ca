import { BlockElementIcon, ImageIcon } from '@sanity/icons';

export const moduleCallToAction = {
	name: 'module.callToAction',
	title: 'Call to action',
	type: 'object',
	icon: BlockElementIcon,
	fieldsets: [
		{
			name: 'copy',
			title: 'Copy',
		},
	],
	fields: [
		// Layout
		{
			name: 'layout',
			title: 'Layout direction',
			type: 'string',
			initialValue: 'left',
			options: {
				direction: 'horizontal',
				layout: 'radio',
				list: [
					{
						title: 'Content / Copy',
						value: 'left',
					},
					{
						title: 'Copy / Content',
						value: 'right',
					},
				],
			},
			validation: (Rule) => Rule.required(),
		},
		// Title
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
			fieldset: 'copy',
		},
		// Body
		{
			name: 'body',
			title: 'Body',
			type: 'array',
			of: [
				{
					lists: [],
					marks: {
						annotations: [],
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
					// Regular styles
					styles: [],
					// Paragraphs
					type: 'block',
				},
			],
		},
		// Link
		{
			name: 'links',
			title: 'Link',
			type: 'array',
			of: [{ type: 'linkInternal' }, { type: 'linkExternal' }],
			validation: (Rule) => Rule.max(1),
			fieldset: 'copy',
		},
		// Content
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			validation: (Rule) => Rule.required().max(1),
			of: [
				{
					type: 'module.image',
					title: 'Image',
					icon: ImageIcon,
					options: { hotspot: true },
				},
				{
					name: 'productWithVariant',
					title: 'Product + Variant',
					type: 'productWithVariant',
					validation: (Rule) => Rule.required(),
				},
			],
		},
	],
	preview: {
		select: {
			content: 'content',
			title: 'title',
		},
		prepare(selection) {
			const { content, title } = selection;

			if (!content) {
				return {
					title: 'Empty call to action module',
				};
			}

			return {
				subtitle: 'Call to action module',
				title: title || 'Untitled',
				media: BlockElementIcon,
			};
		},
	},
};
