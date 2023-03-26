<script>
	import {
		closeAllNav,
		mobileNavOpen,
		portfolioOpen,
		shopOpen,
	} from '$lib/stores/navContexts';
</script>

<div
	aria-hidden={true}
	class="mega_nav_backdrop"
	class:is_active={($portfolioOpen || $shopOpen) && $mobileNavOpen === false}
	on:click={closeAllNav}
	on:keypress={closeAllNav}
/>

<style lang="postcss">
	.mega_nav_backdrop {
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
		backdrop-filter: blur(6px);
		opacity: 1;
		pointer-events: auto;
	}
</style>
