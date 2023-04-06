<script>
	import {
		isLoading,
		removeItemFromCart,
		updateItemInCart,
	} from '$lib/stores/storeContext';
	import Minus from '$components/shared/Icons/Minus.svelte';
	import Plus from '$components/shared/Icons/Plus.svelte';

	export let quantity;
	export let lineId;
	export let variantId;
	let minusHovering = false;
	let plusHovering = false;
</script>

<div class="quantityWidget">
	<button
		class="incrementButton"
		disabled={$isLoading}
		aria-label="decrease quantity"
		on:click={removeItemFromCart({ lineId, quantity: quantity - 1, variantId })}
		on:mouseenter={() => (minusHovering = true)}
		on:mouseleave={() => (minusHovering = false)}
		><Minus
			hovering={minusHovering}
			style="width: 0.5em; height: 0.5em; stroke-width: 2px;"
		/></button
	><span class="quantityCount">{quantity}</span><button
		class="incrementButton"
		disabled={$isLoading}
		aria-label="increase quantity"
		on:click={updateItemInCart({ lineId, quantity: quantity + 1, variantId })}
		on:mouseenter={() => (plusHovering = true)}
		on:mouseleave={() => (plusHovering = false)}
		><Plus
			hovering={plusHovering}
			style="width: 0.5em; height: 0.5em; stroke-width: 2px;"
		/></button
	>
</div>

<style lang="postcss">
	.quantityWidget {
		display: inline-flex;
		align-items: center;
		border: 1px solid var(--black);
		border-radius: 4px;
		white-space: nowrap;
		user-select: none;
	}

	.quantityCount {
		display: block;
		width: 1.5em;
		font-size: 0.75em;
		font-weight: 600;
		padding: 0.5em;
		line-height: 1;
		text-align: center;
	}

	.incrementButton {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 0.25em;
		padding-bottom: 0.25em;
		padding-left: 0.5em;
		padding-right: 0.5em;
		user-select: none;
		background: transparent;
	}

	.incrementButton:disabled {
		cursor: default;
	}
</style>
