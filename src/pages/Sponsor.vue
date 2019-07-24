<template>
	<Layout>
		<div class="sponsors">
			<container>
				<div id="error-message"></div>
				<div class="sponsors__tiers">
					<h6 class="sponsors__tiers-heading">
						Select a tier
					</h6>
					<div
						v-for="item in sponsorTiers"
						:key="item.id"
						class="sponsors__tiers-item"
						v-if="item.plan_id"
					>
						<div class="sponsors__tiers-content">
							<div class="sponsors__tiers-cost">
								{{ item.title }} - {{ item.currency + item.price + "/" + item.cycle }}
							</div>
							<div
								text="Select"
								:size="1"
								class="sponsors__tiers-button button button__outline-dark button__size-1"
								@click="stripeCheckout(item.plan_id)"
							>
								Select
							</div>
						</div>
						<div class="sponsors__tiers-description">
							{{ item.description }}
						</div>
						<div class="sponsors__tiers-perks">
							<div v-for="perk in item.perks" class="sponsors__perks-item">
								{{ perk }}
							</div>
						</div>
					</div>
				</div>
				<div class="stripe-badge">
					<stripe-badge />
				</div>
			</container>
		</div>
	</Layout>
</template>

<script>
import Container from "../layouts/Container";
import SponsorTiers from "../data/sponsor-tiers.yml"
import StripeBadge from "../../static/images/icon/stripe-badge.svg"

export default {
	name: "Sponsors",
	metaInfo: {
		title: "Sponsor Thermal Development",
		link: [
			{
				rel: "canonical",
				href: "https://thermal.codecarrot.net/sponsor"
			}
		]
	},
	components: {
		Container,
		StripeBadge
	},
	computed: {
		sponsorTiers() {
			return SponsorTiers
		}
	},
	methods: {
		stripeCheckout(plan_id) {
			var stripe = Stripe("pk_live_DLEhVwauymdEAIPdN07BsLEx00hNZ8kcwt");
			stripe
				.redirectToCheckout({
					items: [{ plan: plan_id, quantity: 1 }],
					successUrl: "https://thermal.codecarrot.net/payment/success",
					cancelUrl: "https://thermal.codecarrot.net/payment/canceled"
				})
				.then(function(result) {
					if (result.error) {
						var displayError = document.getElementById("error-message");
						displayError.textContent = result.error.message;
					}
				});
		}
	}
};
</script>

<style lang='sass'>
.sponsors
	margin-top: 3rem

	&__tiers
		border: 1px solid #ddd
		border-radius: .354rem

		&-heading
			padding: .8rem
			border-bottom: 1px solid #ddd
			background-color: lighten(#ddd, 10%)
			border-top-left-radius: .354rem
			border-top-right-radius: .354rem

		&-item
			padding: .8rem

			&:not(:last-child)
				border-bottom: 1px solid #ddd

		&-content
			display: flex
			flex-direction: row
			align-items: center
			margin-bottom: .5rem

		&-cost
			font-weight: 500

		&-button
			margin-left: auto
			color: #00ADB5

		&-description
			margin-bottom: .5rem

		&-perks
			display: flex
			flex-direction: row

	&__perks-item
		font-size: .85rem
		padding: 2px 8px
		border-radius: 20px
		margin-right: .5rem
		user-select: none
		border:
			width: 1px
			style: solid
			color: #ddd

.stripe-badge
	margin-top: 1.125rem
	text-align: center
</style>
