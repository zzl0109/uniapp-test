import App from './App'
import {
	createPinia,
	PiniaVuePlugin
} from 'pinia'
import uView from "@/uni_modules/uview-ui/index.js";
Vue.use(uView);
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App,
	pinia,
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif