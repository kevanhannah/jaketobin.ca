import { client } from '$lib/utils/sanityClient';

export async function load() {
  const { portfolioCategories, shopCategories } = await client.fetch(`{
    "portfolioCategories": *[_type == "portfolioCategory"] | order(orderRank) { name, pages[] -> { title, slug }},
    "shopCategories": *[_type == "collectionCategory"] | order(orderRank) { name, pages[] -> { "title": store.title, "slug": store.slug }}
  }`);

  return {
    portfolioCategories,
    shopCategories,
  };
}
