export default function home(S) {
  return S.listItem()
    .title('Home Page')
    .id('home')
    .child(S.document().schemaType('home').documentId('home'));
}
