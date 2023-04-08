export function about(S) {
	return S.listItem()
		.title('About Page')
		.id('about')
		.child(S.document().schemaType('about').documentId('about'));
}
