const Octokit = require('@octokit/rest')
const octokit = new Octokit()

function latestRelease(api, options) {
	api.loadSource(async store => {
		const { data } = await octokit.repos.listReleases({
			owner: "gitthermal",
			repo: "thermal"
		})
		try {
			const github = store.addContentType({
				typeName: 'github'
			})
			for (let index of data) {
				github.addNode({
					id: index.id,
					name: index.name,
					tag_name: index.tag_name,
					target_commitish: index.target_commitish,
					url: index.url,
					assets_url: index.assets_url,
					assets: index.assets,
					created_at: index.created_at,
					published_at: index.published_at,
					prerelease: index.prerelease,
					draft: index.draft,
					content: index.body
				})
			}
		} catch(error) {
			console.log(error);
		};

	})
}

module.exports = latestRelease
