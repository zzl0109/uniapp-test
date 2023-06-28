<template>
	<view :class="{ container: true, flex: true, reverses: isOwn }">
		<view :class="{ mt10: true, mr10: !isOwn, ml10: isOwn }">
			<u-avatar src="../../../static/logo.png"></u-avatar>
		</view>
		<view class="flex-1">
			<view class="userName">{{ messageInfo.user_name || messageInfo.user_id }}</view>
			<view class="content">{{ messageInfo.content }}</view>
		</view>
	</view>
</template>

<script lang="ts">
	// import { defineComponent } from 'vue';
	// import { PropType } from 'vue';

	interface IMessageInfo {
		avatar ?: string;
		user_name ?: string;
		content ?: string;
	}

	export default {
		name: 'c-message',
		data() {
			return {};
		},
		props: {
			isOwn: Boolean,
			messageInfo: {
				type: Object,
				default: (raw : IMessageInfo) : IMessageInfo => {
					return {
						avatar: '',
						user_name: '',
						content: '',
						...raw,
					};
				},
			},
		},
		mounted() { },
		methods: {
			onClick(e : Event) {
				// e.target
			},
		},
	}
</script>

<style lang="scss">
	.container {
		width: 100%;
		margin-bottom: 20rpx;

		.userName {
			padding: 0;
			padding-right: 30%;
			color: $uni-color-subtitle;
			font-size: 24rpx;
		}

		.content {
			display: inline-block;
			max-width: 90%;
			margin-top: 8rpx;
			background-color: #eee;
			border-radius: 6rpx;
			padding: 12rpx;
			color: $uni-color-title;
		}
	}

	.reverses {
		flex-direction: row-reverse;
		text-align: right;

		.userName {
			padding-right: 0;
			padding-left: 30%;
		}

		.content {
			text-align: left;
			background-color: $uni-color-success;
		}
	}
</style>