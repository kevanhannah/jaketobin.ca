import { IoImageOutline } from 'react-icons/io5';

export default {
  title: 'Portfolio Item',
  name: 'portfolioItem',
  type: 'document',
  icon: IoImageOutline,
  // groups: [
  //   { title: 'Content', name: 'content', default: true },
  //   { title: 'Settings', name: 'settings' },
  // ],
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    // Images
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'module.image' }],
      validation: (Rule) => Rule.min(1),
    },
    // Description
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Paragraph', value: 'normal' }],
          lists: [
            { title: 'Numbered', value: 'number' },
            {
              title: 'Bullet',
              value: 'bullet',
            },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      images: 'images',
      title: 'title',
    },
    prepare({ images, title = 'Untitled' }) {
      return {
        media: images ? images[0].image : null,
        title,
      };
    },
  },
};
