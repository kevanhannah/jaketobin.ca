export default {
  name: 'module.image',
  title: 'Image Module',
  type: 'object',
  fields: [
    // Image
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    // Alt Text
    {
      name: 'alt',
      title: 'Alt text',
      type: 'string',
    },
  ],
};
