<script>
	import AccordionGroup from '$components/shared/modules/AccordionGroup.svelte';

	export let portableText;
	$: ({ groups } = portableText.value);
</script>

<div class="accordion">
	{#each groups as group}
		<AccordionGroup {group} />
	{/each}
</div>

<style>
	.accordion {
		display: flex;
		flex-direction: column;
	}
</style>
