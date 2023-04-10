import { MasterDetailIcon } from '@sanity/icons';

export function portfolio(S) {
	return S.listItem()
		.title('Portfolio Landing Page')
		.id('portfolio')
		.icon(MasterDetailIcon)
		.child(S.document().schemaType('portfolio').documentId('portfolio'));
}
