<script>
	import { closeAllNav, mobileNavIsOpen, toggleMobileNav } from '$lib/stores';
	import MobileNavToggle from '$components/Header/MobileNav/MobileNavToggle.svelte';
	import CartToggle from '$components/Header/CartToggle.svelte';
	import MobilePrimaryMenu from '$components/Header/MobileNav/MobilePrimaryMenu.svelte';
</script>

<div class="main_navigation--mobile" id="mobile-nav">
	<div>
		<MobileNavToggle />
		<div class="mobile_menu" class:is_open={$mobileNavIsOpen}>
			<div class="mobile_menu_inner">
				<MobilePrimaryMenu />
			</div>
		</div>
		<div
			class="mobile_menu_backdrop"
			class:is_active={$mobileNavIsOpen}
			on:click={() => {
				toggleMobileNav();
				closeAllNav();
			}}
			on:keypress={() => {
				toggleMobileNav();
				closeAllNav();
			}}
		/>
	</div>
	<CartToggle />
</div>

<style>
	.main_navigation--mobile {
		align-items: center;
		bottom: 0;
		display: none;
		justify-content: flex-end;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}

	.mobile_menu {
		--mobile-menu-width: 22.5em;
		background-color: var(--paperWhite);
		color: var(--black);
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100%;
		max-width: var(--mobile-menu-width);
		left: 0;
		position: fixed;
		top: 0;
		will-change: transform;
		transform: translateX(-100%);
		transition-duration: 0.35s;
		z-index: 5;
		border-right: 1px solid var(--black);
	}

	.is_open {
		transform: translateX(0%);
	}

	.mobile_menu_inner {
		display: flex;
		flex: 1 1 0%;
		flex-direction: column;
		overflow-y: scroll;
		padding-top: 6em;
		padding-bottom: 2em;
		/* padding-left: 1em;
		padding-right: 1em; */
	}

	.mobile_menu_backdrop {
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
		z-index: 4;
	}

	.is_active {
		backdrop-filter: blur(6px);
		opacity: 1;
		pointer-events: auto;
	}

	@media (max-width: 768px) {
		.main_navigation--mobile {
			display: flex;
		}
	}
</style>
