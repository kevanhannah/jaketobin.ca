<script>
	import { page } from '$app/stores';
	import Error from '$components/Error.svelte';
</script>

<div>
	<Error message={$page.error.message}>
		<p>
			Check out the Shop menu to find more items, or head back to the home page.
		</p>
	</Error>
</div>

<style lang="postcss">
	div {
		& :global(div.error) {
			justify-content: flex-start;
			align-items: flex-start;
		}

		& p:last-of-type {
			margin-bottom: 0;
		}
	}
</style>
