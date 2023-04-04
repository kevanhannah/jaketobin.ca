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
    {
      name: 'content',
      title: 'Content',
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
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Paragraph', value: 'normal' }],
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
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
      title: 'Content item',
      type: 'array',
      validation: (Rule) => Rule.required().max(1),
      of: [
        {
          title: 'Image',
          icon: ImageIcon,
          type: 'module.image',
        },
        {
          name: 'portfolioItem',
          title: 'Portfolio item',
          type: 'reference',
          to: [{ type: 'portfolioItem' }],
          weak: true,
          validation: (Rule) => Rule.required(),
        },
      ],
      fieldset: 'content',
    },
    {
      name: 'aspectRatio',
      title: 'Aspect ratio',
      type: 'number',
      initialValue: 1,
      validation: (Rule) => Rule.required().positive().precision(3),
      fieldset: 'content',
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
