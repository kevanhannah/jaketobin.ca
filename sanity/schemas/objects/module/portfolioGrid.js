import { ThLargeIcon } from '@sanity/icons';
import pluralize from 'pluralize-esm';

export default {
  name: 'module.portfolioGrid',
  title: 'Portfolio grid',
  type: 'object',
  icon: ThLargeIcon,
  fields: [
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'portfolioItem' }],
        },
      ],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'array',
      of: [{ type: 'linkInternal' }, { type: 'linkExternal' }],
      validation: (Rule) => Rule.max(1),
    },
  ],
  preview: {
    select: {
      items: 'items',
      url: 'url',
    },
    prepare(selection) {
      const { items } = selection;
      return {
        subtitle: 'Grid',
        title:
          items.length > 0 ? pluralize('item', items.length, true) : 'No items',
      };
    },
  },
};
