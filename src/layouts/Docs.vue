<template>
	<Layout :headerSize="1" :footer="false">
		<div class="docs">
			<div class="docs__container">
				<doc-sidebar :menu="menu" :route="route" />
				<div class="docs__content">
					<div class="docs__content-container">
						<post-layout
							:title="title"
							:description="description"
							:titleBorder="titleBorder"
						>
							<slot />
						</post-layout>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import Header from "../components/Header";
import PostLayout from "./Post";
import Navbar from "./partials/Navbar";
import DocSidebar from "../components/DocSidebar";

export default {
	name: "DocsLayout",
	components: {
		Header,
		PostLayout,
		Navbar,
		DocSidebar
	},
	props: {
		title: String,
		description: String,
		titleBorder: Boolean,
		menu: Array,
		route: String
	},
	methods: {
		linkToDocs(link) {
			this.sidebarToggleable = false;
			this.$router.push(link);
		}
	}
};
</script>

<style lang='sass'>
.docs
	&__container
		display: flex
		flex-direction: row

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
