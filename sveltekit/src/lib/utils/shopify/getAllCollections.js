import shopifyFetch from './shopifyFetch';

export default async function getAllCollections() {
	return shopifyFetch({
		query: `{
      collections(first: 100) {
        edges {
          node {
            handle
            products(first: 100, sortKey: COLLECTION_DEFAULT) {
              edges {
                node {
                  id
                  handle
                  availableForSale
                  title
                  descriptionHtml
                  options {
                    id
                    name
                    values
                  }
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
          title
          }
        }
      }
    }`,
	});
}
