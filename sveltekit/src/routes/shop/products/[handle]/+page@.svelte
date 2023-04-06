<script>
	import ProductPageLayout from '$components/Shop/ProductPage/ProductPageLayout.svelte';

	export let data;
  $: ({ body, faqs, images, store } = data);
</script>

<ProductPageLayout {body} {faqs} {images} {store} />
