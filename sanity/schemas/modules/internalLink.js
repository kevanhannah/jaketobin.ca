export default {
  title: 'Internal Link',
  name: 'internalLink',
  type: 'object',
  // hidden: true,
  fields: [
    {
      name: 'text',
      title: 'Call to action',
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
