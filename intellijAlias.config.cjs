module.exports = {
	resolve: {
		alias: {
			'@': require('path').resolve(__dirname, 'src'),
			'#': require('path').resolve(__dirname, 'domain'),
		},
	},
}
