<template>
	<DocsLayout :links="links" :title="$page.doc.title" :description="$page.doc.description" :titleBorder="$page.doc.titleBorder">
		<div v-html="$page.doc.content"></div>
	</DocsLayout>
</template>

<script>
import DocsLayout from "../layouts/Docs"
import Links from "../data/doc-links.yml"

export default {
	name: "Docs",
	components: {
		DocsLayout
	},
	computed: {
		links() {
			return Links
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
