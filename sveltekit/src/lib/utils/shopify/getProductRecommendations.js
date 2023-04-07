import shopifyFetch from './shopifyFetch';

export default async function getProductRecommendations(productId) {
	return shopifyFetch({
		query: `
      query getProductRecommendations($productId: ID!) {
				productRecommendations(productId: $productId) {
					availableForSale
					handle
					title
					featuredImage {
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
			}`,
		variables: {
			productId,
		},
	});
}
