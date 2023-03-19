<script>
	import { page } from '$app/stores';
	import {
		portfolioNavIsOpen,
		shopNavIsOpen,
		togglePortfolioNav,
		toggleShopNav,
	} from '$lib/stores';
	import NavSection from '$components/Header/NavSection.svelte';

	$: ({ portfolioCategories } = $page.data);
</script>

<div class="primary_menu">
	<ul>
		<li>
			<div class="dropdown">
				<button
					class="menu_button"
					class:active={$portfolioNavIsOpen}
					on:click={togglePortfolioNav}
					>Portfolio
					<span class="dropdown_icon" />
				</button>
				<div
					aria-controls="portfolio_dropdown"
					class="dropdown_content"
					class:is_open={$portfolioNavIsOpen}
					id="portfolio_dropdown"
				>
					{#each portfolioCategories as portfolioCategory}
						<NavSection content={portfolioCategory} />
					{/each}
				</div>
			</div>
		</li>
		<li>
			<div class="dropdown">
				<button
					class="menu_button"
					class:active={$shopNavIsOpen}
					on:click={toggleShopNav}>Shop<span class="dropdown_icon" /></button
				>
				<div
					aria-controls="shop_dropdown"
					class="dropdown_content"
					class:is_open={$shopNavIsOpen}
					id="shop_dropdown"
				/>
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
		font-size: 2em;
		text-decoration-line: none;
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
		transition: transform 0.15s ease-out 0.15s;
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
