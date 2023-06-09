<script>
	import Badge from '$components/shared/Badge.svelte';

	export let handle;
	export let onSale = false;
	export let price = '';
	export let soldOut = false;
	export let title;
</script>

<a href={`/shop/products/${handle}`}>
	<div class="imageWrapper_outer">
		{#if onSale || soldOut}
			<div class="badges">
				{#if soldOut}
					<Badge reverse>Sold out</Badge>
				{:else if onSale}
					<Badge>On sale</Badge>
				{/if}
			</div>
		{/if}
		<div class="imageWrapper_blank" />
	</div>
	<div class="productInfo">
		<p class="productTitle">{title}</p>
		{#if price}
			<p class="productPrice">{price}</p>
		{/if}
	</div>
</a>

<style lang="postcss">
	a {
		display: flex;
		flex-direction: column;
		gap: 0.75em;
		text-align: center;
		user-select: none;
		text-decoration: none;

		& .imageWrapper_outer {
			position: relative;

			& .badges {
				position: absolute;
				top: 0.75em;
				left: 0.75em;
				pointer-events: none;
				z-index: 1;
			}

			& .imageWrapper_blank {
				width: 100%;
				display: block;
				aspect-ratio: 1;

				&:before {
					content: '';
					display: block;
					height: 100%;
					width: 100%;
					position: absolute;
					top: 0;
					left: 0;
					background-color: var(--lightGray);
					transition-property: background-color;
					transition-duration: 250ms;
					transition-timing-function: ease-in-out;
				}
			}
		}

		@media (hover: hover) {
			&:hover .imageWrapper_outer .imageWrapper_inner {
				&:before {
					background-color: rgba(255, 255, 255, 0.15);
				}
			}
		}
	}

	.productInfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25em;
	}

	.productTitle {
		font-weight: 600;
	}

	.productPrice,
	.productTitle {
		font-size: 1em;
		margin-bottom: 0;
	}
</style>
