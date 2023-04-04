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

<div class="primary_menu">
	<ul>
		<li>
			<div class="dropdown">
				<button
					class="menu_button"
					class:active={$portfolioOpen}
					on:click={handlePortfolioClick}
					>Portfolio
					<span class="dropdown_icon" />
				</button>
				<div
					aria-controls="portfolio_dropdown"
					class="dropdown_content"
					class:is_open={$portfolioOpen}
					id="portfolio_dropdown"
				>
					{#each portfolioNavItems as portfolioNavItem}
						<NavSection
							content={portfolioNavItem}
							slugPrefix={portfolioNavItem._type === 'portfolioPage'
								? 'portfolio'
								: ''}
						/>
					{/each}
				</div>
			</div>
		</li>
		<li>
			<div class="dropdown">
				<button
					class="menu_button"
					class:active={$shopOpen}
					on:click={handleShopClick}
					>Shop
					<span class="dropdown_icon" />
				</button>
				<div
					aria-controls="portfolio_dropdown"
					class="dropdown_content"
					class:is_open={$shopOpen}
					id="portfolio_dropdown"
				>
					{#each shopNavItems as shopNavItem}
						<NavSection
							content={shopNavItem}
							slugPrefix={shopNavItem._type === 'collection'
								? 'shop/collections'
								: ''}
						/>
					{/each}
				</div>
			</div>
		</li>
		<li>
			<a class="menu_button" href="/commission">Commission</a>
		</li>
	</ul>
</div>

<style>
	.primary_menu ul {
		display: flex;
		flex-direction: column;
	}

	.primary_menu ul li {
		padding-top: 1.25em;
		padding-bottom: 1.25em;
		padding-left: 1em;
		padding-right: 1em;
		border-bottom: 1px solid var(--black);
	}

	.primary_menu ul li:last-of-type {
		border-bottom: none;
	}

	.menu_button {
		display: block;
		appearance: none;
		background-color: transparent;
		cursor: pointer;
		font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 1.5em;
		font-weight: 800;
		text-decoration-line: none;
		user-select: none;
	}

	button.menu_button {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.dropdown_icon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 1em;
	}

	.dropdown_icon:after {
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

	button.menu_button.active .dropdown_icon:after {
		transform: rotate(45deg);
	}

	.dropdown_content {
		overflow-y: hidden;
		position: relative;
		max-height: 0px;
		opacity: 0;
		transition: opacity 250ms linear, max-height 250ms ease-out;
	}

	.is_open {
		opacity: 1;
		max-height: 500px;
	}
</style>
