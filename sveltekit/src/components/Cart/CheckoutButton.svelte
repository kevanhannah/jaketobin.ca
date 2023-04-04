<script>
	import { isLoading } from '$lib/stores/storeContext';
  import Button from '$components/shared/Button.svelte';
	export let checkoutUrl;

	function openCheckout() {
		window.location = checkoutUrl;
	}
</script>

<Button disabled={$isLoading} on:click={openCheckout}>{$isLoading ? 'Processing...' : 'Checkout'}</Button>

<!-- <button class="checkoutButton" disabled={$isLoading} on:click={openCheckout}
	>{$isLoading ? 'Processing...' : 'Checkout'}</button
> -->

<!-- <style lang="postcss">
	.checkoutButton {
		padding: 0.75em 1.25em;
		color: var(--paperWhite);
		background: var(--black);
		border: 1px solid var(--black);
		border-radius: 0.5em;
		font-size: 1em;
		font-weight: 600;
		transition-property: border-color, background, color, transform, box-shadow;
		transition-duration: 0.15s;
		transition-timing-function: ease;
		user-select: none;
	}

	.checkoutButton:disabled {
		background: var(--mediumGray);
		border: 1px solid var(--mediumGray);
		cursor: default;
	}

	.checkoutButton:hover {
		color: var(--black);
		background: var(--paperWhite);
	}
</style> -->
