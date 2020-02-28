<template>
	<div
		@mouseenter="hoverState"
		@mouseleave="normalState"
		class="notification__banner"
		:style="`background-color: ${color}`"
	>
		<div class="notification__banner-content">
			<slot />
		</div>
		<a
			v-if="!!link"
			:href="link"
			:style="{
				backgroundColor: button.background.color,
				color: button.text.color
			}"
			class="notification__banner-button"
			>{{ cta }}</a
		>
		<div v-if="closable" class="notification__banner-close">
			<CloseIcon />
		</div>
	</div>
</template>

<script>
import CloseIcon from "../../static/images/icon/close.svg";

export default {
	name: "NotificationBanner",
	data() {
		return {
			button: {
				text: {
					color: "white"
				},
				background: {
					color: this.color
				}
			}
		};
	},
	components: {
		CloseIcon
	},
	props: {
		text: String,
		cta: String,
		link: String,
		color: String,
		closable: Boolean
	},
	methods: {
		normalState() {
			this.button.text.color = "white";
			this.button.background.color = this.color;
		},
		hoverState() {
			this.button.text.color = this.color;
			this.button.background.color = "white";
		}
	}
};
</script>

<style lang='sass'>
.notification__banner
	width: 100%
	position: relative
	font-size: .85rem
	display: flex
	align-items: center
	flex-direction: column
	justify-content: center
	padding-top: .4rem
	padding-bottom: .4rem
	color: rgb(255, 255, 255)
	font-weight: 500

	&-content
		text-align: center

	&-button
		border: 1px solid hsla(0,0%,100%,.25);
		border-radius: 10px
		padding-left: 10px
		padding-right: 10px
		color: white

	&-close
		display: flex
		align-items: center
		position: absolute
		right: 8px

		svg
			width: 20px
			height: 20px
			stroke: rgba(255, 255, 255, .5)

@media screen and (max-width: 576px)
	.notification__banner-content
		margin-bottom: 10px

		&-download
			display: flex

@media screen and (min-width: 576px)
	.notification__banner
		flex-direction: row

		&-button
			margin-left: 10px
</style>
