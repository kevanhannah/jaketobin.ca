<script>
	import getImageProps from '$lib/utils/getImageProps';
	import SanityImage from '$components/shared/SanityImage.svelte';

	export let portableText;

	$: ({ value } = portableText);
	$: ({ body, images, title } = value.portfolioArtwork);
	$: renderedImages = images.map((image) =>
		getImageProps({ image: image?.image })
	);
	$: displayImage = renderedImages[0];

	function changeImage(image) {
		displayImage = image;
	}
</script>

<div class="module portfolioArtwork">
	<SanityImage
		image={displayImage}
		style="aspect-ratio: 1; object-fit: contain; object-position: center;" />
	<div class="textSection">
		<h2 class="title">{title}</h2>
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
		align-items: center;
		gap: 1.25em;

		@media (max-width: 768px) {
			display: flex;
			flex-direction: column;
		}
	}

	.textSection {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1.25em;

		@media (max-width: 768px) {
			justify-content: flex-start;
			gap: 1.5em;
		}
	}

	.body {
		margin-bottom: 0;

		@media (max-width: 768px) {
			order: 3;
		}
	}

	.title {
		@media (max-width: 768px) {
			order: 2;
		}
	}

	.gallery {
		width: 100%;
		display: flex;
		gap: 1em;
		flex-wrap: wrap;

		@media (max-width: 768px) {
			order: 1;
			gap: 0.5em;
		}
	}

	.imageSelectWrapper {
		max-width: calc((100% / 3) - 1em);
		user-select: none;

		@media (max-width: 768px) {
			max-width: calc((100% / 4) - 1em);
			user-select: none;
		}

		@media (hover: hover) {
			&:hover {
				cursor: pointer;
				opacity: 0.8;
			}
		}
	}
</style>
