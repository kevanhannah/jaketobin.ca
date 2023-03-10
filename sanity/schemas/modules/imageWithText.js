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
      title: 'Content',
      name: 'content',
      type: 'text',
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
