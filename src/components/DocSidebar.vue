<template>
	<div>
		<div
			:class="{ 'docs__sidebar-none': !sidebarView }"
			class="docs__sidebar"
			:style="{
				height: `${sidebar.height}px`,
				top: `${sidebar.top}px`
			}"
		>
			<template v-for="section in menu" class="sidebar__menu">
				<h6 :key="`section-${section.section}`" class="sidebar__menu-heading">
					{{ section.section }}
				</h6>
				<template v-for="item in section.topics">
					<g-link
						:to="`/${route}/${item.slug}/`"
						:key="`${section.section}-item-${item.slug}`"
						class="sidebar__menu-item"
					>
						{{ item.name }}
					</g-link>
				</template>
			</template>
		</div>

		<div @click="toggleSidebar()" class="docs__sidebar-toggle">
			<Left-arrow v-if="sidebarView" />
			<Right-arrow v-else />
		</div>
	</div>
</template>

<script>
import LeftArrow from "../assets/images/chevrons-left.svg";
import RightArrow from "../assets/images/chevrons-right.svg";

export default {
	name: "DocSidebar",
	data() {
		return {
			sidebarToggleable: false,
			scrollY: 0,
			sidebar: {
				height: 0,
				top: 0
			}
		};
	},
	props: {
		menu: Array,
		route: String
	},
	components: {
		LeftArrow,
		RightArrow
	},
	computed: {
		sidebarView() {
			return this.sidebarToggleable && window.innerWidth <= 768;
		}
	},
	methods: {
		toggleSidebar() {
			this.sidebarToggleable = !this.sidebarToggleable;
		},
		handleScroll() {
			this.scrollY = window.scrollY;
			if (window.screenY <= 35) {
				this.sidebar.height = window.innerHeight - 69;
				this.sidebar.top = 69;
			} else {
				this.sidebar.height = window.innerHeight - 69 - 35;
				this.sidebar.top = 69 + 35;
			}
		}
	},
	mounted() {
		this.handleScroll();
	},
	created() {
		window.addEventListener("scroll", this.handleScroll);
	},
	destroyed() {
		window.removeEventListener("scroll", this.handleScroll);
	}
};
</script>

<style lang='sass'>
.docs__sidebar
	position: sticky
	border-right: 1px solid rgba(#474C55, .3)
	max-width: 300px
	overflow-y: scroll
	padding:
		top: 1rem
		left: 2rem
		right: 2rem
		bottom: 2rem
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
