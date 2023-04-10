import { error } from '@sveltejs/kit';
import { client } from '$lib/utils/sanityClient';
import { bodyQuery } from '$lib/utils/queryFragments/bodyQuery.js';

export async function load({ params }) {
	const { pageContent, title } = await client.fetch(
		`*[_type == "portfolioPage" && slug.current == "${params.portfolioPage}"][0] {
			pageContent {
        body[]{
          ${bodyQuery}
        },
        seo,
      },
			title
		}`
	);

	if (title) {
		return {
			pageContent: {
				...pageContent,
				seo: {
					title: pageContent.seo?.title || title,
					...pageContent.seo,
				},
			},
			title,
		};
	}
	throw error(404);
}
