<template>
	<view class="pageWrapper safe-area-inset-bottom">
		<!-- <u-input></u-input> -->
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<u--form labelPosition="left" :model="model1" :rules="rules" ref="uForm">
			<u-form-item label="昵称" prop="userInfo.name" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.name" border="none" placeholder="请输入昵称"></u--input>
			</u-form-item>

			<u-form-item label="性别" prop="userInfo.sex" @click="showSex = true" borderBottom>
				<u--input v-model="model1.userInfo.sex" disabled disabledColor="#ffffff" placeholder="请选择性别"
					border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
		</u--form>

		<u-action-sheet :show="showSex" :actions="actions" @close="showSex = false" title="请选择性别" @select="sexSelect">
		</u-action-sheet>
		<u-button type="primary" text="进入聊天" customStyle="margin-top: 50px" @click="submit"
			:loading="submitting"></u-button>
	</view>
</template>

<script>
	import {
		routing
	} from '../../router';
	import {
		AuthService
	} from '../../service/auth';
	import {
		Qiji
	} from '../../service/request';
	import {
		mapActions
	} from 'pinia';
	import {
		useUserStore
	} from '../../stores/user';

	export default {
		data() {
			return {
				submitting: false,
				showSex: false,
				model1: {
					userInfo: {
						name: '',
						sex: '',
						sexValue: '',
					},
				},
				actions: [{
						name: '男',
						value: 1,
					},
					{
						name: '女',
						value: 2,
					},
				],
				rules: {
					'userInfo.name': {
						type: 'string',
						required: true,
						message: '请填写昵称',
						trigger: ['blur', 'change'],
					},
					'userInfo.sex': {
						type: 'string',
						max: 1,
						required: true,
						message: '请选择男或女',
						trigger: ['blur', 'change'],
					},
				},
			};
		},

		onReady() {
			if (uni.getStorageSync(Qiji.TokenKey)) {
				uni.redirectTo({
					url: routing.sessionList(),
				});
			}

			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.uForm.setRules(this.rules);

			// uni.connectSocket({
			// 	url: `ws://localhost:9090/ws?id=123`
			// })
			// uni.onSocketOpen(function() {
			// 	uni.onSocketMessage((v) => {

			// 		console.log(v.data, JSON.parse(v.data), 'onSocketMessage');
			// 	})
			// 	setInterval(() => {
			// 		uni.sendSocketMessage({
			// 			data: "zhangzhulei"
			// 		})
			// 	}, 4000)
			// })
		},
		methods: {
			...mapActions(useUserStore, ['getUserInfo']),
			/** 点击 */
			onClick() {
				formatNumber(e);
				console.log(e, 'e');
			},
			sexSelect(e) {
				console.log(e, 'e');
				this.model1.userInfo.sex = e.name;
				this.model1.userInfo.sexValue = e.value;
				this.$refs.uForm.validateField('userInfo.sex');
			},
			submit() {
				// 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
				this.$refs.uForm
					.validate()
					.then((res) => {
						this.submitting = true;
						const userInfo = this.model1.userInfo || {};
						AuthService.Login({
								user: {
									name: userInfo.name,
									gender: userInfo.sexValue,
								},
							})
							.then((res) => {
								uni.$u.toast('登录成功');
								uni.setStorageSync(Qiji.TokenKey, res?.token);
								this.getUserInfo();
								// todo 跳转到会话列表
								uni.redirectTo({
									url: routing.sessionList(),
								});
							})
							.catch((err) => {
								console.log(err, 'Login err');
								uni.$u.toast(err?.message || '登录失败');
							})
							.finally(() => {
								this.submitting = false;
							});
					})
					.catch((errors) => {
						console.log(err, 'err');
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

		padding: 32rpx;
	}
</style>