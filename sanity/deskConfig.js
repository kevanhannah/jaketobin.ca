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
      // S.documentTypeListItem('portfolioCategory').title('Portfolio Categories'),
      orderableDocumentListDeskItem({ icon: IoDocumentsOutline, title: 'Portfolio Categories', type: 'portfolioCategory', S, context }),
      S.documentTypeListItem('portfolioPage').title('Portfolio Pages'),
      S.documentTypeListItem('portfolioItem').title('Portfolio Items'),
      S.divider(),
      commission(S),
      S.divider(),
      settings(S),
    ]);
