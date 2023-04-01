<script>
	export let image;
</script>

<img alt={image?.altText} src={image?.originalSrc} />

<style>
	img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
	}
</style>
