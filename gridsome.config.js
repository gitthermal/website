module.exports = {
	siteName: 'Thermal',
	siteUrl: 'https://thermal.codecarrot.net/',
	titleTemplate: "%s | Thermal",

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
		}
	]
}
