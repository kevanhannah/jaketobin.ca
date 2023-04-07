<script>
	import PageLayout from '$components/shared/PageLayout.svelte';
	import Body from '../components/shared/blocks/Body.svelte';

	export let data;
	$: ({ pageContent } = data);
	$: ({ body } = pageContent);
</script>

<PageLayout>
	<div>
		<Body value={body} />
	</div>
</PageLayout>
