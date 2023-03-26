<script>
	import { browser } from '$app/environment';
	import '$lib/styles/fonts.css';
	import '$lib/styles/typography.css';
	import '$lib/styles/global_styles.css';
	import {
		cartOpen,
		mobileNavOpen,
		portfolioOpen,
		shopOpen,
	} from '$lib/stores/navContexts';
	import Header from '$components/Header/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import CartDrawer from '$components/Cart/CartDrawer.svelte';
	import CartBackdrop from '$components/Cart/CartBackdrop.svelte';

	$: if (browser) {
		document.body.classList.toggle(
			'no-scroll',
			$cartOpen || $mobileNavOpen || $portfolioOpen || $shopOpen
		);
	}
</script>

<CartDrawer />
<CartBackdrop />
<Header inert={$cartOpen} />
<div inert={$cartOpen || $mobileNavOpen || $portfolioOpen || $shopOpen}>
	<slot />
</div>
<Footer inert={$cartOpen || $mobileNavOpen || $portfolioOpen || $shopOpen} />

<style>
	div {
		padding-top: 3em;
		padding-left: 3em;
		padding-right: 3em;
	}

	@media (max-width: 768px) {
		div {
			padding-top: 1em;
			padding-left: 1em;
			padding-right: 1em;
		}
	}
</style>
