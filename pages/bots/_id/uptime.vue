<template>
	<div class="special-container mx-auto text-center">
		<p class="uptime text-good">
			<span>98.72</span><span class="percentage">%</span>
		</p>
		<p class="text-tetriary">
			(last 30 days)
		</p>
		<p class="description text-secondary text-2xl">
			<strong>
				Lithium
			</strong>
			is up since
			<strong>
				24d 16h 33m 14s
			</strong>
		</p>

		<Calendar class="calendar" />

		<div class="statistics text-left">
			<p class="text-tetriary">
				Recording uptime since:
				<strong>
					2020-05-20T16:31:19Z
				</strong>
			</p>
			<p class="text-tetriary">
				All time uptime:
				<strong>
					72.22%
				</strong>
			</p>
		</div>

		<div class="information text-left">
			<p class="text-tetriary">
				This page updates automatically.
			</p>
			<p class="text-tetriary">
				Stats are considered highly accurate given Discord's gateway is rapid.
			</p>
			<p class="text-tetriary">
				Data iscollected through the
				<strong class="blackout-bot">
					BLACKOUT bot.
				</strong>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { mapState } from 'vuex';

	import Calendar from '../../../components/Calendar.vue';

	export default Vue.extend({
		// @ts-ignore
		async asyncData({ store, route }: { store: any }) {
			await store.dispatch('bots/getBot', {
				id: route.params.id,
			});

			await store.dispatch('bots/getTimeline', {
				id: route.params.id,
			});
		},

		computed: {
			...mapState('bots', {
				bot (state: any) {
					return state.bots.find((b: any) => b.id === this.$route.params.id);
				}
			}),
		},

		components: {
			Calendar,
		},
	});
</script>

<style lang="scss" scoped>
	.special-container {
		max-width: 600px;

		.uptime {
			font-size: 110px;
			font-weight: 800;
			margin-top: 64px;

			.percentage {
				font-size: 72px;
			}
		}

		.description {
			margin-top: 24px;
		}

		.calendar {
			margin-top: 72px;
		}

		.statistics {
			margin-top: 64px;
		}

		.information {
			margin-top: 56px;

			.blackout-bot {
				color: $primary;
			}
		}
	}
</style>