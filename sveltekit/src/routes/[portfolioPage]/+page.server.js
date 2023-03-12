import { client } from '$lib/utils/sanityClient';
import getImageProps from '$lib/utils/getImageProps';

export async function load({ params }) {
  const { description, portfolioItems, title } = await client.fetch(
    `*[_type == "portfolioPage" && slug.current == "${params.portfolioPage}"] | order(releaseDate desc)[0]{ description, portfolioItems[]->, title}`,
  );

  if (portfolioItems && portfolioItems.length) {
    portfolioItems.forEach((item, index) => {
      portfolioItems[index].renderedImages = portfolioItems[index].images.map(
        (image) => getImageProps({ image: image.image }),
      );
    });
  }

  return {
    description,
    portfolioItems: portfolioItems || [],
    title,
  };
}
