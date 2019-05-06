<template>
	<div
		class="header"
		:style="{
			backgroundColor: '#' + backgroundColor
		}"
	>
		<container>
      <div class="header__logo">
        <Logo :color="logoColor" />
      </div>
      <div class="header__navbar">
        <div class="header__navbar-item">
          Features
        </div>

        <div class="header__navbar-item">
          Patron
        </div>

        <div class="header__navbar-item">
          Support
        </div>

        <div class="header__navbar-item header__navbar-button">
          Download
        </div>

      </div>
		</container>
	</div>
</template>

<script>
import Container from "../layouts/Container";
import Logo from "./Logo";

export default {
  name: "Header",
  components: {
    Container,
    Logo
	},
	props: {
		theme: {
			type: String,
			required: true
		}
	},
	computed: {
		backgroundColor() {
			switch (this.theme) {
				case "dark":
					return "222831"
				case "light":
					return "ffffff"
			}
		},
		logoColor() {
			switch (this.theme) {
				case "dark":
					return "ffffff"
				case "light":
					return "222831"
			}
		}
	}
}
</script>
