<script>
	import ProductGridLayout from '$components/Shop/ProductGridLayout.svelte';
	import ProductGridItem from '$components/Shop/ProductGridItem.svelte';

	export let data;
	$: ({ products } = data);
</script>

<main>
	<h2>Shop</h2>
	<ProductGridLayout>
		{#each products as product, index}
			<ProductGridItem
				loading={index <= 7 ? 'eager' : 'lazy'}
				product={product.node}
			/>
		{/each}
	</ProductGridLayout>
</main>
