<script>
	import { PUBLIC_SVELTEKIT_SITE_URL } from '$env/static/public';
	import getShopifyImageProps from '$lib/utils/getShopifyImageProps';

	export let portableText;
	$: ({ value } = portableText);
	$: ({ items, title } = value);
</script>

<div class="grid">
	{#if title}
		<h2 class="gridTitle">{title}</h2>
	{/if}
	{#if items.length}
		<div class="gridImages">
			{#each items as item}
				<a
					class="imageWrapper"
					href={`${PUBLIC_SVELTEKIT_SITE_URL}/shop/products/${item.store.slug.current}`}
				>
					<img
						class="productImage"
						alt={item.store.title}
						loading="lazy"
						sizes="(max-width: 800px) 50vw, 25vw"
						src={item.store.previewImageUrl}
						srcset={getShopifyImageProps(item.store.previewImageUrl)}
					/>
					<p class="productTitle">{item.store.title}</p>
				</a>
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	.grid {
		padding-top: 3em;
		padding-bottom: 1.5em;
		margin-top: 2em;
		margin-bottom: 2em;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5em;
		border-top: 1px solid var(--black);
		border-bottom: 1px solid var(--black);
	}

	.gridTitle {
		margin-bottom: 0;
	}

	.gridImages {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		justify-content: center;
		align-items: center;
	}

	.imageWrapper {
		max-width: calc((100% / 4) - 0.75em);
		display: flex;
		flex-direction: column;
		gap: 0.75em;
		text-align: center;
		user-select: none;
		text-decoration: none;
	}

	.productImage {
		width: 100%;
		display: block;
		aspect-ratio: 1;
		object-fit: cover;
	}

	.productTitle {
		font-size: 1em;
		font-weight: 400;
	}

	@media (max-width: 768px) {
		.grid {
			padding-top: 2em;
			padding-bottom: 1.5em;
			margin-top: 2em;
			margin-bottom: 2em;
		}

		.gridTitle {
			font-size: 1.75em;
		}

		.gridImages {
			gap: 1em;
			justify-content: center;
			align-items: center;
		}

		.imageWrapper {
			max-width: calc((100% / 2) - 0.5em);
		}

		.imageWrapper:last-of-type {
			display: block;
		}
	}

	@media (hover: hover) {
		a:hover {
			opacity: 1;
		}

		a:hover > img {
			opacity: 0.8;
		}
	}
</style>
