import { CogIcon } from '@sanity/icons';

export const settings = {
	name: 'settings',
	title: 'Site Settings',
	type: 'document',
	icon: CogIcon,
	liveEdit: false,
	__experimental_actions: ['update', 'publish'],
	groups: [
		{
			default: true,
			name: 'siteNavigation',
			title: 'Site navigation',
		},
		{
			name: 'seo',
			title: 'Site SEO',
		},
	],
	fieldsets: [
		{
			name: 'siteHeader',
			title: 'Site header',
		},
	],
	fields: [
		// Portfolio Nav Items
		{
			fieldset: 'siteHeader',
			name: 'portfolioNavItems',
			title: 'Portfolio pages in header',
			type: 'array',
			of: [{ type: 'portfolioPageGroup' }],
			validation: (Rule) => Rule.unique().min(1),
			group: 'siteNavigation',
		},
		// Shop Nav Items
		{
			fieldset: 'siteHeader',
			name: 'shopNavItems',
			title: 'Collection pages in header',
			type: 'array',
			of: [{ type: 'collectionPageGroup' }],
			validation: (Rule) => Rule.unique().min(1),
			group: 'siteNavigation',
		},
		// Portfolio Sidebar Items
		{
			name: 'portfolioSidebarItems',
			title: 'Portfolio pages in sidebar',
			description: 'Only appears on portfolio pages',
			type: 'array',
			of: [{ type: 'portfolioPageGroup' }],
			validation: (Rule) => Rule.unique().min(1),
			group: 'siteNavigation',
		},
		// Shop Sidebar Items
		{
			name: 'shopSidebarItems',
			title: 'Collection pages in sidebar',
			description: 'Only appears on shop pages',
			type: 'array',
			of: [{ type: 'collectionPageGroup' }],
			validation: (Rule) => Rule.unique().min(1),
			group: 'siteNavigation',
		},
		// Default SEO
		{
			name: 'seo',
			title: 'Default SEO fields',
			type: 'seo.page',
			description:
				'General SEO content for the site. Will be replaced when more specific SEO fields are set for a given page',
			validation: (Rule) => Rule.required(),
			group: 'seo',
		},
	],
	preview: {
		prepare() {
			return {
				title: 'Site Settings',
			};
		},
	},
};
