export default {
	computed: {
		downloadUrl() {
			return 'download' + '/?os=' + this.platformName
		},
		platformName() {
			switch (window.navigator.platform) {
				case "Win":
				case "Win32":
				case "Win64":
					return "windows"
				case "Linux":
					return "linux"
				case "Mac":
					return "mac"
			}
		},
		platformLabel() {
			switch (this.$router.history.current.query.os) {
				case "windows":
					return "Windows";
				case "linux":
					return "Linux";
				case "mac":
					return "MacOS";
			}
		}
	}
}
