<script>
	export let portableText;
	$: ({ value } = portableText);
	$: ({ reference } = value);
</script>

{#if reference}
	{#if reference._type === 'product'}
		<a href={`/shop/products/${reference.store.slug.current}`}>
			<slot />
		</a>
	{:else if reference._type === 'collection'}
		<a href={`/shop/collections/${reference.store.slug.current}`}>
			<slot />
		</a>
	{:else if reference._type === 'portfolioPage'}
		<a href={`/portfolio/${reference.slug.current}`}>
			<slot />
		</a>
	{:else}
		<a href={`/${reference.slug.current}`}>
			<slot />
		</a>
	{/if}
{:else}
	<slot />
{/if}
