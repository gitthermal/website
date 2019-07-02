<template>
	<div class="post">
		<div class="post__content">
			<slot />
		</div>
		<a :href="editLink" v-if="editOnGH" target="_blank" class="edit-link">
			<GitHubIcon />
			<span>Edit this page on GitHub</span>
		</a>
	</div>
</template>

<script>
import GitHubIcon from "../../static/images/icon/github.svg"

export default {
	name: "PostLayout",
	components: {
		GitHubIcon
	},
	computed: {
		currentPath() {
			return this.$route.matched[0].path;
		},
		editLink() {
			let path = this.currentPath;
			if ((path.match(new RegExp("/", "g")) || []).length == 1)
				path = path + "/README";
			return `https://github.com/gitthermal/website/blob/master${path}.md`;
		}
	},
	props: {
		editOnGH: {
			type: Boolean,
			default: true
		}
	}
};
</script>

<style lang='sass'>
.post__content
	margin-bottom: 2rem

	h1, h2, h3, h4, h5, h6
		margin-top: 1.5rem
		padding-bottom: .5rem

		&:first-child
			margin-top: 0
			font-weight: 300

	h1, h2, h3, h4, h5, h6, ol, ul, p
		margin-bottom: .8rem

	h2, h3
		border-bottom: 1px solid #dee0e3

	ol, ul, p
		color: #474C55
		line-height: 1.7

	ol, ul
		padding-left: 1.2rem

		li
			margin-bottom: .25rem

	a
		color: darken(#00ADB5, 5%)
		font-weight: 500
		text-decoration:
			line: underline
			style: initial
			color: rgba(#00ADB5, .18)

	img
		width: 100%

	blockquote
		margin: 0 0 2rem
		padding: 0 1.5rem
		border-left: .25rem solid #474C55
		font-size: 1.1rem

	code
		border-radius: .3rem
		color: #405a74
		padding: .25rem .5rem
		background-color: rgba(#474C55, .1)
		line-height: 1.5
		direction: ltr
		text-align: left
		white-space: pre-wrap
		word-spacing: normal
		word-break: normal
		-moz-tab-size: 2
		-o-tab-size: 2
		tab-size: 2
		-webkit-hyphens: none
		-ms-hyphens: none
		hyphens: none

.edit-link
	display: flex
	flex-direction: row
	align-items: center

	svg
		width: 20px
		height: 20px
		margin-right: 8px

	span
		font:
			size: .875rem
			weight: 500
		color: #B1B2B4

		&:hover
			color: darken(#B1B2B4, 10%)
</style>
