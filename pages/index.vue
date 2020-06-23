<template>
	<div class="flex flex-wrap container mx-auto">
		<div class="w-full lg:w-6/12">
			<input class="searchbox" type="text" placeholder="Search bots…"
				v-model="query"
				autofocus />

			<div class="bots grid grid-cols-1 sm:grid-cols-2 gap-4">
				<BotCard v-for="bot in bots" :key="bot.id" :bot="bot" />
			</div>
		</div>
		<div class="w-full lg:w-5/12 lg:ml-auto">
			<Logo class="logo mx-auto" />

			<p class="pitch text-primary text-xl">
				Blackouts monitors Discord bots and provides uptime statistics without any setup.
			</p>

			<div class="statistics grid grid-cols-1 sm:grid-cols-2 gap-4">
				<Statistic />
				<Statistic />
				<Statistic />
				<Statistic />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import debounce from 'lodash.debounce';
	import meilisearch from '../meilisearch';

	import BotCard from '../components/BotCard.vue';
	import Logo from '../components/Logo.vue';
	import Statistic from '../components/Statistic.vue';

	export default Vue.extend({
		data(): {
			query: null | String,
			botsIndex: any,
			bots: null | Array<Object>,
		} {
			return {
				query: null,
				botsIndex: null,
				bots: [],
			};
		},

		// @ts-ignore
		async asyncData({ store }: { store: any }) {
			await store.dispatch('bots/getSomeBots', {
				limit: 6,
			});
		},

		async created() {
			this.botsIndex = meilisearch.getIndex('bots');
			this.bots = this.$store.state.bots.bots;
		},

		watch: {
			query: debounce(async function(this: any, newQuery: String) {
				if (newQuery)
					this.bots = (await this.botsIndex.search(newQuery)).hits;
				else
					this.bots = await this.botsIndex.getDocuments({ limit: 6 });
			}, 250),
		},

		components: {
			BotCard,
			Logo,
			Statistic,
		},
	});
</script>

<style lang="scss" scoped>
	.container {
		margin-top: 140px;
	
		.searchbox {
			background: none;
			outline: none;
			border: none;
			font-size: 32px;
			color: $text-primary;
			caret-color: $primary;
		}

		.searchbox::placeholder {
			color: $text-tetriary;
		}

		.bots {
			margin-top: 56px;
		}

		.logo {
			max-width: 200px;
		}

		.pitch {
			margin-top: 60px;
		}

		.statistics {
			margin-top: 42px;
		}
	}
</style>

