export default function settings(S) {
  return S.listItem()
    .title('Site Settings')
    .id('settings')
    .child(S.document().schemaType('settings').documentId('settings'));
}
