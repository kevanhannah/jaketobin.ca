import { client } from '$lib/utils/sanityClient';

export async function load() {
  const portfolioCategories = await client.fetch(
    '*[_type == "portfolioCategory"] | order(orderRank) { name, pages[] -> { title, slug }}',
  );

  return {
    portfolioCategories,
  };
}
