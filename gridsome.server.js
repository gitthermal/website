const Octokit = require('@octokit/rest')
const octokit = new Octokit()
const path = require('path')
const fs = require('fs-extra')

module.exports = function (api, options) {
	api.loadSource(async store => {
		// authors
		const authorsPath = path.join(__dirname, 'data/authors.json')
		const authorsRaw = await fs.readFile(authorsPath, 'utf8')
		const authorsJson = JSON.parse(authorsRaw)
		try {
			const authors = store.addContentType({
				typeName: 'Authors',
				route: '/author/:id'
			})
			for (let item = 0; item < authorsJson.length; item++) {
				authors.addNode({
					id: authorsJson[item].id,
					title: authorsJson[item].name,
					bio: authorsJson[item].bio,
					avatar: authorsJson[item].avatar,
					twitter: authorsJson[item].twitter
				})
			}
		} catch (error) {
			console.log(error);
		}

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
		} catch (error) {
			console.log(error);
		};

	})
}
