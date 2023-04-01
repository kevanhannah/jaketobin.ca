<script>
	export let images;
	$: featuredImage = images.edges[0].node;

	function changeImage(image) {
		featuredImage = image;
	}
</script>

<div>
	<div class="gallery">
		{#each images.edges as image}
			<img
				alt={image.node.altText}
				class="gallery_image"
				on:click={changeImage(image.node)}
				on:keypress={changeImage(image.node)}
				role="button"
				src={image.node.originalSrc}
				tabindex="0"
			/>
		{/each}
	</div>
	<img
		alt={featuredImage.altText}
		class="main_image"
		src={featuredImage.originalSrc}
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
