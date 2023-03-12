<script>
	import { toggleCart } from '$lib/stores';
</script>

<button class="cart_toggle" on:click={toggleCart}
	>Cart <span class="cart_toggle_counter"><slot /></span></button
>

<style>
	.cart_toggle,
	.cart_toggle_counter {
		background-color: transparent;
		display: flex;
		position: relative;
	}

	.cart_toggle {
		align-items: center;
		gap: 0.75em;
		appearance: none;
		cursor: pointer;
		text-transform: uppercase;
		font-weight: 300;
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
</style>
