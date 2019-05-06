<template>
	<div class="layout">
		<Header theme="dark" />
		<slot />
		<Footer />
	</div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
	name: "Default",
	components: {
		Header,
		Footer
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
</style>
