import { block } from './blocks/block';
import { blockCallToAction } from './blocks/blockCallToAction';
import { blockPortfolioArtwork } from './blocks/blockPortfolioArtwork';
import { blockGrid } from './blocks/blockGrid';
import { blockPortfolioPublications } from './blocks/blockPortfolioPublications';

export const bodyQuery = `
	${block},
	${blockCallToAction},
	${blockPortfolioArtwork},
	${blockGrid},
	${blockPortfolioPublications},
	`;
