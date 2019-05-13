<template>
	<Layout>
		<div class="download">
			<container>
				<div class="download__container">
					<!-- <h1 v-if="!!platformLabel" class="download__heading">Thermal for {{ platformLabel }}</h1> -->
					<div v-if="!!platformLabel" class="download__progress">
						<h2>Thanks for downloading Thermal for {{ platformLabel }}</h2>
						<p>
							Download not started? Try this
							<g-link :to="downloadLink">direct download link</g-link>.
						</p>
					</div>
					<h1 v-else class="download__heading">
						Thermal for Windows, Mac & Linux
					</h1>
					<div class="download__other">
						<p class="download__other-heading" v-if="!!platformLabel">Download for other platform</p>
						<div class="download__other-list">
							<div class="download__other-item">
								<g-image
									src="../../static/images/windows.svg"
									class="download__other-image"
								/>
								<h4>Windows</h4>
							</div>
							<div class="download__other-item">
								<g-image
									src="../../static/images/mac.png"
									class="download__other-image"
								/>
								<h4>MacOS</h4>
							</div>
							<div class="download__other-item">
								<g-image
									src="../../static/images/linux.svg"
									class="download__other-image"
								/>
								<h4>Linux</h4>
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
import DownloadMixin from "../mixins/download";

export default {
	name: "Download",
	metaInfo: {
		title: "Download application"
	},
	data() {
		currentOSDownloadURL: "";
	},
	components: {
		container
	},
	computed: {
		downloadLink() {
			return this.currentOSDownloadURL;
		}
	},
	methods: {
		downloadApp(url) {
			setTimeout(function() {
				window.open(url);
			}, 1500);
		}
	},
	mounted() {
		this.osReleasesAssets(this.$page.allgithub.edges[0].node.assets);
		for (let i = 0; i < this.osBuild.length; i++) {
			if (this.$router.history.current.query.os === this.osBuild[i].os) {
				console.log(this.osBuild[i].ext);
				for (let j = 0; j < this.osBuild[i].ext.length; j++) {
					this.currentOSDownloadURL = this.osBuild[i].ext[j].browserDownloadUrl;
					this.downloadApp(this.currentOSDownloadURL);
				}
			}
		}
	},
	mixins: [DownloadMixin]
};
</script>

<page-query>
	query GitHub {
		allgithub {
			edges {
				node {
					id
					title
					assets {
						url
						browserDownloadUrl
					}
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
		background-color: #f1f8ee
		color: #3c763d
		padding: 1.2rem 1.5rem
		border-radius: .3rem
		margin-bottom: 3rem

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
