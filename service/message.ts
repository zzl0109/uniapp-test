import { Qiji } from "./request"

export namespace MessageSerivce {
	export const GetMessageList = (session_id : number) : Promise<any> => {
		return Qiji.sendRequest<any, any>({
			path: `/v1/messages/${session_id}`,
			method: 'GET',
			responseMarshaller() {
			}
		})
	}

	export const GetGroups = () : Promise<any> => {
		return Qiji.sendRequest<any, any>({
			path: `/v1/sessions`,
			method: 'GET',
			responseMarshaller() {
			}
		})
	}
}