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
</style>
