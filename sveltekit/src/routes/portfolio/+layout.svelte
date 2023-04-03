<script>
	import PageWithSidebarLayout from '$components/shared/PageWithSidebarLayout.svelte';
	import PortfolioSidebar from '$components/Portfolio/PortfolioSidebar.svelte';
</script>

<PageWithSidebarLayout>
	<PortfolioSidebar />
	<slot />
</PageWithSidebarLayout>

<!-- <script>
	import PageLayout from '$components/shared/PageLayout.svelte';
</script>

<PageLayout>
	<slot />
</PageLayout> -->
