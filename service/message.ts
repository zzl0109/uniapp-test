import { message } from './proto_gen/message/message_pb';
import { Qiji } from './request';

export namespace MessageSerivce {
	export const GetMessageList = (data : message.v1.GetMessageListService.IRequest) : Promise<message.v1.GetMessageListService.IResponse> => {
		return Qiji.sendRequest<message.v1.GetMessageListService.IRequest, message.v1.GetMessageListService.IResponse>({
			path: `/v1/messageList`,
			method: 'POST',
			data,
			responseMarshaller: message.v1.GetMessageListService.Response.fromObject,
		});
	};

	export const GetGroups =
		() : Promise<message.v1.GetSessionListService.IResponse> => {
			return Qiji.sendRequest<message.v1.GetSessionListService.IRequest, message.v1.GetSessionListService.IResponse>({
				path: `/v1/sessions`,
				method: 'GET',
				responseMarshaller: message.v1.GetSessionListService.Response.fromObject,
			});
		};

	export const GetGroup =
		(id : number) : Promise<message.v1.GetSessionResponse> => {
			return Qiji.sendRequest<message.v1.IGetSessionRequest, message.v1.GetSessionResponse>({
				path: `/v1/session/${id}`,
				method: 'GET',
				responseMarshaller: message.v1.GetSessionResponse.fromObject
			});
		};

	export type SendMessage = (m : message.v1.SendMessageService.IRequest) => void;
	export type ReceiveMessage = (m : message.v1.SendMessageService.IRequest) => void;

	export interface JoinChatResult {
		sendMessage : SendMessage;
	}

	export const JoinChat = (sessionId : number, onReceiveMessage : ReceiveMessage) => {
		var socketOpen = false;
		var socketMsgQueue : message.v1.SendMessageService.IRequest[] = [];

		uni.connectSocket({
			url: `${Qiji.wsAddr}/chat?session_id=${sessionId}`
		})

		uni.onSocketOpen(() => {
			uni.onSocketMessage((v) => {
				try {
					const m = JSON.parse(v?.data) as message.v1.SendMessageService.IRequest
					onReceiveMessage(m)
				} catch (e) {
					console.error("接受消息失败", e)
				}
			})

			socketOpen = true;
			for (var i = 0; i < socketMsgQueue.length; i++) {
				sendMessage(socketMsgQueue[i]);
			}
			socketMsgQueue = [];
		});

		const sendMessage : SendMessage = (m) => {
			if (socketOpen) {
				uni.sendSocketMessage({
					data: JSON.stringify(m)
				})
			} else {
				socketMsgQueue.push(m)
			}
		}

		return sendMessage;
	}
}