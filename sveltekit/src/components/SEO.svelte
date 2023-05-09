<script>
	import { page } from '$app/stores';
	import getImageProps from '$lib/utils/getImageProps';

	export let defaultMetadata;
	$: ({ origin, pathname } = $page.url);
	$: title = $page.data?.pageContent?.seo?.title
		? `${$page.data?.pageContent?.seo.title} | ${defaultMetadata.title}`
		: defaultMetadata.title;
	$: description =
		$page.data?.pageContent?.seo?.description || defaultMetadata.description;
	$: image = $page.data?.pageContent?.seo?.image
		? getImageProps({
				aspectRatio: 1.78,
				image: $page.data?.pageContent?.seo?.image,
		  })
		: getImageProps({ aspectRatio: 1.78, image: defaultMetadata.image });
</script>

<svelte:head>
	<title>{title}</title>
	<base href={$page.url.origin} />
	<link rel="canonical" href={`${origin}${pathname}`} />
	<meta name="description" content={description} />
	<meta name="image" content={image.src} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@jaketobin" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image.src} />
	<meta name="twitter:site" content="@jaketobin" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:url" content={`${origin}${pathname}`} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image.src} />
	<meta property="og:title" content={title} />
	<meta propery="og:site_name" content={title} />
	<meta property="og:url" content={`${origin}${pathname}`} />
</svelte:head>
