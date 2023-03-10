<script>
	import '$lib/styles/fonts.css';
	import '$lib/styles/typography.css';
	import '$lib/styles/global_styles.css';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<main>
	<slot />
</main>

<style>
	main {
		padding-left: 3em;
		padding-right: 3em;
		padding-top: 3em;
	}
</style>
