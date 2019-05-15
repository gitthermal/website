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
					<div class="index__hero-platforms">
						<Button
							text="Download"
							:size="2"
							:link="downloadUrl"
							class="index__hero-button"
						/>
						<g-image class="index__hero-os" src="../../static/images/os.png"/>
					</div>
					<Button
						apperance="outline"
						text="Become a Patron"
						link="https://patreon.com/mittalyashu"
						:size="2"
						:external="true"
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
				<div class="index__new__features-container">
					<NewFeature
						image="./commit-feature-4x.png"
						title="Commits"
						description="What took minutes in the command line now takes seconds with Thermal."
						:order="0"
						class="index__new__features-item"
					/>
					<NewFeature
						image="./file-diff-feature-4x.png"
						title="Clean diff"
						description="Visualize every commit with clear diff in workspace and history."
						:order="1"
						class="index__new__features-item"
					/>
				</div>
			</container>
		</div>

		<div class="index__features">
			<container>
				<div class="index__features-container">
					<div class="index__features-item">
						<g-image src="../../static/open-source-2x.png" class="index__features-icon" />
						<div class="index__features-heading">
							Open Source
						</div>
						<div class="index__features-description">
							Leveraging the power of open source developer community and build better software.
						</div>
					</div>
					<div class="index__features-item">
						<g-image src="../../static/easy-to-use-2x.png" class="index__features-icon" />
						<div class="index__features-heading">
							Easy to use
						</div>
						<div class="index__features-description">
							New to Git? Thermal provides a seamless graphical experience to get started quickly.
						</div>
					</div>
					<div class="index__features-item">
						<g-image src="../../static/multi-os-2x.png" class="index__features-icon" />
						<div class="index__features-heading">
							Cross platform
						</div>
						<div class="index__features-description">
							The app is available on Windows, Linux, and Mac operating system.
						</div>
					</div>
				</div>
			</container>
		</div>

		<div class="index__pp">
			<container>
				<div class="index__pp-heading">
					Pair Programming
				</div>
				<div class="index__pp-description">
					Thermal is an open source project, and we need your contribution to make it better, whether you're helping us fix bugs, improve the docs, or spread the word, we'd love to have you as part of the community, we also offer free pair programming sessions, come join our Discord server and say hi to our core team.
				</div>
				<Button
					text="Join discord server"
					link="https://discord.gg/KT3nAR5"
					:size="2"
					:external="true"
				/>
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
							:link="downloadUrl"
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
import NewFeature from "../components/NewFeature"
import DownloadMixin from "../mixins/download"

export default {
	name: "Index",
  metaInfo: {
		title: 'One Stop. Git Repository',
		meta: [
			{
				name: 'description',
				content: 'Thermal is one stop to manage all Git repository at one place by providing you a simple to use graphic user interface with built-in features commits, history, repository settings and more.'
			},

			// Google
			{
				itemprop: 'description',
				content: 'Thermal is one stop to manage all Git repository at one place by providing you a simple to use graphic user interface with built-in features commits, history, repository settings and more.'
			},

			// Facebook
			{
				property: 'og:title',
				content: 'One Stop. Git Repository'
			},
			{
				property: 'og:url',
				content: 'https://www.gitthermal.com/'
			},
			{
				property: 'og:description',
				content: 'Thermal is one stop to manage all Git repository at one place by providing you a simple to use graphic user interface with built-in features commits, history, repository settings and more.'
			},

			// Twitter
			{
				name: 'twitter:title',
				content: 'One Stop. Git Repository'
			},
			{
				name: 'twitter:description',
				content: 'Thermal is one stop to manage all Git repository at one place by providing you a simple to use graphic user interface with built-in features commits, history, repository settings and more.'
			},
			{
				name: 'twitter:url',
				content: 'https://www.gitthermal.com/'
			}
		]
	},
	components: {
		Container,
		Button,
		NewFeature
	},
	mixins: [
		DownloadMixin
	]
}
</script>

<style lang="sass">
.index
	&__hero
		background-color: #222831
		text-align: center
		min-height: 360px

		&-heading
			color: white
			font-size: 2.5rem
			line-height: 1.25

		&-description
			color: #474C55

		&-cta
			margin-top: 1rem
			margin-bottom: 1.875rem

		&-platforms
			display: inline-flex
			align-items: center
			flex-direction: column

		&-os
			width: 60px
			margin-top: 6px

		&-button
			&:not(:first-child)
				margin-left: 1.5rem

		&-preview
			text-align: center
			position: relative
			margin-top: -140px

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

	&__new__features
		padding-top: 60px
		padding-bottom: 60px

		&-container
			max-width: 830px
			margin: 0 auto

		&-item
			&:not(:last-child)
				margin-bottom: 3rem

	&__features
		background-color: #222831
		padding-top: 60px
		padding-bottom: 60px

		&-container
			display: flex
			flex-direction: column

		&-item
			display: flex
			flex-direction: column
			align-items: center
			text-align: center

		&-icon
			width: 30px
			height: 30px
			margin-bottom: .5rem

		&-heading
			color: white
			font-size: 1.652rem

		&-description
			color: #474C55
			font-size: 1.125rem

	&__pp
		padding-top: 60px
		padding-bottom: 60px

		&-heading
			font-size: 2rem

		&-description
			padding-top: .875rem
			padding-bottom: 2rem

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
		&__features
			&-item
				&:not(:last-child)
					margin-bottom: 2rem

				&-description
					margin-top: .875rem

		&__cta-button
			margin-top: 1rem

	.hero__button-patron
		display: none

@media (min-width: 500px)
	.index__hero
		min-height: 340px

		&-preview
			margin-top: -200px

@media (min-width: 768px)
	.index
		&__hero
			min-height: 460px

			&-heading
				font-size: 3rem

			&-description
				font-size: 1.75rem

			&-preview
				margin-top: -280px

		&__features
			padding-top: 80px
			padding-bottom: 80px

			&-container
				flex-direction: row

			&-item
				&:not(:last-child)
					margin-right: 2rem

		&__pp
			padding-top: 80px
			padding-bottom: 80px

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
