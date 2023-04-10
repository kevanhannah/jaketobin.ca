<script>
	import AccordionGroup from '$components/shared/modules/AccordionGroup.svelte';

	export let portableText;
	$: ({ groups } = portableText.value);
</script>

<div class="accordion module">
	{#each groups as group}
		<AccordionGroup {group} />
	{/each}
</div>

<style lang="postcss">
	.accordion {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}
</style>
