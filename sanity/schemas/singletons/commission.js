import { BillIcon } from '@sanity/icons';

export const commission = {
	name: 'commission',
	title: 'Commission Landing Page',
	type: 'document',
	icon: BillIcon,
	liveEdit: false,
	__experimental_actions: ['update', 'publish'],
	fields: [
		// Slug
		{
			title: 'URL Slug',
			name: 'slug',
			type: 'slug',
			description: '(required)',
			options: {
				source: 'title',
				maxLength: 96,
			},
			readOnly: true,
			validation: (Rule) => Rule.required(),
		},
		// Page Content
		{
			name: 'pageContent',
			title: 'Page content',
			type: 'page',
		},
	],
	preview: {
		prepare() {
			return {
				title: 'Commission Page',
				subtitle: '/commission',
			};
		},
	},
};
