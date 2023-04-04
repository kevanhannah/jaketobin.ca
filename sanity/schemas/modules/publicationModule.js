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
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Paragraph', value: 'normal' }],
          lists: [
            { title: 'Numbered', value: 'number' },
            {
              title: 'Bullet',
              value: 'bullet',
            },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    },
  ],
};
