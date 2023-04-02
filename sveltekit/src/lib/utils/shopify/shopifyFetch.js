import { PUBLIC_SHOPIFY_API_ENDPOINT, PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN } from '$env/static/public';

export default async function shopifyFetch({ query, variables }) {
  const endpoint = PUBLIC_SHOPIFY_API_ENDPOINT;
  const key = PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN;

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key
      },
      body: { query, variables } && JSON.stringify({ query, variables })
    });

    return {
      status: result.status,
      body: await result.json()
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      status: 500,
      error: 'Error receiving data'
    };
  }
}