<main>
	<slot />
</main>

<style lang="postcss">
	main {
		max-width: 1150px;
		margin: 0 auto;
	}

	@media (max-width: 1150px) {
		main {
			width: 100%;
		}
	}
</style>
