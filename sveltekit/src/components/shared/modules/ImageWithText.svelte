<script>
	import getImageProps from '$lib/utils/getImageProps';
	import SanityImage from '$components/shared/SanityImage.svelte';
	import LinkButton from '$components/shared/LinkButton.svelte';
	import setSlugPrefix from '$lib/utils/setSlugPrefix';

	export let portableText;
	$: ({ value } = portableText);
	$: ({ body, content, layout, link, title } = value);
</script>

<div class="imageWithText">
	<SanityImage
		image={getImageProps({ image: content.images[0].image, maxWidth: 600 })}
	/>
	<div class="textSection" class:reverse={layout === 'right'}>
		{#if title}
			<h3 class="title">{title}</h3>
		{/if}
		{#if body}
			<p class="body">{body}</p>
		{/if}
		{#if link}
			<LinkButton
				href={`${setSlugPrefix(link.reference._type)}${
					link.reference.slug.current
				}`}>{link.title}</LinkButton
			>
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

	.body {
		margin-bottom: 0;
	}

	.title {
		font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-weight: 900;
		font-size: 1.75em;
	}

	.text_content.reverse {
		order: -1;
	}

	@media (max-width: 768px) {
		.imageWithText {
			display: flex;
			flex-direction: column;
		}

		.module_header {
			font-size: 2em;
			margin-bottom: 0.75em;
			line-height: 1.25;
		}
	}
</style>
