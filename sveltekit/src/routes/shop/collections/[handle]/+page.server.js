import { getCollection } from '$lib/utils/shopify';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const res = await getCollection(params.handle);
  if (res.status === 200) {
    const collection = res.body?.data?.collectionByHandle;

    if (collection) {
      return { collection };
    }
    throw error(404);
  } else {
    throw error(res.status);
  }
}