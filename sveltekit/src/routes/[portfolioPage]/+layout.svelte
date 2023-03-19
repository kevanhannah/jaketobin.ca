<script>
	import { page } from '$app/stores';

	$: ({ portfolioCategories } = $page.data);
</script>

<div class="portfolio_page">
	<aside class="portfolio_sidebar">
		{#each portfolioCategories as category}
			{#if category.pages}
				<section>
					<h2 class="sidebar_section_header">{category.name}</h2>
					<ul class="sidebar_section_list">
						{#each category.pages as page}
							<li><a href={page.slug.current}>{page.title}</a></li>
						{/each}
					</ul>
				</section>
			{/if}
		{/each}
	</aside>
	<slot />
</div>

<style>
	.portfolio_page {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: 1.5em;
	}

	.portfolio_sidebar {
		padding-top: 3.75em;
		display: flex;
		flex-direction: column;
		gap: 3em;
	}

	.sidebar_section_header {
		font-size: 1em;
		font-weight: 300;
		line-height: 1.6;
		color: #6c6c6c;
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

	.sidebar_section_list li a:hover {
		text-decoration: underline;
		text-underline-offset: 0.25em;
		text-decoration-thickness: 1px;
	}

	@media (max-width: 768px) {
		.portfolio_page {
			display: flex;
			flex-direction: column;
		}

		.portfolio_sidebar {
			display: none;
		}
	}
</style>
