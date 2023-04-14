import { error } from '@sveltejs/kit';
import { client } from '$lib/utils/sanityClient';
import { getProductRecommendations } from '$lib/utils/shopify';
import getImageProps from '$lib/utils/getImageProps';
import { bodyQuery } from '$lib/utils/queryFragments/bodyQuery.js';

export async function load({ params }) {
	const { body, faqs, images, seo, store } = await client.fetch(`
    *[_type == "product" && store.isDeleted == false && store.slug.current == "${params.handle}"]| order(_updatedAt desc)[0] {
      body[] {          
        ${bodyQuery}
      },
      faqs-> { items { groups[] { body, title } } },
      images,
      seo,
      store {
        "available": count(variants[@->store.inventory.isAvailable == true]),
        descriptionHtml,
        gid,
        slug,
        status,
        title,
        variants[@->store.status == "active"]-> {
          store,
        }
      }
    }
  `);
	const shopifyRes = await getProductRecommendations(store.gid);

	if (store && shopifyRes.status === 200) {
		return {
			body,
			faqs,
			images: images.map((image) => getImageProps({ image: image.image })),
			pageContent: {
				seo: {
					image: seo?.image || images[0].image,
					title: seo?.title || store.title,
					...seo,
				},
			},
			recommendations: shopifyRes.body?.data?.productRecommendations,
			store,
		};
	} else {
		throw error(404);
	}
}

export const prerender = true;
