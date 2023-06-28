<script>
	import {
		useUserStore
	} from './stores/user'
	import {
		mapActions
	} from 'pinia'

	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.getUserInfo()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			...mapActions(useUserStore, ['getUserInfo'])
		},
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";

	view {
		box-sizing: border-box;
	}

	uni-page-body {
		height: 100%;
	}
</style>