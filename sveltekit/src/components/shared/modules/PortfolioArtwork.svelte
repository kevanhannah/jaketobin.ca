<script>
	import getImageProps from '$lib/utils/getImageProps';
	import SanityImage from '$components/shared/SanityImage.svelte';

	export let portableText;

	$: ({ value } = portableText);
	$: ({ description, images, title } = value.portfolioArtwork);
	$: renderedImages = images.map((image) =>
		getImageProps({ image: image.image })
	);
	$: displayImage = renderedImages[0];

	function changeImage(image) {
		displayImage = image;
	}
</script>

<div class="portfolioArtwork">
	<SanityImage image={displayImage} />
	<div class="portfolioItem_info">
		<div>
			<h3 class="portfolioItem_header">{title}</h3>
			{#if description}
				<p>{description}</p>
			{/if}
		</div>
		{#if images.length > 1}
			<div class="portfolioItem_images_list">
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
