import { DocumentIcon } from '@sanity/icons';

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Show Hero
    {
      name: 'showHero',
      title: 'Show hero',
      type: 'boolean',
      description: 'If disabled, page will not have a hero image',
      initialValue: false,
      group: 'editorial',
    },
    // Page Hero Image
    {
      title: 'Hero',
      name: 'image',
      type: 'image',
      description: 'Large image that is displayed at the top of the page',
      hidden: ({ parent }) => !parent?.showHero,
      group: 'editorial',
      options: {
        hotspot: true,
      },
    },
    // Body
    {
      name: 'body',
      title: 'Body',
      type: 'body',
      group: 'editorial',
    },
    // SEO
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title,
      };
    },
  },
};
