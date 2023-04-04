import { IoCogOutline } from 'react-icons/io5';

export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  icon: IoCogOutline,
  liveEdit: false,
  __experimental_actions: ['update', 'publish'],
  groups: [
    {
      default: true,
      name: 'portfolioNavigation',
      title: 'Portfolio navigation',
    },
    {
      name: 'shopNavigation',
      title: 'Shop navigation',
    },
    {
      name: 'seo',
      title: 'Site SEO',
    },
  ],
  fields: [
    // Portfolio Nav Items
    {
      name: 'portfolioNavItems',
      title: 'Portfolio groupings in header',
      type: 'array',
      of: [{ type: 'portfolioPageGroup' }],
      validation: (Rule) => Rule.unique().min(1),
      group: 'portfolioNavigation',
    },
    // Portfolio Sidebar Items
    {
      name: 'portfolioSidebarItems',
      title: 'Portfolio groupings in sidebar',
      description: 'Only appears on portfolio pages',
      type: 'array',
      of: [{ type: 'portfolioPageGroup' }],
      validation: (Rule) => Rule.unique().min(1),
      group: 'portfolioNavigation',
    },
    // Shop Nav Items
    {
      name: 'shopNavItems',
      title: 'Collection groupings in header',
      type: 'array',
      of: [{ type: 'collectionPageGroup' }],
      validation: (Rule) => Rule.unique().min(1),
      group: 'shopNavigation',
    },
    // Shop Sidebar Items
    {
      name: 'shopSidebarItems',
      title: 'Collection groupings in sidebar',
      description: 'Only appears on shop pages',
      type: 'array',
      of: [{ type: 'collectionPageGroup' }],
      validation: (Rule) => Rule.unique().min(1),
      group: 'shopNavigation',
    },
    // Default SEO
    {
      name: 'seo',
      title: 'Default SEO fields',
      type: 'seo.page',
      description:
        'General SEO content for the site. Will be replaced when more specific SEO fields are set for a given page',
      validation: (Rule) => Rule.required(),
      group: 'seo',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      };
    },
  },
};
