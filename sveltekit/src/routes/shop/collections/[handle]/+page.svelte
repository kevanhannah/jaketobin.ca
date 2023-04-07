<script>
	import ProductGridLayout from '$components/Shop/ProductGridLayout.svelte';
	import ProductGridItem from '$components/Shop/ProductGridItem.svelte';
	import Body from '$components/shared/blocks/Body.svelte';

	export let data;
	$: ({ collection, body } = data);
</script>

<main>
	<h2>{collection.title}</h2>
	{#if body}
		<div class="editorial">
			<Body value={body} />
		</div>
	{/if}
	<ProductGridLayout>
		{#if collection.products && collection.products.edges.length}
			{#each collection.products.edges as product, index}
				<ProductGridItem
					loading={index <= 7 ? 'eager' : 'lazy'}
					product={product.node} />
			{/each}
		{:else}
			<p>No items have been added to this collection. Check back soon!</p>
		{/if}
	</ProductGridLayout>
</main>

<style>
	main :global(p:last-of-type) {
		margin-bottom: 0;
	}

	.editorial {
		margin-bottom: 1.5em;
	}
</style>
