<template>
	<view class="pageWrapper safe-area-inset-bottom">
		<view class="page">
			<scroll-view class="messageContainer" scroll-y :scroll-top="scrollTop" @scroll="handleScrollY">
				<view v-for="(i, index) in messageList" :key="index" class="message">
					<Message :messageInfo="i" :isOwn="i.user_id===109"></Message>
				</view>
			</scroll-view>
			<!-- <view class="messageContainer">
				<view v-for="(i, index) in messageList" :key="index">
					<Message :messageInfo="i" :isOwn="i.user_id===109"></Message>
				</view>
			</view> -->
			<view class="sendBtnWrapper">
				<view class="flex alignItemsCenter sendBtnContaienr safe-area-inset-bottom">
					<view class="flex-1 mr10 inputContainer">
						<u-input v-model="input" hold-keyboard="true"></u-input>
					</view>
					<view class="sendBtn" @touchend.prevent="onSendMsg" hold-keyboard="true">
						<u-button type="success">发送</u-button>
					</view>
				</view>
			</view>

		</view>

	</view>

</template>

<script>
	import {
		formatNumber
	} from '../../utils';
	import Message from './components/message.vue'
	export default {
		data() {
			return {
				input: '',
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				messageList: [{
						user_id: 1,
						avatar: '',
						user_name: '李四',
						content: '天王盖地虎天王盖地虎天王盖地虎天王盖地虎天王盖地虎天王盖地虎'
					},
					{
						user_id: 109,
						avatar: '',
						user_name: '张三',
						content: '宝塔镇河妖宝塔镇河妖宝塔镇河妖宝塔镇河妖宝塔镇河妖'
					},
					{
						user_id: 1,
						avatar: '',
						user_name: '李四',
						content: '666'
					},
					{
						user_id: 1,
						avatar: '',
						user_name: '李四',
						content: '找到组织了！！'
					},
					{
						user_id: 1,
						avatar: '',
						user_name: '李四',
						content: '666'
					},
					{
						user_id: 109,
						avatar: '',
						user_name: '张三',
						content: '哈哈哈哈哈 你也是段友？'
					},
					{
						user_id: 1,
						avatar: '',
						user_name: '李四',
						content: '嗯呢'
					},
					{
						user_id: 109,
						avatar: '',
						user_name: '张三',
						content: '666'
					},
					{
						user_id: 109,
						avatar: '',
						user_name: '张三',
						content: '666'
					},
				],
			};
		},
		components: {
			Message
		},
		onLoad(query) {
			console.log(query, 'query');

			// uni.connectSocket({
			// 	url: `ws://localhost:9090/ws`
			// })
			// uni.onSocketOpen(function() {
			// 	uni.onSocketMessage((v) => {
			// 		console.log(v, 'onSocketMessage');
			// 	})
			// 	setInterval(() => {
			// 		uni.sendSocketMessage({
			// 			data: "zhangzhulei"
			// 		})
			// 	}, 1000)

			// });
		},
		methods: {
			/** 点击 */
			onClick() {
				formatNumber(e);
				console.log(e, 'e');
			},

			/** 发送消息 */
			onSendMsg() {
				if (!this.input) return;
				this.messageList.push({
					user_id: 109,
					user_name: '张三',
					content: this.input
				})
				this.input = '';
				this.$nextTick(function() {
					this.goBottom()
				})
			},
			handleScrollY: function(e) {
				// console.log(e, 'handleScrollY')
				this.old.scrollTop = e.detail.scrollTop
			},
			goBottom() {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 9999999
				});
			}
		},
	};
</script>

<style>
	.pageWrapper {
		/* #ifdef MP-WEIXIN */
		height: 100vh;
		/* #endif */
		/* #ifdef H5 */
		height: 100%;
		/* #endif */
		padding-bottom: 0;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.page {
		position: relative;
		height: 100%;
		/* padding: 32rpx 0; */
	}

	.messageContainer {
		box-sizing: border-box;
		overflow-y: auto;
		padding-bottom: 15%;
		height: 100%;
		padding: 0 32rpx 120rpx;
	}

	.inputContainer {
		background-color: #fff;
	}

	.sendBtnWrapper {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 10rpx;
		border-radius: 6rpx;
		background-color: #e9e9e9;
	}

	.sendBtnContaienr {
		width: 100%;
	}

	.sendBtn {
		width: 120rpx;
	}
</style>