import pluralize from 'pluralize-esm';
import { StackCompactIcon } from '@sanity/icons';

export const faq = {
	name: 'faq',
	title: 'FAQ',
	type: 'document',
	icon: StackCompactIcon,
	fields: [
		// Title
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		// Items
		{
			name: 'items',
			title: 'Items',
			type: 'module.accordion',
		},
	],
	preview: {
		select: {
			items: 'items',
			title: 'title',
		},
		prepare({ items, title = 'Untitled' }) {
			return {
				subtitle:
					items && items.groups.length > 0
						? pluralize('item', items.groups.length, true)
						: 'No items',
				title,
			};
		},
	},
};
