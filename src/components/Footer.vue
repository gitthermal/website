<template>
	<Container>
		<div class="footer">

			<div class="footer__main">
				<Logo />
				<p>© Copyright 2019 CodeCarrot, Inc</p>
			</div>

			<div class="footer__navbar">
				<div class="footer__navbar-item">
					About
				</div>
				<a href="https://discord.gg/KT3nAR5" target="_blank" class="footer__navbar-item">
					Help
				</a>
				<a href="https://patreon.com/mittalyashu" target="_blank" class="footer__navbar-item">
					Patron
				</a>
					Feedback
				</div>
				<div class="footer__navbar-item">
				<a href="https://github.com/gitthermal/thermal/" target="_blank" class="footer__navbar-item">
					Source
				</a>
					Privacy
				</div>
				<div class="footer__navbar-item">
					Terms
				</div>
			</div>

			<div class="footer__social">
				<div class="footer__social-item">
					<g-image src="../../static/github-4x.png" />
				</div>
				<div class="footer__social-item">
					<g-image src="../../static/producthunt-4x.png" />
				</div>
				<div class="footer__social-item">
					<g-image src="../../static/twitter-4x.png" />
				</div>
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
			&:not(:first-child)
				margin-left: 40px

			img
				width: 20px
				height: 20px

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
