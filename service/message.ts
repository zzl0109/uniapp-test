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