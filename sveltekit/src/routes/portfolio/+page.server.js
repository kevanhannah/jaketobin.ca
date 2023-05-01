import { error } from '@sveltejs/kit';
import { client } from '$lib/utils/sanityClient';
import singletonQuery from '$lib/utils/singletonQuery';

export async function load() {
	const { pageContent } = await client.fetch(singletonQuery('portfolio'));

	if (pageContent?.body) {
		return {
			pageContent: {
				...pageContent,
				seo: {
					title: pageContent.seo?.title || 'Portfolio',
					...pageContent.seo,
				},
			},
		};
	}
	throw error(404);
}
