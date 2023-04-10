import { StackCompactIcon } from '@sanity/icons';
import pluralize from 'pluralize-esm';
import blocksToText from '../../../utils/blocksToText';

export const moduleAccordion = {
	name: 'module.accordion',
	title: 'Accordion group',
	type: 'object',
	icon: StackCompactIcon,
	fields: [
		// Groups
		{
			name: 'groups',
			title: 'Accordion',
			type: 'array',
			of: [
				{
					name: 'group',
					title: 'Group',
					type: 'object',
					icon: StackCompactIcon,
					fields: [
						{
							name: 'title',
							title: 'Title',
							type: 'string',
							validation: (Rule) => Rule.required(),
						},
						{
							name: 'body',
							title: 'Body',
							type: 'array',
							of: [
								{
									lists: [],
									marks: {
										annotations: [
											// Email
											{
												name: 'annotationLinkEmail',
												type: 'annotationLinkEmail',
											},
											// Internal link
											{
												name: 'annotationLinkInternal',
												type: 'annotationLinkInternal',
											},
											// URL
											{
												name: 'annotationLinkExternal',
												type: 'annotationLinkExternal',
											},
										],
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
							validation: (Rule) => Rule.required(),
						},
					],
					preview: {
						select: {
							body: 'body',
							title: 'title',
						},
						prepare(selection) {
							const { body, title } = selection;
							return {
								subtitle: body && blocksToText(body),
								title,
							};
						},
					},
				},
			],
		},
	],
	preview: {
		select: {
			groups: 'groups',
		},
		prepare(selection) {
			const { groups } = selection;

			if (!groups) {
				return {
					title: 'Empty accordion module',
				};
			}

			return {
				subtitle: 'Accordion',
				title:
					groups.length > 0
						? pluralize('group', groups.length, true)
						: 'No groups',
			};
		},
	},
};
