<script>
	import { page } from '$app/stores';
	import { navigating } from '$app/stores';
	import {
		closeAllNav,
		portfolioNavIsOpen,
		shopNavIsOpen,
		togglePortfolioNav,
		toggleShopNav,
	} from '$lib/stores';
	import Wordmark from '$components/Wordmark.svelte';
	import NavSection from '$components/Header/NavSection.svelte';
	import CartToggle from '$components/Header/CartToggle.svelte';

	$: if ($navigating) {
		closeAllNav();
	}
	$: ({ portfolioCategories } = $page.data);
</script>

<header>
	<div class="header_outer">
		<div class="header_inner">
			<div class="main_navigation">
				<div class="menu">
					<ul>
						<li>
							<button class="nav_button" on:click={togglePortfolioNav}
								>Portfolio</button
							>
						</li>
						<li>
							<button class="nav_button" on:click={toggleShopNav}>Shop</button>
						</li>
						<li><button class="nav_button">Commission</button></li>
					</ul>
				</div>
				<div class="wordmark">
					<a href="/">
						<Wordmark />
					</a>
				</div>
				<div class="cart_section">
					<CartToggle>0</CartToggle>
				</div>
			</div>
			<div class="mega_nav">
				<div class="mega_nav--outer">
					<div class="mega_item" class:is_active={$portfolioNavIsOpen}>
						<div class="mega_item--content">
							{#each portfolioCategories as portfolioCategory}
								<NavSection content={portfolioCategory} />
							{/each}
						</div>
					</div>
				</div>
				<div class="mega_item" class:is_active={$shopNavIsOpen}>
					<div class="mega_item--content">
						<div>
							<h3 class="mega_nav_menu_header">Products</h3>
							<ul class="mega_nav_menu">
								<li>Prints</li>
								<li>Greeting cards</li>
								<li>Postcards</li>
								<li>Stickers</li>
								<li>Magnets</li>
							</ul>
						</div>
						<div>
							<h3 class="mega_nav_menu_header">Spaces</h3>
							<ul class="mega_nav_menu">
								<li>Bookstores</li>
								<li>Queer spaces</li>
								<li>Signs</li>
								<li>Parks</li>
							</ul>
						</div>
						<div>
							<h3 class="mega_nav_menu_header">Cities</h3>
							<ul class="mega_nav_menu">
								<li>Toronto</li>
								<li>Vancouver</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	header {
		border-bottom: 1px solid var(--black);
		position: sticky;
		top: 0;
		z-index: 5;
	}

	.header_outer,
	.header_inner {
		position: relative;
	}

	.header_inner {
		background-color: var(--paperWhite);
		z-index: 2;
	}

	.main_navigation {
		padding-top: 2em;
		padding-bottom: 2em;
		padding-left: 3em;
		padding-right: 3em;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		line-height: 0;
	}

	.main_navigation ul {
		display: flex;
		gap: 2em;
	}

	.wordmark {
		display: flex;
		justify-content: center;
	}

	.cart_section {
		display: flex;
		justify-content: flex-end;
	}

	.main-navigation--desktop a,
	.nav_button {
		display: block;
		font-size: 1rem;
		font-weight: 600;
		text-transform: uppercase;
	}

	.nav_button {
		appearance: none;
		background-color: transparent;
		cursor: pointer;
		font-family: inherit;
		font: inherit;
		text-decoration-line: none;
	}

	.nav_button:hover {
		text-decoration: underline;
		text-underline-offset: 0.25em;
		text-decoration-thickness: 1px;
	}

	.mega_nav {
		background-color: var(--paperWhite);
		display: block;
		left: 0;
		position: absolute;
		right: 0;
		top: 100%;
		z-index: 3;
	}

	.mega_item {
		/* display: none;
		margin-top: 3em;
		margin-bottom: 1em;
		visibility: hidden; */
		left: 0;
		/* margin-top: -0.1rem; */
		/* overflow: hidden; */
		pointer-events: none;
		position: absolute;
		right: 0;
		top: 0;
		/* transition: visibility 0.2s 0.8s; */
		visibility: hidden;
		z-index: 1;
	}

	.mega_item.is_active {
		/* display: flex;
		gap: 5em;
		pointer-events: auto;
		transition-delay: 0s;
		visibility: visible;
		transition: visibility 0.2s 0.8s; */
		pointer-events: auto;
		/* transition-delay: 0s; */
		visibility: visible;
	}

	.mega_item--content {
		display: flex;
		gap: 3.75em;
		/* padding-top: 2em; */
		padding-bottom: 2.5em;
		padding-left: 3em;
		padding-right: 3em;
		position: relative;
		will-change: transform;
		background: var(--paperWhite);
		border-bottom: 1px solid var(--black);
	}

	.mega_nav_menu_header {
		font-weight: 300;
		font-size: 1em;
		text-transform: none;
		color: #6c6c6c;
	}

	.mega_nav_menu {
		display: flex;
		flex-direction: column;
		gap: 1em;
		margin-top: 1em;
	}
</style>
