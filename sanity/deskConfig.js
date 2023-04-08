import commission from './desk/commission';
import home from './desk/home';
import portfolio from './desk/portfolio';
import settings from './desk/settings';
import shop from './desk/shop';

export const deskConfig = (S) =>
	S.list()
		.title('Site Content')
		.items([
			home(S),
			S.divider(),
			portfolio(S),
			S.documentTypeListItem('portfolioPage').title('Portfolio Pages'),
			S.documentTypeListItem('portfolioItem').title('Artwork Items'),
			S.documentTypeListItem('portfolioPublication').title('Writing Items'),
			S.divider(),
			commission(S),
			S.divider(),
			shop(S),
			S.documentTypeListItem('collection').title('Collections'),
			S.documentTypeListItem('product').title('Products'),
			S.divider(),
			S.documentTypeListItem('faq').title('Product FAQs'),
			S.divider(),
			settings(S),
		]);
