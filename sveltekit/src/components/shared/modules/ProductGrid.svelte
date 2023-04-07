<script>
	import getImageProps from '$lib/utils/getImageProps';
	import ProductCard from '$components/shared/ProductCard.svelte';

	export let portableText;

	$: ({ value } = portableText);
	$: ({ items, title } = value);
</script>

<div class="module productGrid">
	{#if title}
		<h2 class="gridTitle">{title}</h2>
	{/if}
	{#if items.length}
		<div class="gridItems">
			{#each items as item}
				<ProductCard
					handle={item.store.slug.current}
					src={getImageProps({ image: item.images.image })['src']}
					srcset={getImageProps({ image: item.images.image })['srcset']}
					title={item.store.title} />
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	.productGrid {
		padding-top: 2em;
		padding-bottom: 2em;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.5em;
	}

	.gridTitle {
		margin-bottom: 0;
	}

	.gridItems {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 1.25em;
		row-gap: 1.75em;
	}

	@media (max-width: 768px) {
		.gridTitle {
			font-size: 1.75em;
		}

		.gridItems {
			grid-template-columns: repeat(2, 1fr);
			column-gap: 1em;
			row-gap: 1.5em;
		}
	}
</style>
