import { getAllCollections } from '$lib/utils/shopify';
import { error } from '@sveltejs/kit';

export async function load() {
	try {
		const res = await getAllCollections();

		if (res.status !== 200) {
			throw new Error('Failed to get collection data from Shopify.');
		}

		const collections = res.body?.data?.collections?.edges;
		collections.forEach((collection) => [
			(collection.node.products.edges = collection.node.products.edges.slice(
				0,
				3
			)),
		]);

		return {
			collections,
			pageContent: {
				seo: {
					title: 'All products',
				},
			},
		};
	} catch ({ message }) {
		throw error(404, {
			message,
		});
	}
}
