<script>
	export let style = undefined;
</script>

<button {style}>
	<slot />
</button>

<style>
	button {
		padding-top: 0.75em;
		padding-bottom: 0.75em;
		padding-left: 0.75em;
		padding-right: 0.75em;
		background-color: var(--black);
		border-radius: 0.5em;
		color: var(--paperWhite);
	}
</style>
