<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area flex mb-40">
			<view class="title mr-4">{{ title }}</view>
			<view class="title">{{ int }}</view>
		</view>
		<!-- uni-ui -->
		<uni-title type="h1" title="uni-ui 测试" color="#027fff"></uni-title>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { localStorage } from '@/js_sdk/mp-storage/mp-storage/index.js';
import { useIndexStore } from '@/stores/index.js';
import { onLoad } from '@dcloudio/uni-app';
import _ from 'lodash';
const IndexStore = useIndexStore();
const title = ref('模板');
title.value = '动态模板测试';
localStorage.setItem('int', '存储测试');
console.log(IndexStore.test, 'pinia 测试');
console.log(localStorage.getItem('int'));
const  int=localStorage.getItem('int')
const test = _.join(['a', 'b', 'c'], '~');
console.log(test,'lodash 测试');
onLoad(() => {
	console.log('onLoad')
});
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	/* display: flex; */
	/* justify-content: center; */
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
