<script>
	export let items;
	export let slugPrefix;
</script>

<aside>
	{#each items as item}
		{#if item.pages}
			<section>
				{#if item.showTitle}
					<h2 class="sectionHeader">{item.title}</h2>
				{/if}
				<ul class="sectionList">
					{#each item.pages as page}
						<li>
							<a href={`/${slugPrefix}${page.slug.current}`}>{page.title}</a>
						</li>
					{/each}
				</ul>
			</section>
		{/if}
	{/each}
</aside>

<style lang="postcss">
	aside {
		padding-top: 3.75em;
		display: flex;
		flex-direction: column;
		gap: 3em;
	}

	.sectionHeader {
		font-size: 1em;
		font-weight: 600;
		line-height: 1.6;
		color: var(--mediumGray);
		margin-bottom: 0.75em;
	}

	.sectionList li {
		line-height: 1.6;
		margin-bottom: 0.75em;
	}

	.sectionList li:last-of-type {
		margin-bottom: 0;
	}

	.sectionList li a {
		text-decoration: none;
	}

	@media (max-width: 768px) {
		aside {
			display: none;
		}
	}

	@media (hover: hover) {
		.sectionList li a:hover {
			text-decoration: underline;
			text-underline-offset: 0.25em;
			text-decoration-thickness: 1px;
		}
	}
</style>
