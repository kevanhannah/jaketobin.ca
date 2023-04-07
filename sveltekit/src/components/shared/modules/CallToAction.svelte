<script>
	import { PUBLIC_SVELTEKIT_SITE_URL } from '$env/static/public';
	import { PortableText } from '@portabletext/svelte';
	import getImageProps from '$lib/utils/getImageProps';
	import SanityImage from '$components/shared/SanityImage.svelte';
	import LinkButton from '$components/shared/LinkButton.svelte';
	import setSlugPrefix from '$lib/utils/setSlugPrefix';

	export let portableText;
	
	$: ({ value } = portableText);
	$: ({ body, content, layout, link, title } = value);
</script>

<div class="callToAction">
	<a href={`${PUBLIC_SVELTEKIT_SITE_URL}/shop/products/${content.store.slug.current}`}>
		<SanityImage
			image={getImageProps({
				image:
					content.images.image,
			})}
			style="object-fit: cover;"
		/>
	</a>
	<div class="textSection" class:reverse={layout === 'right'}>
		{#if title}
			<h2 class="title">{title}</h2>
		{/if}
		{#if body}
			<p>{body}</p>
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
	.callToAction {	
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: 1.5em;
		margin-top: 2em;
    margin-bottom: 2em;
		margin-left: 4em;
		margin-right: 4em;
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
		.callToAction {
			display: flex;
			flex-direction: column;
		}

		.reverse {
			order: 1;
		}
	}
</style>
