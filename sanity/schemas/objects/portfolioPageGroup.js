import { IoDocumentsOutline } from 'react-icons/io5';

export default {
  name: 'portfolioPageGroup',
  title: 'Portfolio Page Group',
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
      title: 'Pages in group',
      description: 'Pages will appear in the order they are placed',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'portfolioPage' }],
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
