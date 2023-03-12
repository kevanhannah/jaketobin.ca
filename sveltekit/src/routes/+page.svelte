<script>
	import ImageTextModule from '$components/Home/ImageTextModule.svelte';

	export let data;
	const { modules } = data;
</script>

{#each modules as moduleData}
	{#if moduleData._type === 'imageWithText'}
		<ImageTextModule {moduleData} />
	{/if}
{/each}
