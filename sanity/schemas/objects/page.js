import { DocumentIcon } from '@sanity/icons';

export const page = {
	name: 'page',
	title: 'Page',
	type: 'document',
	icon: DocumentIcon,
	groups: [
		{
			default: true,
			name: 'editorial',
			title: 'Editorial',
		},
		{
			name: 'seo',
			title: 'SEO',
		},
	],
	fields: [
		// Body
		{
			name: 'body',
			title: 'Body',
			type: 'body',
			group: 'editorial',
		},
		// SEO
		{
			name: 'seo',
			title: 'SEO',
			type: 'seo.page',
			group: 'seo',
		},
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare(selection) {
			const { title } = selection;

			return {
				title,
			};
		},
	},
};
