<script>
	export let portableText = null;

	$: ({ value } = portableText);
	$: ({ listItem } = value);
</script>

{#if listItem === 'number'}
	<ol><slot /></ol>
{:else}
	<ul><slot /></ul>
{/if}

<style>
	ol,
	ul {
		max-width: 75%;
		margin: 0 auto;
		padding-left: 1em;
		margin-bottom: 1em;
	}

	ul {
		list-style-type: disc;
	}

	ol {
		list-style-type: number;
	}
</style>
