import { error } from '@sveltejs/kit';
import { client } from '$lib/utils/sanityClient';
import singletonQuery from '$lib/utils/singletonQuery';

export async function load() {
	try {
		const res = await client.fetch(singletonQuery('about'));

		if (!res) {
			throw new Error('Failed to load page data');
		}

		const { pageContent } = res;

		return {
			pageContent: {
				...pageContent,
				seo: {
					title: pageContent.seo?.title || 'About',
					...pageContent.seo,
				},
			},
		};
	} catch ({ message }) {
		throw error(404, { message });
	}
}
