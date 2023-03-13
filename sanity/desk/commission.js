export default function commission(S) {
  return S.listItem()
    .title('Commission Page')
    .id('commission')
    .child(S.document().schemaType('commission').documentId('commission'));
}
