<script>
	import { handleCartClick } from '$lib/stores/navContexts';
	import { cartQuantity } from '$lib/stores/storeContext';
</script>

<button class="cartToggle" on:click={handleCartClick}
	>Cart <span class="cartToggleCounter">{$cartQuantity || 0}</span></button>

<style lang="postcss">
	.cartToggle,
	.cartToggleCounter {
		background-color: transparent;
		display: flex;
		position: relative;
	}

	.cartToggle {
		align-items: center;
		gap: 0.5em;
		appearance: none;
		cursor: pointer;
		text-transform: uppercase;
		font-weight: 400;
	}

	.cartToggleCounter {
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
		.cartToggle,
		.cartToggleCounter {
			font-size: 0.75em;
		}
	}
</style>
