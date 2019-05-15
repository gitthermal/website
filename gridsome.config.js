module.exports = {
	siteName: 'Thermal',
	siteUrl: 'https://thermal.now.sh/',
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
