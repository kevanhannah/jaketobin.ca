<script>
	export let hovering = false;
	export let style = undefined;
</script>

<svg
	{hovering}
	role="presentation"
	{style}
	viewBox="0 0 16 16"
	xmlns="http://www.w3.org/2000/svg">
	<g fillRule="evenodd" strokeLinecap="square">
		<path d="M8,1 L8,15" />
		<path d="M1,8 L15,8" />
	</g>
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
