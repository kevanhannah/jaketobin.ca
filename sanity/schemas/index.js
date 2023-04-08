// Annotations
import { annotationLinkEmail } from './annotations/annotationLinkEmail';
import { annotationLinkExternal } from './annotations/annotationLinkExternal';
import { annotationLinkInternal } from './annotations/annotationLinkInternal';

// Blocks
import { body } from './blocks/body';

// Documents
import { collection } from './documents/collection';
import { faq } from './documents/faq';
import { portfolioItem } from './documents/portfolioItem';
import { portfolioPage } from './documents/portfolioPage';
import { portfolioPublication } from './documents/portfolioPublication';
import { product } from './documents/product';
import { productVariant } from './documents/productVariant';

// Objects
import { collectionPageGroup } from './objects/collectionPageGroup';
import { linkExternal } from './objects/linkExternal';
import { linkInternal } from './objects/linkInternal';
import { moduleAccordion } from './objects/module/accordion';
import { moduleCallToAction } from './objects/module/callToAction';
import { moduleGrid } from './objects/module/grid';
import { moduleImage } from './objects/module/image';
import { modulePortfolioArtwork } from './objects/module/portfolioArtwork';
import { page } from './objects/page';
import { placeholderString } from './objects/placeholderString';
import { portfolioPageGroup } from './objects/portfolioPageGroup';
import { productOption } from './objects/productOption';
import { productWithVariant } from './objects/productWithVariant';
import { proxyString } from './objects/proxyString';
import { modulePublications } from './objects/module/publications';
import { seo } from './objects/seo';
import { seoPage } from './objects/seo/page';
import { seoShopify } from './objects/seo/shopify';
import { shopifyCollection } from './objects/shopifyCollection';
import { shopifyCollectionRule } from './objects/shopifyCollectionRule';
import { shopifyProduct } from './objects/shopifyProduct';
import { shopifyProductVariant } from './objects/shopifyProductVariant';

// Singletons
import { about } from './singletons/about';
import { commission } from './singletons/commission';
import { home } from './singletons/home';
import { portfolio } from './singletons/portfolio';
import { settings } from './singletons/settings';
import { shop } from './singletons/shop';

export const schemaTypes = [
	// Annotations
	annotationLinkEmail,
	annotationLinkExternal,
	annotationLinkInternal,
	// Blocks
	body,
	// Documents
	collection,
	faq,
	portfolioItem,
	portfolioPublication,
	portfolioPage,
	product,
	productVariant,
	// Objects
	collectionPageGroup,
	linkExternal,
	linkInternal,
	moduleAccordion,
	moduleCallToAction,
	moduleGrid,
	moduleImage,
	modulePortfolioArtwork,
	page,
	placeholderString,
	portfolioPageGroup,
	productOption,
	productWithVariant,
	proxyString,
	modulePublications,
	seo,
	seoPage,
	seoShopify,
	shopifyCollection,
	shopifyCollectionRule,
	shopifyProduct,
	shopifyProductVariant,
	// Singletons
	about,
	commission,
	home,
	portfolio,
	settings,
	shop,
];
