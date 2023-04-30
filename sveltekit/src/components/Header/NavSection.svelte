<script>
	export let content;
	export let showHeader;
	export let slugPrefix = null;
</script>

<section>
	{#if showHeader}
		<h2 class="sectionHeader">{content.title}</h2>
	{/if}
	<ul class="sectionMenu">
		{#each content.pages as page}
			<li>
				<a
					href={`${
						slugPrefix
							? slugPrefix + '/' + page.slug.current
							: page.slug.current
					}`}>{page.title}</a>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	.sectionHeader {
		font-size: 1em;
		font-weight: 600;
		line-height: 1.6;
		color: var(--black);
		margin-bottom: 0.75em;

		@media (max-width: 1280px) {
			margin-bottom: 1.5em;
			line-height: 1.5;
		}
	}

	.sectionMenu {
		& li {
			line-height: 1.6;
			margin-bottom: 0.75em;

			&:last-of-type {
				margin-bottom: 0;
			}

			& a {
				text-decoration: none;
			}

			@media (max-width: 1280px) {
				line-height: 1.5;
				margin-bottom: 0.75em;
			}
		}
	}

	@media (max-width: 1280px) {
		section {
			border-bottom: 1px solid var(--lightGray);
			padding-top: 1.75em;
			padding-bottom: 1.75em;
		}

		section:last-of-type {
			border-bottom: none;
		}
	}
</style>
