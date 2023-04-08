export default function portfolio(S) {
	return S.listItem()
		.title('Portfolio Landing Page')
		.id('portfolio')
		.child(S.document().schemaType('portfolio').documentId('portfolio'));
}
