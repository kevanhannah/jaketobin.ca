// Documents
import portfolioCategory from './documents/portfolioCategory';
import portfolioItem from './documents/portfolioItem';
import portfolioPage from './documents/portfolioPage';

// Modules
import externalLink from './modules/externalLink';
import imageModule from './modules/imageModule';
import imageWithText from './modules/imageWithText';
import internalLink from './modules/internalLink';
import moduleContent from './modules/moduleContent';
import pageContent from './modules/pageContent';
import pageModule from './modules/pageModule';
import publicationModule from './modules/publicationModule';
import textModule from './modules/textModule';

// Objects
import seo from './objects/seo';

// Singletons
import home from './singletons/home';
import settings from './singletons/settings';

export const schemaTypes = [
  // Documents
  portfolioCategory,
  portfolioItem,
  portfolioPage,
  // Modules
  externalLink,
  imageModule,
  imageWithText,
  internalLink,
  moduleContent,
  pageContent,
  pageModule,
  publicationModule,
  textModule,
  // Objects
  seo,
  // Singletons
  home,
  settings,
];
