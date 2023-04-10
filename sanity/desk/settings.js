import { CogIcon } from '@sanity/icons';

export function settings(S) {
	return S.listItem()
		.title('Site Settings')
		.id('settings')
		.icon(CogIcon)
		.child(S.document().schemaType('settings').documentId('settings'));
}
