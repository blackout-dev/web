<template>
	<div class="font-sans">
		<Navbar />
		<nuxt />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Navbar from  '../components/Navbar.vue';

	export default Vue.extend({
		components: {
			Navbar,
		},
	});
</script>

<style lang="scss">
	html {
		font-family: 'PT Sans'
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			'Helvetica Neue',
			Arial,
			'Noto Sans',
			sans-serif, 
			'Apple Color Emoji',
			'Segoe UI Emoji',
			'Segoe UI Symbol',
			'Noto Color Emoji';
	}

	body {
		color: $text-primary;
		background: $dark-1;
	}

	h1, h2, h3, h4, h5, h6 {
		color: $text-primary;
	}

	p {
		color: $text-secondary;
	}

	small {
		color: $text-tetriary;
	}
</style>