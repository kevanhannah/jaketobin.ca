<script>
	import { PUBLIC_SVELTEKIT_SITE_URL } from '$env/static/public';

	export let portableText;
	$: ({ value } = portableText);
	$: ({ items, title } = value);
</script>

<div class="productGrid">
	{#if title}
		<h2 class="gridTitle">{title}</h2>
	{/if}
	{#if items.length}
		<div class="gridItems">
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
					/>
					<p class="productTitle">{item.store.title}</p>
				</a>
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	.productGrid {
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

	.gridItems {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.25em;
    row-gap: 1.75em;
	}

	.imageWrapper {
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
		.productGrid {
			padding-top: 2em;
			padding-bottom: 1.5em;
			margin-top: 2em;
			margin-bottom: 2em;
		}

		.gridTitle {
			font-size: 1.75em;
		}

		.gridItems {
			grid-template-columns: repeat(2, 1fr);
			column-gap: 1em;
      row-gap: 1.5em;
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
