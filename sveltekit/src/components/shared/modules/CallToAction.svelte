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

		&.reverse {
			& .textSection {
				order: -1;

				@media (max-width: 768px) {
					order: 0;
				}
			}
		}

		@media (max-width: 768px) {
			max-width: 100%;
			display: flex;
			flex-direction: column;
		}
	}

	.textSection {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.25em;

		& :global(p:last-of-type) {
			margin-bottom: 0;
		}
	}

	.title {
		font-size: 2.25em;
		margin-bottom: 0;

		@media (max-width: 768px) {
			font-size: 1.75em;
		}
	}

	.productImageLink {
		@media (hover: hover) {
			&:hover {
				opacity: 0.8;
			}
		}
	}

	.productTitleLink {
		text-decoration: none;
	}
</style>
