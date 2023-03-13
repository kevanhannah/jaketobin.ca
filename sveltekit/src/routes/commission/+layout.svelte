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
</style>
