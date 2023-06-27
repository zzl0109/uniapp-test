export namespace Qiji {
	interface RequestOption<Request, Response> {
		method : "GET" | "PUT" | "POST" | "DELETE",
		path : string,
		data ?: Request,
		responseMarshaller : (r : object) => Response
	}

	// export const serverAddr = "http://118.89.93.58:32000";
	export const serverAddr = "http://localhost:8888";
	export const wsAddr = "ws://localhost:9090";
	export const AuthErr = "AUTH_ERR";
	export const TokenKey = "token";

	export const sendRequest = <Request, Response>(o : RequestOption<Request, Response>) : Promise<Response> => {
		return new Promise((resolve, reject) => {
			const header : Record<string, any> = {}
			header.authorization = `Bearer ${localStorage.getItem(TokenKey) || ''}`

			uni.request({
				header,
				url: Qiji.serverAddr + o.path,
				method: o.method,
				data: o?.data || {},
				success(res) {
					if (res.statusCode === 401) {
						reject(Qiji.AuthErr)
					} else if (res.statusCode >= 400) {
						reject(res?.data || {})
					} else {
						// resolve(o.responseMarshaller(formatHumpLineTransfer(res.data)))
						resolve(res?.data as any)
					}
				},
				fail: reject
			})
		})
	}
}