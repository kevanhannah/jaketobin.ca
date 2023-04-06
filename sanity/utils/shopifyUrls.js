import { SHOPIFY_STORE_ID } from '../constants';

export const collectionUrl = (collectionId) => {
	if (!SHOPIFY_STORE_ID) {
		return null;
	}
	return `https://${SHOPIFY_STORE_ID}/admin/collections/${collectionId}`;
};

export const productUrl = (productId) => {
	if (!SHOPIFY_STORE_ID) {
		return null;
	}
	return `https://${SHOPIFY_STORE_ID}/admin/products/${productId}`;
};

export const productVariantUrl = (productId, productVariantId) => {
	if (!SHOPIFY_STORE_ID) {
		return null;
	}
	return `https://${SHOPIFY_STORE_ID}/admin/products/${productId}/variants/${productVariantId}`;
};
