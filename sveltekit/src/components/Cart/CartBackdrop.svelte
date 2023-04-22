<script>
	import { browser } from '$app/environment';
	import { cartOpen, handleCartClick } from '$lib/stores/navContexts';

	$: if (browser) {
		document.body.classList.toggle('no-scroll', $cartOpen);
	}
</script>

<div
	aria-hidden={true}
	class="cart_backdrop"
	class:is_active={$cartOpen}
	on:click={handleCartClick}
	on:keypress={handleCartClick} />

<style lang="postcss">
	:global(body.no-scroll) {
		overflow: hidden;
	}

	.cart_backdrop {
		--tw-bg-opacity: 0.4;
		background-color: rgb(0 0 0 / var(--tw-bg-opacity));
		bottom: 0;
		left: 0;
		opacity: 0;
		pointer-events: none;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 8;
		transition: opacity 0.15s linear;

		&.is_active {
			backdrop-filter: blur(0.5em);
			opacity: 1;
			pointer-events: auto;
		}
	}
</style>
