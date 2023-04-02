import shopifyFetch from './shopifyFetch';

export default async function getAllProducts() {
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