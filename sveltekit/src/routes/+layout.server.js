import { client } from '$lib/utils/sanityClient';

export async function load() {
	const {
		defaultMetadata,
		portfolioNavItems,
		portfolioSidebarItems,
		shopNavItems,
		shopSidebarItems,
	} = await client.fetch(`
    *[_type == "settings"][0] {
      portfolioNavItems[] {
        pages[]-> {
          _type,
          slug { current },
          title
        },
        showTitle,
        title
      },
      portfolioSidebarItems[] {
        pages[]-> {
          _type,
          slug { current },
          title
        },
        showTitle,
        title
      },
      "defaultMetadata": seo {
        description,
        image,
        title
      },
      shopNavItems[] {
        pages[]-> {
          _type != "collection" => @ {
            _type,
            slug,
            title
          },
          _type == "collection" => @ {
            _type,
            "slug": store.slug,
            "title": store.title
          }
        },
        showTitle,
        title
      },
      shopSidebarItems[] {
        pages[]-> {
          _type != "collection" => @ {
            _type,
            slug,
            title
          },
          _type == "collection" => @ {
            _type,
            "slug": store.slug,
            "title": store.title
          }
        },
        showTitle,
        title
      },
    }
  `);

	return {
		defaultMetadata,
		portfolioNavItems,
		portfolioSidebarItems,
		shopNavItems,
		shopSidebarItems,
	};
}
