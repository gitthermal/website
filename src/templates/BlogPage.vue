<template>
	<Layout :headerSize="1">
		<div class="blog">
			<container :width="760">
				<div class="blog__heading">{{ $page.blog.title }}</div>
				<div class="blog__meta">
					Posted {{ $page.blog.date }}
					<div v-for="(author, i) in $page.blog.author" :key="author.id">
						<g-image
							class="blog__author-avatar"
							:alt="author.title"
							:src="author.avatar"
						/>
						<g-link :to="author.path" class="blog__author-name">{{
							author.title
						}}</g-link>
					</div>
					<template v-if="$page.blog.timeToRead">
						- {{ $page.blog.timeToRead }} min read
					</template>
				</div>
				<div
					:style="`background-image: url(${$page.blog.image.src})`"
					class="blog__image"
				/>
				<post-layout :editOnGH="false">
					<div v-html="$page.blog.content"></div>
				</post-layout>
			</container>
		</div>
	</Layout>
</template>

<script>
import Container from "../layouts/Container";
import PostLayout from "../layouts/Post";

export default {
	name: "Blogs",
	components: {
		Container,
		PostLayout
	},
	metaInfo() {
		return {
			title: this.$page.blog.title,
			meta: [
				{
					name: "description",
					content: this.$page.blog.excerpt
				},
				{
					name: "url",
					content: this.$page.blog.path
				},

				// Google
				{
					itemprop: "description",
					content: this.$page.blog.excerpt
				},
				{
					itemprop: "image",
					content: this.$page.blog.image.src
				},

				// Facebook
				{
					name: "og:description",
					content: this.$page.blog.excerpt
				},
				{
					name: "og:image",
					content: this.$page.blog.image.src
				},
				{
					name: "og:url",
					content: this.$page.blog.path
				},

				// Twitter
				{
					name: "twitter:description",
					content: this.$page.blog.excerpt
				},
				{
					name: "twitter:image",
					content: this.$page.blog.image.src
				},
				{
					name: "twitter:url",
					content: this.$page.blog.path
				}
			],
			link: [
				{
					rel: "canonical",
					href: `https://thermal.codecarrot.net${this.$page.blog.path}`
				}
			]
		}
	}
};
</script>

<page-query>
query BlogPage ($path: String!) {
	blog: blogPage (path: $path) {
		title
		date (format: "MMMM DD, YYYY")
		author {
			title
			avatar
			path
		}
		path
		timeToRead
		image
		excerpt
		content
	}
}
</page-query>

<style lang='sass'>
.blog
	padding-top: 3rem
	padding-bottom: 3rem

	&__heading
		margin-bottom: 2.5rem
		text-align: center
		font-weight: 300

	&__meta
		color: #393E46
		font-weight: 500
		font-size: .875rem
		display: flex
		flex-direction: row
		align-items: center
		justify-content: center
		margin-bottom: 2rem

	&__author
		&-avatar
			width: 30px
			border-radius: 99px
			vertical-align: middle
			margin: 0 6px

		&-name
			margin-right: 5px
			color: #00ADB5

	&__image
		width: 100%
		height: 370px
		border-radius: 10px
		margin-bottom: 2rem
		background:
			size: cover
			position: center
			repeat: no-repeat

@media (min-width: 768px)
	.blog__heading
		font-size: 2.5rem
	.blog__image
		height: 335px;
</style>
