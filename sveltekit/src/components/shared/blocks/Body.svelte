<script>
	import { PortableText, DefaultListItem } from '@portabletext/svelte';
	import Grid from '$components/shared/modules/Grid.svelte';
	import CallToAction from '$components/shared/modules/CallToAction.svelte';
	import ImageWithText from '$components/shared/modules/ImageWithText.svelte';
	import CustomTextBlock from '$components/shared/blocks/CustomTextBlock.svelte';
	import ListWrapper from '$components/shared/blocks/ListWrapper.svelte';
	import ListItem from '$components/shared/blocks/ListItem.svelte';
	import ProductGrid from '$components/shared/modules/ProductGrid.svelte';

	export let value;
</script>

<PortableText
	components={{
		block: {
			h2: CustomTextBlock,
			h3: CustomTextBlock,
			h4: CustomTextBlock,
			normal: CustomTextBlock,
		},
		types: {
			blockCallToAction: CallToAction,
			blockImageWithText: ImageWithText,
			blockPortfolioGrid: Grid,
			blockProductGrid: ProductGrid,
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

<style>
	:global(div:is(.module):not(:last-of-type)) {
		border-bottom: 1px solid var(--black);
	}

	:global(div:is(.module):first-of-type) {
		padding-top: 0;
	}
</style>
