<script>
	import Body from '$components/shared/blocks/Body.svelte';

	export let body;
</script>

<section class="editorial">
	<Body value={body} />
</section>

<style>
	.editorial {
		max-width: 60em;
		display: flex;
		flex-direction: column;
		margin-top: 2em;
		margin-bottom: 2em;
		margin-left: auto;
		margin-right: auto;
	}

	.editorial :global(div.callToAction) {
		max-width: 48em;
	}

	.editorial :global(p:has(+ .module)) {
		margin-bottom: 2em;
	}

	@media (max-width: 768px) {
		.editorial {
			display: flex;
			flex-direction: column;
		}

		.editorial :global(div.callToAction) {
			max-width: 100%;
		}
	}
</style>
