import { writable } from 'svelte/store';

export const cartOpen = writable(false);
export const mobileNavOpen = writable(false);
export const portfolioOpen = writable(false);
export const shopOpen = writable(false);

export function handleCartClick() {
  cartOpen.update((data) => !data);
}

export function handleMobileNavClick() {
  // mobileNavOpen.update((data) => !data);
  mobileNavOpen.update((data) => {
    if (!data) return true;
    portfolioOpen.update(() => false);
    shopOpen.update(() => false);
    return false;
  });
}

export function handlePortfolioClick() {
  portfolioOpen.update((data) => !data);
  shopOpen.update(() => false);
}

export function handleShopClick() {
  shopOpen.update((data) => !data);
  portfolioOpen.update(() => false);
}

export function closeAllNav() {
  cartOpen.update(() => false);
  mobileNavOpen.update(() => false);
  portfolioOpen.update(() => false);
  shopOpen.update(() => false);
}