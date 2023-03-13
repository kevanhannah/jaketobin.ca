export default {
  name: 'commission',
  title: 'Commission Page',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      title: 'Page Header',
      name: 'header',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Page Hero Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Page Content',
      name: 'content',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Title', value: 'h2' },
            { title: 'Heading', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          title: 'Portfolio Preview',
          name: 'portfolioPreview',
          type: 'object',
          fields: [
            {
              title: 'Portfolio Items',
              name: 'items',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{ type: 'portfolioItem' }],
                },
              ],
              validation: (Rule) => Rule.max(3),
            },
            {
              title: 'Link',
              name: 'link',
              type: 'internalLink',
            },
          ],
          preview: {
            prepare() {
              return {
                title: 'Portfolio Preview',
              };
            },
          },
        },
      ],
    },
  ],
};
