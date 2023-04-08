import { IoHomeOutline } from 'react-icons/io5';

export function home(S) {
	return S.listItem()
		.title('Home Page')
		.id('home')
		.icon(IoHomeOutline)
		.child(S.document().schemaType('home').documentId('home'));
}
