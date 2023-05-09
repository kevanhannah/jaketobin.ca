<script>
	import CollectionGridLayout from '$components/Shop/CollectionGridLayout.svelte';
	import LinkButton from '$components/shared/LinkButton.svelte';

	export let data;
	$: ({ collections } = data);
</script>

<main>
	{#each collections as collection, index}
		<div class="collection">
			<CollectionGridLayout collection={collection.node} {index} />
			<LinkButton
				link={{
					title: `See all in ${collection.node.title}`,
					url: `/shop/collections/${collection.node.handle}`,
				}} />
		</div>
	{/each}
</main>

<style lang="postcss">
	main {
		display: flex;
		flex-direction: column;
		gap: 5em;

		& .collection {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 1.25em;
		}
	}
</style>
