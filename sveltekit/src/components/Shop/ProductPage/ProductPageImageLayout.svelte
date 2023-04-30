<script>
	import SanityImage from '$components/shared/SanityImage.svelte';

	export let fallbackUrl = '';
	export let images = [];
	export let title = '';

	$: featuredImage = images?.[0] ?? null;

	function changeImage(image) {
		featuredImage = image;
	}
</script>

<div class="productPageImageLayout">
	{#if images && images.length}
		<div class="gallery" class:singleImage={images.length <= 1}>
			{#each images as image}
				<div
					class="imageWrapper"
					on:click={changeImage(image)}
					on:keypress={changeImage(image)}
					role="button"
					tabindex="0">
					<SanityImage
						{image}
						style="aspect-ratio: 1; object-fit: cover; display: block;" />
				</div>
			{/each}
		</div>
		<SanityImage
			image={featuredImage}
			loading="eager"
			style="aspect-ratio: 1; object-fit: contain; object-position: top;" />
	{:else}
		<div />
		<img src={fallbackUrl} alt={title} class="fallbackImage" />
	{/if}
</div>

<style lang="postcss">
	.productPageImageLayout {
		display: flex;
		flex-direction: column-reverse;
		justify-content: flex-end;
		gap: 1.25em;
	}

	.gallery {
		display: flex;
		flex-direction: row;
		gap: 1.25em;
	}

	.imageWrapper {
		width: calc((100% / 4) - 0.75em);

		@media (hover: hover) {
			&:hover {
				opacity: 0.8;
				cursor: pointer;
			}
		}
	}

	.fallbackImage {
		max-width: 100%;
	}

	.singleImage {
		display: none;
	}
</style>
