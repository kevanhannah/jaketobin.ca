<script>
	export let portableText = null;

	$: ({ value } = portableText);
	$: ({ style } = value);
</script>

{#if style === 'h2'}
	<h2><slot /></h2>
{:else if style === 'h3'}
	<h3><slot /></h3>
{:else if style === 'normal'}
	<p><slot /></p>
{/if}

<style>
	h2 {
		font-size: 2.5em;
		line-height: 1.25;
		margin-bottom: 0.5em;
	}

	p {
		margin-bottom: 1em;
	}

	p:has(+ h3) {
		margin-bottom: 2.25em;
	}

	h3 {
		font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-weight: 900;
		font-size: 1.75em;
		margin-bottom: 0.5em;
	}

	h3:has(+ div) {
		margin-bottom: 0;
	}

	@media (max-width: 768px) {
		h2,
		h3,
		p {
			max-width: 100%;
		}
	}
</style>
