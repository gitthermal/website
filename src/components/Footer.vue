<template>
	<Container>
		<div class="footer">

			<div class="footer__main">
				<Logo />
				<p>© Copyright {{ new Date().getFullYear() }} CodeCarrot, Inc</p>
			</div>

			<div class="footer__navbar">
				<g-link to="/features" class="footer__navbar-item">
					Features
				</g-link>
				<a :href="'https://discordapp.com/invite/KT3nAR5/' + footerUrl" target="_blank" class="footer__navbar-item">
					Help
				</a>
				<g-link :to="releases" class="footer__navbar-item">
					Release notes
				</g-link>
				<a :href="'https://github.com/gitthermal/thermal/issues/new/choose' + footerUrl" target="_blank" class="footer__navbar-item">
					Feedback
				</a>
				<!-- <div class="footer__navbar-item">
					Privacy
				</div>
				<div class="footer__navbar-item">
					Terms
				</div> -->
			</div>

			<div class="footer__social">
				<a :href="'https://www.github.com/gitthermal/thermal' + footerUrl" class="footer__social-item">
					<g-image src="../../static/images/icon/github.svg" />
				</a>
				<a :href="'https://discordapp.com/invite/KT3nAR5/' + footerUrl" class="footer__social-item">
					<g-image src="../../static/images/icon/discord.svg" />
				</a>
				<a :href="'https://www.producthunt.com/posts/thermal' + footerUrl" class="footer__social-item">
					<g-image src="../../static/images/icon/producthunt.svg" />
				</a>
				<a :href="'https://www.twitter.com/gitthermal' + footerUrl" class="footer__social-item">
					<g-image src="../../static/images/icon/twitter.svg" />
				</a>
			</div>

		</div>
	</Container>
</template>

<script>
import Container from "../layouts/Container"
import Logo from "./Logo"

export default {
	name: "Footer",
	components: {
		Container,
		Logo
	},
	computed: {
		footerUrl() {
			return "?utm_source=website&utm_medium=footer"
		},
		releases() {
			return `/release/v${this.$static.allReleases.edges[0].node.slug}`
		},
	}
}
</script>

<static-query>
query {
  allReleases (limit:1) {
    edges {
      node {
        slug
      }
    }
  }
}
</static-query>

<style lang='sass'>
.footer
	padding-top: 3.75rem
	padding-bottom: 7.5rem
	display: flex
	flex-direction: column

	&__main
		display: flex
		flex-direction: column

		p
			color: #B1B2B4
			margin-top: .625rem
			font-size: .875rem

	&__navbar
		display: flex
		flex-direction: column

		&-item
			font-size: 1.125rem
			color: #B1B2B4

	&__social
		display: flex
		flex-direction: row

		&-item
			display: flex

			&:not(:first-child)
				margin-left: 40px

			img
				width: 20px
				height: 20px

			&:last-child
				img
					width: 24px

@media (max-width: 992px)
	.footer__navbar
		margin-top: 1.2rem
		margin-bottom: 1.2rem

@media (min-width: 992px)
	.footer
		padding: 60px 0 100px
		flex-direction: row
		justify-content: space-between

		&__navbar
			flex-direction: row

			&-item
				&:not(:last-child)
					margin-right: 1.125rem
</style>
