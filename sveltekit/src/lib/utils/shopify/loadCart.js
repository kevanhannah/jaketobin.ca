import shopifyFetch from './shopifyFetch';

export default async function loadCart(cartId) {
  return shopifyFetch({
    query: `
        query GetCart($cartId: ID!) {
          cart(id: $cartId) {
            checkoutUrl
              estimatedCost {
                totalAmount {
                  amount
                }
              }
              lines(first: 100) {
                edges {
                  node {
                    id
                    quantity
                    estimatedCost {
                      subtotalAmount {
                        amount
                        currencyCode
                      }
                      totalAmount {
                        amount
                        currencyCode
                      }
                    }
                    merchandise {
                      ... on ProductVariant {
                          id
                          title
                          product {
                            images(first: 1) {
                              edges {
                                node {
                                  originalSrc
                                  altText
                                  width
                                  height
                                }
                              }
                            }
                          title
                        }
                      }
                    }
                  }
                }
              }
            }
        }
      `,
    variables: { cartId }
  });
}