<template>
	<view>
		sessionlist
		<!-- <u-button @click="handleCreateGroups">创建群组</u-button> -->
	</view>
</template>

<script>
	import {
		MessageSerivce
	} from '../../service/message';
	import {
		UserService
	} from '../../service/user';
	export default {
		data() {
			return {

			}
		},
		onReady() {
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

			UserService.GetUser(1).then(res => {
				console.log(res, 'res');
			})
			this.handleGetGroups()
		},
		methods: {
			handleGetGroups() {
				MessageSerivce.GetGroups().then(res => {
					console.log(res, 'res');
				}).catch(err => {
					console.error(err, 'err');
				})
			},
			handleCreateGroups() {
				MessageSerivce.GetMessageList(1).then(res => {
					console.log(res, 'res');
				}).catch(err => {
					console.error(err, 'err');
				})
			}
		}
	}
</script>

<style>

</style>