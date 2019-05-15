module.exports = {
	siteName: 'Thermal',
	siteUrl: 'https://thermal.now.sh/',
	titleTemplate: "%s | Thermal",

  plugins: [
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
