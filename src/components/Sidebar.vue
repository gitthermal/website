<template>
	<div>
		<div v-if="!sidebar" class="sidebar">
			<template v-for="section in menu" class="sidebar__menu">
				<h6 :key="`section-${section.section}`" class="sidebar__menu-heading">
					{{ section.section }}
				</h6>
				<template v-for="item in section.topics">
					<g-link
						:to="`/docs/${item.slug}`"
						:key="`${section.section}-item-${item.slug}`"
						class="sidebar__menu-item"
						@click.native="toggleSidebar()"
					>
						{{ item.title }}
					</g-link>
				</template>
			</template>
		</div>
		<div @click="toggleSidebar()" class="sidebar__toggle">
			<left-arrow v-if="sidebar" />
			<right-arrow v-else />
		</div>
	</div>
</template>

<script>
import LeftArrow from "../assets/images/chevrons-left.svg";
import RightArrow from "../assets/images/chevrons-right.svg";

export default {
	name: "SidebarMenu",
	data() {
		return {
			toggle: false
		}
	},
	props: {
		menu: Array
	},
	components: {
		LeftArrow,
		RightArrow
	},
	computed: {
		sidebar() {
			return this.toggle && window.innerWidth <= 768;
		}
	},
	methods: {
		toggleSidebar() {
			this.toggle = !this.toggle;
		}
	}
};
</script>

<style lang='sass'>
.sidebar
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

	&__toggle
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

@media (max-width: 768px)
	.sidebar
		position: fixed
		padding:
			left: 1rem
			right: 1rem

@media (min-width: 768px)
	.sidebar__toggle
		display: none
</style>
