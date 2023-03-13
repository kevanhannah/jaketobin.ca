<script>
	export let href = null;
</script>

<a {href} class="button"><slot /></a>

<style>
	.button {
		display: inline-block;
		padding-top: 1em;
		padding-bottom: 1em;
		padding-left: 1.25em;
		padding-right: 1.25em;
		background-color: var(--black);
		border-radius: 0.5em;
		color: var(--paperWhite);
		text-align: center;
		text-decoration: none;
	}

	.button:hover {
		background-color: #6c6c6c;
	}
</style>
