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
import { product } from './documents/product';
import { productVariant } from './documents/productVariant';

// Objects
import { collectionPageGroup } from './objects/collectionPageGroup';
import { linkExternal } from './objects/linkExternal';
import { linkInternal } from './objects/linkInternal';
import { moduleAccordion } from './objects/module/accordion';
import { moduleCallToAction } from './objects/module/callToAction';
import { moduleImage } from './objects/module/image';
import { moduleImageWithText } from './objects/module/imageWithText';
import { modulePortfolioGrid } from './objects/module/portfolioGrid';
import { moduleProductGrid } from './objects/module/productGrid';
import { modulePublication } from './objects/module/publication';
import { page } from './objects/page';
import { placeholderString } from './objects/placeholderString';
import { portfolioPageGroup } from './objects/portfolioPageGroup';
import { productOption } from './objects/productOption';
import { productWithVariant } from './objects/productWithVariant';
import { proxyString } from './objects/proxyString';
import { seo } from './objects/seo';
import { seoPage } from './objects/seo/page';
import { seoShopify } from './objects/seo/shopify';
import { shopifyCollection } from './objects/shopifyCollection';
import { shopifyCollectionRule } from './objects/shopifyCollectionRule';
import { shopifyProduct } from './objects/shopifyProduct';
import { shopifyProductVariant } from './objects/shopifyProductVariant';

// Singletons
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
	portfolioPage,
	product,
	productVariant,
	// Objects
	moduleCallToAction,
	collectionPageGroup,
	linkExternal,
	linkInternal,
	moduleAccordion,
	moduleImage,
	moduleImageWithText,
	modulePortfolioGrid,
	moduleProductGrid,
	modulePublication,
	page,
	placeholderString,
	portfolioPageGroup,
	productOption,
	productWithVariant,
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
	shop,
];
