export function shop(S) {
	return S.listItem()
		.title('Shop Landing Page')
		.id('shop')
		.child(S.document().schemaType('shop').documentId('shop'));
}
