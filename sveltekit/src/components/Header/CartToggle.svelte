<script>
	import { handleCartClick } from '$lib/stores/navContexts';
	import { cartQuantity } from '$lib/stores/storeContext';
</script>

<button class="cart_toggle" on:click={handleCartClick}
	>Cart <span class="cart_toggle_counter">{$cartQuantity || 0}</span></button>

<style>
	.cart_toggle,
	.cart_toggle_counter {
		background-color: transparent;
		display: flex;
		position: relative;
	}

	.cart_toggle {
		align-items: center;
		gap: 0.5em;
		appearance: none;
		cursor: pointer;
		text-transform: uppercase;
		font-weight: 400;
	}

	.cart_toggle_counter {
		border-color: var(--black);
		border-radius: 50%;
		border-width: 1px;
		color: var(--black);
		flex-direction: column;
		font-size: 0.75em;
		font-weight: 600;
		width: 1.75em;
		height: 1.75em;
		justify-content: center;
		line-height: 1;
	}

	@media (max-width: 768px) {
		.cart_toggle,
		.cart_toggle_counter {
			font-size: 0.75em;
		}
	}
</style>
