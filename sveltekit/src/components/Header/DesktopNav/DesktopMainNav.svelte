<script>
	import {
		handlePortfolioClick,
		handleShopClick,
		portfolioOpen,
		shopOpen,
	} from '$lib/stores/navContexts';
	import CartToggle from '$components/Header/CartToggle.svelte';
</script>

<div class="mainNavigation_desktop">
	<div class="menuLeft">
		<ul>
			<li>
				<button
					class="navButton"
					class:active={$portfolioOpen}
					on:click={handlePortfolioClick}>Portfolio</button>
			</li>
			<li>
				<button
					class="navButton"
					class:active={$shopOpen}
					on:click={handleShopClick}>Shop</button>
			</li>
			<li><a href="/commission" class="navButton">Commission</a></li>
			<li><a href="/about" class="navButton">About</a></li>
		</ul>
	</div>
	<div class="menuRight">
		<CartToggle />
	</div>
</div>

<style lang="postcss">
	.mainNavigation_desktop {
		align-items: center;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}

	.navButton {
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

	.navButton:hover {
		text-decoration: underline;
		text-underline-offset: 0.25em;
		text-decoration-thickness: 1px;
		opacity: 1;
	}

	.mainNavigation_desktop ul {
		display: flex;
	}

	.menuLeft,
	.menuRight {
		align-items: center;
		display: flex;
	}

	.menuLeft ul {
		display: flex;
		gap: 2em;
	}

	@media (max-width: 1280px) {
		.mainNavigation_desktop {
			display: none;
		}
	}
</style>
