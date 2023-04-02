import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { IoDocumentsOutline } from 'react-icons/io5';
import commission from './desk/commission';
import home from './desk/home';
import settings from './desk/settings';

export default (S, context) =>
  S.list()
    .title('Site Content')
    .items([
      home(S),
      S.divider(),
      orderableDocumentListDeskItem({
        icon: IoDocumentsOutline,
        title: 'Portfolio Categories',
        type: 'portfolioCategory',
        S,
        context,
      }),
      S.documentTypeListItem('portfolioPage').title('Portfolio Pages'),
      S.documentTypeListItem('portfolioItem').title('Portfolio Items'),
      S.divider(),
      commission(S),
      S.divider(),
      orderableDocumentListDeskItem({
        icon: IoDocumentsOutline,
        title: 'Collection Categories',
        type: 'collectionCategory',
        S,
        context,
      }),
      S.documentTypeListItem('collection').title('Collections'),
      S.documentTypeListItem('product').title('Products'),
      S.divider(),
      settings(S),
    ]);
