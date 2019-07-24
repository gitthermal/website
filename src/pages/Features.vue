<template>
	<Layout>
		<div class="features__hero">
			<container>
				<div class="features__hero-heading">
					Features
				</div>
				<div class="features__hero-description">
					One place to manage all Git repositories
				</div>
			</container>
		</div>
		<div class="features__new">
			<container :width="830">
				<new-feature
					image="/images/commit-graph-feature-4x.png"
					title="Stats"
					description="Keep track of the progress of your project by number of commits made on each day."
				/>
				<new-feature
					image="/images/history-feature-4x.png"
					title="History"
					description="Browse commit logs in a timeline-style interface with title, author image, and date."
					:order="1"
				/>
				<new-feature
					image="/images/file-diff-feature-4x.png"
					title="See the difference"
					description="Diffs compare versions of your source code side by side, highlighting the parts that are new, edited, or deleted."
				/>
				<new-feature
					image="/images/profile-feature-4x.png"
					title="Profile"
					description="Configurate the Git settings by adding your name, email and image."
					:order="1"
				/>
				<new-feature
					image="/images/commit-feature-4x.png"
					title="Git commit"
					description="What took minutes in the command line now takes seconds with Thermal."
					:mb="0"
				/>
			</container>
		</div>
		<call-to-action />
	</Layout>
</template>

<script>
import Container from "../layouts/Container";
import NewFeature from "../components/NewFeature";
import CallToAction from "../components/hero/CallToAction";

export default {
	name: "Features",
	metaInfo: {
		title: "Features",
		meta: [
			{
				name: "description",
				content: "List of most awesome features of Thermal application."
			}
		],
		link: [
			{
				rel: "canonical",
				href: "https://thermal.codecarrot.net/features"
			}
		]
	},
	components: {
		Container,
		NewFeature,
		CallToAction
	}
};
</script>

<style lang='sass'>
.features
	&__hero
		background-color: #222831
		text-align: center
		padding-top: 3rem
		padding-bottom: 5rem

		&-heading
			color: white
			font-size: 2.5rem
			line-height: 1.25
			margin-bottom: .875rem

		&-description
			color: rgba(#fff, .5)
			font-size: 1.5rem

	&__new
		padding-top: 80px
		padding-bottom: 80px
</style>
