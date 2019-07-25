<template>
	<div class="notification__banner" :style="`background-color: #${color}`">
		{{ text }}
		<a v-if="!!link" :href="link" class="notification__banner-download">{{ cta }}</a>
		<div v-if="closable" class="notification__banner-close">
			<CloseIcon />
		</div>
	</div>
</template>

<script>
import CloseIcon from "../../static/images/icon/close.svg";

export default {
	name: "NotificationBanner",
	components: {
		CloseIcon
	},
	props: {
		text: String,
		cta: String,
		link: String,
		color: String,
		closable: Boolean
	}
};
</script>

<style lang='sass'>
.notification__banner
	width: 100%
	font-size: .85rem
	display: flex
	vertical-align: middle
	justify-content: center
	padding-top: .4rem
	padding-bottom: .4rem
	color: rgb(255, 255, 255)
	font-weight: 500

	&-download
		border: 1px solid hsla(0,0%,100%,.25);
		border-radius: 3px
		padding-left: 10px
		padding-right: 10px
		margin-left: 10px
		color: white

	&-close
		margin-left: auto
		width: 15px
		height: 15px

		svg
			stroke: rgba(255, 255, 255, .5)
</style>
