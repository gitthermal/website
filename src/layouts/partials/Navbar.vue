<template>
	<div class="navbar">
		<g-link to="/features" class="navbar__item">
			<StarIcon />
			<p>Features</p>
		</g-link>
		<g-link to="/docs" class="navbar__item">
			<DocsIcon />
			<p>Docs</p>
		</g-link>
		<g-link :to="osDownloadUrl + mobileNavUrl" class="navbar__item">
			<DownloadIcon />
			<p>Download</p>
		</g-link>
		<g-link :to="'/sponsor/' + mobileNavUrl" class="navbar__item">
			<DollarIcon />
			<p>Sponsor</p>
		</g-link>
	</div>
</template>

<script>
import StarIcon from "../../../static/images/icon/star.svg"
import DocsIcon from "../../../static/images/icon/docs.svg"
import DownloadIcon from "../../../static/images/icon/download.svg"
import DollarIcon from "../../../static/images/icon/dollar-sign.svg"
import PlatformMixin from "../../mixins/platform"

export default {
	name: "Navbar",
	components: {
		StarIcon,
		DocsIcon,
		DownloadIcon,
		DollarIcon
	},
	computed: {
		mobileNavUrl() {
			return "?utm_source=website&utm_medium=mobile_nav"
		}
	},
	mixins: [
		PlatformMixin
	]
}
</script>

<style lang='sass'>
.navbar
	background-color: white
	position: fixed
	bottom: 0
	left: 0
	right: 0
	display: flex
	justify-content: space-around
	border-top: 1px solid #eee

	&__item
		padding: 0.38rem
		display: flex
		flex-direction: column
		align-items: center
		color: #222831

		svg
			margin-bottom: .125rem

		p
			font-size: .75rem
			font-weight: 500

@media (min-width: 768px)
	.navbar
		display: none
</style>
