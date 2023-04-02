export default function getShopifyImageProps(imageNode) {
  const srcset = [
    `${imageNode.vw200} 200w`,
    `${imageNode.vw400} 400w`,
    `${imageNode.vw600} 600w`,
    `${imageNode.vw800} 800w`,
    `${imageNode.vw1200} 1200w`,
    `${imageNode.vw2000} 2000w`,
  ].join(', ')

  return {
    alt: imageNode.altText || '',
    // Use the original image as the `src` for the <img>
    src: imageNode.original,
    // Build a `{URL} {SIZE}w, ...` string for the srcset
    srcset,
  }
}