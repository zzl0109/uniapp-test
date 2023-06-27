import { message } from './proto_gen/message/message_pb';
import { Qiji } from './request';

export namespace MessageSerivce {
	export const GetMessageList = (session_id : number) : Promise<any> => {
		return Qiji.sendRequest<any, any>({
			path: `/v1/messages/${session_id}`,
			method: 'GET',
			responseMarshaller() { },
		});
	};

	export const GetGroups =
		() : Promise<message.v1.GetSessionListService.IResponse> => {
			return Qiji.sendRequest<
				message.v1.GetSessionListService.IRequest,
				message.v1.GetSessionListService.IResponse
			>({
				path: `/v1/sessions`,
				method: 'GET',
				responseMarshaller:
					message.v1.GetSessionListService.Response.fromObject,
			});
		};
}