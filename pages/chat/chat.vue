<template>
	<view class="pageWrapper safe-area-inset-bottom">
		<view class="page">
			<scroll-view class="messageContainer" scroll-y :scroll-top="scrollTop" @scroll="handleScrollY"
				@scrolltoupper="handleScrollToUpper" @scrolltolower="handleScrollToLower">
				<view v-for="(i, index) in messageList" :key="index" class="message">
					<Message :messageInfo="i" :isOwn="i.sender_id === userInfo.id"></Message>
				</view>
			</scroll-view>
			<view class="sendBtnWrapper">
				<view class="flex alignItemsCenter sendBtnContaienr safe-area-inset-bottom">
					<view class="flex-1 mr10 inputContainer">
						<u-input v-model="input" :hold-keyboard="true"></u-input>
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
		MessageSerivce
	} from '../../service/message';
	import {
		message
	} from '../../service/proto_gen/message/message_pb';
	import {
		formatNumber
	} from '../../utils';
	import Message from './components/message.vue';
	import {
		mapState
	} from 'pinia';
	import {
		useUserStore
	} from '../../stores/user';

	export default {
		data() {
			return {
				handleSendMessage: (m) => {},
				input: '',
				sessionId: 0,
				sessionInfo: {},
				scrollTop: 999999,
				old: {
					scrollTop: 0,
				},
				messageList: [],
				messageFetching: false,
			};
		},
		computed: {
			...mapState(useUserStore, ['userInfo']),
		},
		components: {
			Message,
		},
		onLoad(query) {
			this.sessionId = Number(query?.sessionId || 0);
			this.handleSendMessage = MessageSerivce.JoinChat(
				query?.sessionId,
				this.handleReceiveMessage
			);

			this.handleGetMessageList(0, message.v1.MessageQueryDirection.after, true)

			MessageSerivce.GetGroup(this.sessionId).then(res => {
				this.sessionInfo = res.session;
				uni.setNavigationBarTitle({
					title: res.session.name
				})
			}).catch(err => {
				console.error(err, 'GetGroup err');
			})
		},
		onUnload() {
			uni.closeSocket();
		},
		methods: {
			handleScrollToUpper() {
				console.log("upper");
				this.handleGetMessageList(this.messageList[0].id, message.v1.MessageQueryDirection.before)
			},

			handleScrollToLower() {
				console.log('lower');
				// this.handleGetMessageList(this.messageList[this.messageList.length - 1].id, message.v1
				// 	.MessageQueryDirection.after)
			},

			handleGetMessageList(msgId, direction, needToBottom) {
				if (this.messageFetching) return;
				this.messageFetching = true
				MessageSerivce.GetMessageList({
					session_id: this.sessionId,
					message_id: msgId,
					direction: direction || message.v1.MessageQueryDirection.after
				}).then(res => {
					if (!res?.message_list) {
						return uni.$u.toast("没有更多了")
					}
					if (direction === message.v1.MessageQueryDirection.after) {
						this.messageList = [...this.messageList, ...res.message_list]
					} else {
						this.messageList = [...res.message_list, ...this.messageList]
					}
					if (needToBottom) {
						this.$nextTick(function() {
							this.goBottom()
						})
					}
				}).catch(err => {
					uni.$u.toast(err?.message || '登录失败');
				}).finally(() => {
					this.messageFetching = false
				})
			},

			/** 点击 */
			onClick() {
				formatNumber(e);
				console.log(e, 'e');
			},

			/** 发送消息 */
			onSendMsg() {
				if (!this.input) return;
				// this.messageList.push({
				// 	user_id: this?.userInfo?.id,
				// 	user_name: '张三',
				// 	content: this.input,
				// });
				this.handleSendMessage({
					content: this.input,
					session_type: message.v1.SessionType.group,
					session_id: Number(this.sessionId),
					sender_id: this.userInfo.id
				});
				this.input = '';
				this.$nextTick(function() {
					this.goBottom();
				});
			},

			handleReceiveMessage(m) {

				console.log(m, 'handleReceiveMessage');
				if (!m) {
					return;
				}
				try {
					const msg = {
						...m
					};
					msg.user_id = msg.sender_id;
					this.messageList.push(msg);
					console.log(this.messageList, 'messageList');
					this.goBottom()
				} catch (e) {
					console.error(e, '转换消息失败');
				}
			},

			handleScrollY: function(e) {
				// console.log(e, 'handleScrollY')
				this.old.scrollTop = e.detail.scrollTop;
			},
			goBottom() {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop;
				this.$nextTick(function() {
					this.scrollTop = 9999999;
				});
			},
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