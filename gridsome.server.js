const path = require('path')
const fs = require('fs-extra')
const Octokit = require('@octokit/rest')
const octokit = new Octokit()

module.exports = function (api, options) {

	api.onCreateNode(options => {
		if (options.internal.typeName === 'BlogPage' && options.draft) {
			return null
		}
	})

	api.loadSource(async actions => {

		// authors
		const authorsPath = path.join(__dirname, 'data/author.json')
		const authorsRaw = await fs.readFile(authorsPath, 'utf8')
		const authorsJson = JSON.parse(authorsRaw);
		const authors = actions.addCollection('Author')

		authorsJson.forEach((author) => {
			authors.addNode({
				id: author.id,
				name: author.name,
				twitter: author.twitter,
				bio: author.bio,
				image: author.image
			})
		})

		const thermalRepository = {
			owner: "gitthermal",
			repo: "thermal"
		}

		// latest release artifacts
		const getLatestRelease = await octokit.repos.getLatestRelease(thermalRepository)
		try {
			const latestRelease = actions.addCollection({
				typeName: "latestRelease"
			})

			getLatestRelease.data.assets.forEach((item) => {
				latestRelease.addNode({
					id: item.id,
					url: item.url,
					name: item.name,
					label: item.label,
					size: item.size,
					download_count: item.download_count,
					created_at: item.created_at,
					updated_at: item.updated_at,
					browser_download_url: item.browser_download_url
				})
			})
		} catch (error) {
			console.log(error)
		}

		// list all releases
		const listReleases = await octokit.repos.listReleases({ ...thermalRepository, per_page: 100 })
		try {
			const releases = actions.addCollection({
				typeName: 'Releases'
			})
			listReleases.data.forEach(item => {

				const slug = item.name.replace(/\./gm, "-")
				releases.addNode({
					id: item.id,
					slug,
					name: `v${item.name}`,
					html_url: item.html_url,
					draft: item.draft,
					prerelease: item.prerelease,
					tag_name: item.tag_name,
					target_commitish: item.target_commitish,
					author: {
						id: item.author.id,
						avatar_url: item.author.avatar_url,
						url: item.author.url
					},
					created_at: item.created_at,
					published_at: item.published_at,
					content: item.body
				})
			})
		} catch (error) {
			console.log(error);
		};

	})
}
