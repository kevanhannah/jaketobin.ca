<script>
	import Body from '$components/shared/blocks/Body.svelte';

	export let data;
	$: ({ pageContent } = data);
	$: ({ body } = pageContent);
</script>

<Body value={body} />
