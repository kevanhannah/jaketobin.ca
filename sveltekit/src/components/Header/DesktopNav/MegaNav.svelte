<script>
	import { page } from '$app/stores';
	import { portfolioOpen, shopOpen } from '$lib/stores/navContexts';
	import NavSection from '$components/Header/NavSection.svelte';
	import MegaNavBackdrop from '$components/Header/DesktopNav/MegaNavBackdrop.svelte';

	$: ({ portfolioNavItems, shopNavItems } = $page.data);
</script>

<div class="mega_nav" inert={!$portfolioOpen && !$shopOpen}>
	<div class="mega_item" class:is_active={$portfolioOpen}>
		<div class="mega_item_outer">
			<div class="mega_item_inner">
				<div class="mega_item_content">
					{#each portfolioNavItems as portfolioNavItem}
						<NavSection
							content={portfolioNavItem}
							showHeader={portfolioNavItem.showTitle}
							slugPrefix="portfolio" />
					{/each}
					<NavSection
						content={{
							pages: [{ title: 'See all', slug: { current: 'portfolio' } }],
						}}
						showHeader={false} />
				</div>
			</div>
		</div>
	</div>
	<div class="mega_item" class:is_active={$shopOpen}>
		<div class="mega_item_outer">
			<div class="mega_item_inner">
				<div class="mega_item_content">
					{#each shopNavItems as shopNavItem}
						<NavSection
							content={shopNavItem}
							showHeader={shopNavItem.showTitle}
							slugPrefix="shop/collections" />
					{/each}
					<NavSection
						content={{
							pages: [{ title: 'Shop all', slug: { current: 'shop' } }],
						}}
						showHeader={false} />
				</div>
			</div>
		</div>
	</div>
</div>
<MegaNavBackdrop />

<style lang="postcss">
	.mega_nav {
		background-color: var(--paperWhite);
		left: 0;
		display: block;
		position: absolute;
		right: 0;
		top: 100%;
		z-index: 3;

		@media (max-width: 1280px) {
			display: none;
		}
	}

	.mega_item {
		left: 0;
		margin-top: -0.1rem;
		overflow: hidden;
		pointer-events: none;
		position: absolute;
		right: 0;
		top: 0;
		visibility: hidden;
		z-index: 1;
	}

	.is_active {
		pointer-events: auto;
		visibility: visible;
	}

	.mega_item_content {
		display: flex;
		gap: 3.75em;
		padding-bottom: 2.5em;
		padding-left: 3em;
		padding-right: 3em;
		background: var(--paperWhite);
		border-bottom: 1px solid var(--black);
		position: relative;
	}
</style>
