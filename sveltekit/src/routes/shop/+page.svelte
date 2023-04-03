<script>
	import CollectionGridLayout from '$components/Shop/CollectionGridLayout.svelte';

	export let data;
	$: ({ collections } = data);
</script>

<main>
	{#each collections as collection, index}
		<CollectionGridLayout collection={collection.node} {index} />
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 5em;
	}
</style>
