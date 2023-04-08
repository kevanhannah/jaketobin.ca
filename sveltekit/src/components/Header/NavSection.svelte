<script>
	export let content;
	export let showHeader;
	export let slugPrefix = null;
</script>

<section>
	{#if showHeader}
		<h2 class="section_header">{content.title}</h2>
	{/if}
	<ul class="section_menu">
		{#each content.pages as page}
			<li>
				<a
					href={`../../${
						slugPrefix
							? slugPrefix + '/' + page.slug.current
							: page.slug.current
					}`}>{page.title}</a>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	.section_header {
		font-size: 1em;
		font-weight: 400;
		line-height: 1.6;
		color: #6c6c6c;
		margin-bottom: 0.75em;
	}

	.section_menu li {
		line-height: 1.6;
		margin-bottom: 0.75em;
	}

	.section_menu li:last-of-type {
		margin-bottom: 0;
	}

	.section_menu li a {
		text-decoration: none;
	}

	@media (hover: hover) {
		.section_menu li a:hover {
			text-decoration: underline;
			text-underline-offset: 0.25em;
			text-decoration-thickness: 1px;
		}
	}

	@media (max-width: 1280px) {
		section {
			border-bottom: 1px solid var(--black);
			padding-top: 1.75em;
			padding-bottom: 1.75em;
		}

		section:last-of-type {
			border-bottom: none;
		}

		.section_header {
			margin-bottom: 1.5em;
			line-height: 1.5;
		}

		.section_menu li {
			line-height: 1.5;
			margin-bottom: 0.75em;
		}
	}
</style>
