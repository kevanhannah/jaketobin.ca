export default function singletonQuery(singletonId) {
  return `
    *[_type == "${singletonId}"][0]{
      pageContent {
        body[]{
          _type == 'block' => @,
          _type == 'blockImageWithText' => @{
            _type,
            body,
            content[0]->,
            layout,
            link[0] { reference -> { slug { current }, _type }, title },
            title
          },
          _type == 'blockPortfolioGrid' => @{
            _type,
            items[]-> { images[0] },
            link[0] { reference -> { slug { current }, _type }, title }
          }
        },
        showHero
      }
    }
  `
}