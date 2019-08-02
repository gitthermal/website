<template>
	<g-link :to="post.path" class="blog__card">
		<div class="blog__card-content">
			<h6 class="blog__card-category">#{{ post.category  }}</h6>
			<h2 class="blog__card-heading">{{ post.title }}</h2>
			<p v-html="post.description" class="blog__card-description" />
			<div class="blog__card-meta">
				Posted {{ post.date }}
				<div v-for="(author, i) in post.author" :key="author.id">
					<g-image
						class="blog__card-avatar"
						:alt="author.title"
						:src="author.avatar"
					/>
					<g-link :to="author.path" class="blog__card-name">{{
						author.title
					}}</g-link>
				</div>
				<template v-if="post.timeToRead">
					- {{ post.timeToRead }} min read
				</template>
			</div>
		</div>
	</g-link>
</template>

<script>
export default {
	name: "BlogCard",
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
		border:
			radius: 1rem
			width: 1px
			style: solid
			color: #dee0e3

		&-image
			border-top-left-radius: 1rem
			border-top-right-radius: 1rem
			width: 100%
			min-height: 300px
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
			vertical-align: middle
			align-items: center

		&-avatar
			width: 30px
			border-radius: 99px
			vertical-align: middle
			margin: 0 6px

		&-name
			margin-right: 5px
			color: #00ADB5
</style>
