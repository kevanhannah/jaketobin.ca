<script>
	import { cartOpen, handleCartClick } from '$lib/stores/navContexts';
	import Cart from '$components/Cart/Cart.svelte';
</script>

<aside
	aria-hidden={!$cartOpen}
	class="cart_drawer"
	class:open={$cartOpen}
	inert={!$cartOpen}
>
	<div class="cart_drawer_header">
		<h2>Cart</h2>
		<button
			aria-label="Close cart"
			class="closeDrawer"
			on:click={handleCartClick}
			type="button"
		>
			<span class="hamburger_icon" />
		</button>
	</div>
	<Cart />
</aside>

<style>
	.cart_drawer {
		--drawer-width: 35em;
		width: var(--drawer-width);
		position: fixed;
		top: 0;
		bottom: 0;
		right: calc(-1 * var(--drawer-width));
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
		transform: translate(calc(-1 * var(--drawer-width)));
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
		font-size: 1em;
		font-weight: 500;
		color: var(--black);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.closeDrawer:hover {
		color: #6c6c6c;
	}

	.hamburger_icon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		position: relative;
		width: 1.5em;
	}

	.hamburger_icon:after,
	.hamburger_icon:before {
		border-top-width: 1.5px;
		content: '';
		display: block;
		height: 0;
		position: absolute;
		top: calc(50% - 0.5px);
		transition: opacity 0s 0.15s, transform 0.15s ease-out;
		width: 100%;
	}

	.hamburger_icon:before {
		transform: rotate(45deg);
	}

	.hamburger_icon:after {
		transform: rotate(-45deg);
	}

	@media (max-width: 768px) {
		.cart_drawer {
			--drawer-width: 22.5em;
		}

		.cart_drawer_header {
			padding-top: 1.5em;
			padding-bottom: 1.5em;
			padding-left: 0.75em;
			padding-right: 0.75em;
		}

		.cart_drawer_header h2 {
			font-size: 1.55em;
			margin-bottom: 0;
			line-height: 1;
		}

		.hamburger_icon {
			width: 2em;
		}
	}
</style>
