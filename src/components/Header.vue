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
				<div class="header__navbar header__desktop-navbar">
					<g-link to="/features" :style="'color: #' + textColor" class="header__navbar-item">
						Features
					</g-link>

					<g-link to="/docs" :style="'color: #' + textColor" class="header__navbar-item">
						Docs
					</g-link>

					<g-link :to="'/sponsor' + HeaderUrl" :style="'color: #' + textColor" class="header__navbar-item">
						Sponsor
					</g-link>

					<a
						:href="'https://discordapp.com/invite/KT3nAR5/' + HeaderUrl"
						target="_blank" :style="'color: #' + textColor"
						class="header__navbar-item"
					>
						Support
					</a>

					<div class="header__navbar-item header__navbar-button">
						<outline-button
							text="Download"
							:theme="(theme = 'dark') ? 'light' : 'dark'"
							:size="1"
							:link="osDownloadUrl + HeaderUrl"
						/>
					</div>
				</div>

				<div class="header__navbar header__mobile-navbar" >
					<a :href="'https://www.github.com/gitthermal/thermal' + HeaderUrl">
						<GitHubIcon />
					</a>
					<a :href="'https://discordapp.com/invite/KT3nAR5/' + HeaderUrl">
						<DiscordIcon />
					</a>
					<a :href="'https://www.twitter.com/gitthermal' + HeaderUrl">
						<TwitterIcon />
					</a>
				</div>

			</div>
		</Container>
	</div>
</template>

<script>
import Container from "../layouts/Container";
import Logo from "./Logo";
import GitHubIcon from "../../static/images/icon/github.svg"
import DiscordIcon from "../../static/images/icon/discord.svg"
import TwitterIcon from "../../static/images/icon/twitter.svg"
import OutlineButton from "./Button/OutlineButton"
import PlatformMixin from "../mixins/platform"

export default {
	name: "Header",
  components: {
    Container,
		Logo,
		GitHubIcon,
		DiscordIcon,
		TwitterIcon,
		OutlineButton
	},
	props: {
		theme: {
			type: String,
			required: true
		},
		size: {
			type: Number,
			default: 1
		}
	},
	computed: {
		HeaderUrl() {
			return "?utm_source=website&utm_medium=header"
		},
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
	mixins: [
		PlatformMixin
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
		flex-direction: row

	&__navbar
		align-items: center
		margin-left: auto
		display: flex
		flex-direction: row

		&-item
			color: rgba(255, 255, 255, .8)
			font-size: .820rem
			cursor: pointer
			display: flex
			align-items: center
			flex-direction: column
			margin-left: 1.25rem

			&:hover
				color: rgb(255, 255, 255)

	&__mobile-navbar

		a
			display: flex
			margin-left: 1.25rem

@media (max-width: 768px)
	.header__desktop-navbar
		display: none

@media (min-width: 768px)
	.header__mobile-navbar
		display: none
</style>
