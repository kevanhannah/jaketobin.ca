<script>
	import { page } from '$app/stores';
	import Error from '$components/Error.svelte';
</script>

<main>
	<Error message={$page.error.message}>
		<p>The page that you're looking for doesn't seem to exist.</p>
	</Error>
</main>

<style lang="postcss">
	main {
		& :global(.error) {
			justify-content: center;
			align-items: center;
		}

		& p:last-of-type {
			margin-bottom: 0;
		}
	}
</style>
