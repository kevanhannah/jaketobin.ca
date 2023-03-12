import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
  name: 'portfolioCategory',
  title: 'Portfolio Category',
  type: 'document',
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
