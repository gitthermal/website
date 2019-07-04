// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import InstantSearch from 'vue-instantsearch';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
	Vue.component('Layout', DefaultLayout)
	Vue.use(router),
	Vue.use(InstantSearch);
	// PWA manifest file
	head.link.push({
		rel: "manifest",
		href: "/manifest.json"
	})

	// stripe checkout
	head.script.push({
		src: "https://js.stripe.com/v3"
	})
}
