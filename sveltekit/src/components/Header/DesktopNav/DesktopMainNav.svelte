<script>
	import {
		handlePortfolioClick,
		handleShopClick,
		portfolioOpen,
		shopOpen,
	} from '$lib/stores/navContexts';
	import CartToggle from '$components/Header/CartToggle.svelte';
</script>

<div class="main_navigation--desktop">
	<div class="menu_left">
		<ul>
			<li>
				<button
					class="nav_button"
					class:active={$portfolioOpen}
					on:click={handlePortfolioClick}>Portfolio</button>
			</li>
			<li>
				<button
					class="nav_button"
					class:active={$shopOpen}
					on:click={handleShopClick}>Shop</button>
			</li>
			<li><a href="/commission" class="nav_button">Commission</a></li>
			<li><a href="/about" class="nav_button">About</a></li>
		</ul>
	</div>
	<div class="menu_right">
		<CartToggle />
	</div>
</div>

<style>
	.main_navigation--desktop {
		align-items: center;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}

	.nav_button {
		font-size: 1em;
		font-weight: 400;
		text-transform: uppercase;
		appearance: none;
		background-color: transparent;
		cursor: pointer;
		font-family: inherit;
		text-decoration-line: none;
	}

	.active:not(:hover) {
		text-decoration: underline;
		text-underline-offset: 0.25em;
		text-decoration-thickness: 1px;
	}

	.nav_button:hover {
		text-decoration: underline;
		text-underline-offset: 0.25em;
		text-decoration-thickness: 1px;
		opacity: 1;
	}

	.main_navigation--desktop ul {
		display: flex;
	}

	.menu_left,
	.menu_right {
		align-items: center;
		display: flex;
	}

	.menu_left ul {
		display: flex;
		gap: 2em;
	}

	@media (max-width: 1280px) {
		.main_navigation--desktop {
			display: none;
		}
	}
</style>
