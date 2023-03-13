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
	h2,
	h3,
	p {
		max-width: 75%;
		margin: 0 auto;
	}

	h2 {
		margin-bottom: 0.5rem;
	}

	p {
		margin-bottom: 1em;
	}

	h3 {
		font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-weight: 900;
		font-size: 1.75em;
		margin-bottom: 0.5em;
	}
</style>
