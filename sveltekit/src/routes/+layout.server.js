import { client } from '$lib/utils/sanityClient';

export async function load() {
  const { portfolioNavItems, portfolioSidebarItems, seo, shopNavItems, shopSidebarItems } = await client.fetch(`
    *[_type == "settings"][0] {
      portfolioNavItems[] {
        pages[]-> { slug { current }, title },
        showTitle,
        title
      },
      portfolioSidebarItems[] {
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
      shopSidebarItems[] {
        pages[]-> { "slug": store.slug, "title": store.title },
        showTitle,
        title
      },
    }
  `)

  return {
    portfolioNavItems,
    portfolioSidebarItems,
    seo,
    shopNavItems,
  shopSidebarItems,
  };
}
