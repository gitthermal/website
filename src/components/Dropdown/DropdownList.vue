<template>
	<div class="dropdown__list">
		<slot/>
	</div>
</template>

<script>
export default {
	name: "DropdownList"
}
</script>

<style lang='sass'>
.dropdown__list
	border: 1px solid #d6d6d6
	position: absolute
	background-color: white
	border-radius: 0.3rem
</style>
