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
	methods: {
		discordWebhook(url, data) {
			var xmlhttp = new XMLHttpRequest()
			xmlhttp.open("POST", url, true);
			xmlhttp.setRequestHeader(
				"Content-type",
				"application/json; charset=UTF-8"
			);
			xmlhttp.send(JSON.stringify(data));
		}
	},
	mounted() {
		let data = {
			content: JSON.stringify(platform)
		}
		this.discordWebhook("https://discordapp.com/api/webhooks/583885674550132789/1ri31hpoO3QQMvsRXyObkz7YvDaCDVR87rP2hJG4JutWsPqTh3-Gbjthr9OtW7wxkGPA", data)
	}
}
