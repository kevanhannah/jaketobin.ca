import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import {
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_DATASET,
	PUBLIC_SANITY_API_VERSION,
} from '$env/static/public';

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	apiVersion: PUBLIC_SANITY_API_VERSION,
	useCdn: false,
});

export const imageBuilder = imageUrlBuilder(client);

export const urlFor = (source) => imageBuilder.image(source);
