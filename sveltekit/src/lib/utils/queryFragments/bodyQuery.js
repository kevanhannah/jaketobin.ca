import { block } from './blocks/block';
import { blockCallToAction } from './blocks/blockCallToAction';
import { blockPortfolioArtwork } from './blocks/blockPortfolioArtwork';
import { blockGrid } from './blocks/blockGrid';
import { blockPortfolioPublications } from './blocks/blockPortfolioPublications';
import { blockAccordion } from './blocks/blockAccordion';
import { blockNewsletter } from './blocks/blockNewsletter';

export const bodyQuery = `
	${block},
	${blockAccordion},
	${blockCallToAction},
	${blockNewsletter},
	${blockPortfolioArtwork},
	${blockGrid},
	${blockPortfolioPublications},
	`;
