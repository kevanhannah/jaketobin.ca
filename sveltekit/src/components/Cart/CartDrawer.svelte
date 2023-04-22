<script>
	import { cartOpen, handleCartClick } from '$lib/stores/navContexts';
	import Cart from '$components/Cart/Cart.svelte';
</script>

<aside
	aria-hidden={!$cartOpen}
	class="cartDrawer"
	class:open={$cartOpen}
	inert={!$cartOpen}>
	<div class="drawerHeader">
		<h2>Cart</h2>
		<button
			aria-label="Close cart"
			class="closeDrawer"
			on:click={handleCartClick}
			type="button">
			<span class="closeIcon" />
		</button>
	</div>
	<Cart />
</aside>

<style lang="postcss">
	.cartDrawer {
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

		@media (max-width: 768px) {
			--drawer-width: 22.5em;
		}
	}

	.cartDrawer.open {
		transform: translate(calc(-1 * var(--drawer-width)));
	}

	.drawerHeader {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid var(--black);
		padding-top: 2.75em;
		padding-bottom: 2.75em;
		padding-left: 2.5em;
		padding-right: 2.5em;

		& h2 {
			font-size: 1.5em;
			margin-bottom: 0;
			line-height: 1;

			@media (max-width: 768px) {
				font-size: 1.55em;
				margin-bottom: 0;
				line-height: 1;
			}
		}

		@media (max-width: 768px) {
			padding-top: 1.5em;
			padding-bottom: 1.5em;
			padding-left: 0.75em;
			padding-right: 0.75em;
		}
	}

	.closeDrawer {
		height: 100%;
		background: none;
		border: none;
		font-size: 1em;
		font-weight: 500;
		color: var(--black);
		display: flex;
		justify-content: center;
		align-items: center;

		@media (hover: hover) {
			&:hover {
				color: var(--mediumGray);
			}
		}
	}

	.closeIcon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		position: relative;
		width: 1.5em;

		&:before,
		&:after {
			border-top-width: 1.5px;
			content: '';
			display: block;
			height: 0;
			position: absolute;
			top: calc(50% - 0.5px);
			transition: opacity 0s 0.15s, transform 0.15s ease-out;
			width: 100%;
		}

		&:before {
			transform: rotate(45deg);
		}

		&:after {
			transform: rotate(-45deg);
		}

		@media (max-width: 768px) {
			width: 2em;
		}
	}
</style>
