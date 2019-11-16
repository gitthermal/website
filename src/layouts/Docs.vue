<template>
	<Layout :headerSize="1" :footer="false">
		<div class="docs">
			<div class="docs__container">
				<doc-sidebar :menu="menu" :route="route" />
				<div class="docs__content">
					<div class="docs__content-container">
						<div class="docs__meta">
							<h1 class="docs__meta-heading">{{ title }}</h1>
							<div class="docs__meta-description">{{ description }}</div>
							<hr v-if="titleBorder" class="docs__meta-titleBorder" />
						</div>
						<release-assets v-if="assets.length > 0" :releases="assets" />
						<post-layout>
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
import ReleaseAssets from "../components/ReleaseAssets";
import PostLayout from "./Post";
import Navbar from "./partials/Navbar";
import DocSidebar from "../components/DocSidebar";

export default {
	name: "DocsLayout",
	components: {
		Header,
		ReleaseAssets,
		PostLayout,
		Navbar,
		DocSidebar
	},
	props: {
		title: String,
		description: String,
		titleBorder: Boolean,
		menu: Array,
		route: String,
		assets: Array
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

	&__meta
		margin-bottom: 1.5rem

		&-heading
			margin-top: 0
			font-weight: 300

		&-description
			color: lighten(#000, 40%)
			font-size: 1.05rem
			margin-bottom: 1rem

		&-titleBorder
			border:
				color: #dee0e3
				width: 1px
				style: solid

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
