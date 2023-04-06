export default function setSlugPrefix(type) {
	switch (type) {
		case 'portfolioPage':
			return 'portfolio/';
		case 'collection':
			return 'shop/';
		default:
			return '';
	}
}
