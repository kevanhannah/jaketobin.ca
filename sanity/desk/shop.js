import { MasterDetailIcon } from '@sanity/icons';

export function shop(S) {
	return S.listItem()
		.title('Shop Landing Page')
		.id('shop')
		.icon(MasterDetailIcon)
		.child(S.document().schemaType('shop').documentId('shop'));
}
