<script>
	import Body from '$components/shared/blocks/Body.svelte';

	export let data;
	$: ({ pageContent } = data);
	$: ({ body } = pageContent);
</script>

<div class="aboutPage">
	<Body value={body} />
</div>

<style>
	.aboutPage {
		max-width: 60em;
		margin-left: auto;
		margin-right: auto;
	}
</style>
