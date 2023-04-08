<script>
	import { PUBLIC_SVELTEKIT_SITE_URL } from '$env/static/public';
	import getImageProps from '$lib/utils/getImageProps';
	import SanityImage from '$components/shared/SanityImage.svelte';
	import LinkButton from '$components/shared/LinkButton.svelte';

	export let portableText;

	$: ({ value } = portableText);
	$: ({ body, content, layout, links, title } = value);
</script>

<div class="callToAction module" class:reverse={layout === 'right'}>
	{#if content._type === 'productWithVariant'}
		<a
			class="productImageLink"
			href={`${PUBLIC_SVELTEKIT_SITE_URL}/shop/products/${content.product.store.slug.current}`}>
			<SanityImage
				image={getImageProps({
					aspectRatio: content.aspectRatio ?? 1,
					image: content.product.images.image,
				})}
				style="object-fit: cover;" />
		</a>
	{:else}
		<SanityImage
			image={getImageProps({
				aspectRatio: content.aspectRatio ?? 1,
				image: content.image,
			})}
			style="object-fit: cover;" />
	{/if}
	<div class="textSection">
		{#if title}
			{#if content._type === 'productWithVariant'}
				<a
					class="productTitleLink"
					href={`${PUBLIC_SVELTEKIT_SITE_URL}/shop/products/${content.product.store.slug.current}`}>
					<h2 class="title">{title}</h2>
				</a>
			{:else}
				<h2 class="title">{title}</h2>
			{/if}
		{/if}
		{#if body}
			<p>{body}</p>
		{/if}
		{#if links && links[0].reference._type === 'product'}
			<LinkButton
				href={`${PUBLIC_SVELTEKIT_SITE_URL}/shop/products/${links[0].reference?.store?.slug?.current}`}
				>{links[0].title}</LinkButton>
		{:else if links && links[0].reference._type === 'collection'}
			<LinkButton
				href={`${PUBLIC_SVELTEKIT_SITE_URL}/shop/collections/${links[0].reference?.store?.slug?.current}`}
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
		gap: 1.5em;
	}

	.textSection {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1em;
	}

	.title {
		font-size: 2.25em;
	}

	.textSection p {
		margin-bottom: 0;
	}

	.reverse .textSection {
		order: -1;
		align-items: flex-end;
	}

	.productTitleLink {
		text-decoration: none;
	}

	.title {
		margin-bottom: 0;
	}

	@media (max-width: 768px) {
		.callToAction {
			max-width: 100%;
			display: flex;
			flex-direction: column;
			gap: 0.75em;
		}

		.textSection {
			gap: 0.75em;
		}

		.title {
			font-size: 1.75em;
		}

		.reverse .textSection {
			order: 0;
			align-items: flex-start;
		}
	}

	@media (hover: hover) {
		.productImageLink:hover {
			opacity: 0.8;
		}
	}
</style>
