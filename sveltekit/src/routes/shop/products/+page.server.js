import { error } from '@sveltejs/kit';
import { getAllCollections } from '$lib/utils/shopify';

export async function load() {
	const res = await getAllCollections();
	if (res.status === 200) {
		const collections = res.body?.data?.collections?.edges;

		if (collections) {
			return { collections };
		}
		throw error(404);
	} else {
		throw error(res.status);
	}
}
