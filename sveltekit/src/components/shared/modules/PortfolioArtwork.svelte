<script>
	import getImageProps from '$lib/utils/getImageProps';
	import SanityImage from '$components/shared/SanityImage.svelte';

	export let portableText;

	$: ({ value } = portableText);
	$: ({ body, images, title } = value.portfolioArtwork);
	$: renderedImages = images.map((image) =>
		getImageProps({ image: image.image })
	);
	$: displayImage = renderedImages[0];

	function changeImage(image) {
		displayImage = image;
	}
</script>

<div class="module portfolioArtwork">
	<SanityImage
		image={displayImage}
		style="object-fit: contain; object-position: top; cursor: pointer; image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges; cursor: default;" />
	<div class="textSection">
		<h3 class="title">{title}</h3>
		{#if body}
			<p class="body">{body}</p>
		{/if}
		{#if images.length > 1}
			<div class="gallery">
				{#each renderedImages as image}
					<div
						class="imageSelectWrapper"
						on:click={changeImage(image)}
						on:keypress={changeImage(image)}
						role="button"
						tabindex="0">
						<SanityImage
							{image}
							loading="eager"
							style="aspect-ratio:1; object-fit: cover;" />
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.portfolioArtwork {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5em;
	}

	.textSection {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1.25em;
	}

	.title {
		font-size: 1.75em;
		font-weight: 900;
	}

	.body {
		margin-bottom: 0;
	}

	.gallery {
		width: 100%;
		display: flex;
		gap: 1em;
		flex-wrap: wrap;
	}

	.imageSelectWrapper {
		max-width: calc((100% / 3) - 1em);
		user-select: none;
	}

	@media (max-width: 768px) {
		.portfolioArtwork {
			display: flex;
			flex-direction: column;
		}

		.textSection {
			justify-content: flex-start;
			gap: 1.5em;
		}

		.title {
			font-size: 1.5em;
			order: 2;
		}

		.body {
			order: 3;
		}

		.gallery {
			order: 1;
		}

		.imageSelectWrapper {
			max-width: calc((100% / 4) - 1em);
			user-select: none;
		}
	}

	@media (hover: hover) {
		.imageSelectWrapper:hover {
			cursor: pointer;
			opacity: 0.8;
		}
	}
</style>
