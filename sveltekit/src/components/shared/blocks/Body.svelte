<script>
	import { PortableText, DefaultListItem } from '@portabletext/svelte';
	import Grid from '$components/shared/modules/Grid.svelte';
	import CallToAction from '$components/shared/modules/CallToAction.svelte';
	import CustomTextBlock from '$components/shared/blocks/CustomTextBlock.svelte';
	import ListWrapper from '$components/shared/blocks/ListWrapper.svelte';
	import ListItem from '$components/shared/blocks/ListItem.svelte';
	import PortfolioArtwork from '$components/shared/modules/PortfolioArtwork.svelte';
	import Publications from '$components/shared/modules/Publications.svelte';
	import EmailLink from '$components/shared/blocks/EmailLink.svelte';
	import ExternalLink from '$components/shared/blocks/ExternalLink.svelte';
	import InternalLink from '$components/shared/blocks/InternalLink.svelte';

	export let value;
</script>

<div class="body">
	<PortableText
		components={{
			types: {
				blockCallToAction: CallToAction,
				blockPortfolioArtwork: PortfolioArtwork,
				blockGrid: Grid,
				blockPortfolioGrid: Grid,
				blockPortfolioPublications: Publications,
			},
			block: {
				h2: CustomTextBlock,
				h3: CustomTextBlock,
				h4: CustomTextBlock,
				normal: CustomTextBlock,
			},
			marks: {
				annotationLinkEmail: EmailLink,
				annotationLinkExternal: ExternalLink,
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
	.body :global(.module) {
		padding-top: 2em;
		padding-bottom: 2em;
		border-top: 1px solid var(--black);
		border-bottom: 1px solid var(--black);
	}

	.body :global(.module:has(+ .module)) {
		border-bottom: 0;
	}

	.body :global(.module:is(:first-child)) {
		padding-top: 0;
		border-top: 0;
	}

	.body :global(.module:is(:last-child)) {
		padding-bottom: 0;
		border-bottom: 0;
	}

	.body :global(.module:has(+ h2)),
	.body :global(.module:has(+ h3)),
	.body :global(.module:has(+ p)) {
		margin-bottom: 2em;
	}
</style>
