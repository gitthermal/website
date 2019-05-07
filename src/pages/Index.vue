<template>
  <layout>
		<div class="index__hero">
			<container>
				<div class="index__hero-heading">
					One Stop. Git Repository
				</div>
				<div class="index__hero-description">
					All-in-one place to manage your Git repository.
				</div>
				<div class="index__hero-cta">
					<Button
						text="Download"
						class="index__hero-button"
					/>
					<Button
						apperance="outline"
						text="Become a Patron"
						class="index__hero-button hero__button-patron"
					/>
				</div>
			</container>
		</div>

		<div class="index__hero-preview">
			<container>
				<p>*All features are not available as shown below</p>
				<g-image src="../../static/thermal-app-preview.png" alt="Thermal Application Screenshot" />
			</container>
		</div>

		<div class="index__new__features">
			<container>
			</container>
		</div>

		<div class="index__features">
			<container>
				<div class="index__features-item">
					<div class="index__features-icon">

					</div>
					<div class="index__features-heading">
						Open Source
					</div>
					<div class="index__features-description">
						Leveraging the power of open source developer community and build better software.
					</div>
				</div>
				<div class="index__features-item">
					<div class="index__features-icon">

					</div>
					<div class="index__features-heading">
						Easy to use
					</div>
					<div class="index__features-description">
						New to Git? Thermal provides a seamless graphical experience to get started quickly.
					</div>
				</div>
				<div class="index__features-item">
					<div class="index__features-icon">

					</div>
					<div class="index__features-heading">
						Cross platform
					</div>
					<div class="index__features-description">
						The app is available on Windows, Linux, and Mac operating system.
					</div>
				</div>
			</container>
		</div>

		<div class="index__pp">
			<container>
				<div class="index__pp-content">
					<div class="index__pp-heading">
						Pair Programming
					</div>
					<div class="index__pp-description">
						Thermal is an open source project, and we need your contribution to make it better, whether you're helping us fix bugs, improve the docs, or spread the word, we'd love to have you as part of the community, we also offer free pair programming sessions, come join our Discord server and say hi to our core team.
					</div>
				</div>
				<div class="index__pp-image">

				</div>
			</container>
		</div>

		<div class="index__cta">
			<container>
				<div class="index__cta-container">
					<div class="index__cta-content">
						<div class="index__cta-heading">
							Git made simpler.
						</div>
						<div class="index__cta-description">
							Free. Open source. Runs everywhere.
						</div>
					</div>
					<div class="index__cta-button">
						<Button
							text="Download"
							:size="2"
						/>
					</div>
				</div>
			</container>
		</div>

  </layout>
</template>

<script>
import Container from "../layouts/Container"
import Button from "../components/Button"

export default {
  metaInfo: {
    title: 'One Stop. Git Repository'
	},
	components: {
		Container,
		Button
	}
}
</script>

<style lang="sass">
.index
	&__hero
		background-color: #222831
		text-align: center

		&-heading
			color: white
			font-size: 2.5rem
			line-height: 1.25

		&-description
			color: #474C55

		&-cta
			margin-top: 1rem
			margin-bottom: 1.875rem

		&-button
			&:not(:first-child)
				margin-left: 1.5rem

		&-preview
			text-align: center
			position: relative

			p
				color: white
				font-size: .5rem
				font-weight: 200
				margin-bottom: 4px
				letter-spacing: .8px

			img
				box-shadow: 0px 10px 50px rgba(32, 37, 46, 0.25)
				width: 100%
				border-radius: 3px
	&__cta
		background-image: url("../../static/cta-background.png")
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
	.index
		&__hero
			min-height: 76vh

		&__cta-button
			margin-top: 1rem

	.hero__button-patron
		display: none

@media (max-width: 576px)
	.index__hero-preview
		margin-top: -200px

@media (min-width: 576px)
	.index__hero-preview
		margin-top: -340px

@media (min-width: 768px)
	.index
		&__hero
			min-height: 87vh

			&-heading
				font-size: 3rem

			&-description
				font-size: 1.75rem

		&__cta
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
