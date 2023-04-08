import { IoCogOutline } from 'react-icons/io5';

export function settings(S) {
	return S.listItem()
		.title('Site Settings')
		.id('settings')
		.icon(IoCogOutline)
		.child(S.document().schemaType('settings').documentId('settings'));
}
