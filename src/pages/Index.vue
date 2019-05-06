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
				<div class="index__hero-button">
				</div>
				<div class="index__hero-preview">
					<p>All features are not available as shown below</p>
					<g-image src="../../static/thermal-app-preview.png" alt="Thermal Application Screenshot" />
				</div>
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
				<div class="index__cta-content">
					<div class="index__cta-heading">
						Git made simpler.
					</div>
					<div class="index__cta-description">
						Free. Open source. Runs everywhere.
					</div>
				</div>
				<div class="index__cta-button">
				</div>
			</container>
		</div>

  </layout>
</template>

<script>
import Container from "../layouts/Container"

export default {
  metaInfo: {
    title: 'Hello, world!'
	},
	components: {
		Container
	}
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
