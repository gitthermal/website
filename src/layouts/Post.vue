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
import GitHubIcon from "../../static/images/icon/github.svg";

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

	h1, h2, h3, h4, h5, h6, ol, ul, p
		margin-bottom: .5rem

	ol, ul, p
		color: #474C55
		line-height: 1.7

	p
		margin-bottom: 1.125rem
		word-wrap: break-word

	ol, ul
		padding-left: 1.2rem

		li
			margin-bottom: .25rem
			word-wrap: break-word

	a
		color: #00ADB5
		font-weight: 500
		text-decoration: underline

		&:hover
			color: darken(#00ADB5, 5%)

	hr
		margin-top: 4rem
		margin-bottom: 4rem
		border:
			width: 1px
			color: rgba(#474C55, .2)

	p img
		display: flex

	img
		margin: 0 auto 1.5rem
		max-width: 100%
		padding: 5px
		border: 1px solid #eeeeee
		box-shadow: 1px 1px 5px rgba(0, 0, 0, .1)

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
