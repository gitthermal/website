<template>
	<github-button
		href="https://github.com/gitthermal/thermal"
		:data-size="size"
		:data-show-count="showCount"
		aria-label="Star gitthermal/thermal on GitHub"
	>
		Star
	</github-button>
</template>

<script>
import GithubButton from "vue-github-button"

export default {
	name: "GithubStar",
	components: {
		GithubButton
	},
	props: {
		showCount: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: "small"
		}
	}
}
</script>
