<template>
	<Link
		class="button"
		:class="{
			'button__outline-light': theme === 'dark',
			'button__outline-dark': theme === 'light',
			'button__size-1': size === 1,
			'button__size-2': size === 2
		}"
		:link="link"
	>
		{{ text }}
	</Link>
</template>

<script>
import Link from "../Link";

export default {
	name: "Button",
	components: {
		Link
	},
	props: {
		text: {
			type: String
		},
		link: {
			type: String,
			default: null
		},
		size: {
			type: Number,
			default: 2
		},
		theme: {
			type: String,
			default: "dark"
		}
	}
};
</script>

<style lang='sass'>
.button
	&__outline
		&-light
			border: 1px solid rgba(255, 255, 255, .8)
			color: rgba(255, 255, 255, .8)

			&:hover
				border: 1px solid rgba(255, 255, 255, 1)
				color: rgba(255, 255, 255, 1)

		&-dark
			border: 1px solid rgba(#222831, .8)
			color: rgba(#222831, .8)

			&:hover
				border: 1px solid #222831
				color: #222831
</style>
