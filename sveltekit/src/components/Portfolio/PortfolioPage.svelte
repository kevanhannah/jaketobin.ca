<script>
	import { PortableText } from '@portabletext/svelte';
	import ArtworkLayout from '$components/Portfolio/ArtworkLayout.svelte';
	import WritingLayout from '$components/Portfolio/WritingLayout.svelte';

	export let data;
	console.log(data);
	$: ({ description, pageType, portfolioItems, publicationItems, title } =
		data);
</script>

<div class="portfolio_page">
	<h2 class="portfolio_page_header">{title}</h2>
	{#if description}
		<PortableText value={description} />
	{/if}
	{#if pageType === 'artwork' && portfolioItems.length}
		<ArtworkLayout {portfolioItems} />
	{:else if pageType === 'writing' && publicationItems.length}
		<WritingLayout {publicationItems} />
	{:else}
		<p>No portfolio items have been added to this page. Check back soon!</p>
	{/if}
</div>

<style>
	.portfolio_page {
		display: flex;
		flex-direction: column;
		gap: 1.5em;
	}

	.portfolio_page_header {
		display: inline-block;
		margin-bottom: 0;
		padding-bottom: 0.25em;
		border-bottom: 1px solid var(--black);
	}
</style>
