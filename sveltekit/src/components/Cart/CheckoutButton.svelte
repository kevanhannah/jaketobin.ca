<script>
	import { isLoading } from '$lib/stores/storeContext';
  import Button from '$components/shared/Button.svelte';
	export let checkoutUrl;

	function openCheckout() {
		window.location = checkoutUrl;
	}
</script>

<Button loading={$isLoading} on:click={openCheckout}>{$isLoading ? 'Processing...' : 'Checkout'}</Button>
