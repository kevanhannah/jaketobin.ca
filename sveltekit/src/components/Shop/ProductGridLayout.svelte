<div>
	<slot />
</div>

<style lang="postcss">
	div {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 1.25em;
		row-gap: 1.75em;
	}

	@media (max-width: 768px) {
		div {
			grid-template-columns: repeat(2, 1fr);
			column-gap: 1em;
			row-gap: 1.5em;
		}
	}
</style>
