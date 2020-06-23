import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin';

export default {
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'BLACKOUTS',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: 'BLACKOUTS'}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
			{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;800&display=swap'}
		]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: '#ff7f2a'
	},
	/*
	 ** Global CSS
	 */
	css: [
		'~assets/scss/app.scss',
		'~assets/scss/variables.scss',
	],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		'@nuxt/typescript-build',
		// Doc: https://github.com/nuxt-community/stylelint-module
		'@nuxtjs/stylelint-module',
		'@nuxtjs/tailwindcss',
	],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		'@nuxtjs/pwa',
		'@nuxtjs/style-resources',
	],
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, context) {}
	},

	styleResources: {
		scss: ['./assets/scss/variables.scss']
	},
	
	router: {
		linkActiveClass: 'active',
	},
};
