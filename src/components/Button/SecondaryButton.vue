<template>
	<Link
		class="button button__secondary"
		:class="{
			'button__size-1': size === 1,
			'button__size-2': size === 2
		}"
		:link="link"
		:external="external"
	>
		{{ text }}
	</Link>
</template>

<script>
import Link from "../Link";

export default {
	name: "SecondaryButton",
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
		external: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang='sass'>
.button
	&__secondary
		background-color: white
		color: #00ADB5
</style>
