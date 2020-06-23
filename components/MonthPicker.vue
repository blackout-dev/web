<template>
	<div class="picker">
		<div class="flex toggle text-tetriary cursor-pointer select-none" @click="toggle = !toggle">
			<span>
				MAY 2020
			</span>
			<menu-down size="20" class="inline-block caret-down" />
		</div>

		<div class="selector" v-if="toggle">
			test
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import MenuDown from 'vue-material-design-icons/MenuDown.vue';

	export default Vue.extend({
		props: {
			min: {
				type: Date,
				required: true,
			},
		},

		data() {
			return {
				toggle: false,
			};
		},

		components: {
			MenuDown,
		},
	});
</script>

<style lang="scss" scoped>
	.picker {
		position: relative;

		.toggle span {
			line-height: 20px;
		}

		.selector {
			position: absolute;
			top: 28px;
			left: 0;
			background: $dark-2;
			padding: 1rem;
			border-radius: 3px;
		}
	}
</style>