import shopifyFetch from './shopifyFetch';

export default async function addToCart({ cartId, variantId }) {
	return shopifyFetch({
		query: `
      mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart {
            lines(first: 100) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      product {
                        title
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,

		variables: {
			cartId: cartId,
			lines: [
				{
					merchandiseId: variantId,
					quantity: 1,
				},
			],
		},
	});
}
