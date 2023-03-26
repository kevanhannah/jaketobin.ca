<script>
	import ProductPageLayout from '$components/Shop/ProductPage/ProductPageLayout.svelte';

	export let data;
	$: ({ product } = data);
</script>

<ProductPageLayout {product} />
