<script>
	import { PortableText, DefaultListItem } from '@portabletext/svelte';
	import PageLayout from '$components/shared/PageLayout.svelte';
	import Grid from '$components/shared/modules/Grid.svelte';
	import ImageWithText from '$components/shared/modules/ImageWithText.svelte';
	import CustomTextBlock from '$components/shared/blocks/CustomTextBlock.svelte';
	import ListWrapper from '$components/shared/blocks/ListWrapper.svelte';
	import ListItem from '$components/shared/blocks/ListItem.svelte';
	import ProductGrid from '$components/shared/modules/ProductGrid.svelte';

	export let data;
	$: ({ pageContent } = data);
	$: ({ body } = pageContent);
</script>

<PageLayout>
	<div class="commissionPageContent">
		<PortableText
			components={{
				block: {
					h2: CustomTextBlock,
					h3: CustomTextBlock,
					h4: CustomTextBlock,
					normal: CustomTextBlock,
				},
				types: {
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
			value={body}
		/>
	</div>
</PageLayout>
