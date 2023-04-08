<script>
	import Body from '$components/shared/blocks/Body.svelte';

	export let body;
	export let title;
</script>

<main class="portfolioPage">
	<h1 class="title">{title}</h1>
	<Body value={body} />
</main>

<style lang="postcss">
	.portfolioPage {
		display: flex;
		flex-direction: column;
		gap: 1.5em;
	}

	.title {
		display: inline-block;
		margin-bottom: 0;
		padding-bottom: 0.25em;
		border-bottom: 1px solid var(--black);
	}

	@media (max-width: 768px) {
		.title {
			font-size: 2em;
			line-height: 1.25;
			padding-bottom: 0.5em;
			margin-bottom: 0.25em;
		}
	}
</style>
