<template>
	<Layout>
		<div class="sponsors">
			<container>
				<h1 class="sponsors__heading">Sponsor Thermal Development</h1>

				<div class="sponsors__tiers">
					<div class="sponsors__currency-switch">
						<div
							@click="changeCountry('$')"
							:style="{ backgroundColor: selectedCurrency('$') }"
							class="sponsors__currency-item"
						>
							$
						</div>
						<div
							@click="changeCountry('₹')"
							:style="{ backgroundColor: selectedCurrency('₹') }"
							class="sponsors__currency-item"
						>
							₹
						</div>
					</div>
					<div class="sponsors__tiers-list">
						<div
							v-for="item in sponsorTiers"
							:key="item.id"
							class="sponsors__tiers-item"
						>
							<div
								v-for="currency in item.country"
								v-if="currency.currency === country"
								class="sponsors__tiers-cost"
							>
								<div class="sponsors__tiers-price">
									{{ currency.currency + currency.price }}
								</div>
								<div class="sponsors__tiers-cycle">
									{{ "/" + item.cycle }}
								</div>
							</div>
							<div class="sponsors__tiers-title">
								{{ item.title }}
							</div>
							<div class="sponsors__tiers-perks">
								<div v-for="perk in item.perks" class="sponsors__perks-item">
									{{ perk }}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="stripe-badge">
					<stripe-badge />
				</div>
				<primary-buttom
					text="Select"
					class="sponsors__checkout-button"
					@click.native="stripeCheckout(plan_id)"
				/>
			</container>
		</div>
	</Layout>
</template>

<script>
import Container from "../layouts/Container";
import SponsorTiers from "../data/sponsor-tiers.yml";
import PrimaryButtom from "../components/Button/PrimaryButton";
import StripeBadge from "../../static/images/icon/stripe-badge.svg";

export default {
	name: "Sponsors",
	metaInfo: {
		title: "Sponsor Thermal Development"
	},
	data() {
		return {
			country: "$",
			plan_id: ""
		};
	},
	components: {
		Container,
		PrimaryButtom,
		StripeBadge
	},
	computed: {
		sponsorTiers() {
			return SponsorTiers;
		}
	},
	methods: {
		changeCountry(currency) {
			this.country = currency;
		},
		selectedCurrency(currency) {
			if (currency === this.country) {
				return '#f7f7f7';
			}
		}
	}
};
</script>

<style lang='sass'>
.sponsors
	margin-top: 3rem
	text-align: center

	&__heading
		text-align: center
		margin-bottom: 2rem

	&__currency
		&-switch
			display: inline-block
			margin-bottom: .875rem
			border:
				width: 1px
				style: solid
				color: #ddd
				radius: .354rem

		&-item
			display: inline-block
			cursor: pointer
			padding: 5px 10px

			&:first-child
				border-right: 1px solid #ddd

			&:hover
				background-color: lighten(#ddd, 10%)

				&:nth-child(1)
					border-top-left-radius: .354rem
					border-bottom-left-radius: .354rem

				&:nth-child(2)
					border-top-right-radius: .354rem
					border-bottom-right-radius: .354rem

	&__tiers
		&-item
			padding: .8rem
			border:
				width: 1px
				style: solid
				color: #ddd
				radius: .354rem

			&:not(:last-child)
				margin-bottom: .875rem

			&:hover
				background-color: lighten(#ddd, 10%)

		&-cost
			display: flex
			flex-direction: row
			align-items: baseline
			justify-content: center

		&-price
			font:
				size: 2rem
				weight: 500

		&-cycle, &-title
			font-size: .875rem

		&-title
			margin-bottom: 1rem

		&-perks
			display: flex
			flex-direction: row
			justify-content: center

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

	&__checkout-button
		margin-top: 2rem

.stripe-badge
	margin-top: 1.125rem

@media (min-width: 768px)
	.sponsors__tiers-list
		display: flex
		flex-direction: row
		flex-wrap: wrap
		justify-content: space-evenly
</style>
