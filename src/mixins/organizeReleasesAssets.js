export default {
	data() {
		return {
			assets: {
				linux: {
					deb: "",
					appimage: "",
					snap: ""
				},
				mac: {
					dmg: ""
				},
				windows: {
					exe: ""
				}
			}
		}
	},
	methods: {
		organizeAssets(array) {
			array.forEach(item => {
				if (item.browser_download_url.includes("linux")) {
					if (item.browser_download_url.includes("deb")) {
						this.assets.linux.deb = item.browser_download_url
					}
					if (item.browser_download_url.includes("AppImage")) {
						this.assets.linux.appimage = item.browser_download_url
					}
					if (item.browser_download_url.includes("snap")) {
						this.assets.linux.snap = item.browser_download_url
					}
				}
				if (item.browser_download_url.includes("mac")) {
					if (item.browser_download_url.includes("dmg")) {
						this.assets.mac.dmg = item.browser_download_url
					}
				}
				if (item.browser_download_url.includes("win")) {
					if (item.browser_download_url.includes("exe")) {
						this.assets.windows.exe = item.browser_download_url
					}
				}
			})
		}
	}
}
