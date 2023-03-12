export default {
  title: 'Image Module',
  name: 'imageModule',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alt text',
      type: 'string',
    },
    // {
    //   name: 'layout',
    //   title: 'Layout',
    //   type: 'string',
    //   options: {
    //     list: [
    //       { title: 'Full', value: 'full' },
    //       { title: 'large', value: 'large' },
    //       { title: 'medium', value: 'medium' }
    //     ],
    //     layout: 'dropdown'
    //   }
    // }
  ],
};
