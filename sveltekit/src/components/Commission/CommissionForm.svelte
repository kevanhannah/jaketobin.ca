<script>
	import { PUBLIC_SERVERLESS_BASE } from '$env/static/public';
	import TextInput from '$components/shared/TextInput.svelte';
	import Button from '$components/shared/Button.svelte';
	import SelectInput from '$components/shared/SelectInput.svelte';
	import EmailInput from '$components/shared/EmailInput.svelte';
	import Alert from '$components/shared/icons/Alert.svelte';
	import Check from '$components/shared/icons/Check.svelte';

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

		const res = await fetch(`${PUBLIC_SERVERLESS_BASE}/request-illustration`, {
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
			commissionInfo = {
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
				bind:value={commissionInfo.firstName}
				id="firstName"
				label="First name"
				name="firstName"
				required />
			<TextInput
				bind:value={commissionInfo.lastName}
				id="lastName"
				label="Last name"
				name="lastName"
				required />
		</div>
		<EmailInput
			bind:value={commissionInfo.email}
			id="email"
			label="Email"
			name="email"
			required />
		<div class="formRow">
			<SelectInput
				bind:value={commissionInfo.size}
				id="size"
				label="Size"
				name="size"
				options={sizeSelect}
				required />
			<SelectInput
				bind:value={commissionInfo.framed}
				id="framed"
				label="Add frame?"
				name="framed"
				options={frameSelect}
				required />
		</div>
		<TextInput
			bind:value={commissionInfo.dueDate}
			id="dueDate"
			label="When do you need it?"
			name="dueDate"
			required />
		<TextInput
			bind:value={commissionInfo.description}
			id="description"
			label="Briefly describe your illustration subject or idea"
			name="description"
			required />
		<div style="display: flex; justify-content: flex-start">
			<Button {loading} type="submit">{loading ? 'Loading' : 'Submit'}</Button>
		</div>
		{#if status === 'error'}
			<div class="message" class:alert={status === 'error'}>
				<Alert style="width: 1.5em; fill: #f56b52;" />
				<p>Error: {errorMessage}</p>
			</div>
		{/if}
		{#if status === 'success'}
			<div class="message" class:success={status === 'success'}>
				<Check style="width: 1.5em; fill: #50dca9;" />
				<p>Request received! I will be in touch soon.</p>
			</div>
		{/if}
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

	.message {
		width: 50%;
		display: flex;
		align-items: center;
		gap: 1em;
		border-radius: 0.5em;
		padding-top: 1.25em;
		padding-bottom: 1.25em;
		padding-left: 1.25em;
		padding-right: 1.25em;
	}

	.message p {
		margin-bottom: 0;
	}

	.alert {
		border: 1px solid #f56b52;
		background: #fde2dd;
	}

	.success {
		border: 1px solid #50dca9;
		background: #e0f8ee;
	}

	@media (max-width: 1000px) {
		.message {
			width: 75%;
		}
	}

	@media (max-width: 768px) {
		.commissionFormSection,
		.message {
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
