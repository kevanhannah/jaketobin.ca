<script>
	import getShopifyImageProps from '$lib/utils/getShopifyImageProps';
	import ProductGridLayout from '$components/Shop/ProductGridLayout.svelte';
	import ProductCard from '$components/shared/ProductCard.svelte';

	export let recommendations;
</script>

{#if recommendations.length}
	<section class="productRecommendations">
		<h2>Related Products</h2>
		<ProductGridLayout>
			{#each recommendations.slice(0, 3) as recommendation}
				<ProductCard
					availableForSale={recommendation.availableForSale}
					handle={recommendation.handle}
					src={getShopifyImageProps(recommendation.featuredImage)['src']}
					srcset={getShopifyImageProps(recommendation.featuredImage)['srcset']}
					title={recommendation.title} />
			{/each}
		</ProductGridLayout>
	</section>
{/if}

<style lang="postcss">
	.productRecommendations {
		max-width: 72em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1.5em;
		padding-top: 2em;
		padding-bottom: 2em;
		margin-top: 2em;
		margin-bottom: 2em;
		margin-left: auto;
		margin-right: auto;
		border-top: 1px solid var(--black);
	}

	.productRecommendations h2 {
		text-align: center;
		margin-bottom: 0;
	}
</style>
