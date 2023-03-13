<script>
	import { PortableText, DefaultListItem } from '@portabletext/svelte';
	import PortfolioPreview from '$components/Commission/PortfolioPreview.svelte';
	import CustomTextBlock from '$components/Commission/CustomTextBlock.svelte';
	import ListWrapper from '$components/Commission/ListWrapper.svelte';
	import ListItem from '$components/Commission/ListItem.svelte';

	export let data;
	$: ({ content, image } = data);
</script>

<div class="commission_page_content">
	<PortableText
		components={{
			block: {
				h2: CustomTextBlock,
				h3: CustomTextBlock,
				h4: CustomTextBlock,
				normal: CustomTextBlock,
			},
			types: {
				portfolioPreview: PortfolioPreview,
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
		value={content}
	/>
</div>
