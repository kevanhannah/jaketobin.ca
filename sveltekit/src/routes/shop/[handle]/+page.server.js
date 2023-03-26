import { shopifyFetch } from '$lib/utils/shopify';
import { error } from '@sveltejs/kit';

const query = `query getProduct($handle: String!) {
  productByHandle(handle: $handle) {
    media(first: 4) {
      nodes {
        ... on MediaImage {
          image {
            src
            width
            altText
          }
        }
      }
    }
    title
  }
}`

export async function load({ params }) {
  const res = await shopifyFetch({ query, variables: { handle: params.handle } });
  if (res.status === 200) {
    const product = res.body?.data?.productByHandle;

    if (product) {
      return { product };
    }
    throw error(404);
  } else {
    throw error(res.status);
  }
}