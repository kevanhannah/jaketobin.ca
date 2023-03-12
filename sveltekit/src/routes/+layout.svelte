<script>
	import '$lib/styles/fonts.css';
	import '$lib/styles/typography.css';
	import '$lib/styles/global_styles.css';
	import Header from '$components/Header/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import CartDrawer from '$components/Cart/CartDrawer.svelte';
	import CartBackdrop from '$components/Cart/CartBackdrop.svelte';
	import NavBackdrop from '$components/Header/NavBackdrop.svelte';
</script>

<CartDrawer />
<CartBackdrop />
<Header />
<NavBackdrop />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		padding-left: 3em;
		padding-right: 3em;
		padding-top: 3em;
	}
</style>
