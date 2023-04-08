<script>
	import { PUBLIC_SVELTEKIT_SITE_URL } from '$env/static/public';

	export let portableText;
	$: ({ value } = portableText);
</script>

<a href={`${PUBLIC_SVELTEKIT_SITE_URL}/${value.reference.slug.current}`}
	><slot /></a>
