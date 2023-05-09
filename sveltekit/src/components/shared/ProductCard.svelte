<script>
	import { onMount } from 'svelte';
	import Badge from '$components/shared/Badge.svelte';

	let image;
	$: loaded = false;

	onMount(() => {
		if (image.complete && !loaded) {
			loaded = true;
		}
	});

	export let decoding = 'async';
	export let handle;
	export let loading = 'lazy';
	export let onSale = false;
	export let price = '';
	export let soldOut = false;
	export let src;
	export let srcset;
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
		<div class="imageWrapper_inner">
			<img
				alt={title}
				bind:this={image}
				class="productImage"
				data-loaded={loaded}
				{decoding}
				fetchPriority={loading === 'eager' ? 'high' : 'auto'}
				{loading}
				on:load={() => (loaded = true)}
				sizes="(max-width: 800px) 50vw, 25vw"
				{src}
				{srcset} />
		</div>
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
				z-index: 1;
			}

			& .imageWrapper_inner {
				&:before {
					content: '';
					display: block;
					height: 100%;
					width: 100%;
					position: absolute;
					top: 0;
					left: 0;
					background-color: rgba(255, 255, 255, 0);
					transition-property: background-color;
					transition-duration: 250ms;
					transition-timing-function: ease-in-out;
				}

				& img {
					width: 100%;
					display: block;
					aspect-ratio: 1;
					object-fit: cover;

					&[data-loaded='false'] {
						opacity: 0;
					}
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
