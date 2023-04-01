<script>
	export let image;
</script>

<img alt={image?.altText} src={image?.originalSrc} />

<style lang="postcss">
	img {
		width: 100%;
		display: block;
		aspect-ratio: 1;
		object-fit: cover;
		user-select: none;
	}
</style>
