<script>
	import getShopifyImageProps from '$lib/utils/getShopifyImageProps';
	import ProductCard from '$components/shared/ProductCard.svelte';

	export let recommendations;
</script>

{#if recommendations.length}
	<section class="productRecommendations">
		<h2>Related Products</h2>
		<div class="recommendationLayout">
			{#each recommendations.slice(0, 4) as recommendation}
				<ProductCard
					handle={recommendation.handle}
					soldOut={!recommendation.availableForSale}
					src={getShopifyImageProps(recommendation.featuredImage)['src']}
					srcset={getShopifyImageProps(recommendation.featuredImage)['srcset']}
					title={recommendation.title} />
			{/each}
		</div>
	</section>
{/if}

<style lang="postcss">
	.productRecommendations {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1.5em;
		padding-top: 2em;
		padding-bottom: 2em;
		margin-top: 2em;
		margin-bottom: 2em;
	}

	.productRecommendations h2 {
		text-align: center;
		margin-bottom: 0;
	}

	.recommendationLayout {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 1.25em;
		row-gap: 1.75em;
	}

	@media (max-width: 768px) {
		.recommendationLayout {
			grid-template-columns: repeat(2, 1fr);
			column-gap: 1em;
			row-gap: 1.5em;
		}
	}
</style>
