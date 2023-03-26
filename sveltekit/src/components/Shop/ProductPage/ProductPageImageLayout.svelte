<script>
	export let images;
	$: mainImage = images[0];

	function changeImage(image) {
		mainImage = image;
	}
</script>

<div>
	<div class="gallery">
		{#each images as image}
			<img
				alt={image.altText}
				class="gallery_image"
				on:click={changeImage(image)}
				on:keypress={changeImage(image)}
				role="button"
				src={image.src}
				tabindex="0"
			/>
		{/each}
	</div>
	<img alt={mainImage.altText} class="main_image" src={mainImage.src} />
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 1fr 4fr;
		gap: 1.25em;
	}

	.main_image {
		width: 100%;
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
