<template>
	<Layout :headerSize="1">
		<div class="releases">
			<Container :width="600">
				<div
					v-for="{ node } in this.$page.release.edges"
					class="releases__item"
				>
					<div class="releases__item-version">
						<div
							:style="{
								backgroundColor: '#' + backgroundColor(node.build_type)
							}"
							class="releases__version"
						>
							{{ node.version }}
						</div>
					</div>
					<div class="releases__item-content">
						<g-link :to="node.path" class="releases__item-date h4">
							{{ node.date }}
						</g-link>
					</div>
				</div>
			</Container>
		</div>
	</Layout>
</template>

<page-query>
query {
  release: allReleasePage {
    edges {
      node {
        version
        date (format: "MMMM D, YYYY")
        build_type
				path
      }
    }
  }
}
</page-query>

<script>
import Container from "../layouts/Container";

export default {
	name: "Releases",
	metaInfo: {
		title: "Release notes"
	},
	components: {
		Container
	},
	methods: {
		backgroundColor(build_type) {
			switch (build_type) {
				case "stable":
					return "28a745";
				case "canary":
					return "f66a0a";
			}
		}
	}
};
</script>

<style lang='sass'>
.releases
	margin-top: 4rem

	&__item
		display: flex

		&-version
			margin-right: .875rem
			min-width: 120px
			text-align: right
			padding-top: .875rem

		&-content
			border-left: 3px solid #dedede

		&-date
			padding: .875rem
			color: black
			display: flex

			&:hover
				color: #00ADB5

	&__version
		border-radius: 3px
		display: inline-block
		color: white
		padding: .125rem .5rem
		font-size: .875rem
</style>
