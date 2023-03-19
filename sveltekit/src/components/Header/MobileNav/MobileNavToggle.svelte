<script>
	import {
		mobileNavIsOpen,
		portfolioNavIsOpen,
		shopNavIsOpen,
		toggleMobileNav,
	} from '$lib/stores';
</script>

<button
	aria-expanded={$mobileNavIsOpen}
	aria-controls="mobile-nav"
	aria-label="Toggle Menu"
	class="menu_toggle"
	class:is_open={$mobileNavIsOpen}
	on:click={() => {
		toggleMobileNav();
		portfolioNavIsOpen.update(() => false);
		shopNavIsOpen.update(() => false);
	}}
>
	<span class="hamburger">
		<span class="hamburger_icon" />
	</span>
</button>

<style>
	.menu_toggle {
		appearance: none;
		background-color: transparent;
		cursor: pointer;
		color: var(--black);
		font-family: inherit;
		top: 0;
		bottom: 0;
		left: 0;
		position: absolute;
		text-decoration-line: none;
		z-index: 6;
	}

	.hamburger {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		position: relative;
		width: 2em;
	}

	.hamburger:before,
	.hamburger:after {
		border-top-width: 1.5px;
		content: '';
		display: block;
		height: 0;
		margin: 6px 0;
		position: relative;
		transition: opacity 0s linear 0.15s, transform 0.15s ease-out 0.15s;
		width: 100%;
	}

	.hamburger_icon {
		border-top-width: 1.5px;
		display: block;
		height: 0;
		position: relative;
		transition: border 0s linear 0.15s;
		width: 100%;
	}

	.is_open .hamburger:after,
	.is_open .hamburger:before {
		opacity: 0;
		transition: opacity 0s linear 0.15s, transform 0.15s ease-out;
	}

	.is_open .hamburger:before {
		transform: translateY(5px);
	}

	.is_open .hamburger:after {
		transform: translateY(-5px);
	}

	.hamburger_icon:after,
	.hamburger_icon:before {
		border-top-width: 1.5px;
		content: '';
		display: block;
		height: 0;
		opacity: 0;
		position: absolute;
		top: calc(50% - 0.5px);
		transition: opacity 0s 0.15s, transform 0.15s ease-out;
		width: 100%;
	}

	.is_open .hamburger_icon {
		border-color: transparent;
	}

	.is_open .hamburger_icon:after,
	.is_open .hamburger_icon:before {
		opacity: 1;
		transition: transform 0.15s ease-out 0.15s;
	}

	.is_open .hamburger_icon:before {
		transform: rotate(45deg);
	}

	.is_open .hamburger_icon:after {
		transform: rotate(-45deg);
	}
</style>
