import {
	PUBLIC_SHOPIFY_API_ENDPOINT,
	PUBLIC_SHOPIFY_HEADLESS_PUBLIC_TOKEN,
} from '$env/static/public';

export default async function shopifyFetch({ query, variables }) {
	try {
		const result = await fetch(PUBLIC_SHOPIFY_API_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token':
					PUBLIC_SHOPIFY_HEADLESS_PUBLIC_TOKEN,
			},
			body: { query, variables } && JSON.stringify({ query, variables }),
		});

		return {
			status: result.status,
			body: await result.json(),
		};
	} catch (error) {
		console.error('Error:', error);
		return {
			status: 500,
			error: 'Error receiving data',
		};
	}
}
