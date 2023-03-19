<script>
	import CommissionForm from '$components/Commission/CommissionForm.svelte';
</script>

<main class="commission_page">
	<slot />
	<CommissionForm />
</main>

<style>
	.commission_page {
		width: 75%;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		.commission_page {
			width: 100%;
		}
	}
</style>
