import { ThLargeIcon } from '@sanity/icons';
import pluralize from 'pluralize-esm';

export default {
  name: 'module.productGrid',
  title: 'Product grid',
  type: 'object',
  icon: ThLargeIcon,
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    // Items
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      items: 'items',
      title: 'title',
    },
    prepare(selection) {
      const { items, title } = selection;
      return {
        subtitle: pluralize('product', items.length, true),
        title: title || 'Product Grid',
      };
    },
  },
};
