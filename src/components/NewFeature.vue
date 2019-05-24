<template>
	<div
		class="newfeature"
		:class="containerStyle"
		:style="{
			marginBottom: mb + 'rem'
		}"
	>
		<g-image
			:src="image"
			class="newfeature__image"
			:class="imageStyle"
		/>
		<div class="newfeature__content">
			<div class="newfeature__title">
				{{ title }}
			</div>
			<div class="newfeature__description">
				{{ description }}
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: "newFeature",
	props: {
		title: String,
		description: String,
		image: String,
		order: {
			type: Number,
			default: 0,
			required: true
		},
		mb: {
			type: Number,
			default: 3
		}
	},
	computed: {
		containerStyle() {
			return ((this.order === 0) ? "fd-row" : "fd-rr") + " " + ((this.order === 0) ? "ta-left" : "ta-right")
		},
		imageStyle() {
			return ((this.order === 0) ? "mr" : "ml")
		}
	}
}
</script>

<style lang='sass'>
.newfeature
	display: flex
	flex-direction: column

	&__image
		border: 1px solid #eee
		box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.16)
		border-radius: 4px
		width: 100%
		flex-grow: 1

	&__title
		font-size: 1.25rem
		flex-grow: 2
		margin-bottom: .25rem

	&__description
		font-size: 1rem
		color: rgba(#000, .8)

@media (max-width: 768px)
	.newfeature
		&__image
			margin-bottom: 1.5rem

		&__title
			margin-bottom: .5rem

@media (min-width: 768px)
	.newfeature
		align-items: center

		&__image
			width: 350px
			height: 100%

	.fd-row
		flex-direction: row

	.fd-rr
		flex-direction: row-reverse

	.ta-left
		text-align: left

	.ta-right
		text-align: right

	.ml
		margin-left: 2rem

	.mr
		margin-right: 2rem
</style>
