<script>
	import getImageProps from '$lib/utils/getImageProps';
	import SanityImage from '$components/shared/SanityImage.svelte';
	import LinkButton from '$components/shared/LinkButton.svelte';
	import setSlugPrefix from '$lib/utils/setSlugPrefix';

	export let portableText;
	$: ({ value } = portableText);
	$: ({ items, link } = value);
</script>

<div class="grid">
	{#if value.items.length}
		<div class="gridImages">
			{#each items as item}
				<div class="imageWrapper">
					<SanityImage
						image={getImageProps({
							aspectRatio: 1,
							image: item.images.image,
							maxWidth: 800,
						})} />
				</div>
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
		padding-top: 3em;
		padding-bottom: 1.5em;
		margin-top: 2em;
		margin-bottom: 2em;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5em;
		border-top: 1px solid var(--black);
		border-bottom: 1px solid var(--black);
	}

	.gridImages {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		justify-content: center;
		align-items: center;
	}

	.imageWrapper {
		max-width: calc((100% / 4) - 0.75em);
	}

	@media (max-width: 768px) {
		.grid {
			padding-top: 2em;
			padding-bottom: 1.5em;
			margin-top: 2em;
			margin-bottom: 2em;
		}

		.gridImages {
			gap: 1em;
			justify-content: center;
			align-items: center;
		}

		.imageWrapper {
			max-width: calc((100% / 2) - 0.5em);
		}

		.imageWrapper:last-of-type {
			display: block;
		}
	}
</style>
