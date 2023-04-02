import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';
import { IoDocumentsOutline } from 'react-icons/io5';

export default {
  name: 'collectionCategory',
  title: 'Collection Category',
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
      title: 'Collections in Category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'collection' }],
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
