<script>
	export let hovering = false;
	export let style = undefined;
</script>

<svg
	{hovering}
	role="presentation"
	{style}
	viewBox="0 0 16 2"
	xmlns="http://www.w3.org/2000/svg">
	<path d="M1,1 L15,1" fillRule="evenodd" strokeLinecap="square" />
</svg>

<style lang="postcss">
	svg {
		stroke: var(--black);
		transition-property: stroke;
		transition-duration: 0.15s;
		transition-timing-function: ease;
	}

	@media (hover: hover) {
		svg[hovering='true'] {
			stroke: var(--mediumGray);
		}
	}
</style>
