const platform = require('platform');

export default {
	computed: {
		downloadUrl() {
			return 'download' + '/?os=' + this.platformName + '&build=' + this.buildType
		},
		platformName() {
			switch (platform.os.family) {
				case "Win":
				case "Win32":
				case "Win64":
				case "Windows":
					return "windows"
				case "Linux":
					return "linux"
				case "Mac":
					return "mac"
			}
		},
		buildType() {
			switch (this.platformName) {
				case "windows":
					return "exe"
				case "linux":
					return "linux"
				case "mac":
					return "zip"
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
