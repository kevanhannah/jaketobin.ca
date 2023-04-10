import { block } from './blocks/block';
import { blockCallToAction } from './blocks/blockCallToAction';
import { blockPortfolioArtwork } from './blocks/blockPortfolioArtwork';
import { blockGrid } from './blocks/blockGrid';
import { blockPortfolioPublications } from './blocks/blockPortfolioPublications';
import { blockAccordion } from './blocks/blockAccordion';

export const bodyQuery = `
	${block},
	${blockAccordion},
	${blockCallToAction},
	${blockPortfolioArtwork},
	${blockGrid},
	${blockPortfolioPublications},
	`;
