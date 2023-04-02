<script>
	import { PUBLIC_SVELTEKIT_SITE_URL } from '$env/static/public';

	export let content;
	export let slugPrefix = null;
</script>

<section>
	<h2 class="section_header">
		{content.name}
	</h2>
	<ul class="section_menu">
		{#each content.pages as page}
			<li>
				<a
					href={`${PUBLIC_SVELTEKIT_SITE_URL}/${
						slugPrefix
							? slugPrefix + '/' + page.slug.current
							: page.slug.current
					}`}>{page.title}</a
				>
			</li>
		{/each}
	</ul>
</section>

<style>
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

	@media (max-width: 1150px) {
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
