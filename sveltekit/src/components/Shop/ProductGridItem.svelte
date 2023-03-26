<script>
	export let product;

	$: ({ handle, media, title } = product.node);
	$: ({ image } = media.nodes[0]);
</script>

<a href={`/shop/${handle}`}>
	<img alt={image.altText} src={image.src} />
	<p>{title}</p>
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

	a:hover {
		text-decoration: underline;
	}

	img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
	}
</style>
