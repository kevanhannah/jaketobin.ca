import { HomeIcon } from '@sanity/icons';

export const home = {
	name: 'home',
	title: 'Home Page',
	type: 'document',
	icon: HomeIcon,
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
				title: 'Home Page',
				subtitle: '/',
			};
		},
	},
};
