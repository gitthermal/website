<template>
	<Container>
		<div class="footer">

			<div class="footer__main">
				<Logo />
				<p>© Copyright {{ new Date().getFullYear() }} CodeCarrot, Inc</p>
			</div>

			<div class="footer__navbar">
				<g-link to="/about" class="footer__navbar-item">
					About
				</g-link>
				<a href="https://discord.gg/KT3nAR5" target="_blank" class="footer__navbar-item">
					Help
				</a>
				<a href="https://patreon.com/mittalyashu" target="_blank" class="footer__navbar-item">
					Patron
				</a>
				<a href="https://github.com/gitthermal/thermal/issues/new/choose" target="_blank" class="footer__navbar-item">
					Feedback
				</a>
				<a href="https://github.com/gitthermal/thermal/" target="_blank" class="footer__navbar-item">
					Source
				</a>
				<!-- <div class="footer__navbar-item">
					Privacy
				</div>
				<div class="footer__navbar-item">
					Terms
				</div> -->
			</div>

			<div class="footer__social">
				<g-link to="https://www.github.com/gitthermal/thermal" class="footer__social-item">
					<g-image src="../../static/images/github-4x.png" />
				</g-link>
				<g-link to="https://discord.gg/KT3nAR5" class="footer__social-item">
					<g-image src="../../static/images/discord-4x.png" />
				</g-link>
				<g-link to="https://www.producthunt.com/posts/thermal" class="footer__social-item">
					<g-image src="../../static/images/producthunt-4x.png" />
				</g-link>
				<g-link to="https://www.twitter.com/gitthermal" class="footer__social-item">
					<g-image src="../../static/images/twitter-4x.png" />
				</g-link>
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
	}
}
</script>

<style lang='sass'>
.footer
	padding: 60px 0
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

			&:nth-child(3)
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
