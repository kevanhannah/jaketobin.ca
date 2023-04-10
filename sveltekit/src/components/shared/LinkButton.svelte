<script>
	export let link = null;
</script>

{#if link}
	{#if link._type === 'linkInternal'}
		{#if link.reference._type === 'product'}
			<a href={`/shop/products/${link.reference.store.slug.current}`}>
				{link.title}
			</a>
		{:else if link.reference._type === 'collection'}
			<a href={`/shop/collections/${link.reference.store.slug.current}`}>
				{link.title}
			</a>
		{:else if link.reference._type === 'portfolioPage'}
			<a href={`/portfolio/${link.reference.slug.current}`}>
				{link.title}
			</a>
		{:else}
			<a href={`/${link.reference.slug.current}`}>
				{link.title}
			</a>
		{/if}
	{:else}
		<a href={link.url} target={link.newWindow ? '_blank' : undefined}>
			{link.title}
		</a>
	{/if}
{:else}
	<slot />
{/if}

<style lang="postcss">
	a {
		display: inline-block;
		color: var(--paperWhite);
		background: var(--black);
		border: 1px solid var(--black);
		border-radius: 0.5em;
		font-weight: 600;
		padding-top: 0.75em;
		padding-bottom: 0.75em;
		padding-left: 1.25em;
		padding-right: 1.25em;
		text-align: center;
		text-decoration: none;
	}

	@media (hover: hover) {
		a:hover {
			opacity: 1;
			color: var(--black);
			background: var(--paperWhite);
			cursor: pointer;
		}
	}

	@media (max-width: 768px) {
		a {
			width: 100%;
		}
	}
</style>
