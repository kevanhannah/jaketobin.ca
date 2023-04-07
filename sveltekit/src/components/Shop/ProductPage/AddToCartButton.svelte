<script>
	import { addItemToCart, isLoading } from '$lib/stores/storeContext.js';
	import Button from '$components/shared/Button.svelte';

	export let variant;

	$: ({ inventory, gid } = variant.store);
</script>

{#if inventory.isAvailable}
	<Button loading={$isLoading} on:click={addItemToCart({ variantId: gid })}
		>{$isLoading ? 'Processing...' : 'Add to cart'}</Button>
{:else}
	<Button disabled>Sold out</Button>
{/if}
