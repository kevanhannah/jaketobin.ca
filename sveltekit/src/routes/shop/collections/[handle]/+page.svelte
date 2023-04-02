<script>
	import ProductGridLayout from '$components/Shop/ProductGridLayout.svelte';
	import ProductGridItem from '$components/Shop/ProductGridItem.svelte';

	export let data;
	$: ({ collection } = data);
</script>

<main>
	<h2>{collection.title}</h2>
	<ProductGridLayout>
		{#if collection.products && collection.products.edges.length}
			{#each collection.products.edges as product, index}
				<ProductGridItem
					loading={index <= 7 ? 'eager' : 'lazy'}
					product={product.node}
				/>
			{/each}
		{:else}
			<p>No items have been added to this collection. Check back soon!</p>
		{/if}
	</ProductGridLayout>
</main>
