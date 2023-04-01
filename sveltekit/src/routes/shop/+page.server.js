import { getAllProducts } from '$lib/utils/shopify';
import { error } from '@sveltejs/kit';

export async function load() {
  const res = await getAllProducts();
  if (res.status === 200) {
    const products = res.body?.data?.products?.edges;

    if (products) {
      return { products };
    }
    throw error(404);
  } else {
    throw error(res.status);
  }
}