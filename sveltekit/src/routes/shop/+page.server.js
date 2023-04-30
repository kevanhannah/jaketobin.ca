import { error } from '@sveltejs/kit';
import { client } from '$lib/utils/sanityClient';
import singletonQuery from '$lib/utils/singletonQuery';

export async function load() {
	try {
		const { pageContent } = await client.fetch(singletonQuery('kevan'));

		if (pageContent?.body) {
			return {
				pageContent: {
					...pageContent,
					seo: {
						title: pageContent.seo?.title || 'Shop',
						...pageContent.seo,
					},
				},
			};
		}
	} catch (err) {
		throw error(404, {
			message: 'Something went wrong',
		});
	}
}

export const prerender = true;
