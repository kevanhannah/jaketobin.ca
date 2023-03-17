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
    {
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pages',
      title: 'Pages in Category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'portfolioPage' }],
        },
      ],
    },
    orderRankField({ type: 'portfolioCategory' }),
  ],
};
