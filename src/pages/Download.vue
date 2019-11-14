<template>
	<Layout>
		<div class="download">
			<container>
				<div class="download__container">
					<div v-if="!!platformName" class="download__progress">
						<h2>Thanks for downloading Thermal for {{ platformName }}</h2>
						<p>
							Download not started? Try this
							<a :href="downloadLink" target="_blank">direct download link</a>.
						</p>
					</div>
					<h1 v-else class="download__heading">
						Thermal for Windows, Mac & Linux
					</h1>
					<div class="download__other">
						<p class="download__other-heading" v-if="!!platformName">
							Download for other platform
						</p>
						<div class="download__other-list">
							<div class="download__other-item">
								<g-image
									src="../../static/images/icon/windows.svg"
									class="download__other-image"
								/>
								<h4>Windows</h4>
								<div>
									<outline-button
										text="Download"
										:link="assets.windows.exe"
										:size="1"
										theme="dark"
										:external="true"
									/>
								</div>
							</div>
							<div class="download__other-item">
								<g-image
									src="../../static/images/icon/mac.png"
									class="download__other-image"
								/>
								<h4>MacOS</h4>
								<div>
									<outline-button
										text="Download"
										:link="assets.mac.dmg"
										:size="1"
										theme="dark"
										:external="true"
									/>
								</div>
							</div>
							<div class="download__other-item">
								<g-image
									src="../../static/images/icon/linux.svg"
									class="download__other-image"
								/>
								<h4>Linux</h4>

								<div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
									<div style="position: relative; margin-right: 10px;">
										<dropdown-parent
											@click.native="linuxToggle = !linuxToggle"
											:toggle="linuxToggle"
											:text="linuxBuild"
										/>
										<dropdown-list v-if="linuxToggle" style="top: calc(37px + 5px);">
											<dropdown-item @click.native="selectAsset('appimage')">
												AppImage
											</dropdown-item>
											<dropdown-item @click.native="selectAsset('deb')">
												Deb
											</dropdown-item>
										</dropdown-list>
									</div>

									<outline-button
										text="Download"
										:link="assets.linux[linuxBuild]"
										:size="1"
										:disabled="linuxBuild ? false : true"
										theme="dark"
										:external="true"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</container>
		</div>
	</Layout>
</template>

<script>
import container from "../layouts/Container";
import PlatformMixin from "../mixins/platform";
import OutlineButton from "../components/Button/OutlineButton";

import DropdownParent from "../components/Dropdown/DropdownParent";
import DropdownList from "../components/Dropdown/DropdownList";
import DropdownItem from "../components/Dropdown/DropdownItem";

export default {
	name: "Download",
	metaInfo: {
		title: "Download windows, mac & linux",
		link: [
			{
				rel: "canonical",
				href: "https://thermal.codecarrot.net/download"
			}
		]
	},
	data() {
		return {
			linuxToggle: false,
			linuxBuild: "",
			assets: {
				linux: {
					deb: "",
					appimage: ""
				},
				mac: {
					dmg: ""
				},
				windows: {
					exe: ""
				}
			}
		};
	},
	components: {
		container,
		OutlineButton,
		DropdownParent,
		DropdownList,
		DropdownItem
	},
	methods: {
		selectAsset(format) {
			this.linuxBuild = format;
			this.linuxToggle = false;
		},
		organizeAssets() {
			const releases = this.$page.allLatestRelease.edges
			releases.forEach(({ node }) => {
				if (node.browser_download_url.includes("linux")) {
					if (node.browser_download_url.includes("deb")) {
						this.assets.linux.deb = node.browser_download_url
					}
					if (node.browser_download_url.includes("AppImage")) {
						this.assets.linux.appimage = node.browser_download_url
					}
				}
				if (node.browser_download_url.includes("mac")) {
					if (node.browser_download_url.includes("dmg")) {
						this.assets.mac.dmg = node.browser_download_url
					}
				}
				if (node.browser_download_url.includes("win")) {
					if (node.browser_download_url.includes("exe")) {
						this.assets.windows.exe = node.browser_download_url
					}
				}
			})
		}
	},
	mounted() {
		this.organizeAssets()
	},
	mixins: [PlatformMixin]
};
</script>

<page-query>
	query {
		allLatestRelease {
			edges {
				node {
					name
					id
					browser_download_url
				}
			}
		}
	}
</page-query>

<style lang="sass">
.download
	padding-top: 60px
	padding-bottom: 60px
	display: flex
	text-align: center

	&__heading
		font-size: 2.5rem
		margin-bottom: 2rem

	&__progress
		background-color: #EFEFEF
		color: #7A7D84
		padding: 1.2rem 1.5rem
		border-radius: .3rem
		margin-bottom: 3rem

		a
			color: #00ADB5

	&__other

		&-heading
			margin-bottom: 1rem

		&-list
			display: flex
			flex-direction: column

		&-item
			display: flex
			flex-direction: column
			box-shadow: rgba(15, 15, 15, 0.15) 0px 0px 2.5px 1px
			align-items: center
			border-radius: .3rem
			padding: 1rem
			margin-bottom: 1rem
			color: black

			&:hover
				box-shadow: rgba(15, 15, 15, 0.15) 0px 0px 16px 0px

		&-image
			width: 50px
			height: 50px
			margin-bottom: .875rem

@media (min-width: 768px)
	.download
		&__other
			&-list
				flex-direction: row
				justify-content: space-evenly

			&-item
				padding: 3rem 4rem

</style>
