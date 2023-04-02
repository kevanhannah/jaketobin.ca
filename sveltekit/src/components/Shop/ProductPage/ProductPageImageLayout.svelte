<script>
	import getShopifyImageProps from '$lib/utils/getShopifyImageProps';
	export let images;

	$: responsiveImages = images.edges.map((image) =>
		getShopifyImageProps(image.node)
	);
	$: featuredImage = responsiveImages[0];

	function changeImage(image) {
		featuredImage = image;
	}
</script>

<div>
	<div class="gallery">
		{#each responsiveImages as image}
			<img
				alt={image.alt}
				class="gallery_image"
				on:click={changeImage(image)}
				on:keypress={changeImage(image)}
				role="button"
				src={image.src}
				srcset={image.srcset}
				sizes="15vw"
				tabindex="0"
			/>
		{/each}
	</div>
	<img
		alt={featuredImage.alt}
		class="main_image"
		loading="eager"
		sizes="(max-width: 800px) 100vw, 60vw"
		src={featuredImage.src}
		srcset={featuredImage.srcset}
	/>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 1fr 4fr;
		gap: 1.25em;
	}

	.main_image {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
	}

	.gallery {
		display: flex;
		flex-direction: column;
		gap: 1.25em;
	}

	.gallery_image {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		cursor: pointer;
		image-rendering: -webkit-optimize-contrast;
		image-rendering: crisp-edges;
	}

	.gallery_image:hover {
		opacity: 0.8;
	}

	@media (max-width: 768px) {
		div {
			display: flex;
			flex-direction: column-reverse;
		}

		.gallery {
			flex-direction: row;
			justify-content: center;
		}

		.gallery_image {
			width: calc((100% / 4) - 0.75em);
		}
	}
</style>
