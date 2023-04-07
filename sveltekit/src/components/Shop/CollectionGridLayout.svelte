<script>
	import ProductGridLayout from '$components/Shop/ProductGridLayout.svelte';
	import ProductGridItem from '$components/Shop/ProductGridItem.svelte';

	export let collection = {};
	export let index;
	$: ({ title, products } = collection);
</script>

<div class="collectionGridLayout">
	<h2 class="collectionTitle">{title}</h2>
	<ProductGridLayout>
		{#each products.edges as product}
			<ProductGridItem
				loading={index <= 2 ? 'eager' : 'lazy'}
				product={product.node} />
		{/each}
	</ProductGridLayout>
</div>

<style lang="postcss">
	.collectionTitle {
		font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		padding-bottom: 0.25em;
		margin-bottom: 0.75em;
		border-bottom: 1px solid var(--black);
	}

	@media (max-width: 768px) {
		.collectionTitle {
			font-size: 2em;
		}
	}
</style>
