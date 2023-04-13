<script>
	export let id;
	export let label = undefined;
	export let name;
	export let placeholder;
	export let required;
	export let style = undefined;
	export let value = '';
</script>

<label>
	{#if label}
		{label}
	{/if}
	<input bind:value {id} {name} {placeholder} {style} {required} type="email" />
</label>

<style lang="postcss">
	label {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.75em;
		transition-property: width;
		transition-duration: 0.15s;
		transition-timing-function: ease;
	}

	input {
		height: 3em;
		padding: 1em;
		border: 1px solid var(--black);
		border-radius: 0.5em;
	}
</style>
