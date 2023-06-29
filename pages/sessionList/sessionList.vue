<template>
	<view class="p16">
		<view class="sessionContainer">
			<view class="sessionItem" v-for="i in sessionList" :key="i.id" @click="handleRedirectChat(i.id)">
				<view class="avatar">
					{{i.name.slice(0,2)}}
				</view>
				<view class="preview">
					<view class="name">{{i.name}}</view>
					<!-- <view class="message">消息：111</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		routing
	} from '../../router';
	import {
		MessageSerivce
	} from '../../service/message';
	import {
		Qiji
	} from '../../service/request';
	import {
		UserService
	} from '../../service/user';
	export default {
		data() {
			return {
				options: [{
					text: '1024'
				}],
				sessionList: [],
			}
		},
		onReady() {
			this.handleGetGroups()
		},
		methods: {
			handleGetGroups: function() {
				MessageSerivce.GetGroups().then(res => {
					this.sessionList = res.session_list || []
				}).catch(err => {
					console.error(err, 'err');
				})
			},
			// handleCreateGroups() {
			// 	MessageSerivce.GetMessageList(1).then(res => {
			// 		console.log(res, 'res');
			// 	}).catch(err => {
			// 		console.error(err, 'err');
			// 	})
			// },
			handleRedirectChat(sessionId) {
				uni.navigateTo({
					url: routing.chat({
						sessionId: sessionId
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.sessionContainer {
		.sessionItem {
			display: flex;
			align-items: center;
			margin-bottom: 20rpx;
			padding-bottom: 4rpx;
			border-bottom: 1px solid #eaeaea;

			.avatar {
				width: 96rpx;
				height: 96rpx;
				line-height: 96rpx;
				text-align: center;
				background-color: $uni-bg-color-grey;
				border-radius: $uni-border-radius-circle;
				margin-right: 16rpx;
				color: $uni-text-color;
			}

			.preview {
				flex: 1;
				width: 0;

				.name {
					font-size: 28rpx;
					color: $uni-text-color;
				}

				.message {
					font-size: 24rpx;
					color: $uni-color-subtitle;
				}
			}
		}
	}
</style>