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
			use: "@gridsome/vue-remark",
			options: {
				typeName: 'Blog',
				baseDir: "./blogs",
				pathPrefix: '/blog',
				template: "./src/templates/Blog.vue",
				route: "/blog/:slug",
				refs: {
					author: 'Author'
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
