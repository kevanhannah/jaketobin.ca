<script>
	import LinkButton from '$components/shared/LinkButton.svelte';

	export let message = 'Something went wrong';
</script>

<div class="error">
	<h2>{message}</h2>
	<slot />
	<LinkButton link={{ title: 'Back to home', url: '/' }} />
</div>

<style lang="postcss">
	.error {
		display: flex;
		flex-direction: column;
		gap: 1.25em;

		& h2 {
			margin-bottom: 0;

			@media (max-width: 768px) {
				font-size: 2.5em;
			}
		}
	}
</style>
