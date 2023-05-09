<script>
	import SanityImage from '$components/shared/SanityImage.svelte';
	import Badge from '$components/shared/Badge.svelte';

	export let fallbackUrl = '';
	export let images = [];
	export let onSale = false;
	export let soldOut = false;
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
					class:selected={image.src === featuredImage.src}
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
		<div class="mainImageWrapper">
			{#if onSale || soldOut}
				<div class="badges">
					{#if onSale}
						<Badge>On sale</Badge>
					{/if}
					{#if soldOut}
						<Badge reverse>Sold out</Badge>
					{/if}
				</div>
			{/if}
			<SanityImage
				image={featuredImage}
				loading="eager"
				style="aspect-ratio: 1; object-fit: contain; object-position: top;" />
		</div>
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

	.mainImageWrapper {
		position: relative;

		& .badges {
			position: absolute;
			top: 0.75em;
			left: 0.75em;
		}
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.25em;
	}

	.imageWrapper {
		position: relative;
		border-width: 1px;
		border-style: solid;
		border-color: transparent;
		border-radius: 2px;
		transition-property: border-color;
		transition-duration: 250ms;
		transition-timing-function: ease-in-out;
		user-select: none;

		&.selected {
			border-color: var(--black);
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

	.fallbackImage {
		max-width: 100%;
	}

	.singleImage {
		display: none;
	}
</style>
