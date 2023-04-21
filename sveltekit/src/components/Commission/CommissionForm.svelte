<script>
	import { PUBLIC_SERVERLESS_BASE } from '$env/static/public';
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
		{
			name: '11×14',
			value: '11x14',
		},
		{
			name: 'Unsure',
			value: 'Unsure',
		},
	];
	let frameSelect = [
		{
			name: 'No',
			value: 'No',
		},
		{
			name: 'Unsure',
			value: 'Unsure',
		},
		{
			name: 'Yes',
			value: 'Yes',
		},
	];

	$: commissionInfo = {
		description: '',
		dueDate: '',
		email: '',
		firstName: '',
		framed: frameSelect[0].value,
		lastName: '',
		size: sizeSelect[0].value,
	};
	$: errorMessage = '';
	$: loading = false;
	$: status = undefined;
	$: syrup = '';

	async function handleSubmit() {
		loading = true;

		const res = await fetch(`${PUBLIC_SERVERLESS_BASE}/request-commission`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ commissionInfo, syrup }),
		});

		const text = JSON.parse(await res.text());

		if (!res.ok) {
			loading = false;
			status = 'error';
			errorMessage = text.message;
		} else {
			loading = false;
			status = 'success';
			errorMessage = '';
			commmissionInfo = {
				description: '',
				dueDate: '',
				email: '',
				firstName: '',
				framed: frameSelect[0].value,
				lastName: '',
				size: sizeSelect[0].value,
			};
		}
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
			<SelectInput
				bind:value={commmissionInfo.framed}
				id="framed"
				label="Add frame?"
				name="framed"
				options={frameSelect}
				required />
		</div>
		<TextInput
			bind:value={commmissionInfo.dueDate}
			id="dueDate"
			label="When do you need it?"
			name="dueDate"
			required />
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
