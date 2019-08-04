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
				id: 'UA-131193769-3',
				debug: {
					sendHitTask: process.env.NODE_ENV === 'production'
				}
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
			use: '@gridsome/source-airtable',
			options: {
				apiKey: process.env.AIRTABLE_API_KEY,
				baseId: process.env.AIRTABLE_BASE_ID,
				tableName: process.env.AIRTABLE_TABLE_NAME,
				typeName: 'BlogPage',
				route: '/blog/:slug'
			}
		},
		{
			use: "@gridsome/source-filesystem",
			options: {
				path: "releases/**/*.md",
				typeName: 'ReleasePage',
				route: '/releases/:slug'
			}
		}
	]
}
