<script>
	import { PortableText, DefaultListItem } from '@portabletext/svelte';
	import Grid from '$components/shared/modules/Grid.svelte';
	import ImageWithText from '$components/shared/modules/ImageWithText.svelte';
	import CustomTextBlock from '$components/shared/blocks/CustomTextBlock.svelte';
	import ListWrapper from '$components/shared/blocks/ListWrapper.svelte';
	import ListItem from '$components/shared/blocks/ListItem.svelte';

	import AddToCartButton from '$components/Shop/ProductPage/AddToCartButton.svelte';
	import ProductPageImageLayout from '$components/Shop/ProductPage/ProductPageImageLayout.svelte';
	import Accordion from '$components/shared/modules/Accordion.svelte';

	export let body;
	export let images;
	export let store;

	$: ({ descriptionHtml, title, variants } = store);
	$: activeVariant =
		store.variants.find((variant) => variant.store.inventory.isAvailable) ??
		store.variants[0];

	function setActiveVariant(variant) {
		activeVariant = variant;
	}
</script>

<main>
	<ProductPageImageLayout {images} />
	<div class="productPageInformation">
		<div class="variantInfo">
			<h2 class="productHeader">{title}</h2>
			<div class="priceSection">
				<span class="priceCurrency">CA</span>
				<span class="priceText">
					{new Intl.NumberFormat('en-CA', {
						style: 'currency',
						currency: 'CAD',
					}).format(activeVariant.store.price)}
				</span>
			</div>
			{#if variants[0].store.title !== 'Default Title'}
				<div class="variantsSection">
					<ul class="variantsList">
						{#each variants as variant}
							<li>
								<button
									class="variantButton"
									class:selected={variant.store.gid === activeVariant.store.gid}
									class:disabled={!variant.store.inventory.isAvailable}
									on:click={setActiveVariant(variant)}
									>{variant.store.title}</button
								>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
			<AddToCartButton variant={activeVariant} />
		</div>
		<div class="productDescription">
			{#if body}
				<PortableText
					components={{
						block: {
							h2: CustomTextBlock,
							h3: CustomTextBlock,
							h4: CustomTextBlock,
							normal: CustomTextBlock,
						},
						types: {
							blockAccordion: Accordion,
							blockImageWithText: ImageWithText,
							blockPortfolioGrid: Grid,
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
			{:else}
				{@html descriptionHtml}
			{/if}
		</div>
	</div>
</main>

<style lang="postcss">
	main {
		display: grid;
		grid-template-columns: 1fr 5fr 4fr;
		gap: 1.25em;
	}

	.productPageInformation {
		display: flex;
		flex-direction: column;
		gap: 1.75em;
	}

	.productHeader {
		margin-bottom: 0;
	}

	.variantInfo {
		display: flex;
		flex-direction: column;
		gap: 1.5em;
	}

	.priceSection {
		display: flex;
		gap: 0.25em;
		align-items: center;
	}

	.priceCurrency {
		font-size: 1em;
		font-weight: 600;
	}

	.priceText {
		font-size: 1.25em;
		font-weight: 400;
	}

	.variantsList {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		gap: 0.5em;
		margin: 0;
	}

	.variantsList li {
		list-style-type: none;
		margin: 0;
	}

	.variantButton {
		padding: 0.25em 0.5em;
		color: #666666;
		background: none;
		border: 1px solid #eaeaea;
		border-radius: 0.5em;
		font-size: 1em;
		font-weight: 600;
		transition-property: border-color, background, color, transform, box-shadow;
		transition-duration: 0.15s;
		transition-timing-function: ease;
	}

	.variantButton.disabled {
		color: var(--lightGray);
	}

	.variantButton:not(.disabled).selected {
		color: var(--paperWhite);
		background: var(--black);
		cursor: default;
	}

	.variantButton:is(.disabled).selected {
		color: var(--paperWhite);
		background: var(--lightGray);
		cursor: default;
	}

	@media (max-width: 1150px) {
		main {
			grid-template-columns: 5fr 4fr;
		}
	}

	@media (max-width: 768px) {
		main {
			display: flex;
			flex-direction: column;
		}
	}

	@media (hover: hover) {
		.variantButton:not(.selected):not(.disabled):hover {
			color: var(--black);
			border: 1px solid var(--black);
		}

		.variantButton:not(.selected):is(.disabled):hover {
			color: var(--mediumGray);
			border: 1px solid var(--mediumGray);
		}
	}
</style>
