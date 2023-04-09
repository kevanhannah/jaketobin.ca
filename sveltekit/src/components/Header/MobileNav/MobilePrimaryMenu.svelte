<script>
	import { page } from '$app/stores';
	import {
		handlePortfolioClick,
		handleShopClick,
		portfolioOpen,
		shopOpen,
	} from '$lib/stores/navContexts';
	import NavSection from '$components/Header/NavSection.svelte';

	$: ({ portfolioNavItems, shopNavItems } = $page.data);
</script>

<div class="primaryMenu">
	<ul>
		<li class:is_open={$portfolioOpen}>
			<div class="dropdown">
				<button
					class="menuButton"
					class:active={$portfolioOpen}
					on:click={handlePortfolioClick}
					>Portfolio
					<span class="dropdownIcon" />
				</button>
				<div
					aria-controls="portfolioDropdown"
					class="dropdownContent"
					class:is_open={$portfolioOpen}
					id="portfolioDropdown">
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
		</li>
		<li class:is_open={$shopOpen}>
			<div class="dropdown">
				<button
					class="menuButton"
					class:active={$shopOpen}
					on:click={handleShopClick}
					>Shop
					<span class="dropdownIcon" />
				</button>
				<div
					aria-controls="shopDropdown"
					class="dropdownContent"
					class:is_open={$shopOpen}
					id="shopDropdown">
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
		</li>
		<li>
			<a class="menuButton" href="/commission">Commission</a>
		</li>
		<li>
			<a class="menuButton" href="/about">About</a>
		</li>
	</ul>
</div>

<style lang="postcss">
	.primaryMenu {
		height: 100%;
		overflow: hidden;
	}

	.primaryMenu ul {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		height: 100%;
	}

	.primaryMenu ul li {
		flex: 0 0 auto;
		padding-top: 1.25em;
		padding-bottom: 1.25em;
		padding-left: 2.5em;
		padding-right: 1em;
		border-bottom: 1px solid var(--black);
	}

	.primaryMenu ul li:last-of-type {
		border-bottom: none;
	}

	.primaryMenu ul li:is(.is_open) {
		flex: 1 0 auto;
		overflow: hidden;
	}

	.menuButton {
		display: block;
		appearance: none;
		background-color: transparent;
		cursor: pointer;
		font-family: var(--poppins);
		font-size: 1.5em;
		font-weight: 800;
		text-decoration-line: none;
		user-select: none;
	}

	button.menuButton {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.dropdown {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.dropdownIcon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 1em;
	}

	.dropdownIcon:after {
		content: '';
		display: block;
		height: 0;
		position: absolute;
		transform: rotate(-45deg);
		width: 100%;
		width: 0.5em;
		height: 0.5em;
		border-right-width: 1.5px;
		border-bottom-width: 1.5px;
	}

	button.menuButton.active .dropdownIcon:after {
		transform: rotate(45deg);
	}

	.dropdownContent {
		overflow-y: hidden;
		position: relative;
		height: 0;
		opacity: 0;
		transition: opacity 250ms linear;
	}

	.dropdownContent:is(.is_open) {
		opacity: 1;
		overflow-y: scroll;
		flex: 1 0 auto;
		padding-top: 0.5em;
		padding-bottom: 2em;
		margin-right: 2.5em;
		mask-image: linear-gradient(
			to top,
			rgba(0, 0, 0, 0),
			rgba(255, 255, 255, 1) 15%,
			rgba(255, 255, 255, 1) 85%,
			rgba(0, 0, 0, 0) 100%
		);
	}

	@media (max-width: 768px) {
		.primaryMenu ul li {
			padding-left: 1em;
		}
	}
</style>
