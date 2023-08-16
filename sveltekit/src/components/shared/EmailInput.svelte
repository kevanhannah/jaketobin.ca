<script>
	export let autocomplete = 'email';
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
		{autocomplete}
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
		font-weight: 600;
		transition-property: width;
		transition-duration: 0.15s;
		transition-timing-function: ease;
	}

	input {
		height: 3em;
		padding-left: 0.75em;
		padding-right: 0.75em;
		font-weight: 400;
		background: var(--paperWhite);
		border: 1px solid var(--black);
		border-radius: 0.5em;
	}
</style>
