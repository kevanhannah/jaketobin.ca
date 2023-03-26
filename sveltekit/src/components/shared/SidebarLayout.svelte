<aside>
	<slot />
</aside>

<style lang="postcss">
	aside {
		padding-top: 3.75em;
		display: flex;
		flex-direction: column;
		gap: 3em;
	}

	@media (max-width: 768px) {
		aside {
			display: none;
		}
	}
</style>
