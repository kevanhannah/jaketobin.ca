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
		font-weight: 400;
		line-height: 1.6;
		color: var(--mediumGray);
		margin-bottom: 0.75em;
	}

	.sectionMenu li {
		line-height: 1.6;
		margin-bottom: 0.75em;
	}

	.sectionMenu li:last-of-type {
		margin-bottom: 0;
	}

	.sectionMenu li a {
		text-decoration: none;
	}

	@media (hover: hover) {
		.sectionMenu li a:hover {
			text-decoration: underline;
			text-underline-offset: 0.25em;
			text-decoration-thickness: 1px;
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

		.sectionHeader {
			margin-bottom: 1.5em;
			line-height: 1.5;
		}

		.sectionMenu li {
			line-height: 1.5;
			margin-bottom: 0.75em;
		}
	}
</style>
