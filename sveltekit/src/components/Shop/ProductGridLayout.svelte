<script>
</script>

<div>
	<slot />
</div>

<style lang="postcss">
	div {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25em;
	}

	@media (max-width: 768px) {
		div {
			grid-template-columns: repeat(2, 1fr);
			gap: 1em;
		}
	}
</style>
