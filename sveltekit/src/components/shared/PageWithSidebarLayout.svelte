<div>
	<slot />
</div>

<style lang="postcss">
	div {
		display: grid;
		grid-template-columns: 1fr 4fr;
		gap: 1.5em;

		@media (max-width: 1024px) {
			display: flex;
			flex-direction: column;
		}
	}
</style>
