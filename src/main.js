// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
	Vue.component('Layout', DefaultLayout)
	Vue.use(router),

	// PWA manifest file
	head.link.push({
		rel: "manifest",
		href: "/manifest.json"
	})

	// SEO Organization schema
	head.script.push({
		type: "application/ld+json",
		src: "/js/organization_schema.js"
	})

	// SEO SoftwareApplication schema
	head.script.push({
		type: "application/ld+json",
		src: "/js/softwareapplication_schema.js"
	})

	// stripe checkout
	head.script.push({
		src: "https://js.stripe.com/v3"
	})
}
