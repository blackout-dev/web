import MeiliSearch from 'meilisearch';

const meilisearch: any = new MeiliSearch({
	host: 'http://127.0.0.1:7700',
});

export default meilisearch;