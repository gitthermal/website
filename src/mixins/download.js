const platform = require('platform');

export default {
	data() {
		return {
			osBuild: [
				{
					os: "windows",
					ext: []
				},
				{
					os: "mac",
					ext: []
				},
				{
					os: "linux",
					ext: []
				}
			]
		}
	},
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
	},
	methods: {
		osReleasesAssets(assets) {
			for (let i = 0; i < assets.length; i++) {
				let downloadUrl = assets[i].browserDownloadUrl
				let buildType = downloadUrl.split(".").pop()
				switch (buildType) {
					// Windows
					case "exe":
						this.addBuildType("exe", downloadUrl, 0);
						break;
					// Linux
					case "deb":
						this.addBuildType("deb", downloadUrl, 2);
						break;
					case "snap":
						this.addBuildType("snap", downloadUrl, 2);
						break;
					case "AppImage":
						this.addBuildType("AppImage", downloadUrl, 2);
						break;
						// Mac
					case "zip":
						this.addBuildType("zip", downloadUrl, 1);
						break;
				}
			}
		},
		addBuildType(type, downloadUrl, index) {
			let data = {
				name: type,
				browserDownloadUrl: downloadUrl
			}
			this.osBuild[index].ext.push(data)
		}
	}
}
