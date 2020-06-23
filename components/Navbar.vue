<template>
	<div class="navbar">
		<div class="container mx-auto">
			<nuxt-link :to="{ name: 'index' }">
				<Logo class="p-4" height="60" />
			</nuxt-link>

			<div class="navlinks-bar">
				<router-link :to="{ name: 'index' }" class="navlink" exact>
					Trends
				</router-link>
				<router-link :to="{ name: 'support' }" class="navlink" exact>
					Support
				</router-link>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Logo from './Logo.vue';

	export default Vue.extend({
		components: {
			Logo,
		},
	});
</script>

<style lang="scss" scoped>
	.navbar {
		background: $dark-0;
		height: $navbar-height;

		.container {
			display: flex;

			.navlinks-bar {
				margin-left: 32px;
				display: flex;

				.navlink {
					text-transform: uppercase;
					height: $navbar-height;
					line-height: $navbar-height;
					padding-right: 16px;
					padding-left: 16px;
					text-decoration: none;
					font-weight: normal;

					&:hover, &.active {
						cursor: pointer;
						border-bottom: 3px solid $primary;
					}
				}
			}
		}
	}
</style>