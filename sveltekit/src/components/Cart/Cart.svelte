<script>
	import { cart } from '$lib/stores/storeContext';
	import CartItem from '$components/Cart/CartItem.svelte';
	import CheckoutSection from '$components/Cart/CheckoutSection.svelte';

	$: ({ lines } = $cart ?? []);
</script>

<div class="cart" class:empty={!lines || lines.edges.length === 0}>
	{#if !lines || lines.edges.length === 0}
		<p>Your cart is empty</p>
	{:else}
		<ul class="cartItemList">
			{#each lines.edges as lineItem}
				<CartItem item={lineItem.node} />
			{/each}
		</ul>
		<CheckoutSection />
	{/if}
</div>

<style>
	.cart {
		width: 100%;
		height: calc(100% - 90px);
		display: flex;
		flex-direction: column;
		overflow: scroll;
	}

	.empty {
		height: 100%;
		justify-content: center;
		align-items: center;
	}

	.empty p {
		margin: 0;
		font-size: 1em;
		font-weight: 400;
	}

	.cartItemList {
		display: flex;
		flex-direction: column;
		gap: 1em;
		flex: 1 1 auto;
		overflow: auto;
	}
</style>
