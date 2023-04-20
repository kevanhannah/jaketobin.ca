<script>
	let loaded = false;

	export let image = undefined;
	export let loading = 'lazy';
	export let style = undefined;
	export let decoding = 'async';
</script>

{#if image !== undefined}
	<img
		alt={image.alt || ''}
		data-loaded={loaded}
		{decoding}
		fetchPriority={loading === 'eager' ? 'high' : 'auto'}
		{...image}
		{loading}
		on:load={() => (loaded = true)}
		{style} />
{/if}

<style lang="postcss">
	img {
		width: 100%;
		height: auto;
		display: block;
		transition: 500ms opacity;
	}
	[data-loaded='false'] {
		opacity: 0;
	}
</style>
