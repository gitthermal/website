<template>
	<layout :headerSize="1" :footer="false">
		<div style="display: flex; flex-direction: row;">
			<sidebar type="docs" :menu="docsmenu" />
			<div class="docs__content">
				<div class="docs__content-container">
					<post-layout
						:title="$page.doc.title"
						:description="$page.doc.description"
						:titleBorder="$page.doc.titleBorder"
						:content="$page.doc.content"
					/>
				</div>
			</div>
		</div>
	</layout>
</template>

<script>
import DocsMenu from "../../data/docs-menu.json";
import Sidebar from "../components/Sidebar";
import PostLayout from "../layouts/Post";

export default {
	name: "DocsPage",
	metaInfo() {
		return {
			title: this.$page.doc.title,
			meta: [
				{
					key: "description",
					name: "description",
					content: this.$page.doc.description
				}
			]
		};
	},
	components: {
		Sidebar,
		PostLayout
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
.docs
	&__content
		padding-top: 2rem
		padding-bottom: 2rem
		flex: 1

		&-container
			max-width: 760px
			margin-left: auto
			margin-right: auto
			padding-left: 20px
			padding-right: 20px
</style>
