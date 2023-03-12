<script>
	import PortfolioItem from '$components/Portfolio/PortfolioItem.svelte';

	export let portfolioItems;
</script>

{#each portfolioItems as item}
	<PortfolioItem {item} />
{/each}
