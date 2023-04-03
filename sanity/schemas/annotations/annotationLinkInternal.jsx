import React from 'react';
import { LinkIcon } from '@sanity/icons';
import { PAGE_REFERENCES } from '../../constants';

export default {
  title: 'Internal Link',
  name: 'annotationLinkInternal',
  type: 'object',
  // @ts-ignore
  blockEditor: {
    icon: () => <LinkIcon />,
    // @ts-ignore
    render: ({ children }) => (
      <span>
        <LinkIcon
          style={{
            marginLeft: '0.05em',
            marginRight: '0.1em',
            width: '0.75em',
          }}
        />
        {children}
      </span>
    ),
  },
  fields: [
    // Reference
    {
      name: 'reference',
      type: 'reference',
      weak: true,
      validation: (Rule) => Rule.required(),
      to: PAGE_REFERENCES,
    },
  ],
};
