<script>
	import { PortableText } from '@portabletext/svelte';
	import Minus from '$components/shared/icons/Minus.svelte';
	import Plus from '$components/shared/icons/Plus.svelte';

	export let group;
	$: ({ body, title } = group);
	let hovering = false;
	let isOpen = false;
</script>

<div class="group">
	<button
		class="accordionButton"
		on:click={() => (isOpen = !isOpen)}
		on:mouseenter={() => (hovering = true)}
		on:mouseleave={() => (hovering = false)}>
		{title}
		{#if isOpen}
			<Minus {hovering} style="width: 1em; height: 1em; stroke-width: 1.5px;" />
		{:else}
			<Plus {hovering} style="width: 1em; height: 1em; stroke-width: 1.5px;" />
		{/if}
	</button>
	<div class="accordionText" class:visible={isOpen}>
		<PortableText value={body} />
	</div>
</div>

<style lang="postcss">
	.group {
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid var(--black);
	}

	.accordionButton {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 1.25em;
		font-weight: 600;
		color: var(--black);
		padding-top: 0.75em;
		padding-bottom: 0.75em;
		transition-property: color;
		transition-duration: 0.15s;
		transition-timing-function: ease;
		background: none;
	}

	.accordionText {
		display: none;
	}

	.accordionText:is(.visible) {
		display: block;
		padding-bottom: 0.5em;
	}

	@media (hover: hover) {
		.accordionButton:hover {
			color: var(--mediumGray);
		}
	}
</style>
