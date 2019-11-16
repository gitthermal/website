<template>
	<div
		class="dropdown__parent"
		:style="{
			boxShadow: toggle ? 'rgba(0, 173, 181, 0.2) 0 0 0 3px' : '',
			borderColor: toggle ? '#00adb5' : ''
		}"
	>
		<div class="dropdown__parent-text">
			{{ text ? text : 'Select' }}
		</div>
		<div class="dropdown__parent-icon" :style="{ transform: toggle ? 'rotate(180deg)' : '' }">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="6 9 12 15 18 9"></polyline>
			</svg>
		</div>
	</div>
</template>

<script>
export default {
	name: "DropdownParent",
	props: {
		text: {
			type: String,
			default: "Select"
		},
		toggle: {
			type: Boolean,
			default: false
		}
	},
	mounted() {
	}
};
</script>

<style lang="sass">
.dropdown__parent
	outline: none
	border: 1px solid #eeeeee
	font-size: 0.833rem
	padding: 0.5rem 0.8rem
	max-width: 250px
	text-align: left
	user-select: none
	cursor: pointer
	width: 100%
	border-radius: 0.3rem
	display: flex
	align-items: center
	justify-content: space-between

	&-icon
		display: flex
		// margin-left: auto

	&-icon > svg
		stroke: black
		width: 1rem
		height: 1rem

	&:hover
		border-color: #d6d6d6
</style>
