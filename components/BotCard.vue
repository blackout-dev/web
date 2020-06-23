<template>
	<router-link :to="{ name: 'bots-id-uptime', params: { id: bot.id } }" class="no-underline">
		<div class="card flex cursor-pointer">
			<img :src="getAvatar(bot, 128)" width="84" height="84" />

			<div class="content">
				<p class="font-semibold text-primary">
					{{ bot.username }}
				</p>

				<p class="text-secondary">
					? uptime
				</p>
			</div>
		</div>
	</router-link>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		props: {
			bot: {
				type: Object,
				required: true,
			},
		},

		methods: {
			getAvatar(bot: { id: String, avatarHash: String, discriminator: number }, size: Number) {
				if (bot.avatarHash)
					return `https://cdn.discordapp.com/avatars/${bot.id}/${bot.avatarHash}.png?size=${size}`;
				else
					return `https://cdn.discordapp.com/embed/avatars/${bot.discriminator % 5}.png?size=${size}`;
			},
		},
	});
</script>

<style lang="scss" scoped>
	.card {
		background: $dark-2;
		border-radius: 3px;
		overflow: hidden;
		
		.content {
			padding: 12px 16px;
		}
	}
</style>