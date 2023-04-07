<script>
	import { PortableText } from '@portabletext/svelte';
	import getImageProps from '$lib/utils/getImageProps';
	import SanityImage from '$components/shared/SanityImage.svelte';
	import LinkButton from '$components/shared/LinkButton.svelte';
	import setSlugPrefix from '$lib/utils/setSlugPrefix';

	export let portableText;
	$: ({ value } = portableText);
	$: ({ aspectRatio = 1, body, content, layout, link, title } = value);
</script>

<div class="imageWithText">
	<SanityImage
		image={getImageProps({
			aspectRatio,
			image:
				content[0]._type === 'module.image'
					? content[0].image
					: content[0].images[0].image,
			maxWidth: 600,
		})} />
	<div class="textSection" class:reverse={layout === 'right'}>
		{#if title}
			<h3 class="title">{title}</h3>
		{/if}
		{#if body}
			<PortableText value={body} />
		{/if}
		{#if link}
			<LinkButton
				href={`${setSlugPrefix(link.reference._type)}${
					link.reference.slug.current
				}`}>{link.title}</LinkButton>
		{/if}
	</div>
</div>

<style lang="postcss">
	.imageWithText {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: 1.5em;
	}

	.textSection {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1em;
	}

	.reverse {
		order: -1;
	}

	.title {
		font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-weight: 900;
		font-size: 1.75em;
	}

	@media (max-width: 768px) {
		.imageWithText {
			display: flex;
			flex-direction: column;
		}

		.reverse {
			order: 1;
		}
	}
</style>
