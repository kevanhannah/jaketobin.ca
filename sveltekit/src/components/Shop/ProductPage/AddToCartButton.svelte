<script>
	import { addItemToCart, isLoading } from '$lib/stores/storeContext.js';
  import Button from '$components/shared/Button.svelte';

	export let variant;

	$: ({ availableForSale, id } = variant);
</script>

{#if availableForSale}
	<Button
		loading={$isLoading}
		on:click={addItemToCart({ variantId: id })}
		>{$isLoading ? 'Processing...' : 'Add to cart'}</Button
	>
{:else}
  <Button disabled>Out of stock</Button>
{/if}
