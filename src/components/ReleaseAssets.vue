<template>
	<div class="releases__assets">
		<div class="releases__assets-top"></div>
		<div class="releases__assets-content">
			<div class="releases__assets-item">
				<h4>Windows</h4>
				<div class="releases__assets-downloads">
					<a :href="assets.windows.exe" target="_blank">exe</a>
				</div>
			</div>
			<div class="releases__assets-item releases__assets-line"></div>
			<div class="releases__assets-item">
				<h4>Mac</h4>
				<div class="releases__assets-downloads">
					<a :href="assets.mac.dmg" target="_blank">dmg</a>
				</div>
			</div>
			<div class="releases__assets-item releases__assets-line"></div>
			<div class="releases__assets-item">
				<h4>Linux</h4>
				<div class="releases__assets-downloads">
					<a :href="assets.linux.deb" target="_blank">deb</a>
					<a :href="assets.linux.appimage" target="_blank">AppImage</a>
					<a :href="assets.linux.snap" target="_blank">snap</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import organizeReleasesAssets from "../mixins/organizeReleasesAssets";

export default {
	name: "ReleaseAssets",
	mixins: [organizeReleasesAssets],
	props: {
		releases: Array
	},
	mounted() {
		this.organizeAssets(this.releases)
	}
};
</script>

<style lang='sass'>
.releases__assets
	margin-bottom: 1.5rem

	&-top
		height: 4px
		width: 100%
		border-top-left-radius: 0.3rem
		border-top-right-radius: 0.3rem
		background: linear-gradient(90deg, #c45151, #c4c051, #51c4c2, #6051c4, #af51c4)

	&-content
		border: 1px solid #eee
		border-top: 0
		border-bottom-left-radius: 0.3rem
		border-bottom-right-radius: 0.3rem
		display: flex
		justify-content: space-evenly
		align-items: center

	&-item
		padding: 1.8rem 0
		display: flex
		flex-direction: column
		align-items: center

	&-line
		width: 1px
		height: 100%
		background-color: #eee

	&-downloads
		display: flex
		align-items: center
		justify-content: center

		& > a:not(:last-child)
			margin-right: 10px
</style>
