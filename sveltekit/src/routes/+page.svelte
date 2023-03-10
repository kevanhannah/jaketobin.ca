<script>
	import ImageTextModule from '../lib/components/Home/ImageTextModule.svelte';

	export let data;
	const { modules } = data;
	console.log(modules);
</script>

<ImageTextModule>
	<h2>Writer, illustrator & cartoonist</h2>
	<p>
		I aim to capture a sense of place and whimsy, whether in words or drawings.
		My work has been featured in the Toronto Star, Maisonneuve Magazine, CBC,
		Chatelaine, Spacing, and more.
	</p>
	<p>
		I love doing custom illustrations for people, such as houses, street scenes,
		and cartoon portraits. I also love working with clients to bring reports,
		presentations, and editorial work to life.
	</p>
</ImageTextModule>
