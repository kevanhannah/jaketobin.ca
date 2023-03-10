// Documents
import page from './documents/page';

// Modules
import imageModule from './modules/imageModule';
import imageWithText from './modules/imageWithText';
import internalLink from './modules/internalLink';
import moduleContent from './modules/moduleContent';
import pageContent from './modules/pageContent';
import pageModule from './modules/pageModule';

// Objects
import seo from './objects/seo';

// Singletons
import home from './singletons/home';

export const schemaTypes = [
  // Documents
  page,
  // Modules
  imageModule,
  imageWithText,
  internalLink,
  moduleContent,
  pageContent,
  pageModule,
  // Objects
  seo,
  // Singletons
  home,
];
