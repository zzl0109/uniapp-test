<template>
	<view class="pageWrapper safe-area-inset-bottom">
		<view class="page">
			<view class="messageContainer">
				<view v-for="i in messageList">
					<Message :messageInfo="i" :isOwn="i.user_id===109"></Message>
				</view>
			</view>
			<view class="sendBtnWrapper">
				<view class="flex alignItemsCenter sendBtnContaienr safe-area-inset-bottom">
					<view class="flex-1 mr10 inputContainer">
						<u-input v-model="input"></u-input>
					</view>
					<view class="sendBtn" @click="onSendMsg">
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
		onLoad() {},
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
				console.log(this.input, 'input');
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
		padding: 32rpx 0;
	}

	.messageContainer {
		overflow-y: auto;
		padding-bottom: 15%;
		height: 100%;
		padding: 0 32rpx;
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