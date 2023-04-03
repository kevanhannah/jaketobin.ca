// Annotations
import annotationLinkEmail from './annotations/annotationLinkEmail';
import annotationLinkExternal from './annotations/annotationLinkExternal';
import annotationLinkInternal from './annotations/annotationLinkInternal';

// Blocks
import body from './blocks/body';

// Documents
import collection from './documents/collection';
import collectionCategory from './documents/collectionCategory';
import portfolioCategory from './documents/portfolioCategory';
import portfolioItem from './documents/portfolioItem';
import portfolioPage from './documents/portfolioPage';
import product from './documents/product';
import productVariant from './documents/productVariant';

// Modules
import externalLink from './modules/externalLink';
import imageModule from './modules/imageModule';
import imageWithText from './modules/imageWithText';
import imageWithTextNew from './objects/module/imageWithText';
import internalLink from './modules/internalLink';
import moduleContent from './modules/moduleContent';
import pageContent from './modules/pageContent';
import pageModule from './modules/pageModule';
import publicationModule from './modules/publicationModule';
import textModule from './modules/textModule';
import placeholderString from './objects/placeholderString';
import productOption from './objects/productOption';

// Objects
import accordion from './objects/module/accordion';
import portfolioGrid from './objects/module/portfolioGrid';
import linkExternal from './objects/linkExternal';
import linkInternal from './objects/linkInternal';
import page from './objects/page';
import proxyString from './objects/proxyString';
import seo from './objects/seo';
import seoPage from './objects/seo/page';
import seoShopify from './objects/seo/shopify';
import shopifyCollection from './objects/shopifyCollection';
import shopifyCollectionRule from './objects/shopifyCollectionRule';
import shopifyProduct from './objects/shopifyProduct';
import shopifyProductVariant from './objects/shopifyProductVariant';

// Singletons
import commission from './singletons/commission';
import home from './singletons/home';
import settings from './singletons/settings';
import portfolio from './singletons/portfolio';

export const schemaTypes = [
  // Annotations
  annotationLinkEmail,
  annotationLinkExternal,
  annotationLinkInternal,
  // Blocks
  body,
  // Documents
  collection,
  collectionCategory,
  portfolioCategory,
  portfolioItem,
  portfolioPage,
  product,
  productVariant,
  // Modules
  externalLink,
  imageModule,
  imageWithText,
  imageWithTextNew,
  internalLink,
  moduleContent,
  pageContent,
  pageModule,
  publicationModule,
  textModule,
  // Objects
  accordion,
  portfolioGrid,
  linkExternal,
  linkInternal,
  page,
  placeholderString,
  productOption,
  proxyString,
  seo,
  seoPage,
  seoShopify,
  shopifyCollection,
  shopifyCollectionRule,
  shopifyProduct,
  shopifyProductVariant,
  // Singletons
  commission,
  home,
  portfolio,
  settings,
];
