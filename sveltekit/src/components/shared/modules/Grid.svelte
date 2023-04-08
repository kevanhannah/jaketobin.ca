<script>
	import getImageProps from '$lib/utils/getImageProps';
	import SanityImage from '$components/shared/SanityImage.svelte';
	import LinkButton from '$components/shared/LinkButton.svelte';
	import setSlugPrefix from '$lib/utils/setSlugPrefix';
	import ProductCard from '../ProductCard.svelte';

	export let portableText;
	$: ({ value } = portableText);
	$: ({ items, title, link } = value);
</script>

<div class="grid module">
	{#if title}
		<h2 class="gridTitle">{title}</h2>
	{/if}
	{#if value.items.length}
		<div class="gridImages">
			{#each items as item}
				{#if item._type === 'product'}
					<div class="imageWrapper">
						<ProductCard
							handle={item.store.slug.current}
							src={getImageProps({ aspectRatio: 1, image: item.images.image })[
								'src'
							]}
							srcset={getImageProps({
								aspectRatio: 1,
								image: item.images.image,
							})['srcset']}
							title={item.store.title} />
					</div>
				{:else}
					<div class="imageWrapper">
						<SanityImage
							image={getImageProps({
								aspectRatio: 1,
								image: item.images.image,
								maxWidth: 800,
							})} />
					</div>
				{/if}
			{/each}
		</div>
	{/if}
	{#if link}
		<LinkButton
			href={`${setSlugPrefix(link.reference._type)}${
				link.reference.slug.current
			}`}>{link.title}</LinkButton>
	{/if}
</div>

<style lang="postcss">
	.grid {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5em;
	}

	.gridTitle {
		margin-bottom: 0;
	}

	.gridImages {
		display: flex;
		flex-wrap: wrap;
		gap: 1.25em;
		justify-content: space-between;
		align-items: flex-start;
	}

	.imageWrapper {
		max-width: calc((100% / 4) - 1em);
	}

	@media (max-width: 768px) {
		.gridTitle {
			font-size: 1.75em;
		}

		.imageWrapper {
			max-width: calc((100% / 2) - 0.75em);
		}

		.imageWrapper:last-of-type {
			display: block;
		}
	}
</style>
