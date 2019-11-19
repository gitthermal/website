<template>
	<div class="dropdown__item">
		<slot/>
	</div>
</template>

<script>
export default {
	name: "DropdownItem"
}
</script>

<style lang='sass'>
.dropdown__item
	display: flex
	flex-direction: row
	justify-content: flex-start
	align-items: center
	cursor: pointer
	padding: 0.5rem 0.8rem

	&:hover
		background-color: lighten(#eeeeee, 2%)

		&:first-child
			border-top-left-radius: 0.3rem
			border-top-right-radius: 0.3rem

		&:last-child
			border-bottom-left-radius: 0.3rem
			border-bottom-right-radius: 0.3rem
</style>
