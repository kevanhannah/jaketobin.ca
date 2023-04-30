import { error } from '@sveltejs/kit';
import { client } from '$lib/utils/sanityClient';
import singletonQuery from '$lib/utils/singletonQuery';

export async function load() {
	try {
		const res = await client.fetch(singletonQuery('home'));

		if (!res) {
			throw new Error('There was a problem loading this page');
		}

		const { pageContent } = res;
		return {
			pageContent,
		};
	} catch ({ message }) {
		throw error(404, {
			message,
		});
	}
}

export const prerender = true;
