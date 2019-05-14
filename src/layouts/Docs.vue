<template>
	<Layout :footer="false">
		<div class="docs__container">
			<div class="docs__sidebar">
				<template v-for="group in links" class="sidebar__menu">
					<h6 :key="`title-${group.title}`" class="sidebar__menu-heading">
						{{ group.title }}
					</h6>
					<template v-for="(item, i2) in group.items">
						<g-link
							:to="`/docs${item.link}`"
							:key="`item-${item.title}`"
							class="sidebar__menu-item"
						>
							{{ item.title }}
						</g-link>
					</template>
				</template>
			</div>
			<div class="docs__content">
				<div class="docs__content-container">
					<PostLayout>
						<slot />
					</PostLayout>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import PostLayout from "./Post"

export default {
	name: "DocsLayout",
	components: {
		PostLayout
	},
	props: {
		links: Array
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
		top: 85.33px
		padding:
			top: 1rem
			left: 2rem
			right: 2rem
			bottom: 2rem
		height: calc(100vh - 85.33px)

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
			font-weight: 600
			margin-top: .875rem
			margin-bottom: .5rem
			border-top: 1px solid rgba(#474C55, .3)
			padding-top: .875rem
			text-transform: uppercase

			&:first-child
				border: none
				margin-top: 0

		&-item
			display: flex
			flex-direction: column
			padding-top: 3px
			padding-bottom: 3px
			color: rgba(#474C55, .8)
			font-weight: 500

			&:hover
				color: #00ADB5
</style>
