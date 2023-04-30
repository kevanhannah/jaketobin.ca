<script>
	import { page } from '$app/stores';
	import Error from '$components/Error.svelte';
</script>

<main>
	<Error message={$page.error.message}>
		<p>Explore these sections to find what you're looking for.</p>
		<div class="sectionGrid">
			<a class="section" href="/portfolio">
				<h3>Portfolio</h3>
				<p>
					Explore select illustrations I've done for clients, including
					editorial and website content.
				</p>
			</a>
			<a class="section" href="/shop">
				<h3>Shop</h3>
				<p>
					Browse my entire catalogue of prints, greeting cards, stickers, and
					postcards here.
				</p>
			</a>
			<a class="section" href="/commission">
				<h3>Commission</h3>
				<p>
					Get a custom, original ink drawing from me. Since 2015, I have drawn
					hundreds of custom illustrations for people.
				</p>
			</a>
			<a class="section" href="/about">
				<h3>About</h3>
				<p>Learn more about me and my work.</p>
			</a>
		</div>
	</Error>
</main>

<style lang="postcss">
	main {
		& :global(.error) {
			justify-content: center;
			align-items: center;
		}

		& p {
			font-size: 1.25em;
			margin-bottom: 0;

			@media (max-width: 768px) {
				font-size: 1em;
			}
		}
	}

	.sectionGrid {
		max-width: 75%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.25em;

		& p {
			font-size: 1em;
		}

		@media (max-width: 1100px) {
			max-width: 90%;
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 768px) {
			max-width: 100%;
			display: flex;
			flex-direction: column;
		}
	}

	.section {
		width: 100%;
		border-width: 1px;
		border-color: var(--black);
		border-radius: 0.5em;
		text-decoration: none;
		padding: 1em;
		transition: all 100ms ease-out;

		& h3 {
			font-size: 2em;
			font-weight: 900;
			margin-bottom: 0.5em;
		}

		@media (hover: hover) {
			&:hover {
				cursor: pointer;
				color: var(--mediumGray);
				border-color: var(--lightGray);
				transform: translateY(-0.25em);
			}
		}

		@media (max-width: 768px) {
			text-align: center;
		}
	}
</style>
