import commission from './desk/commission';
import home from './desk/home';
import portfolio from './desk/portfolio';
import settings from './desk/settings';
import shop from './desk/shop';

export default (S) =>
  S.list()
    .title('Site Content')
    .items([
      home(S),
      S.divider(),
      portfolio(S),
      S.documentTypeListItem('portfolioPage').title('Portfolio Pages'),
      S.documentTypeListItem('portfolioItem').title('Portfolio Items'),
      S.divider(),
      commission(S),
      S.divider(),
      shop(S),
      S.documentTypeListItem('collection').title('Collections'),
      S.documentTypeListItem('product').title('Products'),
      S.divider(),
      settings(S),
    ]);
