// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const Octokit = require('@octokit/rest')
const octokit = new Octokit()

function latestRelease(api, options) {
	api.loadSource(async store => {
		const { data } = await octokit.repos.getLatestRelease({
			owner: "gitthermal",
			repo: "thermal"
		})
		try {
			const github = store.addContentType({
				typeName: 'github'
			})
			github.addNode({
				id: data.id,
				title: data.name,
				fields: {
					target_commitish: data.target_commitish,
					assets: data.assets
				},
				content: data.body
			})
		} catch(error) {
			console.log(error);
		};

	})
}

module.exports = latestRelease
