import { IoHomeOutline } from 'react-icons/io5';

export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  icon: IoHomeOutline,
  liveEdit: false,
  __experimental_actions: ['update', 'publish'],
  fields: [
    // Page Content
    {
      name: 'pageContent',
      title: 'Page content',
      type: 'page',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
        subtitle: '/',
      };
    },
  },
};
