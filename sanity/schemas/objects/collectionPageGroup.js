import { IoDocumentsOutline } from 'react-icons/io5';

export default {
  name: 'collectionPageGroup',
  title: 'Collection Page Group',
  type: 'object',
  icon: IoDocumentsOutline,
  fields: [
    // Title
    {
      name: 'title',
      title: 'Group title',
      type: 'string',
      readOnly: ({ parent }) => !parent?.showTitle,
      validation: (Rule) => Rule.required(),
    },
    // Show Title
    {
      name: 'showTitle',
      title: 'Show title',
      type: 'boolean',
      description: 'If disabled, group will not display a title',
      initialValue: true,
    },
    // Pages
    {
      name: 'pages',
      title: 'Collections in group',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'collection' }, { type: 'shop' }],
          options: {
            disableNew: true,
            filter: '!(_id in path("drafts.**"))',
          },
        },
      ],
      validation: (Rule) => Rule.unique().min(1),
    },
  ],
};
