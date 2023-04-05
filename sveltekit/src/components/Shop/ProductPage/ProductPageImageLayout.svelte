<script>
  import SanityImage from '$components/shared/SanityImage.svelte';

	export let images;

	$: featuredImage = images[0];

	function changeImage(image) {
		featuredImage = image;
	}
</script>

<div class="productPageImageLayout">
	<div class="gallery">
		{#each images as image}
      <div
        class="imageWrapper"
        on:click={changeImage(image)}
        on:keypress={changeImage(image)}
        tabindex="0">
        <SanityImage {image} style={`aspect-ratio: 1; object-fit: cover; display: block`} />
      </div>
		{/each}
	</div>
  <SanityImage image={featuredImage} loading="eager" style="aspect-ratio: 1;
		object-fit: cover;
		cursor: pointer;
		image-rendering: -webkit-optimize-contrast;
		image-rendering: crisp-edges;" />
</div>

<style lang="postcss">
	.productPageImageLayout {
		display: grid;
		grid-template-columns: 1fr 4fr;
		gap: 1.25em;
	}

	.gallery {
		display: flex;
		flex-direction: column;
		gap: 1.25em;
	}

	.imageWrapper {
		width: 100%;
    cursor: pointer;
	}

	.imageWrapper:hover {
		opacity: 0.8;
	}

	@media (max-width: 1150px) {
		.productPageImageLayout {
			display: flex;
			flex-direction: column-reverse;
		}

		.gallery {
			flex-direction: row;
		}

		.imageWrapper {
			width: calc((100% / 4) - 0.75em);
		}
	}
</style>
