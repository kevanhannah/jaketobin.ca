<script>
	import OutOfStockBadge from '$components/Shop/OutOfStockBadge.svelte';

	$: loaded = false;

	export let availableForSale = true;
	export let decoding = 'async';
	export let handle;
	export let loading = 'lazy';
	export let src;
	export let srcset;
	export let title;

	function handleLoad() {
		loaded = true;
	}
</script>

<a href={`/shop/products/${handle}`}>
	<img
		alt={title}
		class="productImage"
		data-loaded={loaded}
		{decoding}
		fetchPriority={loading === 'eager' ? 'high' : 'auto'}
		{loading}
		on:load={handleLoad}
		sizes="(max-width: 800px) 50vw, 25vw"
		{src}
		{srcset} />
	<div class="productTitleRow">
		{#if !availableForSale}
			<OutOfStockBadge />
		{/if}
		<p class="productTitle">{title}</p>
	</div>
</a>

<style lang="postcss">
	a {
		display: flex;
		flex-direction: column;
		gap: 0.75em;
		text-align: center;
		user-select: none;
		text-decoration: none;

		@media (hover: hover) {
			&:hover {
				opacity: 1;
			}

			&:hover img {
				opacity: 0.8;
			}
		}
	}

	img {
		width: 100%;
		display: block;
		aspect-ratio: 1;
		object-fit: cover;
		transition: 500ms opacity ease-out;

		&[data-loaded='false'] {
			opacity: 0;
		}
	}

	.productTitleRow {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25em;
	}

	.productTitle {
		font-size: 1em;
		font-weight: 400;
		margin-bottom: 0;
	}
</style>
