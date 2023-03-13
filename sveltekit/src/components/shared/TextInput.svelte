<script>
	export let id;
	export let label;
	export let name;
	export let type;
	export let required;
</script>

<label>
	{label}
	<input {id} {name} {required} {type} />
</label>

<style>
	label {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.75em;
	}

	input {
		height: 3em;
		padding: 1em;
		border: 1px solid var(--black);
		border-radius: 0.5em;
	}
</style>
