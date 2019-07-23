<template>
	<div class="form__input">
		<p class="form__input-label">{{ label }}</p>
		<textarea type="text" :name="label" @input="$emit('input', $event.target.value)" :placeholder="placeholder" :required="required"></textarea>
	</div>
</template>

<script>
export default {
	name: "FormTextarea",
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
