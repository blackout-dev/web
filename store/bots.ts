import Vue from 'vue';
import meilisearch from '../meilisearch';
import axios from 'axios';

const botsIndex = meilisearch.getIndex('bots');

const STORE_BOTS = 'STORE_BOTS';
const STORE_BOT = 'STORE_BOT';
const STORE_PRESENCE_TIMELINE = 'STORE_PRESENCE_TIMELINE';

export const state = () => ({
	bots: [],
});

export const actions = {
	async getSomeBots({ commit }: { commit: Function }, { limit }: { limit: number }) {
		commit(STORE_BOTS, {
			bots: await botsIndex.getDocuments({ limit }),
		});
	},

	async getBot({ commit }: { commit: Function }, { id }: { id: String }) {
		commit(STORE_BOT, {
			bot: await botsIndex.getDocument(id),
		});
	},

	async getTimeline({ commit }: { commit: Function }, { id }: { id: String }) {
		commit(STORE_PRESENCE_TIMELINE, {
			id,
			timeline: (await axios.get(`http://localhost:3000/presence/${id}`)).data,
		});
	}
}
	
export const mutations = {
	[STORE_BOTS](state: { bots: Array<Object> }, { bots }: { bots: Array<Object> }) {
		state.bots = bots;
	},

	[STORE_BOT](state: { bots: Array<Object> }, { bot }: { bot: { id: number } }) {
		state.bots = [
			...state.bots.filter((b: any) => b.id !== bot.id),
			bot
		];
	},

	[STORE_PRESENCE_TIMELINE](state: { bots: Array<Object> }, { id, timeline }: { id: String, timeline: Array<Object> }) {
		const bot = state.bots.find((b: any) => b.id === id);

		if (!bot)
			throw new Error('Bot does not exist in order to save timeline');

		Vue.set(bot, 'timeline', timeline);
	},
}
