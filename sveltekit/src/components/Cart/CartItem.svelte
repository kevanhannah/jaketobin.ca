<script>
	import CartItemImage from '$components/Cart/CartItemImage.svelte';

	export let item;
	$: ({ estimatedCost, merchandise, quantity } = item);
</script>

<li>
	<div class="itemImage">
		<CartItemImage image={merchandise.product?.images?.edges[0].node} />
	</div>
	<div class="itemInfo">
		<h3>{merchandise.product.title}</h3>
		{#if merchandise.title !== 'Default Title'}
			<span>{merchandise.title}</span>
		{/if}
		<span>
			{`${estimatedCost.totalAmount.currencyCode} ${new Intl.NumberFormat(
				'en-CA',
				{
					style: 'currency',
					currency: estimatedCost.totalAmount.currencyCode,
				}
			).format(estimatedCost.totalAmount.amount)}`}</span
		>
	</div>
</li>

<style>
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
	}
</style>
