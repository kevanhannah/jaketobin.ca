<script>
	import { PUBLIC_SERVERLESS_BASE } from '$env/static/public';
	import Button from '$components/shared/Button.svelte';
	import EmailInput from '$components/shared/EmailInput.svelte';
	import TextInput from '$components/shared/TextInput.svelte';
	import Alert from '$components/shared/Icons/Alert.svelte';
	import Check from '$components/shared/Icons/Check.svelte';

	export let portableText;
	$: ({ value } = portableText);
	$: ({ body, title } = value);
	$: email = '';
	$: syrup = '';
	$: error = undefined;
	$: success = false;
	$: loading = false;
	$: message = 'Sign up';

	async function handleSubmit() {
		loading = true;
		message = 'Loading';

		const res = await fetch(`${PUBLIC_SERVERLESS_BASE}/subscribe`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, syrup }),
		});

		const text = JSON.parse(await res.text());

		if (!res.ok) {
			loading = false;
			error = text.message;
			message = 'Sign up';
		} else {
			loading = false;
			success = true;
			email = '';
			message = 'Success!';
		}
	}
</script>

<div class="module newsletterSignup">
	{#if title}
		<h2 class="title">{title}</h2>
	{/if}
	{#if body}
		<p class="body">{body}</p>
	{/if}
	<form class="form" on:submit|preventDefault={handleSubmit}>
		<div class="formRow">
			<TextInput
				bind:value={syrup}
				id="syrup"
				name="syrup"
				style="display: none;" />
		</div>
		<div class="formRow">
			<EmailInput
				bind:value={email}
				id="email"
				name="email"
				placeholder="Email address"
				required />
			<Button {loading} style="height: 3em;" type="submit">{message}</Button>
		</div>
	</form>
	{#if error}
		<div class="message" class:alert={error}>
			<Alert style="width: 1.5em; fill: #f56b52;" />
			<p>Error: {error}</p>
		</div>
	{/if}
	{#if success}
		<div class="message" class:success>
			<Check style="width: 1.5em; fill: #50dca9;" />
			<p>Success! You're signed up.</p>
		</div>
	{/if}
</div>

<style lang="postcss">
	.newsletterSignup {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25em;
	}

	.title {
		font-size: 2.25em;
		text-align: center;
	}

	.title,
	.body {
		max-width: 60%;
		margin-bottom: 0;
	}

	.form {
		width: 50%;
		display: flex;
		flex-direction: column;
	}

	.formRow {
		width: 100%;
		display: flex;
		gap: 1.5em;
		align-items: flex-end;
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
		.title,
		.body {
			max-width: 80%;
		}

		.form,
		.message {
			width: 75%;
		}
	}

	@media (max-width: 768px) {
		.title,
		.body {
			max-width: 100%;
		}

		.form,
		.message {
			width: 100%;
		}

		.formRow {
			flex-direction: column;
			gap: 1.25em;
		}
	}
</style>
