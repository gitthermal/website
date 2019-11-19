<template>
	<footer class="footer">
		<div class="footer__top">
			<container>
				<div class="footer__top-row">
					<div class="footer__top-nav">
						<g-link class="header__logo" to="/">
							<logo color="fff" />
						</g-link>
						<g-link to="/about">About</g-link>
						<g-link to="/blog">Blog</g-link>
					</div>
					<div class="footer__top-github">
						<github-star :show-count="true" />
					</div>
				</div>
				<div class="footer__nav">
					<div class="footer__nav-col">
						<h5>Product</h5>
						<ul>
							<li><g-link to="/features">Git graphical interface</g-link></li>
							<li><g-link to="/marketplace">Extension marketplace</g-link></li>
						</ul>
					</div>
					<div class="footer__nav-col">
						<h5>Resources</h5>
						<ul>
							<li><g-link to="/docs/installing-thermal/">How to install Thermal</g-link></li>
							<li><g-link to="/docs/introduction">How to use Thermal</g-link></li>
							<li><g-link to="/download">Mac/Win/Linx</g-link></li>
						</ul>
					</div>
					<div class="footer__nav-col">
						<h5>Contribute</h5>
						<ul>
							<li><a href="https://github.com/gitthermal/thermal/wiki">Core concepts</a></li>
							<li><a href="https://github.com/gitthermal/thermal/wiki">API documentation</a></li>
							<li><a href="https://www.github.com/gitthermal/thermal">Source code</a></li>
						</ul>
					</div>
					<div class="footer__nav-col">
						<h5>Support</h5>
						<ul>
							<li><g-link to="/docs/faq">FAQ</g-link></li>
							<li><a href="https://discordapp.com/invite/KT3nAR5/">Discord</a></li>
						</ul>
					</div>
				</div>
			</container>
		</div>
		<div class="footer__bottom">
			<container>
				<div class="footer__bottom-content">
					<h5>One place to manage Git repositories</h5>
					<div class="footer__bottom-nav">
						<a href="https://github.com/gitthermal/thermal/blob/master/LICENCE">LICENSE</a>
						<a href="https://www.codecarrot.net/">Created by CodeCarrot Labs © {{ new Date().getFullYear() }}</a>
					</div>
				</div>
			</container>
		</div>
	</footer>
</template>

<script>
import Container from "../Container";
import Logo from "../../components/Logo";
import GithubStar from "../../components/GithubStar";

export default {
	name: "Footer",
	components: {
		Container,
		Logo,
		GithubStar
	}
};
</script>

<style lang='sass'>
.footer
	background-color: #222831

	&__top

		&-row
			display: flex
			justify-content: space-between
			align-items: center
			padding: 2.5rem 0 1.8rem
			border-bottom: 1px solid hsla(0,0%,100%,.11)

		&-nav
			display: flex
			justify-content: start
			align-items: center

			a
				margin: 0 18px
				color: #fff

				&:first-child
					margin-left: 0

		&-github
			margin-top: 3px

	&__nav
		margin-top: 2rem
		margin-bottom: 2.5rem
		display: grid
		justify-content: start
		grid-gap: 40px
		grid-template-columns: 1fr 1fr 1fr 1fr

		h5
			color: white
			margin-bottom: 10px

		ul
			list-style: none

			li
				display: block
				padding: .5rem 0
				letter-spacing: .2px

				a
					color: lighten(#222831, 45%)

	&__bottom
		background-color: darken(#222831, 3%)

		&-content
			display: flex
			justify-content: space-between
			align-items: center
			padding: 1.5rem 0

			h5
				margin: 0
				color: #fff
				line-height: 1.5em
				font-weight: 600

		&-nav
			display: flex

			a
				margin: 0 10px
				color: lighten(#222831, 26%)
				font-size: .875rem

@media screen and (max-width: 768px)
	.footer
		margin-bottom: 57px

		&__top
			&-nav
				flex-wrap: wrap
				justify-content: center
				flex-grow: 1

				a
					margin: 0 .5rem

					&:first-child
						justify-content: center
						flex: 1 1 100%
						margin:
							right: 0
							bottom: .875rem

			&-github
				display: none

		&__nav
			grid-gap: 2vw
			grid-template-columns: 1fr 1fr

		&__bottom
			&-content
				flex-wrap: wrap
				justify-content: center

				h5
					margin-bottom: 1rem

			&-nav
				flex-wrap: wrap
				justify-content: center

@media screen and (max-width: 576px)
	.footer__nav
		grid-gap: 2vw
		grid-template-columns: 1fr

		&-col
			margin-bottom: 1rem
</style>
