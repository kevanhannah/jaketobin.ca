<script>
	import { PortableText } from '@portabletext/svelte';

	export let publicationItems;
	console.log(publicationItems);
</script>

<div class="publication_list">
	{#each publicationItems as item}
		<div class="publication_list_item">
			{#if item.titleLink}
				<a class="publication_list_item_link" href={item.titleLink}>
					<h3>{item.title}</h3>
				</a>
			{:else}
				<h3>{item.title}</h3>
			{/if}
			{#if item.description}
				<PortableText value={item.description} />
			{/if}
		</div>
	{/each}
</div>

<style>
	.publication_list {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 1.5em;
		row-gap: 4em;
		margin-top: 1.75em;
	}

	.publication_list_item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1em;
	}

	.publication_list_item_link {
		text-decoration: underline;
		text-underline-offset: 0.5em;
		text-decoration-thickness: 1px;
	}

	.publication_list_item_link:hover {
		text-decoration: none;
	}

	.publication_list_item h3 {
		font-size: 1.75em;
		font-weight: 400;
		line-height: 1.5;
	}
</style>
