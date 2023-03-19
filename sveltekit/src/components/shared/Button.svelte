<script>
	export let style = undefined;
	export let type = 'button';
</script>

<button {style} {type}>
	<slot />
</button>

<style>
	button {
		padding-top: 1em;
		padding-bottom: 1em;
		padding-left: 1.25em;
		padding-right: 1.25em;
		background-color: var(--black);
		border-radius: 0.5em;
		color: var(--paperWhite);
	}

	button:hover {
		background-color: #6c6c6c;
	}

	@media (max-width: 768px) {
		button {
			width: 100%;
		}
	}
</style>
