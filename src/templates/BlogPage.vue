<template>
	<Layout :headerSize="1">
		<div class="blog">
			<container :width="760">
				<h1 class="blog__heading">{{ $page.blog.title }}</h1>
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
					key: "description",
					name: "description",
					content: this.$page.blog.excerpt
				}
			]
		};
	}
};
</script>

<page-query>
query BlogPage ($path: String!) {
	blog: blogPage (path: $path) {
		title
		date (format: "D. MMMM YYYY")
		author {
			title
			avatar
			path
		}
		timeToRead
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

	&__author
		&-avatar
			width: 30px
			border-radius: 99px
			vertical-align: middle
			margin: 0 6px

		&-name
			margin-right: 5px
			color: #00ADB5
</style>
