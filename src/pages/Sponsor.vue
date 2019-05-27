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
					>
						<div class="sponsors__tiers-content">
							<div class="sponsors__tiers-cost">
								{{ item.currency + ' ' + item.price + ' a ' + item.cycle }}
							</div>
							<outline-button
								text="Select"
								:size="1"
								class="sponsors__tiers-button"
							/>
						</div>
						<div class="sponsor__tiers-description">
							{{ item.description }}
						</div>
					</div>
				</div>
			</container>
		</div>
	</Layout>
</template>

<script>
import Container from "../layouts/Container";
import OutlineButton from "../components/Button/OutlineButton"
import SponsorTiers from "../data/sponsor-tiers.yml"

export default {
	name: "Sponsors",
	metaInfo: {
		title: "Sponsor Thermal Development"
	},
	components: {
		Container,
		OutlineButton
	},
	computed: {
		sponsorTiers() {
			return SponsorTiers
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

		&-button
			margin-left: auto
</style>
