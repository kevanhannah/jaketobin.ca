<script>
	import { PortableText } from '@portabletext/svelte';
	import SanityImage from '$components/shared/SanityImage.svelte';
	import PortfolioItem from '$components/Portfolio/PortfolioItem.svelte';

	export let data;
	$: ({ description, portfolioItems, title } = data);
</script>

<div class="portfolio_page">
	<h2 class="portfolio_page_header">{title}</h2>
	{#if description}
		<p>{description}</p>
	{/if}
	{#if portfolioItems.length}
		{#each portfolioItems as item}
			<PortfolioItem {item} />
		{/each}
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
