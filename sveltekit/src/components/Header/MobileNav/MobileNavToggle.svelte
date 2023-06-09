<script>
	import { handleMobileNavClick, mobileNavOpen } from '$lib/stores/navContexts';
</script>

<button
	aria-expanded={$mobileNavOpen}
	aria-controls="mobileNav"
	aria-label="Toggle Menu"
	class="menuToggle"
	on:click={handleMobileNavClick}>
	<span class="hamburger">
		<span class="hamburgerIcon" />
	</span>
</button>

<style lang="postcss">
	.menuToggle {
		appearance: none;
		background-color: transparent;
		cursor: pointer;
		color: var(--black);
		font-family: inherit;
		text-decoration-line: none;
	}

	.hamburger {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		position: relative;
		width: 1.5em;
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

	.hamburgerIcon {
		border-top-width: 1.5px;
		display: block;
		height: 0;
		position: relative;
		transition: border 0s linear 0.15s;
		width: 100%;
	}

	.hamburgerIcon:after,
	.hamburgerIcon:before {
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
</style>
