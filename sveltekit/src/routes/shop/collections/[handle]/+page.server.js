import { error } from '@sveltejs/kit';
import { client } from '$lib/utils/sanityClient';
import { getCollection } from '$lib/utils/shopify';
import { bodyQuery } from '$lib/utils/queryFragments/bodyQuery.js';

export async function load({ params }) {
	try {
		const shopifyRes = await getCollection(params.handle);

		if (shopifyRes.status !== 200) {
			throw new Error('Failed to get collection data from Shopify.');
		}

		const collection = shopifyRes.body?.data?.collectionByHandle;
		const res = await client.fetch(
			`*[_type == "collection" && store.gid == "${shopifyRes.body?.data?.collectionByHandle?.id}"][0] {
				body[] {
					${bodyQuery}
					},
				seo,
				store
			}`
		);

		if (!res) {
			throw new Error("This collection doesn't seem to exist.");
		}

		const { body, seo, store } = res;

		return {
			collection,
			body: body ?? [],
			pageContent: {
				seo: {
					title: seo?.title || store.title,
					...seo,
				},
			},
		};
	} catch ({ message }) {
		throw error(404, {
			message,
		});
	}
}
