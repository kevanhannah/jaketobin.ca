<script>
	import getImageProps from '$lib/utils/getImageProps';
	import SanityImage from '$components/shared/SanityImage.svelte';
	import LinkButton from '../shared/LinkButton.svelte';

	export let portableText;
	$: ({ value } = portableText);
	$: ({ items, link } = value);
	$: portfolioImages = items?.map((item) =>
		getImageProps({
			aspectRatio: 1,
			image: item.images[0].image,
			maxWidth: 800,
		})
	);
</script>

<div class="portfolio_preview_section">
	{#if value.items.length}
		<div class="portfolio_images">
			{#each portfolioImages as image}
				<div class="image_wrapper">
					<SanityImage {image} />
				</div>
			{/each}
		</div>
	{/if}
	{#if link}
		<LinkButton href={link.link.slug.current}>{link.text}</LinkButton>
	{/if}
</div>

<style>
	.portfolio_preview_section {
		padding-top: 3em;
		padding-bottom: 1.5em;
		margin-top: 3em;
		margin-bottom: 3em;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5em;
		border-top: 1px solid var(--black);
		border-bottom: 1px solid var(--black);
	}

	.portfolio_images {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5em;
		justify-content: center;
		align-items: center;
	}

	.image_wrapper {
		max-width: calc((100% / 3) - 1em);
	}

	.image_wrapper:last-of-type {
		display: none;
	}

	@media (max-width: 768px) {
		.portfolio_preview_section {
			padding-top: 2em;
			padding-bottom: 1.5em;
			margin-top: 2em;
			margin-bottom: 2em;
		}

		.portfolio_images {
			gap: 1em;
			justify-content: center;
			align-items: center;
		}

		.image_wrapper {
			max-width: calc((100% / 2) - 0.5em);
		}

		.image_wrapper:last-of-type {
			display: block;
		}
	}
</style>
