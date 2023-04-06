import { error } from '@sveltejs/kit';
import { client } from '$lib/utils/sanityClient';
import getImageProps from '$lib/utils/getImageProps';

export async function load({ params }) {
	const { body, faqs, images, store } = await client.fetch(`
    *[_type == "product" && store.isDeleted == false && store.slug.current == "${params.handle}"]| order(_updatedAt desc)[0] {
      body[] {          
        _type == 'block' => @,
        _type == 'blockImageWithText' => @{
          _type,
          aspectRatio,
          body,
          content[]{
            _type == 'portfolioItem' => @->,
            _type == 'module.image' => @,
          },
          layout,
          link[0] { reference -> { slug { current }, _type }, title },
          title
        },
        _type == 'blockPortfolioGrid' => @{
          _type,
          items[]-> { images[0] },
          link[0] { reference -> { slug { current }, _type }, title }
        },
        _type == 'blockProductGrid' => @{
          _type,
          items[]-> { store },
          title
        },
      },
      faqs-> { items { groups[] { body, title } } },
      images,
      store {
        "available": count(variants[@->store.inventory.isAvailable == true]),
        descriptionHtml,
        slug,
        status,
        title,
        variants[@->store.status == "active"]-> {
          store,
        }
      }
    }
  `);

	if (images && store) {
		return {
			body,
      faqs,
			images: images.map((image) => getImageProps({ image: image.image })),
			store,
		};
	} else {
		throw error(404);
	}
}
