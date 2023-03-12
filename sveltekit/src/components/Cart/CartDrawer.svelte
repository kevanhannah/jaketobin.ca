<script>
	import { cartIsOpen, toggleCart } from '$lib/stores';
	import Cart from '$components/Cart/Cart.svelte';
</script>

<aside aria-hidden={$cartIsOpen} class="cart_drawer" class:open={$cartIsOpen}>
	<div class="cart_drawer_header">
		<h2>Cart</h2>
		<button
			aria-label="Close cart"
			class="closeDrawer"
			on:click={toggleCart}
			type="button">&times;</button
		>
	</div>
	<Cart />
</aside>

<style>
	.cart_drawer {
		width: 35em;
		position: fixed;
		top: 0;
		bottom: 0;
		right: -35em;
		z-index: 9;
		transform: none;
		transition-duration: 0.35s;
		background: var(--paperWhite);
		border-left: 1px solid var(--black);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.cart_drawer.open {
		transform: translate(-35em);
	}

	.cart_drawer_header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid var(--black);
		padding-top: 2.75em;
		padding-bottom: 2.75em;
		padding-left: 2.5em;
		padding-right: 2.5em;
	}

	.cart_drawer_header h2 {
		font-size: 1.5em;
		margin-bottom: 0;
		line-height: 1;
	}

	.closeDrawer {
		background: none;
		border: none;
		font-size: 1.5em;
		font-weight: 500;
		color: var(--black);
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
