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
		padding: 0.75em 1.25em;
		color: var(--paperWhite);
		background: var(--black);
		border: 1px solid var(--black);
		border-radius: 0.5em;
		font-weight: 600;
		transition-property: border-color, background, color, transform, box-shadow;
		transition-duration: 0.15s;
		transition-timing-function: ease;
	}

  button:disabled {
		background: var(--paperWhite);
		color: var(--black);
		border: 1px solid var(--black);
		cursor: default;
	}

  button:not(:disabled)[loading="true"] {
    background: var(--mediumGray);
		border: 1px solid var(--mediumGray);
		cursor: default;
  }
	/* button {
		padding-top: 1em;
		padding-bottom: 1em;
		padding-left: 1.25em;
		padding-right: 1.25em;
		background-color: var(--black);
		border-radius: 0.5em;
		color: var(--paperWhite);
	} */

	@media (hover: hover) {
    button:not(:disabled)[loading="false"]:hover {
		color: var(--black);
		background: var(--paperWhite);
    cursor: pointer;
	}
		/* button:hover {
			background-color: #6c6c6c;
		} */
	}

	@media (max-width: 768px) {
		button {
			width: 100%;
		}
	}
</style>
