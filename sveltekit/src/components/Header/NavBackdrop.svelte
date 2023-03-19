<script>
	import { browser } from '$app/environment';
	import {
		closeAllNav,
		mobileNavIsOpen,
		portfolioNavIsOpen,
		shopNavIsOpen,
	} from '$lib/stores';

	$: if (browser) {
		document.body.classList.toggle(
			'no-scroll',
			$portfolioNavIsOpen || $shopNavIsOpen || $mobileNavIsOpen
		);
	}
</script>

<div
	aria-hidden={true}
	class="nav_backdrop"
	class:is_active={$portfolioNavIsOpen || $shopNavIsOpen}
	on:click={closeAllNav}
	on:keypress={closeAllNav}
/>

<style lang="postcss">
	:global(body.no-scroll) {
		overflow: hidden;
	}

	.nav_backdrop {
		--tw-bg-opacity: 0.4;
		background-color: rgb(0 0 0 / var(--tw-bg-opacity));
		bottom: 0;
		left: 0;
		opacity: 0;
		pointer-events: none;
		position: fixed;
		right: 0;
		top: 0;
		transition: opacity 0.15s linear;
	}

	.is_active {
		backdrop-filter: blur(0.5em);
		opacity: 1;
		pointer-events: auto;
	}
</style>
