import { bodyQuery } from './queryFragments/bodyQuery';

export default function singletonQuery(singletonId) {
	return `
    *[_type == "${singletonId}"][0]{
      pageContent {
        body[]{
          ${bodyQuery}
        },
        seo {
          title
        },
        showHero
      },
    }
  `;
}
