import { DocumentsIcon } from '@sanity/icons';

export const portfolioPage = {
	title: 'Portfolio Page',
	name: 'portfolioPage',
	type: 'document',
	icon: DocumentsIcon,
	groups: [
		{ title: 'Editorial', name: 'editorial', default: true },
		{ title: 'Page Settings', name: 'settings' },
	],
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description: '(required)',
			validation: (Rule) => Rule.required(),
			group: 'settings',
		},
		{
			title: 'URL Slug',
			name: 'slug',
			type: 'slug',
			description: '(required)',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
			group: 'settings',
		},
		// Page Content
		{
			name: 'pageContent',
			title: 'Page content',
			type: 'page',
			group: 'editorial',
		},
	],
	preview: {
		select: {
			title: 'title',
			slug: 'slug',
		},
		prepare({ title = 'Untitled', slug = {} }) {
			const path = `/${slug.current}`;
			return {
				title,
				subtitle: slug.current ? path : '(missing slug)',
			};
		},
	},
};
