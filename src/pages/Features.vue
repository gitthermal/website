<template>
	<Layout>
		<div class="features__hero">
			<Container>
				<div class="features__hero-heading">
					Features
				</div>
				<div class="features__hero-description">
					One place to manage all of your Git repositories
				</div>
			</Container>
		</div>
		<call-to-action />
	</Layout>
</template>

<script>
import Container from "../layouts/Container"
import CallToAction from "../components/hero/CallToAction";

export default {
	name: "Features",
	components: {
		Container,
		CallToAction
	}
}
</script>

<style lang='sass'>
.features
	&__hero
		background-color: #222831
		text-align: center
		padding-top: 3rem
		padding-bottom: 5rem

		&-heading
			color: white
			font-size: 2.5rem
			line-height: 1.25
			margin-bottom: .875rem

		&-description
			color: rgba(#fff, .5)
			font-size: 1.5rem
</style>
