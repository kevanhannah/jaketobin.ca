export default {
  title: 'Portfolio Item',
  name: 'portfolioItem',
  type: 'document',
  // groups: [
  //   { title: 'Content', name: 'content', default: true },
  //   { title: 'Settings', name: 'settings' },
  // ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'imageModule' }],
    },
    {
      title: 'Description',
      name: 'description',
      type: 'textModule',
    },
    // {
    //   name: 'releaseDate',
    //   title: 'Release date',
    //   type: 'date',
    //   description: 'Initial date the work was published or released.',
    //   validation: (Rule) => Rule.required(),
    // },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title = 'Untitled' }) {
      return {
        title,
      };
    },
  },
};
