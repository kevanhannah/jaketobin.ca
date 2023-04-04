export default {
  name: 'portfolio',
  title: 'Portfolio Landing Page',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish'],
  fields: [
    // Slug
    {
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      description: '(required)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      readOnly: true,
      validation: (Rule) => Rule.required(),
    },
    // Page Content
    {
      name: 'pageContent',
      title: 'Page content',
      type: 'page',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Portfolio Landing Page',
        subtitle: '/portfolio',
      };
    },
  },
};