<script>
	export let disabled = false;
	export let loading = false;
	export let style = undefined;
	export let type = 'button';
</script>

<button {disabled} {loading} on:click {style} {type}>
	<slot />
</button>

<style lang="postcss">
	button {
		color: var(--paperWhite);
		background: var(--black);
		border: 1px solid var(--black);
		border-radius: 0.5em;
		font-weight: 600;
		padding-top: 0.75em;
		padding-bottom: 0.75em;
		padding-left: 1.25em;
		padding-right: 1.25em;
		user-select: none;
		white-space: nowrap;
		transition-property: border-color, background, color, transform, box-shadow,
			width;
		transition-duration: 250ms;
		transition-timing-function: ease-in-out;

		&:disabled {
			background: var(--paperWhite);
			color: var(--black);
			border: 1px solid var(--black);
			cursor: default;
		}

		&:not(:disabled)[loading='false'] {
			@media (hover: hover) {
				&:hover {
					color: var(--black);
					background: var(--paperWhite);
					cursor: pointer;
				}
			}
		}

		&:not(:disabled)[loading='true'] {
			background: var(--mediumGray);
			border: 1px solid var(--mediumGray);
			cursor: default;
		}

		@media (max-width: 768px) {
			width: 100%;
		}
	}
</style>
