<template>
	<div
		class="header"
		:style="{
			backgroundColor: '#' + backgroundColor,
			paddingTop: size + 'rem',
			paddingBottom: size + 'rem'
		}"
	>
		<Container>
			<div class="header__container">
				<g-link to="/" class="header__logo">
					<Logo :color="logoColor" />
				</g-link>
				<div
					class="header__navbar"
					:class="{
						'is-open': navbar.status === true,
						'is-close': navbar.status === false
					}"
				>
					<g-link to="/features" :style="'color: #' + textColor" class="header__navbar-item">
						Features
					</g-link>

					<g-link to="/docs" :style="'color: #' + textColor" class="header__navbar-item">
						Docs
					</g-link>

					<a
						href="https://discord.gg/KT3nAR5"
						target="_blank" :style="'color: #' + textColor"
						class="header__navbar-item"
					>
						Support
					</a>

					<div class="header__navbar-item header__navbar-button">
						<outline-button
							text="Download"
							:theme="theme"
							:size="1"
							:link="downloadUrl"
						/>
					</div>

				</div>

				<div
					@click="navbarToggle()"
					class="header__navbar-menu"
				>
					<MenuIcon />
				</div>
			</div>
		</Container>
	</div>
</template>

<script>
import Container from "../layouts/Container";
import Logo from "./Logo";
import MenuIcon from "../../static/images/icon/menu.svg"
import OutlineButton from "./Button/OutlineButton"
import DownloadMixin from "../mixins/download"

export default {
	name: "Header",
	data() {
		return {
			navbar: {
				status: false
			}
		}
	},
  components: {
    Container,
		Logo,
		MenuIcon,
		OutlineButton
	},
	props: {
		theme: {
			type: String,
			required: true
		},
		size: {
			type: Number,
			default: 2
		}
	},
	computed: {
		backgroundColor() {
			switch (this.theme) {
				case "dark":
					return "222831"
				case "light":
					return "fffffff2"
			}
		},
		logoColor() {
			switch (this.theme) {
				case "dark":
					return "ffffff"
				case "light":
					return "222831"
			}
		},
		textColor() {
			switch (this.theme) {
				case "dark":
					return "fffc"
				case "light":
					return "222831"
			}
		}
	},
	methods: {
		navbarToggle() {
			this.navbar.status = !this.navbar.status
		}
	},
	mixins: [
		DownloadMixin
	]
}
</script>

<style lang='sass'>
.header
	padding-top: 1.5rem
	padding-bottom: 1.5rem
	display: flex
	position: sticky
	top: 0
	z-index: 10

	&__logo
		cursor: pointer

	&__container
		align-items: center
		display: flex

	&__navbar
		align-items: center
		display: flex
		z-index: 9

		&-item, .navbar__dropdown-item
			color: rgba(255, 255, 255, .8)
			font-size: .820rem
			cursor: pointer
			display: flex
			align-items: center
			flex-direction: column

			&:hover
				color: rgb(255, 255, 255)

		&-dropdown
			display: flex
			flex-direction: row

		&-menu
			margin-left: auto
			cursor: pointer

			svg
				stroke: rgba(255, 255, 255, .8)

@media (max-width: 768px)
	.header__navbar
		position: absolute
		top: 77px
		background-color: black
		left: 0
		right: 0
		flex-direction: column
		align-items: center

		&-item
			width: 100%
			padding-top: .85rem
			padding-bottom: .85rem

			&:not(:last-child)
				border-bottom: 1px solid rgba(255, 255, 255, .3)

	.is-open
		display: flex

	.is-close
		display: none

@media (min-width: 768px)
	.header
		&__container
			flex-direction: row

		&__navbar
			margin-left: auto
			flex-direction: row

			&-item
				margin-left: 1.25rem

			&-menu
				display: none
</style>
