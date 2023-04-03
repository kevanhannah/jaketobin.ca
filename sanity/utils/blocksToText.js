const defaults = { nonTextBehavior: 'remove' };

export default function (blocks = [], opts = {}) {
  if (typeof blocks === 'string') {
    return blocks;
  }

  const options = { ...defaults, ...opts };
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove'
          ? ''
          : `[${block._type} block]`;
      }

      return block.children.map((child) => child.text).join('');
    })
    .join('\n\n');
}
