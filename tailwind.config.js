/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
	theme: {
		fontFamily: {
			sans: ['Source Sans Pro', 'sans-serif'],
		},

		textColor: {
			primary: 'rgba(255, 255, 255, 0.87)',
			secondary: 'rgba(255, 255, 255, 0.60)',
			tetriary: 'rgba(255, 255, 255, 0.38)',

			good: '#27AE60',
			bad: '#E64444',
		},
	},
	variants: {},
	plugins: [],
	purge: {
		// Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'components/**/*.vue',
			'layouts/**/*.vue',
			'pages/**/*.vue',
			'plugins/**/*.js',
			'nuxt.config.js'
		]
	}
}
