<template>
	<view :class="{ container: true, flex: true, reverses: isOwn }">
		<view :class="{ mt10: true, mr10: !isOwn, ml10: isOwn }">
			<u-avatar src="../../../static/logo.png"></u-avatar>
		</view>
		<view class="flex-1">
			<view class="userName">{{ messageInfo.sender_info.user.name }}</view>
			<view class="content">{{ messageInfo.content }}</view>
		</view>
	</view>
</template>


<script>
	// import { defineComponent } from 'vue';
	// import { PropType } from 'vue';

	// import {
	// 	message
	// } from '../../../service/proto_gen/message/message_pb';

	// interface IMessageInfo {
	// 	avatar ? : string;
	// 	user_name ? : string;
	// 	content ? : string;
	// }

	export default {
		name: 'c-message',
		data() {
			return {};
		},
		props: {
			isOwn: Boolean,
			messageInfo: {
				type: Object,
				default: (raw) => {
					return {
						avatar: '',
						user_name: '',
						content: '',
						sender_id: 0,
						Sender_info: {},
						...raw,
					};
				},
			},
		},
		mounted() {},
		methods: {
			onClick() {
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