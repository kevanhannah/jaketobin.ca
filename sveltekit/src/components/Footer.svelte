<script>
	import Instagram from '$components/shared/Icons/Instagram.svelte';
	import Email from '$components/shared/Icons/Email.svelte';
	import LinkedIn from '$components/shared/Icons/LinkedIn.svelte';
	import Twitter from '$components/shared/Icons/Twitter.svelte';
</script>

<footer {...$$restProps}>
	<div class="social_icons">
		<a href="http://instagram.com/jaketobindraws">
			<Instagram />
		</a>
		<a href="https://twitter.com/jaketobin">
			<Twitter />
		</a>
		<a href="https://www.linkedin.com/in/jake-tobin-garrett-43a72951">
			<LinkedIn />
		</a>
		<a href="mailto:jake@jaketobin.ca">
			<Email />
		</a>
	</div>
	<p>© 2023 Jake Tobin Garrett. All rights reserved.</p>
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
	}

	.social_icons a {
		display: block;
		min-width: 28px;
	}
</style>
