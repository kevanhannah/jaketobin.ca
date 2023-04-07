<script>
	import ProductGridLayout from '$components/Shop/ProductGridLayout.svelte';
	import ProductCard from '../../shared/ProductCard.svelte';

	export let recommendations;
</script>

<section class="productRecommendations">
	<h2>Related Products</h2>
	<ProductGridLayout>
		{#each recommendations.slice(0, 4) as recommendation}
			<ProductCard
				availableForSale={recommendation.availableForSale}
				image={recommendation.featuredImage}
				handle={recommendation.handle}
				title={recommendation.title} />
		{/each}
	</ProductGridLayout>
</section>

<style>
	.productRecommendations {
		max-width: 72em;
		display: flex;
		flex-direction: column;
		gap: 1.5em;
		padding-top: 1.5em;
		padding-bottom: 1.5em;
		margin-top: 2em;
		margin-bottom: 2em;
		margin-left: auto;
		margin-right: auto;
		/* border-top: 1px solid var(--black); */
		justify-content: center;
	}

	.productRecommendations h2 {
		text-align: center;
		margin-bottom: 0;
	}
</style>
