<script>
	export let portableText;
	$: ({ value } = portableText);
</script>

<a href={`../../${value.reference.slug.current}`}><slot /></a>
