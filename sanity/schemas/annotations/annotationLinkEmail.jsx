import React from 'react';
import { EnvelopeIcon } from '@sanity/icons';

export const annotationLinkEmail = {
	title: 'Email link',
	name: 'annotationLinkEmail',
	type: 'object',
	icon: EnvelopeIcon,
	// @ts-ignore
	blockEditor: {
		icon: () => <EnvelopeIcon />,
		// @ts-ignore
		render: ({ children }) => (
			<span>
				<EnvelopeIcon
					style={{
						marginLeft: '0.05em',
						marginRight: '0.1em',
						width: '0.75em',
					}}
				/>
				{children}
			</span>
		),
	},
	fields: [
		// Email
		{
			title: 'Email',
			name: 'email',
			type: 'email',
		},
	],
};
