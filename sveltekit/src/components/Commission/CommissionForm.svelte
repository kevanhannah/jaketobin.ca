<script>
	import TextInput from '$components/shared/TextInput.svelte';
	import Button from '$components/shared/Button.svelte';

	async function handleForm(event) {
		// Creating form data
		const data = new FormData(this); // this === form element
		// Sending our own fetch post action
		const res = await fetch(this.action, {
			method: 'POST',
			body: data,
		});
	}
</script>

<div class="commission_form_section">
	<h3>Request an illustration</h3>
	<form
		class="commission_form"
		on:submit|preventDefault={handleForm}
		action="/contact?/email">
		<div class="form_row">
			<TextInput
				id="firstName"
				label="First name"
				name="firstName"
				required
				type="text" />
			<TextInput
				id="lastName"
				label="Last name"
				name="lastName"
				required
				type="text" />
		</div>
		<TextInput id="email" label="Email" name="email" required type="email" />
		<div class="form_row">
			<TextInput
				id="dueDate"
				label="When do you need it?"
				name="dueDate"
				required
				type="text" />
		</div>
		<TextInput
			id="description"
			label="Briefly describe your illustration subject or idea"
			name="description"
			required
			type="text" />
		<div style="display: flex; justify-content: flex-start">
			<Button type="submit">Submit</Button>
		</div>
	</form>
</div>

<style lang="postcss">
	.commission_form_section {
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

	.commission_form_section h3 {
		font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-weight: 900;
		font-size: 1.75em;
		margin-bottom: 0;
	}

	.commission_form {
		display: flex;
		flex-direction: column;
		gap: 1.5em;
	}

	.form_row {
		display: flex;
		gap: 1.5em;
	}

	@media (max-width: 768px) {
		.commission_form_section {
			width: 100%;
		}

		.form_row {
			flex-direction: column;
		}
	}
</style>
