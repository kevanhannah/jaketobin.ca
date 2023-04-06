import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list';
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';

export const dashboardConfig = [
	documentListWidget({
		layout: { width: 'medium', height: 'small' },
		order: '_updatedAt desc',
		title: 'Last edited portfolio items',
		types: ['portfolioItem'],
	}),
	netlifyWidget({
		title: 'Deploy site',
		layout: { width: 'medium', height: 'small' },
		sites: [
			{
				title: 'jaketobin.ca',
				apiId: import.meta.env.SANITY_STUDIO_NETLIFY_SITE_ID,
				buildHookId: import.meta.env.SANITY_STUDIO_NETLIFY_BUILD_HOOK_ID,
				name: import.meta.env.SANITY_STUDIO_SITE_NAME,
				url: 'https://jaketobin.ca',
			},
		],
	}),
];
