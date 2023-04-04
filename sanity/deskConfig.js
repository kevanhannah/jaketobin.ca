import commission from './desk/commission';
import home from './desk/home';
import settings from './desk/settings';
import portfolio from './desk/portfolio';

export default (S) =>
  S.list()
    .title('Site Content')
    .items([
      home(S),
      portfolio(S),
      S.divider(),
      S.documentTypeListItem('portfolioPage').title('Portfolio Pages'),
      S.documentTypeListItem('portfolioItem').title('Portfolio Items'),
      S.divider(),
      commission(S),
      S.divider(),
      S.documentTypeListItem('collection').title('Collections'),
      S.documentTypeListItem('product').title('Products'),
      S.divider(),
      settings(S),
    ]);
