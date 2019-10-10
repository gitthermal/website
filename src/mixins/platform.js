const platform = require('platform');

export default {
	computed: {
		osDownloadUrl() {
			return "/download/"
		},
		platformType() {
			switch (platform.os.family) {
				case "Win":
				case "Win32":
				case "Win64":
				case "Windows Server 2008 R2 / 7":
				case "Windows":
					return "windows"
				case "Linux":
				case "Ubuntu":
					return "linux"
				case "Mac":
				case "OS X":
					return "mac"
			}
		},
		buildType() {
			switch (this.platformType) {
				case "windows":
					return "exe"
				case "linux":
					return "linux"
				case "mac":
					return "zip"
			}
		},
		platformName() {
			switch (this.$router.history.current.query.os) {
				case "windows":
					return "Windows";
				case "linux":
					return "Linux";
				case "mac":
					return "MacOS";
			}
		}
	},
	mounted() {
		let data = {
			content: JSON.stringify(platform)
		}
	}
}
