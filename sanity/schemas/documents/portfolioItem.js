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
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'imageModule' }],
    },
    {
      title: 'Description',
      name: 'description',
      type: 'textModule',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title = 'Untitled' }) {
      return {
        title,
      };
    },
  },
};
