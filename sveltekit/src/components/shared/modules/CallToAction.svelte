<script>
	import { PortableText } from '@portabletext/svelte';
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
			href={`/shop/products/${content.product.store.slug.current}`}>
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
					href={`/shop/products/${content.product.store.slug.current}`}>
					<h2 class="title">{title}</h2>
				</a>
			{:else}
				<h2 class="title">{title}</h2>
			{/if}
		{/if}
		{#if body}
			<div class="body" class:reverse={layout === 'right'}>
				<PortableText value={body} />
			</div>
		{/if}
		{#if links}
			<LinkButton link={links} />
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
		gap: 1.25em;
	}

	.title {
		font-size: 2.25em;
		margin-bottom: 0;
	}

	.textSection :global(p:last-of-type) {
		margin-bottom: 0;
	}

	.reverse .textSection {
		order: -1;
		align-items: flex-end;
		text-align: right;
	}

	.productTitleLink {
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.callToAction {
			max-width: 100%;
			display: flex;
			flex-direction: column;
		}

		.title {
			font-size: 1.75em;
		}

		.reverse .textSection {
			order: 0;
			align-items: flex-start;
			text-align: left;
		}
	}

	@media (hover: hover) {
		.productImageLink:hover {
			opacity: 0.8;
		}
	}
</style>
