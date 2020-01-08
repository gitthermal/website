<template>
	<div class="layout">
		<notification-banner
			v-if="notifications[randomNumberForNotifications].visible"
			:key="notifications[randomNumberForNotifications].cta"
			:cta="notifications[randomNumberForNotifications].cta"
			:link="notifications[randomNumberForNotifications].link"
			:color="notifications[randomNumberForNotifications].color"
			:closable="notifications[randomNumberForNotifications].closable"
		>
			Support the development of Thermal
		</notification-banner>
		<Header :theme="headerTheme" :size="headerSize" />
		<slot />
		<Footer v-if="footer" />
		<Navbar />
	</div>
</template>

<script>
import NotificationBanner from "../components/NotificationBanner";
import Header from "../components/Header";
import Footer from "./partials/Footer";
import Navbar from "./partials/Navbar";
import Notifications from "../../data/notification.json";

export default {
	name: "Default",
	metaInfo: {
		meta: [
			{
				name: "description",
				content: "One stop to manage all Git repository at one place."
			},
			{
				name: "keywords",
				content: "thermal, git thermal, git gui, free git gui"
			},
			{
				name: "url",
				content: "https://thermal.codecarrot.net/"
			},
			{
				name: "copyright",
				content: "© Copyright. CodeCarrot, Inc."
			},
			{
				name: "language",
				content: "en"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "classification",
				content: "project"
			},
			{
				name: "author",
				content: "Yashu Mittal, yashu@codecarrot.net"
			},
			{
				name: "owner",
				content: "CodeCarrot, contact@codecarrot.net"
			},
			{
				name: "theme-color",
				content: "#222831"
			},

			// Google
			{
				itemprop: "name",
				content: "Thermal"
			},
			{
				itemprop: "description",
				content: "One stop to manage all Git repository at one place."
			},
			{
				itemprop: "image",
				content: "/images/meta-image.png"
			},

			// Facebook
			{
				name: "og:type",
				content: "website"
			},
			{
				name: "og:image",
				content: "/images/meta-image.png"
			},
			{
				name: "og:url",
				content: "https://thermal.codecarrot.net/"
			},
			{
				name: "og:site_name",
				content: "Thermal"
			},
			{
				name: "og:description",
				content: "One stop to manage all Git repository at one place."
			},
			{
				name: "fb:page_id",
				content: "181159655729057"
			},
			{
				name: "og:email",
				content: "contact@codecarrot.net"
			},

			// Twitter
			{
				name: "twitter:description",
				content: "One stop to manage all Git repository at one place."
			},
			{
				name: "twitter:image",
				content: "/images/meta-image.png"
			},
			{
				name: "twitter:url",
				content: "https://thermal.codecarrot.net/"
			},
			{
				name: "twitter:site",
				content: "@gitthermal"
			}
		]
	},
	components: {
		NotificationBanner,
		Header,
		Footer,
		Navbar
	},
	computed: {
		notifications() {
			return Notifications;
		},
		randomNumberForNotifications() {
			return Math.floor((Math.random() * this.notifications.length));
		}
	},
	props: {
		headerTheme: {
			type: String,
			default: "dark"
		},
		headerSize: {
			type: Number,
			default: 1
		},
		footer: {
			type: Boolean,
			default: true
		}
	}
};
</script>

<style lang="sass">
@import url('https://rsms.me/inter/inter.css')

@font-face
  font-family: 'Cascadia Code'
  font-weight: 400
  src: url("../assets/fonts/Cascadia.ttf") format("ttf")

*
	padding: 0
	margin: 0
	box-sizing: border-box

body
	font-family: 'Inter', sans-serif
	line-height: 1.5
	-webkit-font-smoothing: antialiased
	font-weight: 400

a
	cursor: pointer
	text-decoration: none

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6
  margin-bottom: 0.5rem
  font-weight: 500
  line-height: 1.2

h1, .h1
  font-size: 2.5rem

h2, .h2
  font-size: 2rem

h3, .h3
  font-size: 1.5rem

h4, .h4
  font-size: 1.25rem

h5, .h5
  font-size: 1rem

h6, .h6
  font-size: .875rem

.active--exact
	color: #00ADB5

.font-mono
	font-family: "Cascadia Code", sans-serif;
</style>
