<script>
	import { addItemToCart, cart, isLoading } from '$lib/stores/storeContext.js';
	$: console.log($cart);

	export let variant;

	$: ({ availableForSale, id } = variant);
</script>

{#if availableForSale}
	<button
		class:adding={$isLoading}
		disabled={$isLoading}
		on:click={addItemToCart({ variantId: id })}
		>{$isLoading ? 'Processing...' : 'Add to cart'}</button
	>
{:else}
	<button class="disabled" disabled>Out of stock</button>
{/if}

<style lang="postcss">
	button {
		padding: 0.75em 1.25em;
		color: var(--paperWhite);
		background: var(--black);
		border: 1px solid var(--black);
		border-radius: 0.5em;
		font-weight: 600;
		transition-property: border-color, background, color, transform, box-shadow;
		transition-duration: 0.15s;
		transition-timing-function: ease;
	}

	button:not(.adding):hover {
		color: var(--black);
		background: var(--paperWhite);
	}

	.adding {
		background: var(--mediumGray);
		border: 1px solid var(--mediumGray);
		cursor: default;
	}

	.disabled {
		background: var(--paperWhite);
		color: var(--black);
		border: 1px solid var(--black);
		cursor: default;
	}
</style>
