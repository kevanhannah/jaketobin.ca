<script>
	import { page } from '$app/stores';
	import Error from '$components/Error.svelte';
</script>

<div>
	<Error message={$page.error.message}>
		<div>
			<p>
				The item you're looking for may have moved or have been removed. Double
				check that you have the correct URL.
			</p>
			<p>
				Check out the Shop menu to find what you're looking for, or head back to
				the home page.
			</p>
		</div>
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
