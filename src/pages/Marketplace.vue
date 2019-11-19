<template>
	<layout>
		<div class="marketplace">
			<container>
				<div class="marketplace__hero">
					<p class="marketplace__hero-subtitle font-mono">
						Marketplace
					</p>
					<h1 class="marketplace__hero-title">Extend your Git workflow with extensions</h1>
					<p class="marketplace__hero-subtitle">
						What do you think about it? We would love to hear from you. Please share your
						idea/suggestions/feedback.
					</p>
				</div>
				<g-image class="marketplace__hero-image" src="~/assets/images/marketplace-hero-4x.png" />
				<div style="text-align: center">
					<primary-button
						class="marketplace__hero-button"
						text="Share feedback"
						link="https://airtable.com/shr9faoSgdaNQEO0j"
						:external="true"
					/>
				</div>
			</container>
		</div>
	</layout>
</template>

<script>
import Container from "../layouts/Container";
import PrimaryButton from "../components/Button/PrimaryButton";

export default {
	name: "Marketplace",
	components: {
		Container,
		PrimaryButton
	}
};
</script>

<style lang='sass'>
.marketplace
	margin-top: 5rem
	margin-bottom: 5rem

.marketplace__hero
	text-align: center
	max-width: 700px
	width: 100%
	margin-left: auto
	margin-right: auto

	&-subtitle
		color: #6a737d;

	&-title, &-subtitle
		margin-bottom: 1rem

	&-image
		width: 100%
</style>
