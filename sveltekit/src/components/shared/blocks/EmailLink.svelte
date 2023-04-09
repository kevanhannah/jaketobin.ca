<script>
	export let portableText;
	$: ({ value } = portableText);
	$: ({ email } = value);
</script>

{#if email}
	<a href={`mailto:${email}`}>
		<slot />
	</a>
{:else}
	<slot />
{/if}
