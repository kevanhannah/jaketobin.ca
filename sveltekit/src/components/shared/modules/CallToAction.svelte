<script>
	import { PUBLIC_SVELTEKIT_SITE_URL } from '$env/static/public';
	import getImageProps from '$lib/utils/getImageProps';
	import SanityImage from '$components/shared/SanityImage.svelte';
	import LinkButton from '$components/shared/LinkButton.svelte';

	export let portableText;

	$: ({ value } = portableText);
	$: console.log(value);
	$: ({ body, content, layout, links, title } = value);
</script>

<div
	class="callToAction module"
	class:typeIsProduct={content._type === 'productWithVariant'}>
	{#if content._type === 'productWithVariant'}
		<a
			href={`${PUBLIC_SVELTEKIT_SITE_URL}/shop/products/${content.product.store.slug.current}`}>
			<SanityImage
				image={getImageProps({
					aspectRatio: 1.333,
					image: content.product.images.image,
				})}
				style="object-fit: cover;" />
		</a>
	{:else}
		<SanityImage
			image={getImageProps({
				aspectRatio: 1.333,
				image: content,
			})}
			style="object-fit: cover;" />
	{/if}
	<div class="textSection" class:reverse={layout === 'right'}>
		{#if title}
			<h2 class="title">{title}</h2>
		{/if}
		{#if body}
			<p>{body}</p>
		{/if}
		{#if links && links[0].reference._type === 'product'}
			<LinkButton
				href={`${PUBLIC_SVELTEKIT_SITE_URL}/shop/products/${links[0].reference?.store?.slug?.current}`}
				>{links[0].title}</LinkButton>
		{/if}
	</div>
</div>

<style lang="postcss">
	.callToAction {
		max-width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		padding-top: 2em;
		padding-bottom: 2em;
		gap: 1.5em;
	}

	.textSection {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1em;
	}

	.reverse {
		order: -1;
		align-items: flex-end;
	}

	.title {
		font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-weight: 900;
		font-size: 1.75em;
		margin-bottom: 0;
	}

	@media (max-width: 768px) {
		.callToAction {
			max-width: 100%;
		}

		.callToAction:not(.typeIsProduct) {
			display: flex;
			flex-direction: column;
		}

		.reverse {
			order: 1;
		}
	}
</style>
