<script>
	import { cart } from '$lib/stores/storeContext';
	import CheckoutButton from '$components/Cart/CheckoutButton.svelte';
</script>

<div class="checkoutSection">
	<div class="subtotalRow">
		<h3>Subtotal</h3>
		<p>
			{new Intl.NumberFormat('en-CA', {
				style: 'currency',
				currency: 'CAD',
			}).format($cart.estimatedCost.totalAmount.amount)}
		</p>
	</div>
	<p class="finePrint">
		Shipping, taxes, and discounts calculated at checkout.
	</p>
	<CheckoutButton checkoutUrl={$cart.checkoutUrl} />
</div>

<style lang="postcss">
	.checkoutSection {
		background: var(--paperWhite);
		flex: none;
		display: flex;
		flex-direction: column;
		gap: 0.75em;
		padding: 1em;
		border-top: 1px solid var(--black);
	}

	.subtotalRow {
		display: flex;
		justify-content: space-between;
		align-items: center;

		& h3 {
			font-size: 1em;
			font-weight: 600;
		}

		& p {
			font-weight: 600;
			margin-bottom: 0;
		}
	}

	.finePrint {
		font-size: 0.75em;
		font-weight: 400;
	}
</style>
