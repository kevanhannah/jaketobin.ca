<script>
	import { page } from '$app/stores';
	import {
		portfolioNavIsOpen,
		shopNavIsOpen,
		togglePortfolioNav,
	} from '$lib/stores';
	import NavSection from '$components/Header/NavSection.svelte';

	$: ({ portfolioCategories } = $page.data);
</script>

<div class="primary_menu">
	<ul>
		<li>
			<div class="dropdown">
				<button class="menu_button" on:click={togglePortfolioNav}
					>Portfolio</button
				>
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
				<button class="menu_button">Shop</button>
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
