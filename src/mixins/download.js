const platform = require('platform');

export default {
	computed: {
			return '/download' + '/?os=' + this.platformName + '&build=' + this.buildType
		osDownloadUrl() {
		},
		platformType() {
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
			switch (this.platformType) {
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
