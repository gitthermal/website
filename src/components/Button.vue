<template>
	<a
		v-if="external"
		:href="link"
		:target="target"
		class="button"
		:class="{
			button__primary: apperance === 'primary',
			button__secondary: apperance === 'secondary',
			button__outline: apperance === 'outline',
			'button__size-1': size === 1,
			'button__size-2': size === 2
		}"
	>
		{{ text }}
	</a>
	<g-link
		v-else
		:to="link"
		class="button"
		:class="{
			button__primary: apperance === 'primary',
			button__secondary: apperance === 'secondary',
			button__outline: apperance === 'outline',
			'button__size-1': size === 1,
			'button__size-2': size === 2
		}"
	>
		{{ text }}
	</g-link>
</template>

<script>
export default {
	name: "Button",
	props: {
		apperance: {
			type: String,
			default: "primary"
		},
		text: {
			type: String
		},
		link: {
			type: String,
			default: null
		},
		external: {
			type: Boolean,
			default: false
		},
		size: {
			type: Number,
			default: 2,
			required: true
		}
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

<style lang='sass'>
.button
	cursor: pointer
	opacity: 1
	user-select: none
	text-align: center
	display: inline-block
	border-radius: 50px
	font-weight: 600

	&__primary
		background-color: #00ADB5
		color: white

	&__secondary
		background-color: white
		color: #00ADB5

	&__outline
		border: 1px solid rgba(225, 225, 225, .8)
		color: rgba(225, 225, 225, .8)

		&:hover
			border: 1px solid rgba(225, 225, 225, 1)
			color: rgba(225, 225, 225, 1)

	&__size
		&-1
			font-size: 0.820rem
			padding: .5rem 1rem

		&-2
			font-size: 1.125rem
			padding: .75rem 1.5rem

</style>
