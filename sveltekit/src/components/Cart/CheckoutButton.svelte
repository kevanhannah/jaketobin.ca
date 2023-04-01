<script>
	export let checkoutUrl;

	function openCheckout() {
		window.location = checkoutUrl;
	}
</script>

<button on:click={openCheckout}>Checkout</button>

<style lang="postcss">
	button {
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
	}

	button:hover {
		color: var(--black);
		background: var(--paperWhite);
	}
</style>
