<script>
	import Instagram from '$components/shared/icons/Instagram.svelte';
	import Email from '$components/shared/icons/Email.svelte';
	import LinkedIn from '$components/shared/icons/LinkedIn.svelte';
	import Twitter from '$components/shared/icons/Twitter.svelte';
</script>

<footer {...$$restProps}>
	<div class="social_icons">
		<a aria-label="Instagram" href="https://instagram.com/jaketobindraws">
			<Instagram height="2.25em" width="2.25em" />
		</a>
		<a aria-label="Twitter" href="https://twitter.com/jaketobin">
			<Twitter height="2.25em" width="2.25em" />
		</a>
		<a
			aria-label="LinkedIn"
			href="https://www.linkedin.com/in/jake-tobin-garrett-43a72951">
			<LinkedIn height="2.25em" width="2.25em" />
		</a>
		<a aria-label="Email" href="mailto:jake@jaketobin.ca">
			<Email height="2.25em" width="2.25em" />
		</a>
	</div>
	<p style="margin-bottom: 0;">
		© 2023 Jake Tobin Garrett. All rights reserved.<br />Website by
		<a href="https://www.twitter.com/kevanh">Kevan Hannah</a>.
	</p>
</footer>

<style lang="postcss">
	footer {
		margin-top: 3em;
		padding-top: 1.5em;
		padding-bottom: 2.25em;
		display: flex;
		flex-direction: column;
		gap: 1.5em;
		font-size: 0.75em;
		text-align: center;
	}

	.social_icons {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.75em;

		& a {
			display: flex;
			width: 2.25em;
			height: 2.25em;
			justify-content: center;
			align-items: flex-end;

			& :global(svg g path) {
				fill: var(--black);
			}

			@media (hover: hover) {
				&:hover :global(svg g path) {
					fill: var(--mediumGray);
				}
			}
		}
	}
</style>
