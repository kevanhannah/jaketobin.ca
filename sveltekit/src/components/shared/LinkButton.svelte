<script>
	export let href = null;
</script>

<a {href} class="button"><slot /></a>

<style lang="postcss">
	.button {
		display: inline-block;
		color: var(--paperWhite);
		background: var(--black);
		border: 1px solid var(--black);
		border-radius: 0.5em;
		font-weight: 600;
		padding-top: 0.75em;
		padding-bottom: 0.75em;
		padding-left: 1.25em;
		padding-right: 1.25em;
		text-align: center;
		text-decoration: none;
	}

	@media (hover: hover) {
		.button:hover {
			opacity: 1;
			color: var(--black);
			background: var(--paperWhite);
			cursor: pointer;
		}
	}

	@media (max-width: 768px) {
		.button {
			width: 100%;
		}
	}
</style>
