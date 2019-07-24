<template>
	<DocsLayout
		:menu="docsmenu"
		:title="$page.doc.title"
		:description="$page.doc.description"
		:titleBorder="$page.doc.titleBorder"
	>
		<div v-html="$page.doc.content"></div>
	</DocsLayout>
</template>

<script>
import DocsLayout from "../layouts/Docs";
import DocsMenu from "../../data/docs-menu.json";

export default {
	name: "Docs",
	metaInfo() {
		return {
			title: this.$page.doc.title,
			meta: [
				{
					key: "description",
					name: "description",
					content: this.$page.doc.description
				}
			],
			link: [
				{
					rel: "canonical",
					href: `https://thermal.codecarrot.net${this.$page.doc.path}`
				}
			]
		};
	},
	components: {
		DocsLayout
	},
	computed: {
		docsmenu() {
			return DocsMenu;
		}
	}
};
</script>

<page-query>
query DocPage ($path: String!) {
	doc: docPage (path: $path) {
		title
		description
		titleBorder
		content
	}
}
</page-query>

<style lang='sass'>

</style>
