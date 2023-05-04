<script>
	import { removeItemFromCart } from '$lib/stores/storeContext';
	import CartItemImage from '$components/Cart/CartItemImage.svelte';
	import QuantityWidget from '$components/Cart/QuantityWidget.svelte';

	export let item;
	$: console.log(item);
	$: ({ estimatedCost, id, merchandise, quantity } = item);
</script>

<li>
	<a class="itemImage" href={`/shop/products/${merchandise.product.handle}`}>
		<CartItemImage image={merchandise.product?.images?.edges[0].node} />
	</a>
	<div class="itemInfo">
		<div class="itemInfo_groupText">
			<a class="itemTitle" href={`/shop/products/${merchandise.product.handle}`}
				><h3>{merchandise.product.title}</h3></a>
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
				).format(estimatedCost.totalAmount.amount)}`}</span>
		</div>
		<div class="quantityRow">
			<QuantityWidget lineId={id} {quantity} variantId={merchandise.id} />
			<button
				class="removeButton"
				on:click={removeItemFromCart({
					lineId: id,
					quantity: 0,
					variantId: merchandise.id,
				})}>Remove</button>
		</div>
	</div>
</li>

<style lang="postcss">
	li {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: 1em;
		margin-left: 1.5em;
		margin-right: 2.5em;
		margin-bottom: 1em;
		padding-bottom: 1em;
		border-bottom: 1px solid var(--black);

		&:first-of-type {
			margin-top: 1em;
		}

		&:last-of-type {
			padding-bottom: 0;
			border-bottom: none;
		}

		@media (max-width: 768px) {
			grid-template-columns: 4fr 5fr;
			margin-left: 0.75em;
			margin-right: 0.75em;
		}
	}

	.itemImage {
		opacity: 1;
		transition-property: opacity;
		transition-duration: 500ms;
		transition-timing-function: ease;

		@media (hover: hover) {
			&:hover {
				opacity: 0.8;
			}
		}
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

	.itemTitle {
		text-decoration: none;
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
		user-select: none;

		@media (hover: hover) {
			&:hover {
				color: var(--mediumGray);
			}
		}
	}
</style>
