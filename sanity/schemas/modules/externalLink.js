export default {
  title: 'External Link',
  name: 'externalLink',
  type: 'object',
  // hidden: true,
  fields: [
    {
      name: 'title',
      title: 'Link Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      description:
        'There is no `link` validation on this so please type accurate URLs with https://, mailto:, tel: etc.',
    },
  ],
};
