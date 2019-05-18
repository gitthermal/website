<template>
	<a
		v-if="external"
		:href="link"
		:target="target"
	>
		<slot />
	</a>
	<g-link
		v-else
		:to="link"
	>
		<slot />
	</g-link>
</template>

<script>
export default {
	name: "Button",
	props: {
		link: {
			type: String,
			default: null
		},
		external: {
			type: Boolean,
			default: false
		},
	},
	computed: {
		target() {
			switch (this.external) {
				case true:
					return "_blank"
				default:
				case false:
					return "_self"
			}
		}
	}
};
</script>

<style lang="sass">
.button
	cursor: pointer
	opacity: 1
	user-select: none
	text-align: center
	display: inline-block
	border-radius: 50px
	font-weight: 600

	&__size
		&-1
			font-size: 0.820rem
			padding: .5rem 1rem

		&-2
			font-size: 1.125rem
			padding: .75rem 1.5rem
</style>

