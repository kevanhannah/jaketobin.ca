<div>
	<slot />
</div>

<style lang="postcss">
	div {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: 1.5em;
	}

	@media (max-width: 768px) {
		div {
			display: flex;
			flex-direction: column;
		}
	}
</style>
