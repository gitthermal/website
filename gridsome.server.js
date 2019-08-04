const Octokit = require('@octokit/rest')
const octokit = new Octokit()
const path = require('path')
const fs = require('fs-extra')
const Airtable = require('airtable')

module.exports = function (api, options) {
	api.loadSource(async store => {
		const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID)

		const blogContentType = store.addContentType({
			camelCasedFieldNames: true,
			typeName: 'BlogPage',
			route: '/blog/:slug'
		})

		await base(process.env.AIRTABLE_BLOG_TABLE).select().eachPage((records, fetchNextPage) => {
			records.forEach((record) => {
				const item = record._rawJson
				if (item.fields.published) {
					blogContentType.addNode({
						id: item.id,
						title: item.fields.title,
						description: item.fields.description,
						image: item.fields.image,
						category: item.fields.category,
						author: store.createReference('Author', item.fields.author),
						slug: item.fields.slug,
						date: item.fields.date,
						canonical: item.fields.canonical,
						timeToRead: item.fields.timeToRead,
						content: item.fields.content
					})
				}
			})
			fetchNextPage()
		})

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
