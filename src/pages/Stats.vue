<template>
	<layout>
		<container>
			<div class="stats">
			<div class="stats__total">
				<apex-chart
					width="100%"
					type="bar"
					:options="options"
					:series="series"
				></apex-chart>
			</div>
			</div>
		</container>
	</layout>
</template>

<script>
import Container from "../layouts/Container";
import ApexChart from "vue-apexcharts";

export default {
	name: "Stats",
	metaInfo: {
		title: "Stats"
	},
	data() {
		return {
			series: [{ data: [22, 45, 20] }],
			options: {
				plotOptions: {
					bar: {
						columnWidth: "45%"
					}
				},
				dataLabels: {
					enabled: false
				},
				stroke: {
					show: true,
					width: 2,
					colors: ["transparent"]
				},
				xaxis: {
					categories: ["Windows", "Mac", "Linux"]
				},
				yaxis: {
					title: {
						text: "Downloads"
					}
				},
				fill: {
					opacity: 1
				},
				tooltip: {
					y: {
						formatter: function(val) {
							return val + " downloads";
						}
					}
				}
			}
		};
	},
	components: {
		Container,
		ApexChart
	},
	mounted() {
		let win = 0;
		let mac = 0;
		let linux = 0;
		for (let i = 0; i < this.$page.allgithub.edges.length; i++) {
			let releaseAssets = this.$page.allgithub.edges[i].node.assets;
			for (let j = 0; j < releaseAssets.length; j++) {
				if (releaseAssets[j].name.includes("win")) {
					win += releaseAssets[j].download_count;
				}
				if (releaseAssets[j].name.includes("mac")) {
					mac += releaseAssets[j].download_count;
				}
				if (releaseAssets[j].name.includes("linux")) {
					linux += releaseAssets[j].download_count;
				}
			}
		}
		this.series[0].data = [win, mac, linux];
	}
};
</script>

<page-query>
	query GitHub {
		allgithub {
			edges {
				node {
					id
					name
					assets {
						download_count
						name
					}
				}
			}
		}
	}
</page-query>

<style lang='sass'>
.stats
	margin-top: 3rem
	margin-bottom: 3rem

	&__total
		width: 70%
		margin: 0 auto
</style>
