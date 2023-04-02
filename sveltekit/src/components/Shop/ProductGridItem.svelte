<script>
	import getShopifyImageProps from '$lib/utils/getShopifyImageProps';
	export let loading = 'lazy';
	export let product;

	$: ({ handle, images, title } = product);
	$: image = getShopifyImageProps(images.edges[0].node);
</script>

<a href={`/shop/${handle}`}>
	<img
		class="productImage"
		alt={image.alt}
		{loading}
		sizes="(max-width: 800px) 50vw, 25vw"
		src={image.src}
		srcset={image.srcset}
	/>
	<p class="productTitle">{title}</p>
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

	.productTitle {
		font-size: 1em;
		font-weight: 400;
	}

	@media (hover: hover) {
		a:hover {
			text-decoration: underline;
		}
	}
</style>
