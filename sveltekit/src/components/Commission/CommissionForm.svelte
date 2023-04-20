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
			name: 'Natural Wood',
			value: 'Wood',
		},
	];

	$: commmissionInfo = {
		description: '',
		dueDate: '',
		email: '',
		firstName: '',
		framed: false,
		get frameColor() {
			return this.framed ? frameColorSelect[0].value : null;
		},
		lastName: '',
		size: sizeSelect[0].value,
	};

	async function handleForm(event) {
		// Creating form data
		const data = new FormData(this); // this === form element
		console.log(data);
		// Sending our own fetch post action
		// const res = await fetch(this.action, {
		// 	method: 'POST',
		// 	body: data,
		// });
	}
</script>

<div class="commissionFormSection">
	<h2>Request an illustration</h2>
	<form
		class="commissionForm"
		on:submit|preventDefault={handleForm}
		action="/contact?/email">
		<div class="formRow">
			<TextInput id="firstName" label="First name" name="firstName" required />
			<TextInput id="lastName" label="Last name" name="lastName" required />
		</div>
		<EmailInput id="email" label="Email" name="email" required />
		<div class="formRow">
			<SelectInput
				bind:value={commmissionInfo.size}
				id="size"
				label="Size"
				name="size"
				options={sizeSelect}
				required />
			<TextInput
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
		gap: 1.25em;
		padding-top: 2em;
		margin-top: 2em;
		margin-left: auto;
		margin-right: auto;
		border-top: 1px solid var(--black);
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

		.formRow {
			flex-direction: column;
		}
	}
</style>
