<script>
	import { PUBLIC_SERVERLESS_BASE } from '$env/static/public';
	import Button from '$components/shared/Button.svelte';
	import EmailInput from '$components/shared/EmailInput.svelte';
	import TextInput from '$components/shared/TextInput.svelte';
	import Alert from '$components/shared/icons/Alert.svelte';
	import Check from '$components/shared/icons/Check.svelte';

	export let portableText;
	$: ({ value } = portableText);
	$: ({ body, title } = value);
	$: email = '';
	$: errorMessage = '';
	$: loading = false;
	$: syrup = '';
	$: status = undefined;

	async function handleSubmit() {
		loading = true;

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
			status = 'error';
			errorMessage = text.message;
		} else {
			loading = false;
			status = 'success';
			errorMessage = '';
			email = '';
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
			<Button {loading} style="height: 3em;" type="submit"
				>{loading ? 'Loading' : 'Sign up'}</Button>
		</div>
	</form>
	{#if status === 'error'}
		<div class="message" class:alert={status === 'error'}>
			<Alert style="width: 1.5em; fill: #f56b52;" />
			<p>Error: {errorMessage}</p>
		</div>
	{/if}
	{#if status === 'success'}
		<div class="message" class:success={status === 'success'}>
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

		@media (max-width: 1000px) {
			max-width: 80%;
		}

		@media (max-width: 768px) {
			max-width: 100%;
		}
	}

	.form {
		width: 50%;
		display: flex;
		flex-direction: column;

		@media (max-width: 1000px) {
			width: 75%;
		}

		@media (max-width: 768px) {
			width: 100%;
		}
	}

	.formRow {
		width: 100%;
		display: flex;
		gap: 1.5em;
		align-items: flex-end;

		@media (max-width: 768px) {
			flex-direction: column;
			gap: 1.25em;
		}
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

		& p {
			margin-bottom: 0;
		}

		@media (max-width: 1000px) {
			width: 75%;
		}

		@media (max-width: 768px) {
			width: 100%;
		}
	}

	.alert {
		border: 1px solid var(--mediumRed);
		background: var(--lightRed);
	}

	.success {
		border: 1px solid var(--mediumGreen);
		background: var(--lightGreen);
	}
</style>
