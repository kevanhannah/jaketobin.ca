export function formatDisplayPrice(priceRange) {
	if (priceRange.minVariantPrice.amount === priceRange.maxVariantPrice.amount) {
		return new Intl.NumberFormat('en-CA', {
			style: 'currency',
			currency: priceRange.minVariantPrice.currencyCode,
		}).format(priceRange.minVariantPrice.amount);
	}

	return `Starting at ${new Intl.NumberFormat('en-CA', {
		style: 'currency',
		currency: priceRange.minVariantPrice.currencyCode,
	}).format(priceRange.minVariantPrice.amount)}`;
}

export function determineOnSale(priceRange) {
	if (
		Number(priceRange.minVariantPrice.amount) === 0 &&
		Number(priceRange.maxVariantPrice.amount) === 0
	) {
		return false;
	}
	return true;
}
