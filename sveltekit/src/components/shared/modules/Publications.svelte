<script>
	import { PortableText } from '@portabletext/svelte';

	export let portableText;

	$: ({ value } = portableText);
	$: ({ publications } = value);
</script>

<div class="publications">
	{#each publications as publication}
		<div class="publication">
			{#if publication.titleLink}
				<a href={publication.titleLink}><h3>{publication.title}</h3></a>
			{:else}
				<h3>{publication.title}</h3>
			{/if}
			{#if publication.description}
				<PortableText value={publication.description} />
			{/if}
		</div>
	{/each}
</div>

<style lang="postcss">
	.publications {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.25em;
	}

	.publication {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.publication h3 {
		font-size: 1.5em;
		margin-bottom: 1em;
	}

	.publication :global(p:last-of-type) {
		margin-bottom: 0;
	}

	@media (max-width: 768px) {
		.publications {
			grid-template-columns: 1fr;
		}
	}
</style>
