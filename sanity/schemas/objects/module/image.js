import { ImageIcon } from '@sanity/icons';

export default {
  name: 'module.image',
  title: 'Image',
  type: 'object',
  fields: [
    // Image
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      fileName: 'image.asset.originalFilename',
      image: 'image',
      variant: 'variant',
    },
    prepare(selection) {
      const { fileName, image } = selection;

      return {
        media: image,
        subtitle: 'Image',
        title: fileName,
      };
    },
  },
};
