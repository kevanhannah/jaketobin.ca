import { EarthGlobeIcon } from '@sanity/icons';

export const linkExternal = {
	title: 'External Link',
	name: 'linkExternal',
	type: 'object',
	icon: EarthGlobeIcon,
	fields: [
		// Title
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		// URL
		{
			name: 'url',
			title: 'URL',
			type: 'url',
			description: 'Please type complete URLs with https://',
			validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
		},
		// Open in a new window
		{
			title: 'Open in a new window?',
			name: 'newWindow',
			type: 'boolean',
			initialValue: true,
		},
	],
	preview: {
		select: {
			title: 'title',
			url: 'url',
		},
		prepare(selection) {
			const { title, url } = selection;

			const subtitle = [];
			if (url) {
				subtitle.push(`→ ${url}`);
			}

			return {
				// media: image,
				subtitle: subtitle.join(' '),
				title,
			};
		},
	},
};
