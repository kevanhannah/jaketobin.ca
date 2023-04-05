<script>
	import ProductPageLayout from '$components/Shop/ProductPage/ProductPageLayout.svelte';

	export let data;
  $: ({ body, images, store } = data);
</script>

<ProductPageLayout {body} {images} {store} />
