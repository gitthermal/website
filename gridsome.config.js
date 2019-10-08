module.exports = {
	siteName: 'Thermal',
	siteDescription: 'One stop to all Git repository',
	siteUrl: 'https://thermal.codecarrot.net/',
	titleTemplate: "%s | Thermal",

	chainWebpack: config => {
		const svgRule = config.module.rule('svg')
		svgRule.uses.clear()
		svgRule
			.use('vue-svg-loader')
			.loader('vue-svg-loader')
	},

	templates: {
		BlogPage: "/blog/:slug",
		ReleasePage: "/releases/:slug"
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
			use: "@gridsome/source-filesystem",
			options: {
				path: "releases/**/*.md",
				typeName: 'ReleasePage'
			}
		}
	]
}
