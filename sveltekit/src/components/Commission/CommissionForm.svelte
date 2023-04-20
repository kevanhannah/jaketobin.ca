<script>
	import TextInput from '$components/shared/TextInput.svelte';
	import Button from '$components/shared/Button.svelte';
	import SelectInput from '$components/shared/SelectInput.svelte';
	import EmailInput from '$components/shared/EmailInput.svelte';

	let sizeSelect = [
		{
			name: '5×7',
			value: '5x7',
		},
		{
			name: '8×10',
			value: '8x10',
		},
	];
	let frameSelect = [
		{
			name: 'No',
			value: false,
		},
		{
			name: 'Yes',
			value: true,
		},
	];
	let frameColorSelect = [
		{
			name: 'Black',
			value: 'Black',
		},
		{
			name: 'White',
			value: 'White',
		},
		{
			name: 'Blonde Wood',
			value: 'Blonde Wood',
		},
	];

	$: commmissionInfo = {
		description: '',
		dueDate: '',
		email: '',
		firstName: '',
		framed: false,
		get frameColor() {
			if (this.framed) {
				return this._frameColor ? this._frameColor : frameColorSelect[0].value;
			} else {
				return null;
			}
		},
		set frameColor(value) {
			return this.framed
				? (this._frameColor = value)
				: (this._frameColor = null);
		},
		lastName: '',
		size: sizeSelect[0].value,
	};
	$: syrup = '';
	$: loading = false;

	async function handleSubmit() {
		loading = true;

		console.log(commmissionInfo);
	}
</script>

<div class="commissionFormSection">
	<h2 class="header">Request an illustration</h2>
	<form
		class="commissionForm"
		on:submit|preventDefault={handleSubmit}
		method="POST">
		<div class="formRow">
			<TextInput
				bind:value={syrup}
				id="syrup"
				name="syrup"
				style="display: none;" />
		</div>
		<div class="formRow">
			<TextInput
				bind:value={commmissionInfo.firstName}
				id="firstName"
				label="First name"
				name="firstName"
				required />
			<TextInput
				bind:value={commmissionInfo.lastName}
				id="lastName"
				label="Last name"
				name="lastName"
				required />
		</div>
		<EmailInput
			bind:value={commmissionInfo.email}
			id="email"
			label="Email"
			name="email"
			required />
		<div class="formRow">
			<SelectInput
				bind:value={commmissionInfo.size}
				id="size"
				label="Size"
				name="size"
				options={sizeSelect}
				required />
			<TextInput
				bind:value={commmissionInfo.dueDate}
				id="dueDate"
				label="When do you need it?"
				name="dueDate"
				required />
		</div>
		<div class="formRow">
			<SelectInput
				bind:value={commmissionInfo.framed}
				id="framed"
				label="Add frame?"
				name="framed"
				options={frameSelect}
				required />
			<SelectInput
				bind:value={commmissionInfo.frameColor}
				disabled={!commmissionInfo.framed}
				id="frameColor"
				label="Frame colour"
				name="frameColor"
				options={frameColorSelect}
				required={!commmissionInfo.framed} />
		</div>
		<TextInput
			bind:value={commmissionInfo.description}
			id="description"
			label="Briefly describe your illustration subject or idea"
			name="description"
			required />
		<div style="display: flex; justify-content: flex-start">
			<Button type="submit">Submit</Button>
		</div>
	</form>
</div>

<style lang="postcss">
	.commissionFormSection {
		max-width: 60em;
		display: flex;
		flex-direction: column;
		padding-top: 2em;
		margin-top: 2em;
		margin-left: auto;
		margin-right: auto;
		border-top: 1px solid var(--black);
	}

	.header {
		margin-bottom: 0;
	}

	.commissionForm {
		display: flex;
		flex-direction: column;
		gap: 1.5em;
	}

	.formRow {
		display: flex;
		gap: 1.5em;
	}

	@media (max-width: 768px) {
		.commissionFormSection {
			width: 100%;
		}

		.header {
			font-size: 1.75em;
		}

		.formRow {
			flex-direction: column;
		}
	}
</style>
