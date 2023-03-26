<script>
	import PageWithSidebarLayout from '$components/shared/PageWithSidebarLayout.svelte';
	import ShopSidebar from '$components/Shop/ShopSidebar.svelte';
</script>

<PageWithSidebarLayout>
	<ShopSidebar />
	<slot />
</PageWithSidebarLayout>
