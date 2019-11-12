<template>
	<Layout :headerSize="1">
		<div class="blog">
			<container :width="760">
				<div class="blog__heading">{{ $page.blog.title }}</div>
				<div class="blog__meta">
					Posted {{ $page.blog.date }}
					<author-profile-name
						v-for="author in $page.blog.author"
						:key="author.id"
						:name="author.name"
						:image="author.image"
					/>
					<template v-if="$page.blog.timeToRead">
						- {{ $page.blog.timeToRead }} min read
					</template>
				</div>
				<div
					v-if="$page.blog.image"
					:style="`background-image: url(${$page.blog.image.src})`"
					class="blog__image"
				/>
				<post-layout :editOnGH="false">
					<VueRemarkContent />
				</post-layout>
			</container>
		</div>
	</Layout>
</template>

<page-query>
query Blog ($path: String!) {
	blog: blog (path: $path) {
		title
		date (format: "MMMM DD, YYYY")
		image
		description
		author {
			id
			name
			image
		}
		path
		canonical
		content
	}
}
</page-query>

<script>
import Container from "../layouts/Container";
import PostLayout from "../layouts/Post";
import AuthorProfileName from "../components/AuthorProfileName";

export default {
	name: "Blogs",
	components: {
		Container,
		PostLayout,
		AuthorProfileName
	},
	metaInfo() {
		return {
			title: this.$page.blog.title,
			meta: [
				{
					name: "description",
					content: this.$page.blog.description
				},
				{
					name: "url",
					content: `https://thermal.codecarrot.net${this.$page.blog.path}`
				},

				// Google
				{
					itemprop: "description",
					content: this.$page.blog.description
				},
				{
					itemprop: "image",
					content: this.coverImage
				},

				// Facebook
				{
					name: "og:description",
					content: this.$page.blog.description
				},
				{
					name: "og:image",
					content: this.coverImage
				},
				{
					name: "og:url",
					content: `https://thermal.codecarrot.net${this.$page.blog.path}`
				},

				// Twitter
				{
					name: "twitter:description",
					content: this.$page.blog.description
				},
				{
					name: "twitter:image",
					content: this.coverImage
				},
				{
					name: "twitter:url",
					content: `https://thermal.codecarrot.net${this.$page.blog.path}`
				}
			],
			link: [
				{
					rel: "canonical",
					href: this.canonicalURL
				}
			]
		};
	},
	computed: {
		coverImage() {
			return !!this.$page.blog.image[0]
				? this.$page.blog.image[0].url
				: "/images/meta-image.png";
		},
		canonicalURL() {
			return this.$page.blog.canonical === ""
				? `https://thermal.codecarrot.net${this.$page.blog.path}`
				: this.$page.blog.canonical;
		}
	}
};
</script>

<style lang='sass'>
.blog
	padding-top: 3rem
	padding-bottom: 3rem

	&__heading
		margin-bottom: 2.5rem
		text-align: center
		font-size: 1.5rem
		font-weight: 300
		line-height: 1.4

	&__meta
		color: #393E46
		font-weight: 500
		font-size: .875rem
		display: flex
		flex-direction: row
		align-items: center
		justify-content: center
		margin-bottom: 2rem

	&__image
		width: 100%
		min-height: 200px
		border-radius: 10px
		margin-bottom: 2rem
		background:
			size: cover
			position: center
			repeat: no-repeat

@media (min-width: 768px)
	.blog__image
		min-height: 335px

@media (min-width: 992px)
	.blog__image
		min-height: 370px

	.blog__heading
		font-size: 2.5rem
</style>
