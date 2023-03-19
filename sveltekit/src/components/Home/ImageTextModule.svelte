<script>
	import { PortableText } from '@portabletext/svelte';
	import SanityImage from '$components/shared/SanityImage.svelte';
	import Button from '$components/shared/Button.svelte';
	import getImageProps from '$lib/utils/getImageProps';

	export let moduleData;
	const { content, image, link, reverse, title } = moduleData;

	const imageData = getImageProps({ aspectRatio: 1.333, image: image.image });
</script>

<div class="image_text">
	<SanityImage image={imageData} loading="eager" />
	<div class="text_content" class:reverse>
		{#if content}
			<h2 class="module_header">{title}</h2>
		{/if}
		<PortableText value={content} />
		{#if link && link.text}
			<Button style="margin-top: 1em;">{link.text}</Button>
		{/if}
	</div>
</div>

<style>
	.image_text {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: 1.5em;
	}

	.text_content.reverse {
		order: -1;
	}

	@media (max-width: 768px) {
		.image_text {
			display: flex;
			flex-direction: column;
		}

		.module_header {
			font-size: 1.75em;
			line-height: 1.25;
		}
	}
</style>
