<script>
	import {
		closeAllNav,
		handleMobileNavClick,
		mobileNavOpen,
	} from '$lib/stores/navContexts';
	import MobileNavToggle from '$components/Header/MobileNav/MobileNavToggle.svelte';
	import CartToggle from '$components/Header/CartToggle.svelte';
	import MobilePrimaryMenu from '$components/Header/MobileNav/MobilePrimaryMenu.svelte';
</script>

<div class="mainNavigation_mobile" id="mobileNav">
	<div>
		<MobileNavToggle />
		<div class="mobileMenu" class:is_open={$mobileNavOpen}>
			<div class="drawerHeader">
				<button
					aria-label="Close navigation tray"
					class="closeDrawer"
					on:click={handleMobileNavClick}
					type="button">
					<span class="closeIcon" />
				</button>
			</div>
			<div class="mobileMenuInner">
				<MobilePrimaryMenu />
			</div>
		</div>
		<div
			aria-hidden="true"
			class="mobileMenuBackdrop"
			class:is_active={$mobileNavOpen}
			on:click={closeAllNav}
			on:keypress={closeAllNav} />
	</div>
	<CartToggle />
</div>

<style lang="postcss">
	.mainNavigation_mobile {
		align-items: center;
		bottom: 0;
		display: none;
		justify-content: space-between;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}

	.mobileMenu {
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

	.drawerHeader {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 3em;
		padding-bottom: 2.5em;
		padding-left: 2.5em;
		border-bottom: 1px solid var(--black);
	}

	.mobileMenuInner {
		height: 100%;
		padding-bottom: 3em;
	}

	.mobileMenuBackdrop {
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

	.closeDrawer {
		height: 100%;
		background: none;
		border: none;
		font-size: 1em;
		font-weight: 500;
		color: var(--black);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.closeIcon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		position: relative;
		width: 1.5em;
		height: 1.5em;
	}

	.closeIcon:after,
	.closeIcon:before {
		border-top-width: 1.5px;
		content: '';
		display: block;
		height: 0;
		position: absolute;
		top: calc(50% - 0.5px);
		transition: opacity 0s 0.15s, transform 0.15s ease-out;
		width: 100%;
	}

	.closeIcon:before {
		transform: rotate(45deg);
	}

	.closeIcon:after {
		transform: rotate(-45deg);
	}

	@media (max-width: 1280px) {
		.mainNavigation_mobile {
			display: flex;
		}
	}

	@media (max-width: 768px) {
		.drawerHeader {
			padding-top: 1.5em;
			padding-bottom: 1.5em;
			padding-left: 0.75em;
			padding-right: 0.75em;
		}

		.closeIcon {
			width: 2em;
		}
	}

	@media (hover: hover) {
		.closeDrawer:hover {
			color: var(--mediumGray);
		}
	}
</style>
