import { IoHomeOutline } from 'react-icons/io5';

export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  icon: IoHomeOutline,
  liveEdit: false,
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  fields: [
    {
      title: 'Modules',
      name: 'modules',
      type: 'moduleContent',
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
