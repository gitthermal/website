<template>
	<DocsLayout
		:menu="menu"
		route="release"
		:title="title"
		:title-border="true"
		:assets="$page.releases.release.assets"
	>
		<VueRemarkContent />
	</DocsLayout>
</template>

<page-query>
query ($path: String!) {
	menu: allReleases {
		edges {
			node {
				slug
				release {
					name
					created_at (format: "MMMM, YYYY")
					prerelease
				}
			}
		}
	}
	releases (path: $path) {
		content
		release {
			name
			created_at (format: "MMMM DD, YYYY")
			assets {
				name
				browser_download_url
			}
		}
	}
}
</page-query>

<script>
// components
import DocsLayout from "../layouts/Docs";

export default {
	name: "Release",
	metaInfo() {
		return {
			title: `v${this.$page.releases.release.name} release`,
			meta: [
				{
					name: "description",
					content: `See what is new in the Thermal release v${this.$page.releases.release.name} (${
						this.$page.releases.release.created_at
					})`
				}
			],
			link: [
				{
					rel: "canonical",
					href: `https://thermal.codecarrot.net${this.$page.releases.path}`
				}
			]
		};
	},
	components: {
		DocsLayout
	},
	computed: {
		menu() {
			const data = this.$page.menu.edges;

			let section = [];
			let monthsArray = [];

			for (let i = 0; i < data.length; i++) {
				const month = data[i].node.release.created_at;
				let arrayValue;
				for (let j = 0; j < monthsArray.length; j++) {
					arrayValue = monthsArray[j];
				}
				if (month !== arrayValue) {
					monthsArray.push(month);
				}
			}

			for (let i = 0; i < monthsArray.length; i++) {
				const topics = [];
				for (let j = 0; j < data.length; j++) {
					const date = data[j].node.release.created_at;

					if (date === monthsArray[i]) {
						topics.push({
							name: data[j].node.release.name,
							slug: `v${data[j].node.slug}`,
							prerelease: data[j].node.release.prerelease
						});
					}
				}

				section.push({
					section: monthsArray[i],
					topics: topics
				});
			}

			return section;
		},
		title() {
			return `${this.$page.releases.release.created_at} (version ${
				this.$page.releases.release.name
			})`;
		}
	}
};
</script>

<style lang="sass">
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
