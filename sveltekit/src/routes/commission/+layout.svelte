<script>
	import PageLayout from '$components/shared/PageLayout.svelte';
	import CommissionForm from '$components/Commission/CommissionForm.svelte';
</script>

<PageLayout>
	<slot />
	<CommissionForm />
</PageLayout>
