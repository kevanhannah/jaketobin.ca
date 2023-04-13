import { EnvelopeIcon } from '@sanity/icons';

export const moduleNewsletter = {
	name: 'module.newsletter',
	title: 'Newsletter',
	type: 'object',
	icon: EnvelopeIcon,
	fields: [
		// Title
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		// Body
		{
			name: 'body',
			title: 'Body',
			type: 'text',
			rows: 2,
		},
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare(selection) {
			const { title } = selection;

			return {
				subtitle: 'Newsletter module',
				title: title || 'Untitled',
			};
		},
	},
};
