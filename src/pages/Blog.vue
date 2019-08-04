<template>
	<Layout :headerSize="1">
		<div class="blog">
			<container :width="760">
				<h1 class="blog__heading">Thermal Blog</h1>
				<blog-card
					:post="node"
					v-for="{ node } in $page.blogs.edges"
					:key="node.id"
					class="blog__section"
				/>
				<p class="blog__contribute">
					Want to contribute to Thermal blog?
					<g-link to="/docs/how-to-contribute"> Learn more here</g-link>
				</p>
			</container>
		</div>
	</Layout>
</template>

<page-query>
query Blog {
	blogs: allBlogPage(order: DESC) {
		edges {
			node {
				id
				title
				description
				image {
					url
				}
				path
				category
				date (format: "MMMM DD, YYYY")
				timeToRead
			}
		}
	}
}
</page-query>

<script>
import Container from "../layouts/Container";
import BlogCard from "../components/BlogCard";

export default {
	name: "Blog",
	components: {
		Container,
		BlogCard
	},
	metaInfo: {
		title: "Updates, Insight, Changelog, Features and more",
		link: [
			{
				rel: "canonical",
				href: "https://thermal.codecarrot.net/blog"
			}
		]
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
		font-weight: 300

	&__section
		margin-bottom: 2rem

	&__contribute
		text-align: center
		font-size: .875rem

		a
			color: #00ADB5
</style>
