<template>
	<div
		class="callout__block"
		:style="{
			borderColor: leftBorderColor,
			backgroundColor
		}"
	>
		<div v-if="heading" class="callout__block-heading" :style="{ color: textColor }">
			{{ heading }}
		</div>
		<div class="callout__block-content" :style="{ color: textColor }">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: "CalloutBlock",
	data() {
		return {
			leftBorderColor: "",
			textColor: "",
			backgroundColor: ""
		};
	},
	props: {
		heading: {
			type: String,
			default: ""
		},
		type: {
			type: String,
			required: true
		}
	},
	mounted() {
		switch (this.type) {
			case "tip":
				this.leftBorderColor = "#42b983";
				this.backgroundColor = "#f3f5f7";
				break;
			case "warning":
				this.leftBorderColor = "#e7c000";
				this.backgroundColor = "rgba(255,229,100,.3)";
				this.textColor = "#6b5900";
				break;
			case "danger":
				this.leftBorderColor = "#c00";
				this.backgroundColor = "#ffe6e6";
				this.textColor = "#4d0000";
				break;
			default:
				break;
		}
	}
};
</script>

<style lang="sass">
.callout__block
	margin-bottom: 1.125rem
	padding: .1rem 1.5rem
	border-left-width: .5rem
	border-left-style: solid

	&-heading
		font-weight: 600
		margin-top: 1rem

	&-content
		margin-top: 1rem
		margin-bottom: 1rem
</style>
