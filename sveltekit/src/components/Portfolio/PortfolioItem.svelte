<script>
	import { PortableText } from '@portabletext/svelte';
	import SanityImage from '$components/shared/SanityImage.svelte';

	export let item;
	$: ({ description, renderedImages: images, title } = item);
	$: displayImage = images[0];

	function changeImage(image) {
		displayImage = image;
	}
</script>

<div class="portfolioItem">
	<SanityImage image={displayImage} />
	<div class="portfolioItem_info">
		<div>
			<h3 class="portfolioItem_header">{title}</h3>
			{#if description}
				<PortableText value={description} />
			{/if}
		</div>
		{#if images.length > 1}
			<div class="portfolioItem_images_list">
				{#each images as image}
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
	.portfolioItem {
		width: 100%;
		padding-top: 3em;
		padding-bottom: 1.5em;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5em;
		border-top: 1px solid var(--black);
	}

	.portfolioItem:first-of-type {
		border-top: none;
	}

	.portfolioItem_info {
		padding-top: 0.5em;
		padding-bottom: 0.5em;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.portfolioItem_header {
		font-family: var(--poppins);
		font-size: 1.75em;
		font-weight: 900;
		margin-bottom: 1em;
	}

	.portfolioItem_images_list {
		width: 100%;
		display: flex;
		gap: 1em;
		flex-wrap: wrap;
	}

	.imageSelectWrapper {
		max-width: calc((100% / 4) - 1em);
		user-select: none;
	}

	@media (hover: hover) {
		.imageSelectWrapper:hover {
			cursor: pointer;
			opacity: 0.8;
		}
	}

	@media (max-width: 768px) {
		.portfolioItem {
			display: flex;
			flex-direction: column;
		}

		.portfolioItem_info {
			flex-direction: column-reverse;
			justify-content: flex-start;
			gap: 1.5em;
		}

		.portfolioItem_header {
			font-size: 1.5em;
			margin-bottom: 0.5em;
		}
	}
</style>
