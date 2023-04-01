<script>
	import AddToCartButton from '$components/Shop/ProductPage/AddToCartButton.svelte';
	import ProductPageImageLayout from '$components/Shop/ProductPage/ProductPageImageLayout.svelte';

	export let product;
	$: ({ descriptionHtml, images, title, variants } = product);
	$: activeVariant = variants.edges[0].node;

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
				<span class="priceCurrency">{activeVariant.priceV2.currencyCode}</span>
				<span class="priceText"
					>{`$${parseInt(activeVariant.priceV2.amount)}`}</span
				>
			</div>
			{#if variants.edges.length > 1}
				<div class="variantsSection">
					<ul class="variantsList">
						{#each variants.edges as variant}
							<li>
								<button
									class="variantButton"
									class:selected={variant.node.id === activeVariant.id}
									on:click={setActiveVariant(variant.node)}
									>{variant.node.title}</button
								>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
			<AddToCartButton variant={activeVariant} />
		</div>
		<div class="productDescription">
			{@html descriptionHtml}
		</div>
	</div>
</main>

<style lang="postcss">
	main {
		display: grid;
		grid-template-columns: 3fr 2fr;
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
		gap: 1em;
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

	.variantButton:not(.selected):hover {
		color: var(--black);
		border: 1px solid var(--black);
	}

	.selected {
		color: var(--paperWhite);
		background: var(--black);
		cursor: default;
	}

	@media (max-width: 768px) {
		main {
			display: flex;
			flex-direction: column;
		}
	}
</style>
