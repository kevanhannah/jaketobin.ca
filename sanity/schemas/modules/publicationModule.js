export default {
  title: 'Publication Module',
  name: 'publicationModule',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleLink',
      title: 'Title Link',
      type: 'string',
      description:
        'Add a link to the title of this publication (optional; please type complete URLs with https://, etc.)',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'textModule',
    },
  ],
};
