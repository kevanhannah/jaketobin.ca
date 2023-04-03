<script>
	import getShopifyImageProps from '$lib/utils/getShopifyImageProps';
	import OutOfStockBadge from '$components/Shop/OutOfStockBadge.svelte';
	export let loading = 'lazy';
	export let product;

	$: ({ availableForSale, handle, images, title } = product);
	$: image = getShopifyImageProps(images.edges[0].node);
</script>

<a href={`/shop/products/${handle}`}>
	<img
		class="productImage"
		alt={image.alt}
		{loading}
		sizes="(max-width: 800px) 50vw, 25vw"
		src={image.src}
		srcset={image.srcset}
	/>
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
	}

	img {
		width: 100%;
		display: block;
		aspect-ratio: 1;
		object-fit: cover;
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
	}

	@media (hover: hover) {
		a:hover {
			opacity: 1;
		}

		a:hover > img {
			opacity: 0.8;
		}
	}
</style>
