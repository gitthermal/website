<template>
	<div class="form__input">
		<p class="form__input-label">{{ label }}</p>
		<input type="text" :name="label" @input="$emit('input', $event.target.value)" :placeholder="placeholder" :required="required" />
	</div>
</template>

<script>
export default {
	name: "FormTextInput",
	props: {
		label: {
			type: String
		},
		placeholder: {
			type: String
		},
		required: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang='sass'>

</style>
