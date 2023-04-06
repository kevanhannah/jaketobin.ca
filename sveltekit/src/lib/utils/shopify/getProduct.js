import shopifyFetch from './shopifyFetch';

export default async function getProduct(handle) {
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
        variants(first: 250, sortKey: POSITION) {
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
			handle,
		},
	});
}
