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

<style lang="postcss">
	ol,
	ul {
		max-width: 48em;
		padding-left: 1em;
		margin-bottom: 1em;
	}

	ul {
		list-style-type: disc;
	}

	ol {
		list-style-type: number;
	}

	@media (max-width: 768px) {
		ol,
		ul {
			max-width: 100%;
		}
	}
</style>
