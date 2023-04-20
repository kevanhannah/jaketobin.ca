<script>
	export let disabled = false;
	export let id;
	export let label = undefined;
	export let name;
	export let placeholder = undefined;
	export let required = false;
	export let style = undefined;
	export let value = '';
</script>

<label>
	{#if label}
		{label}
	{/if}
	<input
		bind:value
		{disabled}
		{id}
		{name}
		{placeholder}
		{style}
		{required}
		type="email" />
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
		padding-left: 0.75em;
		padding-right: 0.75em;
		background: var(--paperWhite);
		border: 1px solid var(--black);
		border-radius: 0.5em;
	}
</style>
