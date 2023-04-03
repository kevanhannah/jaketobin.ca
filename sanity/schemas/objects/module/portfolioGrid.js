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

// import { ThLargeIcon } from '@sanity/icons';
// import pluralize from 'pluralize-esm';
// import blocksToText from '../../../utils/blocksToText';

// export default {
//   name: 'module.grid',
//   title: 'Grid',
//   type: 'object',
//   icon: ThLargeIcon,
//   fields: [
//     // Items
//     {
//       name: 'items',
//       title: 'Items',
//       type: 'array',
//       of: [
//         {
//           name: 'item',
//           title: 'Item',
//           type: 'object',
//           fields: [
//             // Title
//             {
//               name: 'title',
//               title: 'Title',
//               type: 'string',
//               validation: (Rule) => Rule.required(),
//             },
//             // Image
//             {
//               name: 'image',
//               title: 'Image',
//               type: 'image',
//               options: { hotspot: true },
//               validation: (Rule) => Rule.required(),
//             },
//             // Body
//             {
//               name: 'body',
//               title: 'Body',
//               type: 'array',
//               of: [
//                 {
//                   lists: [],
//                   marks: {
//                     annotations: [
//                       // // Product
//                       // {
//                       //   name: 'annotationProduct',
//                       //   type: 'annotationProduct',
//                       // },
//                       // Email
//                       {
//                         name: 'annotationLinkEmail',
//                         type: 'annotationLinkEmail',
//                       },
//                       // Internal link
//                       {
//                         name: 'annotationLinkInternal',
//                         type: 'annotationLinkInternal',
//                       },
//                       // URL
//                       {
//                         name: 'annotationLinkExternal',
//                         type: 'annotationLinkExternal',
//                       },
//                     ],
//                     decorators: [
//                       {
//                         title: 'Italic',
//                         value: 'em',
//                       },
//                       {
//                         title: 'Strong',
//                         value: 'strong',
//                       },
//                     ],
//                   },
//                   // Regular styles
//                   styles: [],
//                   // Paragraphs
//                   type: 'block',
//                 },
//               ],
//               validation: (Rule) => Rule.required(),
//             },
//           ],
//           preview: {
//             select: {
//               body: 'body',
//               image: 'image',
//               title: 'title',
//             },
//             prepare(selection) {
//               const { body, image, title } = selection;
//               return {
//                 media: image,
//                 subtitle: body && blocksToText(body),
//                 title,
//               };
//             },
//           },
//         },
//       ],
//     },
//   ],
//   preview: {
//     select: {
//       items: 'items',
//       url: 'url',
//     },
//     prepare(selection) {
//       const { items } = selection;
//       return {
//         subtitle: 'Grid',
//         title:
//           items.length > 0 ? pluralize('item', items.length, true) : 'No items',
//       };
//     },
//   },
// };
