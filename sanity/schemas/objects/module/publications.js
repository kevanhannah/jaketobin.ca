import pluralize from 'pluralize-esm';

export const modulePublications = {
	name: 'module.publications',
	title: 'Publications',
	type: 'object',
	fields: [
		{
			name: 'publications',
			title: 'Publications',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'portfolioPublication' }],
					options: { disableNew: true },
				},
			],
			validation: (Rule) => Rule.required().min(1),
		},
	],
	preview: {
		select: {
			publications: 'publications',
		},
		prepare(selection) {
			const { publications } = selection;

			return {
				subtitle: pluralize('item', publications.length, true),
				title: 'Publications',
			};
		},
	},
};
