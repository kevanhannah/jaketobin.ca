<script>
	import PortfolioPageLayout from '$components/Portfolio/PortfolioPageLayout.svelte';

	export let data;
	$: ({ pageContent, title } = data);
	$: ({ body } = pageContent);
</script>

<PortfolioPageLayout {body} {title} />
