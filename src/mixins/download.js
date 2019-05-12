const platform = require('platform');

export default {
	computed: {
		downloadUrl() {
			return 'download' + '/?os=' + this.platformName
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
		releasesAssets(assets) {
			// console.log(assets);
			for (let i = 0; i < assets.length; i++) {
				console.log(assets[i].browserDownloadUrl);
				this.browserDownloadUrl(assets[i].browserDownloadUrl, i);
			}
		},
		browserDownloadUrl(url, index) {
			console.log(url.split(".").pop());
			console.log(index);
			switch (url.split(".").pop()) {
				// Windows
				case "exe":
					return index;
				// Linux
				case "deb":
				case "snap":
				case "AppImage":
					return index;
				// Mac
				case "zip":
					return index;
			}
		}
	}
}
