<template>
	<DocsLayout :menu="docsmenu">
		<div v-html="$page.doc.content"></div>
	</DocsLayout>
</template>

<script>
import DocsLayout from "../layouts/Docs"
import DocsMenu from "../../data/docs-menu.json"

export default {
	name: "Docs",
	components: {
		DocsLayout
	},
	computed: {
		docsmenu() {
			return DocsMenu
		}
	}
};
</script>

<page-query>
query DocPage ($path: String!) {
	doc: docPage (path: $path) {
		path
		title
		content
	}
}
</page-query>

<style lang='sass'>

</style>
