<script>
	import { PortableText, DefaultListItem } from '@portabletext/svelte';
	import Grid from '$components/shared/modules/Grid.svelte';
	import CallToAction from '$components/shared/modules/CallToAction.svelte';
	import ImageWithText from '$components/shared/modules/ImageWithText.svelte';
	import CustomTextBlock from '$components/shared/blocks/CustomTextBlock.svelte';
	import ListWrapper from '$components/shared/blocks/ListWrapper.svelte';
	import ListItem from '$components/shared/blocks/ListItem.svelte';
	import PortfolioArtwork from '$components/shared/modules/PortfolioArtwork.svelte';
	import ProductGrid from '$components/shared/modules/ProductGrid.svelte';
	import InternalLink from '$components/shared/blocks/InternalLink.svelte';

	export let value;
</script>

<div class="body">
	<PortableText
		components={{
			types: {
				blockCallToAction: CallToAction,
				blockImageWithText: ImageWithText,
				blockPortfolioArtwork: PortfolioArtwork,
				blockPortfolioGrid: Grid,
				blockProductGrid: ProductGrid,
			},
			block: {
				h2: CustomTextBlock,
				h3: CustomTextBlock,
				h4: CustomTextBlock,
				normal: CustomTextBlock,
			},
			marks: {
				annotationLinkInternal: InternalLink,
			},
			list: {
				bullet: ListWrapper,
				number: ListWrapper,
			},
			listItem: {
				normal: ListItem,
				bullet: ListItem,
				number: ListItem,
			},
		}}
		{value} />
</div>

<style lang="postcss">
	.body :global(.module:has(+ .module)),
	.body :global(.module:has(+ p)),
	.body :global(.module:has(+ h2)),
	.body :global(.module:has(+ h3)) {
		border-bottom: 1px solid var(--black);
		padding-bottom: 2em;
	}

	.body :global(.module:not(:first-of-type)) {
		padding-top: 2em;
	}

	.body :global(.module:has(+ *:not(.module))) {
		margin-bottom: 2em;
	}

	.body :global(p:has(+ .module)) {
		margin-bottom: 2em;
	}
</style>
