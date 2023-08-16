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
						class:selected={image.src === displayImage.src}
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
		--columns: 3;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: 1.25em;

		@media (max-width: 768px) {
			--columns: 4;
			order: 1;
		}
	}

	.imageSelectWrapper {
		position: relative;
		border-width: 1px;
		border-style: solid;
		border-color: transparent;
		border-radius: 2px;
		box-shadow: 0;
		transition-property: border-color, box-shadow;
		transition-duration: 50ms;
		transition-timing-function: ease-in-out;
		user-select: none;

		&.selected {
			border-color: var(--black);
			box-shadow: 0 0 8px 2px var(--mediumGray);
		}

		&:before {
			content: '';
			display: block;
			height: 100%;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-color: rgba(255, 255, 255, 0);
			transition-property: background-color;
			transition-duration: 250ms;
			transition-timing-function: ease-in-out;
		}

		@media (hover: hover) {
			&:hover {
				cursor: pointer;

				&:before {
					background-color: rgba(255, 255, 255, 0.15);
				}
			}
		}
	}
</style>
