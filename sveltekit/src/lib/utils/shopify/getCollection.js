import shopifyFetch from './shopifyFetch';

export default async function getCollection(handle) {
	return shopifyFetch({
		query: `
      query getCollection($handle: String!) {
        collectionByHandle(handle: $handle) {
          handle
          id
          title
          products(first: 250, sortKey: COLLECTION_DEFAULT) {
            edges {
              node {
                availableForSale
                handle
                id
                publishedAt
                title
                images(first: 1) {
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
        }
      }
    `,
		variables: {
			handle,
		},
	});
}
