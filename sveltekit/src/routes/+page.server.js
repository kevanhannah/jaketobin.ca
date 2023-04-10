import { error } from '@sveltejs/kit';
import { client } from '$lib/utils/sanityClient';
import singletonQuery from '$lib/utils/singletonQuery';

export async function load() {
	const { pageContent } = await client.fetch(singletonQuery('home'));

	if (pageContent?.body) {
		return {
			pageContent,
		};
	}
	throw error(404);
}
