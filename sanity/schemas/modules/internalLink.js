export default {
  title: 'Internal Link',
  name: 'internalLink',
  type: 'object',
  // hidden: true,
  fields: [
    {
      name: 'text',
      title: 'Link Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [
        { type: 'portfolioPage' },
        // { type: 'product' }
      ],
    },
  ],
};
