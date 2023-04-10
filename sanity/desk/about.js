import { UserIcon } from '@sanity/icons';

export function about(S) {
	return S.listItem()
		.title('About Page')
		.id('about')
		.icon(UserIcon)
		.child(S.document().schemaType('about').documentId('about'));
}
