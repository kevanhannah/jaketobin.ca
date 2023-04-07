<script>
	let loaded = false;

	export let image = undefined;
	export let loading = 'lazy';
	export let style = undefined;
</script>

{#if image !== undefined}
	<img
		alt={image.alt || ''}
		data-loaded={loaded}
		fetchPriority={loading === 'eager' ? 'high' : undefined}
		{...image}
		{loading}
		on:load={() => (loaded = true)}
		{style} />
{/if}

<style>
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
