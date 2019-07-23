<template>
	<layout>
		<container style="padding-top: 3rem; padding-bottom: 3rem;">
			<h3>Bug report tool</h3>
			<p>This tool is only for canary tester and it will NOT submit a bug, it's intended use is to help you properly format text that ThermalBot will accept in a reporting.</p>
			<form-text-input v-model="report.title" placeholder="Title" label="Title" :required="true" />
			<form-textarea v-model="report.steps" placeholder="Step to reproduce" label="Step to reproduce" :required="true" />
			<form-text-input v-model="report.expected" placeholder="Expected Result" label="Expected Result" :required="true" />
			<form-text-input v-model="report.actual" placeholder="Actual Result" label="Actual Result" :required="true" />
			<form-text-input v-model="report.build" placeholder="Build Number" label="Build Number" :required="true" />
			<form-text-input v-model="report.system" placeholder="System Settings" label="System Settings" :required="true" />
			<primary-button
				text="Submit"
				:size="1"
				style="margin-top: 1rem;"
				@click.native="report.isActive = !report.isActive"
			/>
		</container>
		<div v-show="report.isActive" class="bugreport__result">
			<div class="bugreport__result-overlay">
				{{ `!bug | ${report.title} | ${report.steps} | ${report.expected} | ${report.actual} | ${report.build} | ${report.system}` }}
			</div>
		</div>
	</layout>
</template>

<script>
import Container from "../layouts/Container";
import FormTextInput from "../components/Form/FormTextInput";
import FormTextarea from "../components/Form/FormTextarea";
import PrimaryButton from "../components/Button/PrimaryButton";

export default {
	name: "Bug",
	metaInfo: {
		title: "Bug report tool",
	},
	data() {
		return {
			report: {
				isActive: false,
				title: "",
				steps: "",
				expected: "",
				actual: "",
				build: "",
				system: ""
			}
		}
	},
	components: {
		Container,
		FormTextInput,
		FormTextarea,
		PrimaryButton
	},
}
</script>

<style lang='sass'>

</style>
