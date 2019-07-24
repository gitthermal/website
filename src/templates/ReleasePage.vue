<template>
	<Layout :headerSize="1">
		<div class="releases__content">
			<Container width="600">
				<g-link to="/releases" class="releases__content-back">
					<LeftArrow /> Back
				</g-link>
				<PostLayout :editOnGH="false">
					<div v-html="$page.releases.content"></div>
				</PostLayout>
			</Container>
		</div>
	</Layout>
</template>

<page-query>
query releasePage ($path: String!) {
	releases: releasePage (path: $path) {
		date
		version
		build_type
		content
	}
}
</page-query>

<script>
import Container from "../layouts/Container";
import PostLayout from "../layouts/Post";
import LeftArrow from "../../static/images/icon/arrow-left.svg";

export default {
	name: "Release",
	components: {
		Container,
		PostLayout,
		LeftArrow
	},
	metaInfo() {
		return {
			title: "Release Notes",
			link: [
				{
					rel: "canonical",
					href: `https://thermal.codecarrot.net${this.$page.releases.path}`
				}
			]
		};
	}
};
</script>

<style lang='sass'>
.releases__content
	margin-top: 4rem

	&-back
		display: inline-flex
		flex-direction: row
		align-items: center
		margin-bottom: 2rem
		fill: white
		color: white
		background-color: #00ADB5
		padding: 5px 10px
		border-radius: 50px
		font-size: .8755rem

		svg
			margin-right: 5px
			width: 18px
			height: 18px
</style>
