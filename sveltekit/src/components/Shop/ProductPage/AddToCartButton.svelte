<script>
	import { addItemToCart } from '$lib/stores/storeContext.js';

	export let variant;
	$: ({ availableForSale, id } = variant);
</script>

<button
	class:disabled={!availableForSale}
	disabled={!availableForSale}
	on:click={addItemToCart({ variantId: id })}
	>{availableForSale ? 'Add to cart' : 'Out of stock'}</button
>

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

	button:hover {
		color: var(--black);
		background: var(--paperWhite);
	}

	.disabled {
		background: var(--paperWhite);
		color: var(--black);
		border: 1px solid var(--black);
		cursor: default;
	}
</style>
