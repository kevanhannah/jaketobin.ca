import { client } from '$lib/utils/sanityClient';
import getImageProps from '$lib/utils/getImageProps';

export async function load({ params }) {
	const { description, pageType, portfolioItems, publicationItems, title } =
		await client.fetch(
			`*[_type == "portfolioPage" && slug.current == "${params.portfolioPage}"] | order(releaseDate desc)[0]{ description, pageType, portfolioItems[]->, publicationItems, title}`
		);

	if (portfolioItems && portfolioItems.length) {
		portfolioItems.forEach((item, index) => {
			portfolioItems[index].renderedImages = portfolioItems[index].images.map(
				(image) => getImageProps({ image: image.image })
			);
		});
	}

	return {
		description,
		pageType,
		portfolioItems: portfolioItems || [],
		publicationItems: publicationItems || [],
		title,
	};
}
