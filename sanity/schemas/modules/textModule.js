export default {
  title: 'Text Module',
  name: 'textModule',
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
};
