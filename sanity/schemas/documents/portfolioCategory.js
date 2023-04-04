import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';
import { IoDocumentsOutline } from 'react-icons/io5';

export default {
  name: 'portfolioCategory',
  title: 'Portfolio Category',
  type: 'document',
  icon: IoDocumentsOutline,
  orderings: [orderRankOrdering],
  fields: [
    // Name
    {
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    // Pages
    {
      name: 'pages',
      title: 'Pages in Category',
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
      validation: (Rule) => Rule.unique(),
    },
    orderRankField({ type: 'portfolioCategory' }),
  ],
};
