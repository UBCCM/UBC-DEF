const purgecss = require('@fullhuman/postcss-purgecss')({
	content: ['./dist/*.html', './src/html/*.twig'],
	defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-simple-vars'),
		require('tailwindcss'),
		require('postcss-custom-properties'),
		require('autoprefixer'),
		...process.env.NODE_ENV === 'production' ?
		[purgecss, require('cssnano')] :
		[]
	]
}
