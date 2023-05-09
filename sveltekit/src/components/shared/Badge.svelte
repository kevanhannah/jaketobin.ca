<script>
	export let reverse = false;
</script>

<div class:reverse>
	<slot />
</div>

<style lang="postcss">
	div {
		max-width: fit-content;
		display: inline-block;
		font-size: 0.75em;
		font-weight: 600;
		text-transform: uppercase;
		color: var(--black);
		background-color: var(--paperWhite);
		border-width: 1px;
		border-color: var(--black);
		border-radius: 4px;
		padding-top: 0.25em;
		padding-bottom: 0.25em;
		padding-left: 0.5em;
		padding-right: 0.5em;
		cursor: pointer;
		white-space: nowrap;
		user-select: none;

		&.reverse {
			color: var(--paperWhite);
			background-color: var(--black);
		}
	}
</style>
