<script>
	import Body from '$components/shared/blocks/Body.svelte';

	export let data;
	$: ({ pageContent } = data);
	$: ({ body } = pageContent);
</script>

<div class="commissionPageContent">
	<Body value={body} />
</div>

<style>
	.commissionPageContent {
		max-width: 60em;
		margin-left: auto;
		margin-right: auto;
	}

	.commissionPageContent :global(.module) {
		padding-top: 2em;
		padding-bottom: 2em;
	}
</style>
