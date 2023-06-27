import { Qiji } from "./request"

export namespace UserService {
	// export const CreateUser = (data : any) => {
	// 	return Qiji.sendRequest<any, any>({
	// 		path: '/v1/user',
	// 		method: 'POST',
	// 		data: data,
	// 		responseMarshaller: (r : any) => r
	// 	})
	// }

	export const Login = (data : any) => {
		return Qiji.sendRequest<any, any>({
			path: '/v1/user/login',
			method: 'POST',
			data: data,
			responseMarshaller: (r : any) => r
		})
	}

	export const GetUser = (id : number) => {
		return Qiji.sendRequest<any, any>({
			path: `/v1/user/${id}`,
			method: 'GET',
			responseMarshaller: (r : any) => r
		})
	}
}