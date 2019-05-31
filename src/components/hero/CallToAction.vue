<template>
	<div class="hero__cta">
		<container>
			<div class="hero__cta-container">
				<div class="hero__cta-content">
					<div class="hero__cta-heading">
						Git made simpler.
					</div>
					<div class="hero__cta-description">
						Free. Open source. Runs everywhere.
					</div>
				</div>
				<div class="hero__cta-button">
					<primary-button text="Download" :size="2" :link="osDownloadUrl" />
				</div>
			</div>
		</container>
	</div>
</template>

<script>
import container from "../../layouts/Container";
import PrimaryButton from "../Button/PrimaryButton";
import PlatformMixin from "../../mixins/platform"

export default {
	name: "HomeCallToAction",
	components: {
		container,
		PrimaryButton
	},
	mixins: [PlatformMixin]
};
</script>

<style lang="sass">
.hero__cta
	background-image: url("../../../static/images/cta-background.png")
	padding-top: 60px
	padding-bottom: 60px

	&-container
		display: flex
		flex-direction: column

	&-heading, &-description
		color: white

	&-heading
		font-size: 2.1rem
		margin-bottom: 14px
		line-height: 1.2

@media (max-width: 768px)
	.hero__cta-button
		margin-top: 1rem

@media (min-width: 768px)
	.hero__cta
		padding-top: 80px
		padding-bottom: 80px

		&-container
			flex-direction: row
			align-items: center

		&-heading
			font-size: 3rem

		&-button
			margin-left: auto
</style>
