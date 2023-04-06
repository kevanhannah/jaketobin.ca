import { error } from '@sveltejs/kit';
import { client } from '$lib/utils/sanityClient';
import getImageProps from '$lib/utils/getImageProps';

export async function load({ params }) {
	const { body, images, store } = await client.fetch(`
    *[_type == "product" && store.isDeleted == false && store.slug.current == "${params.handle}"]| order(_updatedAt desc)[0] {
      body,
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
			images: images.map((image) => getImageProps({ image: image.image })),
			store,
		};
	} else {
		throw error(404);
	}
}
