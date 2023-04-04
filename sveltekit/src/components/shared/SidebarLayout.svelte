<script>
	import { PUBLIC_SVELTEKIT_SITE_URL } from '$env/static/public';

	export let items;
	export let slugPrefix;
</script>

<aside>
	{#each items as item}
		{#if item.pages}
			<section>
				{#if item.showTitle}
					<h2 class="sidebar_section_header">{item.title}</h2>
				{/if}
				<ul class="sidebar_section_list">
					{#each item.pages as page}
						<li>
							<a
								href={`${PUBLIC_SVELTEKIT_SITE_URL}/${slugPrefix}${page.slug.current}`}
								>{page.title}</a
							>
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

	.sidebar_section_header {
		font-size: 1em;
		font-weight: 400;
		line-height: 1.6;
		color: var(--mediumGray);
		margin-bottom: 0.75em;
	}

	.sidebar_section_list li {
		line-height: 1.6;
		margin-bottom: 0.75em;
	}

	.sidebar_section_list li:last-of-type {
		margin-bottom: 0;
	}

	.sidebar_section_list li a {
		text-decoration: none;
	}

	@media (max-width: 768px) {
		aside {
			display: none;
		}
	}

	@media (hover: hover) {
		.sidebar_section_list li a:hover {
			text-decoration: underline;
			text-underline-offset: 0.25em;
			text-decoration-thickness: 1px;
		}
	}
</style>
