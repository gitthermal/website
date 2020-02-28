<template>
	<g-link :to="post.path" class="blog__card">
		<div v-if="post.image" :style="`background-image: url(${ post.image.src })`" class="blog__card-image"></div>
		<div class="blog__card-content">
			<h6 class="blog__card-category">#{{ post.category  }}</h6>
			<h2 class="blog__card-heading">{{ post.title }}</h2>
			<p v-html="post.description" class="blog__card-description" />
			<div class="blog__card-meta">
				Posted {{ post.date }}
				<author-profile-name
					v-for="author in post.author"
					:key="author.id"
					:name="author.name"
					:image="author.image"
				/>
				<template v-if="post.timeToRead">
					- {{ post.timeToRead }} min read
				</template>
			</div>
		</div>
	</g-link>
</template>

<script>
import AuthorProfileName from "./AuthorProfileName"

export default {
	name: "BlogCard",
	components: {
		AuthorProfileName
	},
	props: {
		post: Object
	}
};
</script>

<style lang='sass'>
.blog
	&__card
		display: flex
		flex-direction: column
		cursor: pointer
		border:
			radius: 1rem
			width: 1px
			style: solid
			color: #dee0e3

		&-image
			border-top-left-radius: 1rem
			border-top-right-radius: 1rem
			width: 100%
			min-height: 180px
			background:
				size: cover
				position: center
				repeat: no-repeat

		&-content
			padding: 1.5rem

		&-category
			color: darken(#dee0e3, 30%)
			font-weight: 600

		&-heading
			color: black
			font-size: 1.5rem
			margin-bottom: .5rem
			font-weight: 600
			color: #222831

		&-description
			color: rgba(#222831, .8)
			margin-bottom: .875rem

		&-meta
			color: #393E46
			font-weight: 500
			font-size: .875rem
			display: flex
			flex-direction: row
			flex-wrap: wrap
			vertical-align: middle
			align-items: center

@media (min-width: 768px)
	.blog__card-image
		min-height: 320px

@media (min-width: 768px)
	.blog__card-heading
		font-size: 2rem
</style>
