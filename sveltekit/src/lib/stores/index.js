import { writable } from 'svelte/store';

export const mobileNavIsOpen = writable(false);
export const cartIsOpen = writable(false);
export const portfolioNavIsOpen = writable(false);
export const shopNavIsOpen = writable(false);

export function toggleMobileNav() {
	mobileNavIsOpen.update((data) => !data);
}

export function toggleCart() {
	cartIsOpen.update((data) => !data);
}

export function togglePortfolioNav() {
	portfolioNavIsOpen.update((data) => !data);

	if (shopNavIsOpen) {
		shopNavIsOpen.update(() => false);
	}
}

export function toggleShopNav() {
	shopNavIsOpen.update((data) => !data);

	if (portfolioNavIsOpen) {
		portfolioNavIsOpen.update(() => false);
	}
}

export function closeAllNav() {
	portfolioNavIsOpen.update(() => false);
	shopNavIsOpen.update(() => false);
	mobileNavIsOpen.update(() => false);
}
