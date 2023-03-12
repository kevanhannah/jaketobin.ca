export default {
  title: 'Portfolio Page',
  name: 'portfolioPage',
  type: 'document',
  groups: [
    { title: 'Page Details', name: 'details', default: true },
    { title: 'SEO', name: 'seo' },
  ],
  initialValue: {
    pageType: 'artwork',
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'details',
    },
    {
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      description: '(required)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'details',
    },
    {
      title: 'Page Type',
      name: 'pageType',
      type: 'string',
      options: {
        list: [
          { title: 'Illustrations and artwork', value: 'artwork' },
          { title: 'Writing and publications', value: 'writing' },
        ],
        layout: 'dropdown',
      },
      group: 'details',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Portfolio Items',
      name: 'portfolioItems',
      type: 'array',
      of: [
        {
          title: 'Portfolio item',
          type: 'reference',
          to: [{ type: 'portfolioItem' }],
        },
      ],
      group: 'details',
      hidden: ({ document }) =>
        !document?.pageType || document?.pageType === 'writing',
    },
    {
      title: 'Publication Items',
      name: 'publicationItems',
      type: 'array',
      of: [{ type: 'publicationModule' }],
      group: 'details',
      hidden: ({ document }) =>
        !document?.pageType || document?.pageType === 'artwork',
    },
    {
      title: 'Page Description',
      name: 'description',
      type: 'textModule',
      group: 'details',
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title = 'Untitled', slug = {} }) {
      const path = `/${slug.current}`;
      return {
        title,
        subtitle: slug.current ? path : '(missing slug)',
      };
    },
  },
};
