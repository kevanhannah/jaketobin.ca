import { client } from '$lib/utils/sanityClient';

export async function load() {
  // const { portfolioCategories, shopCategories } = await client.fetch(`{
  //   "portfolioCategories": *[_type == "portfolioCategory"] | order(orderRank) { name, pages[] -> { title, slug }},
  //   "shopCategories": *[_type == "collectionCategory"] | order(orderRank) { name, pages[] -> { "title": store.title, "slug": store.slug }}
  // }`);
  const { portfolioNavItems, seo, shopNavItems } = await client.fetch(`
    *[_type == "settings"][0] {
      portfolioNavItems[] {
        pages[]-> { slug { current }, title },
        showTitle,
        title
      },
      seo,
      shopNavItems[] {
        pages[]-> { "slug": store.slug, "title": store.title },
        showTitle,
        title
      },
    }
  `)

  return {
    // portfolioCategories,
    // shopCategories,
    portfolioNavItems,
    seo,
    shopNavItems,
  };
}
