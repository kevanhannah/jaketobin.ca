<script>
	export let portableText = null;

	$: ({ value } = portableText);
</script>

<li><slot /></li>

<style>
	li {
		padding-left: 0.5em;
		margin-bottom: 0.75em;
	}
</style>
