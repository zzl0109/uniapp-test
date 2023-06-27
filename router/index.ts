export namespace routing {
	export function index() {
		return `/pages/index/index`
	}

	export interface ChatOptions {
		sessionId : number
	}

	export function chat(o : ChatOptions) {
		return `/pages/chat/chat?sessionId=${o.sessionId}`
	}

	export function sessionList() {
		return `/pages/sessionList/sessionList`
	}
}