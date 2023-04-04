export default {
  name: 'shop',
  title: 'Shop Landing Page',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish'],
  fields: [
    // Slug
    {
      name: 'slug',
      title: 'URL Slug',
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
        title: 'Shop Landing Page',
        subtitle: '/shop',
      };
    },
  },
};
