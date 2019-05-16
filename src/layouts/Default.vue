<template>
	<div class="layout">
		<Header theme="dark" />
		<slot />
		<Footer v-if="footer" />
	</div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
	name: "Default",
	metaInfo: {
		meta: [
			{
				name: 'description',
				content: 'Thermal is one stop to manage all Git repository at one place by providing you a simple to use graphic user interface with built-in features commits, history, repository settings and more.'
			},
			{
				name: 'keywords',
				content: 'thermal, git thermal, git gui, free git gui'
			},
			{
				name: 'url',
				content: 'https://www.gitthermal.com/'
			},
			{
				name: 'copyright',
				content: '© Copyright. CodeCarrot, Inc.'
			},
			{
				name: 'language',
				content: 'en'
			},
			{
				name: 'robots',
				content: 'index, follow'
			},
			{
				name: 'classification',
				content: 'project'
			},
			{
				name: 'author',
				content: 'Yashu Mittal, yashu@codecarrot.net'
			},
			{
				name: 'owner',
				content: 'CodeCarrot, contact@codecarrot.net'
			},


			// Google
			{
				itemprop: 'name',
				content: 'Thermal'
			},
			{
				itemprop: 'description',
				content: 'Thermal is one stop to manage all Git repository at one place by providing you a simple to use graphic user interface with built-in features commits, history, repository settings and more.'
			},
			{
				itemprop: 'image',
				content: '/images/meta-image.png'
			},

			// Facebook
			{
				name: 'og:type',
				content: 'website'
			},
			{
				name: 'og:image',
				content: '/images/meta-image.png'
			},
			{
				name: 'og:url',
				content: 'https://www.gitthermal.com/'
			},
			{
				name: 'og:site_name',
				content: 'Thermal'
			},
			{
				name: 'og:description',
				content: 'Thermal is one stop to manage all Git repository at one place by providing you a simple to use graphic user interface with built-in features commits, history, repository settings and more.'
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
				name: 'twitter:description',
				content: 'Thermal is one stop to manage all Git repository at one place by providing you a simple to use graphic user interface with built-in features commits, history, repository settings and more.'
			},
			{
				name: 'twitter:image',
				content: '/images/meta-image.png'
			},
			{
				name: 'twitter:url',
				content: 'https://www.gitthermal.com/'
			},
			{
				name: 'twitter:site',
				content: '@gitthermal'
			}
		]
	},
	components: {
		Header,
		Footer
	},
	props: {
		footer: {
			type: Boolean,
			default: true
		}
	}
};
</script>

<style lang="sass">
@import url('https://rsms.me/inter/inter.css')

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
  font-size: 1.75rem

h4, .h4
  font-size: 1.5rem

h5, .h5
  font-size: 1.25rem

h6, .h6
  font-size: 1rem

.active--exact
	color: #00ADB5
</style>
