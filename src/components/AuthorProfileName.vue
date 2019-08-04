<template>
	<div class="author__section">
		<g-image
			class="author__section-image"
			:alt="name"
			:src="image"
		/>
		<p class="author__section-name">
			{{ name }}
		</p>
	</div>
</template>

<script>
export default {
	name: "AuthorProfileName",
	props: {
		name: String,
		image: String
	}
};
</script>

<style lang='sass'>
.author__section
	display: flex
	flex-direction: row
	align-items: center


	&-image
		width: 30px
		border-radius: 99px
		vertical-align: middle
		margin: 0 6px

	&-name
		margin-right: 5px
		color: #00ADB5
</style>

