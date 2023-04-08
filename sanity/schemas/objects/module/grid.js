import { ThLargeIcon } from '@sanity/icons';
import pluralize from 'pluralize-esm';

export const moduleGrid = {
	name: 'module.grid',
	title: 'Grid',
	type: 'object',
	icon: ThLargeIcon,
	fields: [
		// Title
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		// Items
		{
			title: 'Items',
			name: 'items',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'portfolioItem' }, { type: 'product' }],
					options: {
						disableNew: true,
					},
				},
			],
		},
		// Link
		{
			name: 'link',
			title: 'Link',
			type: 'array',
			of: [{ type: 'linkInternal' }, { type: 'linkExternal' }],
			validation: (Rule) => Rule.max(1),
		},
	],
	preview: {
		select: {
			items: 'items',
			title: 'title',
		},
		prepare(selection) {
			const { items, title } = selection;
			return {
				subtitle:
					items.length > 0 ? pluralize('item', items.length, true) : 'No items',
				title: title || 'Grid',
			};
		},
	},
};
