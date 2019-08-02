<template>
	<Layout :headerSize="1">
		<div class="blog">
			<container :width="760">
				<h1 class="blog__heading">{{ $page.blogPost.title }}</h1>
				<div class="blog__meta">
					Posted {{ $page.blogPost.date }}
					<div v-for="(author, i) in $page.blogPost.author" :key="author.id">
						<g-image
							class="blog__author-avatar"
							:alt="author.title"
							:src="author.avatar"
						/>
						<g-link :to="author.path" class="blog__author-name">{{
							author.title
						}}</g-link>
					</div>
					<template v-if="$page.blogPost.timeToRead">
						- {{ $page.blogPost.timeToRead }} min read
					</template>
				</div>
				<div
					:style="`background-image: url(${$page.blog.image[0].url})`"
					class="blog__image"
				/>
				<post-layout :editOnGH="false">
					<div v-html="$page.blogPost.content"></div>
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
			title: this.$page.blogPost.title,
			meta: [
				{
					key: "description",
					name: "description",
					content: this.$page.blogPost.description
				},
				{
					name: "url",
					content: `https://thermal.codecarrot.net${this.$page.blogPost.path}`
				},

				// Google
				{
					itemprop: "description",
					content: this.$page.blogPost.description
				},
				{
					itemprop: "image",
					content: this.$page.blogPost.image[0].url
				},

				// Facebook
				{
					name: "og:description",
					content: this.$page.blogPost.description
				},
				{
					name: "og:image",
					content: this.$page.blogPost.image[0].url
				},
				{
					name: "og:url",
					content: `https://thermal.codecarrot.net${this.$page.blogPost.path}`
				},

				// Twitter
				{
					name: "twitter:description",
					content: this.$page.blog.description
				},
				{
					name: "twitter:image",
					content: this.$page.blogPost.image[0].url
				},
				{
					name: "twitter:url",
					content: `https://thermal.codecarrot.net${this.$page.blogPost.path}`
				}
			],
			link: [
				{
					rel: "canonical",
					href: this.$page.blogPost.canonical
				}
			]
		}
	}
};
</script>

<page-query>
query BlogPage ($path: String!) {
	blogPost: blogPage (path: $path) {
		title
		date (format: "MMMM DD, YYYY")
		timeToRead
		image {
			url
		}
		canonical
		path
		canonical
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

@media (max-width: 768px)
	.blog__image
		height: 335px;
</style>
