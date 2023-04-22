<script>
	$: loaded = false;

	export let decoding = 'async';
	export let image = undefined;
	export let loading = 'lazy';
	export let style = undefined;

	function handleLoad() {
		loaded = true;
	}
</script>

{#if image !== undefined}
	<img
		alt={image.alt || ''}
		data-loaded={loaded}
		{decoding}
		fetchPriority={loading === 'eager' ? 'high' : 'auto'}
		{...image}
		{loading}
		on:load={handleLoad}
		{style} />
{/if}

<style lang="postcss">
	img {
		width: 100%;
		height: auto;
		display: block;
		transition: 500ms opacity;

		&[data-loaded='false'] {
			opacity: 0;
		}
	}
</style>
