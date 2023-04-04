<script>
	import { page } from '$app/stores';
	import PageWithSidebarLayout from '$components/shared/PageWithSidebarLayout.svelte';

	import SidebarLayout from '$components/shared/SidebarLayout.svelte';

	$: ({ portfolioSidebarItems } = $page.data);
</script>

<PageWithSidebarLayout>
	<SidebarLayout items={portfolioSidebarItems} slugPrefix="portfolio/" />
	<slot />
</PageWithSidebarLayout>
