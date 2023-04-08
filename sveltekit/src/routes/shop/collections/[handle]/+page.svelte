<script>
	import getShopifyImageProps from '$lib/utils/getShopifyImageProps';
	import ProductGridLayout from '$components/Shop/ProductGridLayout.svelte';
	import Body from '$components/shared/blocks/Body.svelte';
	import ProductCard from '$components/shared/ProductCard.svelte';

	export let data;
	$: ({ collection, body } = data);
</script>

<main>
	<h1 class="title">{collection.title}</h1>
	{#if body}
		<div class="editorial">
			<Body value={body} />
		</div>
	{/if}
	<ProductGridLayout>
		{#if collection.products && collection.products.edges.length}
			{#each collection.products.edges as product, index}
				<ProductCard
					availableForSale={product.node.availableForSale}
					handle={product.node.handle}
					src={getShopifyImageProps(product.node.images.edges[0].node)['src']}
					srcset={getShopifyImageProps(product.node.images.edges[0].node)[
						'srcset'
					]}
					title={product.node.title}
					loading={index <= 6 ? 'eager' : 'lazy'} />
			{/each}
		{:else}
			<p>No items have been added to this collection. Check back soon!</p>
		{/if}
	</ProductGridLayout>
</main>

<style lang="postcss">
	main {
		display: flex;
		flex-direction: column;
		gap: 1.5em;
	}

	.title {
		border-bottom: 1px solid var(--black);
		padding-bottom: 0.25em;
	}
</style>
