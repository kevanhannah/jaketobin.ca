import { shopifyFetch } from '$lib/utils/shopify';
import { error } from '@sveltejs/kit';

const query = `query {
  products(first: 30) {
    edges {
      cursor
      node {
        handle
        media(first: 1) {
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
    }
    pageInfo {
      hasNextPage
    }
  }
}`

export async function load() {
  const res = await shopifyFetch({ query });
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