<script>
	import { removeItemFromCart } from '$lib/stores/storeContext';
	import CartItemImage from '$components/Cart/CartItemImage.svelte';
	import QuantityWidget from '$components/Cart/QuantityWidget.svelte';

	export let item;
	$: ({ estimatedCost, id, merchandise, quantity } = item);
</script>

<li>
	<div class="itemImage">
		<CartItemImage image={merchandise.product?.images?.edges[0].node} />
	</div>
	<div class="itemInfo">
		<div class="itemInfo_groupText">
			<h3>{merchandise.product.title}</h3>
			{#if merchandise.title !== 'Default Title'}
				<span class="variantTitle">{merchandise.title}</span>
			{/if}
			<span class="itemPrice">
				{`${estimatedCost.totalAmount.currencyCode} ${new Intl.NumberFormat(
					'en-CA',
					{
						style: 'currency',
						currency: estimatedCost.totalAmount.currencyCode,
					}
				).format(estimatedCost.totalAmount.amount)}`}</span
			>
		</div>
		<div class="quantityRow">
			<QuantityWidget lineId={id} {quantity} variantId={merchandise.id} />
			<button
				class="removeButton"
				on:click={removeItemFromCart({
					lineId: id,
					quantity: 0,
					variantId: merchandise.id,
				})}>Remove</button
			>
		</div>
	</div>
</li>

<style lang="postcss">
	li {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: 1em;
		margin-left: 1em;
		margin-right: 1em;
		margin-bottom: 1em;
		padding-bottom: 1em;
		border-bottom: 1px solid var(--black);
	}

	li:first-of-type {
		margin-top: 1em;
	}

	li:last-of-type {
		padding-bottom: 0;
		border-bottom: none;
	}

	.itemInfo {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.itemInfo_groupText {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	.itemPrice,
	.variantTitle {
		font-size: 0.75em;
		font-weight: 400;
	}

	.quantityRow {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.removeButton {
		font-size: 0.75em;
		font-weight: 400;
		background: transparent;
		margin-right: 0.5em;
	}
</style>
