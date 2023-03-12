export default {
  title: 'Image + Text',
  name: 'imageWithText',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Reverse Layout',
      name: 'reverse',
      type: 'boolean',
      description: 'Flip module to place the image to the right of the text.',
      initialValue: false,
    },
    {
      title: 'Content',
      name: 'content',
      type: 'textModule',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'imageModule',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'internalLink',
    },
  ],
};
