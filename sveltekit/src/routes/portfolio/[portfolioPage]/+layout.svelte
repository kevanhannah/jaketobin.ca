<script>
	import PageWithSidebarLayout from '$components/shared/PageWithSidebarLayout.svelte';
	import PortfolioSidebar from '$components/Portfolio/PortfolioSidebar.svelte';
</script>

<PageWithSidebarLayout>
	<PortfolioSidebar />
	<slot />
</PageWithSidebarLayout>
