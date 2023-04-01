import { get, writable } from 'svelte/store';
import { browser } from '$app/environment';
import { cartOpen } from '$lib/stores/navContexts';
import { createCart, loadCart } from '$lib/utils/shopify';

export const cart = writable({});
export const cartId = writable('');
export const cartQuantity = writable('');
export const checkoutUrl = writable('');
export const addingToCart = writable(false);

export async function useCreateCart() {
  const cartRes = await createCart();
  const shopifyCart = cartRes.body?.data?.cartCreate?.cart;

  cart.set(shopifyCart);

  if (browser) {
    localStorage.setItem('cartCreatedAt', Date.now());
    localStorage.setItem('cartId', JSON.stringify(shopifyCart.id));
  }
}

export async function getCartItems() {
  try {
    const shopifyResponse = await loadCart(get(cartId));

    let sum = 0;
    shopifyResponse.body?.data?.cart?.lines?.edges?.forEach((d) => {
      sum += d.node.quantity;
    });

    cartQuantity.set(sum);
    cart.set(shopifyResponse.body?.data?.cart);

    return shopifyResponse;
  } catch (error) {
    console.log(error);
  }
}

export async function addItemToCart(variantId) {
  addingToCart.set(true);

  await fetch('./cart.json', {
    method: 'PATCH',
    body: JSON.stringify({ cartId: get(cartId), variantId }),
  });

  // Wait for the API to finish before updating cart items
  await getCartItems();
  addingToCart.set(false);
  cartOpen.set(true);
}