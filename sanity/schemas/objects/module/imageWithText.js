import { BlockElementIcon, ImageIcon } from '@sanity/icons';

export default {
  name: 'module.imageWithText',
  title: 'Image with text',
  type: 'object',
  icon: BlockElementIcon,
  fieldsets: [
    {
      name: 'copy',
      title: 'Copy',
    },
  ],
  fields: [
    // Layout
    {
      name: 'layout',
      title: 'Layout direction',
      type: 'string',
      initialValue: 'left',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: [
          {
            title: 'Content / Copy',
            value: 'left',
          },
          {
            title: 'Copy / Content',
            value: 'right',
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'copy',
    },
    // Body
    {
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 2,
      fieldset: 'copy',
    },
    // Link
    {
      name: 'link',
      title: 'Link',
      type: 'array',
      of: [{ type: 'linkInternal' }, { type: 'linkExternal' }],
      validation: (Rule) => Rule.max(1),
      fieldset: 'copy',
    },
    // Content
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      validation: (Rule) => Rule.required().max(1),
      of: [
        {
          icon: ImageIcon,
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'portfolioItem',
          type: 'reference',
          to: [{ type: 'portfolioItem' }],
          weak: true,
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        subtitle: 'Image with text',
        title,
        media: BlockElementIcon,
      };
    },
  },
};
