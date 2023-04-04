<script>
	import { page } from '$app/stores';
	import PageWithSidebarLayout from '$components/shared/PageWithSidebarLayout.svelte';
	import SidebarLayout from '$components/shared/SidebarLayout.svelte';

	$: ({ shopSidebarItems } = $page.data);
</script>

<PageWithSidebarLayout>
	<SidebarLayout items={shopSidebarItems} slugPrefix="shop/collections/" />
	<slot />
</PageWithSidebarLayout>
