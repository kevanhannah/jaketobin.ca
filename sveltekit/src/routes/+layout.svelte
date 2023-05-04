<script>
	import { onMount } from 'svelte';
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
	import {
		cartId,
		getCartItems,
		useCreateCart,
	} from '$lib/stores/storeContext';
	import SEO from '$components/SEO.svelte';
	import Header from '$components/Header/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import CartDrawer from '$components/Cart/CartDrawer.svelte';
	import CartBackdrop from '$components/Cart/CartBackdrop.svelte';

	let cartCreatedAt;

	onMount(async () => {
		if (browser) {
			cartId.set(JSON.parse(localStorage.getItem('cartId')));
			cartCreatedAt = JSON.parse(localStorage.getItem('cartCreatedAt'));

			let currentDate = Date.now();
			let difference = currentDate - cartCreatedAt;
			let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
			let cartIdExpired = totalDays > 6;
			if (!cartId || cartIdExpired) {
				await useCreateCart();
			}
			await getCartItems();
		}
	});

	$: if (browser) {
		document.body.classList.toggle(
			'no-scroll',
			$cartOpen || $mobileNavOpen || $portfolioOpen || $shopOpen
		);
	}

	export let data;
</script>

<SEO defaultMetadata={data.defaultMetadata} />
<CartDrawer />
<CartBackdrop />
<Header inert={$cartOpen} />
<div inert={$cartOpen || $mobileNavOpen || $portfolioOpen || $shopOpen}>
	<slot />
</div>
<Footer inert={$cartOpen || $mobileNavOpen || $portfolioOpen || $shopOpen} />

<style lang="postcss">
	div {
		padding-top: 2.5em;
		padding-left: 1.25em;
		padding-right: 1.25em;
		max-width: 90em;
		margin-left: auto;
		margin-right: auto;

		@media (max-width: 768px) {
			padding-left: 0.75em;
			padding-right: 0.75em;
		}
	}
</style>
