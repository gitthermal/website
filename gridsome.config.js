const DocsCollections = [
	{
		query: `{
      allDocPage {
				edges {
					node {
						id
						path
						title
						description
					}
				}
			}
    }`,
		transformer: ({ data }) => data.allDocPage.edges.map(({ node }) => node),
		indexName: 'thermaldocs', // Algolia index name
		itemFormatter: (item) => {
			return {
				objectID: item.id,
				title: item.title,
				path: item.path,
				description: item.description,
			}
		}, // optional
		matchFields: ['title', 'slug']
	}
];

module.exports = {
	siteName: 'Thermal',
	siteUrl: 'https://thermal.codecarrot.net/',
	titleTemplate: "%s | Thermal",

	chainWebpack: config => {
		const svgRule = config.module.rule('svg')
		svgRule.uses.clear()
		svgRule
			.use('vue-svg-loader')
			.loader('vue-svg-loader')
	},

	plugins: [
		{
			use: '@gridsome/plugin-google-analytics',
			options: {
				id: 'UA-131193769-3'
			}
		},
		{
			use: "@gridsome/source-filesystem",
			options: {
				index: ['readme'],
				path: "docs/**/*.md",
				typeName: 'DocPage'
			}
		},
		{
			use: "@gridsome/source-filesystem",
			options: {
				path: "releases/**/*.md",
				typeName: 'ReleasePage',
				route: '/releases/:slug'
			}
		},
		{
			use: "gridsome-plugin-algolia",
			options: {
				appId: "6RVV3W1P8K",// process.env.ALGOLIA_APP_ID,
				apiKey: "d1156a160c38c18dceb165537ef8d4fc", // process.env.ALGOLIA_ADMIN_KEY,
				DocsCollections,
				chunkSize: 10000, // default: 1000
				enablePartialUpdates: true, // default: false
			},
		}
	]
}
