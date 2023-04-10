<script>
	import Body from '$components/shared/blocks/Body.svelte';

	export let body;
	export let title;
</script>

<main class="portfolioPage">
	<h1 class="title">{title}</h1>
	{#if body}
		<Body value={body} />
	{:else}
		<p>No items have been added to this page yet. Check back soon!</p>
	{/if}
</main>

<style lang="postcss">
	.portfolioPage {
		display: flex;
		flex-direction: column;
		gap: 1.5em;
	}

	.portfolioPage :global(.module:first-of-type) {
		border-top: 0;
	}

	.portfolioPage :global(.module:last-of-type) {
		border-bottom: 0;
	}

	.title {
		display: inline-block;
		margin-bottom: 0;
		padding-bottom: 0.5em;
		border-bottom: 1px solid var(--black);
	}

	@media (max-width: 768px) {
		.title {
			font-size: 2em;
			line-height: 1.25;
			margin-bottom: 0.25em;
		}
	}
</style>
