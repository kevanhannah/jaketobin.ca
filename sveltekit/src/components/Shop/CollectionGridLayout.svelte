<script>
	import getShopifyImageProps from '$lib/utils/getShopifyImageProps';
	import ProductGridLayout from '$components/Shop/ProductGridLayout.svelte';
	import ProductCard from '$components/shared/ProductCard.svelte';

	export let collection = {};
	export let index;
	$: ({ title, products } = collection);
</script>

<div class="collectionGridLayout">
	<h2 class="collectionTitle">{title}</h2>
	<ProductGridLayout>
		{#each products.edges as product}
			<ProductCard
				availableForSale={product.node.availableForSale}
				handle={product.node.handle}
				src={getShopifyImageProps(product.node.images.edges[0].node)['src']}
				srcset={getShopifyImageProps(product.node.images.edges[0].node)[
					'srcset'
				]}
				title={product.node.title}
				loading={index <= 2 ? 'eager' : 'lazy'} />
		{/each}
	</ProductGridLayout>
</div>

<style lang="postcss">
	.collectionTitle {
		font-family: var(--poppins);
		padding-bottom: 0.5em;
		margin-bottom: 0.75em;
		border-bottom: 1px solid var(--black);
	}
</style>
