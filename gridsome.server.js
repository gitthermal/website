const Octokit = require('@octokit/rest')
const octokit = new Octokit()
const path = require('path')
const fs = require('fs-extra')
const Airtable = require('airtable');
require('dotenv').config()

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

		Airtable.configure({
			endpointUrl: 'https://api.airtable.com',
			apiKey: process.env.AIRTABLE_API_KEY
		});
		const base = Airtable.base('appD1NB7tyuqXBGtc');

		const blog = store.addContentType({
			typeName: 'blog',
			route: '/blog/:slug'
		});

		base('blog').select({
			sort: [{ field: "date", direction: "desc" }]
		}).eachPage(function page(records, fetchNextPage) {
			// This function (`page`) will get called for each page of records.

			records.forEach(record => {
				blog.addNode({
					title: record.fields.title,
					description: record.fields.description,
					image: record.fields.image,
					date: record.fields.date,
					published: record.fields.published,
					author: record.fields.author,
					category: record.fields.url,
					slug: record.fields.slug,
					content: record.fields.content
				})
			});

			// To fetch the next page of records, call `fetchNextPage`.
			// If there are more records, `page` will get called again.
			// If there are no more records, `done` will get called.
			fetchNextPage();

		}, function done(err) {
			if (err) { console.error(err); return; }
		});

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
