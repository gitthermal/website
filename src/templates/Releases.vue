<template>
	<DocsLayout :menu="menu" route="release" :title="$page.releases.name" :title-border="true">
		<div v-html="blogContent"></div>
	</DocsLayout>
</template>

<page-query>
query ($path: String!) {
	menu: allReleases {
		edges {
			node {
				id
				name
				prerelease
				slug
			}
		}
	}

	releases (path: $path) {
		name
		slug
		path
		content
	}
}
</page-query>


<script>
// packages
const remark = require("remark");
const recommended = require("remark-preset-lint-recommended");
const html = require("remark-html");

// components
import DocsLayout from "../layouts/Docs";

export default {
	name: "Release",
	metaInfo() {
		return {
			title: this.$page.releases.title,
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
			let stable = [];
			let prerelease = [];
			data.forEach(item => {
				if (item.node.prerelease) {
					prerelease.push(item.node);
				} else {
					stable.push(item.node);
				}
			});
			return [
				{
					section: "Stable",
					topics: stable
				},
				{
					section: "Pre-Release",
					topics: prerelease
				}
			];
		},
		blogContent() {
			let content;
			remark()
				// .use(recommended)
				.use(html)
				.process(this.$page.releases.content, function(err, file) {
					if (err) console.error(err);
					content = file.contents;
				});
			return content;
		}
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
