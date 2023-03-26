<script>
	import ProductPageImageLayout from './ProductPageImageLayout.svelte';

	export let product;
	$: ({ title, media } = product);
	$: images = media.nodes.map((item) => item.image);
	$: console.log(images);
</script>

<main>
	<ProductPageImageLayout {images} />
	<div>
		<h2>{title}</h2>
	</div>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 5fr 3fr;
		gap: 1.25em;
	}
</style>
