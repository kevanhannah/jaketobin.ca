<script>
	import ProductGridLayout from '$components/Shop/ProductGridLayout.svelte';
	import ProductGridItem from '$components/Shop/ProductGridItem.svelte';

	export let data;
	$: ({ products } = data);
</script>

<main>
	<h2>Shop</h2>
	<ProductGridLayout>
		{#each products as product}
			<ProductGridItem {product} />
		{/each}
	</ProductGridLayout>
</main>
