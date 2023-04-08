import { UserIcon } from '@sanity/icons';

export const about = {
	name: 'about',
	title: 'About Page',
	type: 'document',
	icon: UserIcon,
	liveEdit: false,
	__experimental_actions: ['update', 'publish'],
	fields: [
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
				title: 'About Page',
				subtitle: '/about',
			};
		},
	},
};
