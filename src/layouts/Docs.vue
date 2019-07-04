<template>
	<Layout :headerSize="1" :footer="false">
		<div class="docs">
			<div class="docs__container">
				<div :class="{ 'docs__sidebar-none': !sidebar }" class="docs__sidebar">
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
		}
	}
};
</script>

<style lang='sass'>
.docs
	&__container
		display: flex
		flex-direction: row

	&__sidebar
		position: sticky
		border-right: 1px solid rgba(#474C55, .3)
		max-width: 300px
		overflow-y: scroll
		top: 69px
		padding:
			top: 1rem
			left: 2rem
			right: 2rem
			bottom: 2rem
		height: calc(100vh - 69px)
		z-index: 5
		background-color: white

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
			padding:
				left: 1rem
				right: 1rem

			&-none
				display: none

@media (min-width: 768px)
	.docs__sidebar-toggle
		display: none
</style>
