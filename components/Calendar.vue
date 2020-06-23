<template>
	<div>
		<!-- <MonthPicker /> -->

		<div class="grid grid-cols-5 gap-3 sm:grid-cols-10 mt-4">
			<div class="day text-2xl select-none" v-for="n in 30">
				{{ n }}
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	// import MonthPicker from './MonthPicker.vue';
	
	export default Vue.extend({
		components: {
			// MonthPicker,
		},
	});
</script>

<style lang="scss" scoped>
	.day {
		height: 50px;
		width: 50px;
		border-radius: 3px;
		background: $good;
		color: $dark-1;
		line-height: 50px;
	}
</style>