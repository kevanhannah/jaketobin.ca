<script>
	export let disabled = false;
	export let id;
	export let label;
	export let name;
	export let options = [];
	export let required = false;
	export let style = undefined;
	export let value;
</script>

<label>
	{#if label}
		{label}
	{/if}
	<select bind:value {disabled} {id} {name} {style} {required}>
		{#each options as option}
			<option value={option.value}>{option.name}</option>
		{/each}
	</select>
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

	select {
		height: 3em;
		padding-left: 0.75em;
		padding-right: 0.75em;
		font-weight: 400;
		background-color: var(--paperWhite);
		background-image: url("data:image/svg+xml,<svg height='12px' width='12px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>");
		background-position: 98.5% 50%;
		background-repeat: no-repeat;
		border: 1px solid var(--black);
		border-radius: 0.5em;
		appearance: none;
	}

	select:disabled {
		background-color: var(--lightGray);
		background-image: none;
	}
</style>
