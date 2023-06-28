import { Qiji } from "./request"

export namespace AuthService {
	export const Login = (data : any) => {
		return Qiji.sendRequest<any, any>({
			path: '/v1/auth/login',
			method: 'POST',
			data: data,
			responseMarshaller: (r : any) => r
		}, true)
	}
}