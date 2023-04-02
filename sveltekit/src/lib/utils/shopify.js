import { PUBLIC_SHOPIFY_API_ENDPOINT, PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN } from '$env/static/public';

export async function shopifyFetch({ query, variables }) {
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

export async function getAllProducts() {
  return shopifyFetch({
    query: `{
      products(sortKey: TITLE, first: 250) {
        edges {
          node {
            id
            handle
            availableForSale
            title
            description
            descriptionHtml
            options {
              id
              name
              values
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
            variants(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  title
                  sku
                  availableForSale
                  requiresShipping
                  selectedOptions {
                    name
                    value
                  }
                  priceV2 {
                    amount
                    currencyCode
                  }
                  compareAtPriceV2 {
                    amount
                    currencyCode
                  }
                }
              }
            }
            images(first: 1) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  altText
                  orignal: url
                  vw200: url(transform: {
                    preferredContentType: WEBP,
                    maxWidth: 200
                  })
                  vw400: url(transform: {
                    preferredContentType: WEBP,
                    maxWidth: 400
                  })
                  vw600: url(transform: {
                    preferredContentType: WEBP,
                    maxWidth: 600
                  })
                  vw800: url(transform: {
                    preferredContentType: WEBP,
                    maxWidth: 800
                  })
                  vw1200: url(transform: {
                    preferredContentType: WEBP,
                    maxWidth: 1200
                  })
                  vw2000: url(transform: {
                    preferredContentType: WEBP,
                    maxWidth: 2000
                  })
                }
              }
            }
          }
        }
      }
    }`
  });
}

export async function loadCart(cartId) {
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

export async function getProduct(handle) {
  return shopifyFetch({
    query: `
      query getProduct($handle: String!) {
        productByHandle(handle: $handle) {
          id
          handle
          availableForSale
          title
          description
          descriptionHtml
          options {
            id
            name
            values
          }
          priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 250) {
          pageInfo {
              hasNextPage
              hasPreviousPage
          }
          edges {
            node {
              id
              title
              sku
              availableForSale
              requiresShipping
              selectedOptions {
                name
                value
              }
              priceV2 {
                amount
                currencyCode
              }
              compareAtPriceV2 {
                amount
                currencyCode
              }
            }
          }
        }
        images(first: 20) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              altText
              original: url
              vw200: url(transform: {
                preferredContentType: WEBP,
                maxWidth: 200
              })
              vw400: url(transform: {
                preferredContentType: WEBP,
                maxWidth: 400
              })
              vw600: url(transform: {
                preferredContentType: WEBP,
                maxWidth: 600
              })
              vw800: url(transform: {
                preferredContentType: WEBP,
                maxWidth: 800
              })
              vw1200: url(transform: {
                preferredContentType: WEBP,
                maxWidth: 1200
              })
              vw2000: url(transform: {
                preferredContentType: WEBP,
                maxWidth: 2000
              })
            }
          }
        }
      }
    }
  `,
    variables: {
      handle
    }
  });
}

export async function createCart() {
  return shopifyFetch({
    query: `
      mutation calculateCart($lineItems: [CartLineInput!]) {
        cartCreate(input: { lines: $lineItems }) {
          cart {
            checkoutUrl
            id
          }
        }
      }
    `,
    variables: {}
  });
}

export async function updateCart({ cartId, lineId, variantId, quantity }) {
  return shopifyFetch({
    query: `
      mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
        cartLinesUpdate(cartId: $cartId, lines: $lines) {
          userErrors {
            field
            message
          }
        }
      }
    `,
    variables: {
      cartId: cartId,
      lines: [
        {
          id: lineId,
          merchandiseId: variantId,
          quantity: quantity
        }
      ]
    }
  });
}

export async function addToCart({ cartId, variantId }) {
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
          quantity: 1
        }
      ]
    }
  });
}