import { BillIcon } from '@sanity/icons';

export function commission(S) {
	return S.listItem()
		.title('Commission Page')
		.id('commission')
		.icon(BillIcon)
		.child(S.document().schemaType('commission').documentId('commission'));
}
