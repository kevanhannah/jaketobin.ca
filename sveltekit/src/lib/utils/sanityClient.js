import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import {
	SANITY_PROJECT_ID,
	SANITY_DATASET,
	SANITY_API_VERSION,
} from '$env/static/private';

export const client = sanityClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	apiVersion: SANITY_API_VERSION,
	useCdn: false,
});

export const imageBuilder = imageUrlBuilder(client);
