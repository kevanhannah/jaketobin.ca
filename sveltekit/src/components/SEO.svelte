<script>
	import { page } from '$app/stores';
	import { PUBLIC_SVELTEKIT_SITE_URL } from '$env/static/public';
	import getImageProps from '$lib/utils/getImageProps';

	export let defaultMetadata;
	$: seo = $page.data?.pageContent?.seo ?? defaultMetadata;
	$: ({ origin, pathname } = $page.url);
	$: title = $page.data?.pageContent?.seo?.title
		? `${$page.data?.pageContent?.seo.title} | ${defaultMetadata.title}`
		: seo.title;
	$: description = seo.description;
	$: image = getImageProps({ aspectRatio: 1.78, image: seo.image });
</script>

<svelte:head>
	<title>{title}</title>
	<base href={PUBLIC_SVELTEKIT_SITE_URL} />
	<link rel="canonical" href={`${origin}${pathname}`} />
	<meta name="description" content={description} />
	<meta name="image" content={image.src} />
	<meta name="twitter:card" content="summary_large_image" />
	<!-- <meta name="twitter:creator" content={twitter} /> -->
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image.src} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:url" content={`${origin}${pathname}`} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image.src} />
	<meta property="og:title" content={title} />
	<meta propery="og:site_name" content={title} />
	<meta property="og:url" content={`${origin}${pathname}`} />
</svelte:head>
