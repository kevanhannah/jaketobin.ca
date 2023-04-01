// Documents
import collection from './documents/collection';
import portfolioCategory from './documents/portfolioCategory';
import portfolioItem from './documents/portfolioItem';
import portfolioPage from './documents/portfolioPage';
import product from './documents/product';
import productVariant from './documents/productVariant';

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
import placeholderString from './objects/placeholderString';
import productOption from './objects/productOption';

// Objects
import proxyString from './objects/proxyString';
import seo from './objects/seo';
import seoShopify from './objects/seo/shopify';
import shopifyCollection from './objects/shopifyCollection';
import shopifyCollectionRule from './objects/shopifyCollectionRule';
import shopifyProduct from './objects/shopifyProduct';
import shopifyProductVariant from './objects/shopifyProductVariant';

// Singletons
import commission from './singletons/commission';
import home from './singletons/home';
import settings from './singletons/settings';

export const schemaTypes = [
  // Documents
  collection,
  portfolioCategory,
  portfolioItem,
  portfolioPage,
  product,
  productVariant,
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
  placeholderString,
  productOption,
  proxyString,
  seo,
  seoShopify,
  shopifyCollection,
  shopifyCollectionRule,
  shopifyProduct,
  shopifyProductVariant,
  // Singletons
  commission,
  home,
  settings,
];
