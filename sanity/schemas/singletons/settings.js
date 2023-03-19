import { IoCogOutline } from 'react-icons/io5';

export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  icon: IoCogOutline,
  liveEdit: false,
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: 'categories',
    //   title: 'Portfolio Page Categories',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'Portfolio Page Category',
    //       type: 'reference',
    //       to: [{ type: 'portfolioCategory' }],
    //     },
    //   ],
    //   validation: (Rule) => Rule.unique(),
    // },
  ],
};
