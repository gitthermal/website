<template>
	<Layout :headerSize="1" :footer="false">
		<div class="docs">
			<div class="docs__container">
				<div :class="{ 'docs__sidebar-none': !sidebar }" class="docs__sidebar">
					<div class="docs__search-container">
						<input
							ref="search_input"
							id="search_input"
							placeholder="Search docs..."
							title="Search docs"
							type="search"
							@click="loadDocSearch()"
						/>
					</div>
					<div class="docs__sidebar-content">
						<template v-for="section in menu" class="sidebar__menu">
							<h6
								:key="`section-${section.section}`"
								class="sidebar__menu-heading"
							>
								{{ section.section }}
							</h6>
							<template v-for="item in section.topics">
								<g-link
									:to="`/docs/${item.slug}`"
									:key="`${section.section}-item-${item.slug}`"
									class="sidebar__menu-item"
								>
									{{ item.title }}
								</g-link>
							</template>
						</template>
					</div>
				</div>
				<div class="docs__content">
					<div class="docs__content-container">
						<PostLayout
							:title="title"
							:description="description"
							:titleBorder="titleBorder"
						>
							<slot />
						</PostLayout>
					</div>
				</div>
				<div @click="toggleSidebar()" class="docs__sidebar-toggle">
					<LeftArrow v-if="sidebar" />
					<RightArrow v-else />
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import Header from "../components/Header";
import PostLayout from "./Post";
import Navbar from "./partials/Navbar";
import LeftArrow from "../assets/images/chevrons-left.svg";
import RightArrow from "../assets/images/chevrons-right.svg";
import docsearch from "docsearch.js";

export default {
	name: "DocsLayout",
	components: {
		Header,
		PostLayout,
		Navbar,
		LeftArrow,
		RightArrow
	},
	props: {
		title: String,
		description: String,
		titleBorder: Boolean,
		menu: Array
	},
	computed: {
		sidebar() {
			return this.sidebarToggleable && window.innerWidth <= 768;
		}
	},
	methods: {
		toggleSidebar() {
			this.sidebarToggleable = !this.sidebarToggleable;
		},
		linkToDocs(link) {
			this.sidebarToggleable = false;
			this.$router.push(link);
		},
		loadDocSearch() {
			docsearch({
				apiKey: "951a5443c76379c2aa75205eb62b2f7c",
				indexName: "codecarrot-thermal",
				inputSelector: "#search_input",
				debug: false, // process.env.NODE_ENV === 'development'
				algoliaOptions: {
					hitsPerPage: 5
				}
			});
			this.$refs.search_input.focus();
		}
	}
};
</script>

<style lang='sass'>
@import '~docsearch.js/dist/cdn/docsearch.min.css';

.docs
	&__container
		display: flex
		flex-direction: row

	&__search-container
		padding: 1rem 2rem
		border-bottom: 1px solid rgba(71, 76, 85, 0.2)

	&__sidebar
		position: sticky
		border-right: 1px solid rgba(#474C55, .3)
		max-width: 300px
		top: 69px
		height: calc(100vh - 69px)
		z-index: 5
		background-color: white

		&-content
			padding:
				top: 1rem
				left: 2rem
				right: 2rem
				bottom: 2rem
			overflow-y: scroll

			height: calc(100vh - 136px)

		&-toggle
			position: fixed
			background-color: #00ADB5
			bottom: 4.225rem
			cursor: pointer
			right: 1.5rem
			display: flex
			border-radius: 50px
			padding: .6rem

			svg
				stroke: white
				width: 25px
				height: 25px

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

.sidebar
	&__menu
		&-heading
			color: rgba(#474C55, .5)
			font-weight: 600
			margin-top: 2rem
			margin-bottom: .5rem
			border-top: 1px solid rgba(#474C55, .2)
			padding-top: 2rem
			text-transform: uppercase

			&:first-child
				border: none
				margin-top: 0
				padding-top: 1rem

		&-item
			display: flex
			flex-direction: column
			padding: 3px 10px
			margin-bottom: 5px
			color: rgba(#474C55, .8)
			font-weight: 500
			cursor: pointer

			&:hover
				color: #00ADB5

		&-item.active--exact
			background-color: rgba(#00ADB5, .1)
			color: #00ADB5
			border-radius: 1rem

@media (max-width: 768px)
	.docs
		&__sidebar
			position: fixed

			&-none
				display: none

@media (min-width: 768px)
	.docs__sidebar-toggle
		display: none

.algolia-autocomplete
	width: 100%

#search_input
	padding: .5rem .8rem
	font-size: .85rem
	border-radius: .3rem
	outline: none
	border:
		color: #eeeeee
		width: 1px
		style: solid
	width: 100%
	font-family: inherit
</style>
