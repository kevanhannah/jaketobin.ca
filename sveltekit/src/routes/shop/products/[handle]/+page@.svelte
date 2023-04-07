<script>
	import ProductPageLayout from '$components/Shop/ProductPage/ProductPageLayout.svelte';
	import ProductEditorial from '$components/Shop/ProductPage/ProductEditorial.svelte';
	import ProductRecommendations from '$components/Shop/ProductPage/ProductRecommendations.svelte';

	export let data;
  $: ({ body, faqs, images, recommendations, store } = data);
</script>

<ProductPageLayout {faqs} {images} {store} />
{#if body}
	<ProductEditorial {body} />
{/if}
<ProductRecommendations {recommendations} />
