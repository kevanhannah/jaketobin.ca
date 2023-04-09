<script>
	export let portableText;
	$: ({ value } = portableText);
	$: ({ newWindow = true, url } = value);
</script>

{#if url}
	<a href={url} target={newWindow ? '_blank' : undefined}>
		<slot />
	</a>
{:else}
	<slot />
{/if}
