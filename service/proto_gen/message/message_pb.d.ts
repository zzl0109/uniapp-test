import * as $protobuf from "protobufjs";

/** Namespace message. */
export namespace message {

    /** Namespace v1. */
    namespace v1 {

        /** Properties of a StreamMessageRequest. */
        interface IStreamMessageRequest {

            /** StreamMessageRequest name */
            name?: string;
        }

        /** Represents a StreamMessageRequest. */
        class StreamMessageRequest {

            /**
             * Constructs a new StreamMessageRequest.
             * @param [p] Properties to set
             */
            constructor(p?: message.v1.IStreamMessageRequest);

            /** StreamMessageRequest name. */
            public name: string;

            /**
             * Decodes a StreamMessageRequest message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns StreamMessageRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.v1.StreamMessageRequest;

            /**
             * Creates a StreamMessageRequest message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns StreamMessageRequest
             */
            public static fromObject(d: { [k: string]: any }): message.v1.StreamMessageRequest;

            /**
             * Creates a plain object from a StreamMessageRequest message. Also converts values to other types if specified.
             * @param m StreamMessageRequest
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: message.v1.StreamMessageRequest, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StreamMessageRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StreamMessageResponse. */
        interface IStreamMessageResponse {

            /** StreamMessageResponse message */
            message?: string;
        }

        /** Represents a StreamMessageResponse. */
        class StreamMessageResponse {

            /**
             * Constructs a new StreamMessageResponse.
             * @param [p] Properties to set
             */
            constructor(p?: message.v1.IStreamMessageResponse);

            /** StreamMessageResponse message. */
            public message: string;

            /**
             * Decodes a StreamMessageResponse message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns StreamMessageResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.v1.StreamMessageResponse;

            /**
             * Creates a StreamMessageResponse message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns StreamMessageResponse
             */
            public static fromObject(d: { [k: string]: any }): message.v1.StreamMessageResponse;

            /**
             * Creates a plain object from a StreamMessageResponse message. Also converts values to other types if specified.
             * @param m StreamMessageResponse
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: message.v1.StreamMessageResponse, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StreamMessageResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Message. */
        interface IMessage {

            /** Message id */
            id?: number;

            /** Message content */
            content?: string;

            /** Message sender_id */
            sender_id?: number;

            /** Message send_time_second */
            send_time_second?: number;
        }

        /** Represents a Message. */
        class Message {

            /**
             * Constructs a new Message.
             * @param [p] Properties to set
             */
            constructor(p?: message.v1.IMessage);

            /** Message id. */
            public id: number;

            /** Message content. */
            public content: string;

            /** Message sender_id. */
            public sender_id: number;

            /** Message send_time_second. */
            public send_time_second: number;

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.v1.Message;

            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns Message
             */
            public static fromObject(d: { [k: string]: any }): message.v1.Message;

            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @param m Message
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: message.v1.Message, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Message to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** SessionType enum. */
        enum SessionType {
            session_type_not_specified = 0,
            private = 1,
            group = 2
        }

        /** Properties of a GetMessageListSerivce. */
        interface IGetMessageListSerivce {
        }

        /** Represents a GetMessageListSerivce. */
        class GetMessageListSerivce {

            /**
             * Constructs a new GetMessageListSerivce.
             * @param [p] Properties to set
             */
            constructor(p?: message.v1.IGetMessageListSerivce);

            /**
             * Decodes a GetMessageListSerivce message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns GetMessageListSerivce
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.v1.GetMessageListSerivce;

            /**
             * Creates a GetMessageListSerivce message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns GetMessageListSerivce
             */
            public static fromObject(d: { [k: string]: any }): message.v1.GetMessageListSerivce;

            /**
             * Creates a plain object from a GetMessageListSerivce message. Also converts values to other types if specified.
             * @param m GetMessageListSerivce
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: message.v1.GetMessageListSerivce, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetMessageListSerivce to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GetMessageListSerivce {

            /** Properties of a Request. */
            interface IRequest {

                /** Request session_id */
                session_id?: number;
            }

            /** Represents a Request. */
            class Request {

                /**
                 * Constructs a new Request.
                 * @param [p] Properties to set
                 */
                constructor(p?: message.v1.GetMessageListSerivce.IRequest);

                /** Request session_id. */
                public session_id: number;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.v1.GetMessageListSerivce.Request;

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @param d Plain object
                 * @returns Request
                 */
                public static fromObject(d: { [k: string]: any }): message.v1.GetMessageListSerivce.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param m Request
                 * @param [o] Conversion options
                 * @returns Plain object
                 */
                public static toObject(m: message.v1.GetMessageListSerivce.Request, o?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response message_list */
                message_list?: message.v1.IMessage[];
            }

            /** Represents a Response. */
            class Response {

                /**
                 * Constructs a new Response.
                 * @param [p] Properties to set
                 */
                constructor(p?: message.v1.GetMessageListSerivce.IResponse);

                /** Response message_list. */
                public message_list: message.v1.IMessage[];

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.v1.GetMessageListSerivce.Response;

                /**
                 * Creates a Response message from a plain object. Also converts values to their respective internal types.
                 * @param d Plain object
                 * @returns Response
                 */
                public static fromObject(d: { [k: string]: any }): message.v1.GetMessageListSerivce.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param m Response
                 * @param [o] Conversion options
                 * @returns Plain object
                 */
                public static toObject(m: message.v1.GetMessageListSerivce.Response, o?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SendMessageService. */
        interface ISendMessageService {
        }

        /** Represents a SendMessageService. */
        class SendMessageService {

            /**
             * Constructs a new SendMessageService.
             * @param [p] Properties to set
             */
            constructor(p?: message.v1.ISendMessageService);

            /**
             * Decodes a SendMessageService message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns SendMessageService
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.v1.SendMessageService;

            /**
             * Creates a SendMessageService message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns SendMessageService
             */
            public static fromObject(d: { [k: string]: any }): message.v1.SendMessageService;

            /**
             * Creates a plain object from a SendMessageService message. Also converts values to other types if specified.
             * @param m SendMessageService
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: message.v1.SendMessageService, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SendMessageService to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SendMessageService {

            /** Properties of a Request. */
            interface IRequest {

                /** Request content */
                content?: string;

                /** Request session_type */
                session_type?: message.v1.SessionType;

                /** Request session_id */
                session_id?: number;

                /** Request sender_id */
                sender_id?: number;
            }

            /** Represents a Request. */
            class Request {

                /**
                 * Constructs a new Request.
                 * @param [p] Properties to set
                 */
                constructor(p?: message.v1.SendMessageService.IRequest);

                /** Request content. */
                public content: string;

                /** Request session_type. */
                public session_type: message.v1.SessionType;

                /** Request session_id. */
                public session_id: number;

                /** Request sender_id. */
                public sender_id: number;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.v1.SendMessageService.Request;

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @param d Plain object
                 * @returns Request
                 */
                public static fromObject(d: { [k: string]: any }): message.v1.SendMessageService.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param m Request
                 * @param [o] Conversion options
                 * @returns Plain object
                 */
                public static toObject(m: message.v1.SendMessageService.Request, o?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GetSessionListService. */
        interface IGetSessionListService {
        }

        /** Represents a GetSessionListService. */
        class GetSessionListService {

            /**
             * Constructs a new GetSessionListService.
             * @param [p] Properties to set
             */
            constructor(p?: message.v1.IGetSessionListService);

            /**
             * Decodes a GetSessionListService message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns GetSessionListService
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.v1.GetSessionListService;

            /**
             * Creates a GetSessionListService message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns GetSessionListService
             */
            public static fromObject(d: { [k: string]: any }): message.v1.GetSessionListService;

            /**
             * Creates a plain object from a GetSessionListService message. Also converts values to other types if specified.
             * @param m GetSessionListService
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: message.v1.GetSessionListService, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetSessionListService to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GetSessionListService {

            /** Properties of a SessionInfo. */
            interface ISessionInfo {

                /** SessionInfo id */
                id?: number;

                /** SessionInfo name */
                name?: string;

                /** SessionInfo session_type */
                session_type?: message.v1.SessionType;
            }

            /** Represents a SessionInfo. */
            class SessionInfo {

                /**
                 * Constructs a new SessionInfo.
                 * @param [p] Properties to set
                 */
                constructor(p?: message.v1.GetSessionListService.ISessionInfo);

                /** SessionInfo id. */
                public id: number;

                /** SessionInfo name. */
                public name: string;

                /** SessionInfo session_type. */
                public session_type: message.v1.SessionType;

                /**
                 * Decodes a SessionInfo message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns SessionInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.v1.GetSessionListService.SessionInfo;

                /**
                 * Creates a SessionInfo message from a plain object. Also converts values to their respective internal types.
                 * @param d Plain object
                 * @returns SessionInfo
                 */
                public static fromObject(d: { [k: string]: any }): message.v1.GetSessionListService.SessionInfo;

                /**
                 * Creates a plain object from a SessionInfo message. Also converts values to other types if specified.
                 * @param m SessionInfo
                 * @param [o] Conversion options
                 * @returns Plain object
                 */
                public static toObject(m: message.v1.GetSessionListService.SessionInfo, o?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SessionInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Request. */
            interface IRequest {
            }

            /** Represents a Request. */
            class Request {

                /**
                 * Constructs a new Request.
                 * @param [p] Properties to set
                 */
                constructor(p?: message.v1.GetSessionListService.IRequest);

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.v1.GetSessionListService.Request;

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @param d Plain object
                 * @returns Request
                 */
                public static fromObject(d: { [k: string]: any }): message.v1.GetSessionListService.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param m Request
                 * @param [o] Conversion options
                 * @returns Plain object
                 */
                public static toObject(m: message.v1.GetSessionListService.Request, o?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Response. */
            interface IResponse {

                /** Response session_list */
                session_list?: message.v1.GetSessionListService.ISessionInfo[];
            }

            /** Represents a Response. */
            class Response {

                /**
                 * Constructs a new Response.
                 * @param [p] Properties to set
                 */
                constructor(p?: message.v1.GetSessionListService.IResponse);

                /** Response session_list. */
                public session_list: message.v1.GetSessionListService.ISessionInfo[];

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.v1.GetSessionListService.Response;

                /**
                 * Creates a Response message from a plain object. Also converts values to their respective internal types.
                 * @param d Plain object
                 * @returns Response
                 */
                public static fromObject(d: { [k: string]: any }): message.v1.GetSessionListService.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param m Response
                 * @param [o] Conversion options
                 * @returns Plain object
                 */
                public static toObject(m: message.v1.GetSessionListService.Response, o?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Represents a MessageService */
        class MessageService extends $protobuf.rpc.Service {

            /**
             * Constructs a new MessageService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls StreamMessage.
             * @param request StreamMessageRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and StreamMessageResponse
             */
            public streamMessage(request: message.v1.IStreamMessageRequest, callback: message.v1.MessageService.StreamMessageCallback): void;

            /**
             * Calls StreamMessage.
             * @param request StreamMessageRequest message or plain object
             * @returns Promise
             */
            public streamMessage(request: message.v1.IStreamMessageRequest): Promise<message.v1.StreamMessageResponse>;

            /**
             * Calls GetMessageList.
             * @param request Request message or plain object
             * @param callback Node-style callback called with the error, if any, and Response
             */
            public getMessageList(request: message.v1.GetMessageListSerivce.IRequest, callback: message.v1.MessageService.GetMessageListCallback): void;

            /**
             * Calls GetMessageList.
             * @param request Request message or plain object
             * @returns Promise
             */
            public getMessageList(request: message.v1.GetMessageListSerivce.IRequest): Promise<message.v1.GetMessageListSerivce.Response>;

            /**
             * Calls SendMessage.
             * @param request Request message or plain object
             * @param callback Node-style callback called with the error, if any, and Message
             */
            public sendMessage(request: message.v1.SendMessageService.IRequest, callback: message.v1.MessageService.SendMessageCallback): void;

            /**
             * Calls SendMessage.
             * @param request Request message or plain object
             * @returns Promise
             */
            public sendMessage(request: message.v1.SendMessageService.IRequest): Promise<message.v1.Message>;

            /**
             * Calls GetSessionList.
             * @param request Request message or plain object
             * @param callback Node-style callback called with the error, if any, and Response
             */
            public getSessionList(request: message.v1.GetSessionListService.IRequest, callback: message.v1.MessageService.GetSessionListCallback): void;

            /**
             * Calls GetSessionList.
             * @param request Request message or plain object
             * @returns Promise
             */
            public getSessionList(request: message.v1.GetSessionListService.IRequest): Promise<message.v1.GetSessionListService.Response>;
        }

        namespace MessageService {

            /**
             * Callback as used by {@link message.v1.MessageService#streamMessage}.
             * @param error Error, if any
             * @param [response] StreamMessageResponse
             */
            type StreamMessageCallback = (error: (Error|null), response?: message.v1.StreamMessageResponse) => void;

            /**
             * Callback as used by {@link message.v1.MessageService#getMessageList}.
             * @param error Error, if any
             * @param [response] Response
             */
            type GetMessageListCallback = (error: (Error|null), response?: message.v1.GetMessageListSerivce.Response) => void;

            /**
             * Callback as used by {@link message.v1.MessageService#sendMessage}.
             * @param error Error, if any
             * @param [response] Message
             */
            type SendMessageCallback = (error: (Error|null), response?: message.v1.Message) => void;

            /**
             * Callback as used by {@link message.v1.MessageService#getSessionList}.
             * @param error Error, if any
             * @param [response] Response
             */
            type GetSessionListCallback = (error: (Error|null), response?: message.v1.GetSessionListService.Response) => void;
        }
    }
}
