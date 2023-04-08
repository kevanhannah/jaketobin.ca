<script>
	import { navigating } from '$app/stores';
	import { closeAllNav } from '$lib/stores/navContexts';
	import Wordmark from '$components/Wordmark.svelte';
	import DesktopMainNav from '$components/Header/DesktopNav/DesktopMainNav.svelte';
	import MobileMainNav from '$components/Header/MobileNav/MobileMainNav.svelte';
	import MegaNav from '$components/Header/DesktopNav/MegaNav.svelte';

	$: if ($navigating) {
		closeAllNav();
	}
</script>

<header {...$$restProps}>
	<div class="header_outer">
		<div class="header_inner">
			<div class="header_content">
				<div class="wordmark">
					<a class="wordmark-link" href="/">
						<Wordmark />
					</a>
				</div>
				<nav class="main_navigation">
					<DesktopMainNav />
					<MobileMainNav />
				</nav>
			</div>
			<div class="header_border" />
		</div>
		<MegaNav />
	</div>
</header>

<style lang="postcss">
	header {
		position: sticky;
		right: 0;
		top: 0;
		z-index: 5;
	}

	.header_outer,
	.header_inner {
		position: relative;
	}

	.header_inner {
		background-color: var(--paperWhite);
		padding-left: 3em;
		padding-right: 3em;
		z-index: 2;
	}

	.header_content {
		align-items: center;
		display: flex;
		flex-direction: column;
		position: relative;
		z-index: 3;
	}

	.wordmark {
		display: flex;
		flex-direction: column;
		position: relative;
		z-index: 1;
	}

	.wordmark-link {
		appearance: none;
		background-color: transparent;
		cursor: pointer;
		display: block;
		font-family: inherit;
		text-decoration-line: none;
	}

	.header_border {
		border-top-width: 1px;
		bottom: 0;
		left: 0;
		position: absolute;
		right: 0;
		z-index: 2;
	}

	@media (max-width: 768px) {
		.header_inner {
			padding-left: 1em;
			padding-right: 1em;
		}
	}
</style>
