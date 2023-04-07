import { error } from '@sveltejs/kit';
import { client } from '$lib/utils/sanityClient';
import { getCollection } from '$lib/utils/shopify';
import { bodyQuery } from '../../../../lib/utils/queryFragments/bodyQuery.js';

export async function load({ params }) {
	const shopifyRes = await getCollection(params.handle);
	const { body, store } = await client.fetch(
		`*[_type == "collection" && store.gid == "${shopifyRes.body?.data?.collectionByHandle.id}"][0] {
			body[] {
				${bodyQuery}
				},
			store
		}`
	);

	if (store && shopifyRes.status === 200) {
		const collection = shopifyRes.body?.data?.collectionByHandle;

		return { collection, body: body ?? [] };
	} else {
		throw error(404);
	}
}
