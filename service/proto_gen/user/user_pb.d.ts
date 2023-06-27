import * as $protobuf from "protobufjs";

/** Namespace user. */
export namespace user {

    /** Namespace v1. */
    namespace v1 {

        /** Gender enum. */
        enum Gender {
            gender_not_specified = 0,
            male = 1,
            female = 2
        }

        /** Properties of a UserEntity. */
        interface IUserEntity {

            /** UserEntity id */
            id?: number;

            /** UserEntity user */
            user?: user.v1.IUser;
        }

        /** Represents a UserEntity. */
        class UserEntity {

            /**
             * Constructs a new UserEntity.
             * @param [p] Properties to set
             */
            constructor(p?: user.v1.IUserEntity);

            /** UserEntity id. */
            public id: number;

            /** UserEntity user. */
            public user?: (user.v1.IUser|null);

            /**
             * Decodes a UserEntity message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns UserEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): user.v1.UserEntity;

            /**
             * Creates a UserEntity message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns UserEntity
             */
            public static fromObject(d: { [k: string]: any }): user.v1.UserEntity;

            /**
             * Creates a plain object from a UserEntity message. Also converts values to other types if specified.
             * @param m UserEntity
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: user.v1.UserEntity, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserEntity to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a User. */
        interface IUser {

            /** User name */
            name?: string;

            /** User gender */
            gender?: user.v1.Gender;

            /** User token */
            token?: string;
        }

        /** Represents a User. */
        class User {

            /**
             * Constructs a new User.
             * @param [p] Properties to set
             */
            constructor(p?: user.v1.IUser);

            /** User name. */
            public name: string;

            /** User gender. */
            public gender: user.v1.Gender;

            /** User token. */
            public token: string;

            /**
             * Decodes a User message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): user.v1.User;

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns User
             */
            public static fromObject(d: { [k: string]: any }): user.v1.User;

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @param m User
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: user.v1.User, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this User to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CreateUserService. */
        interface ICreateUserService {
        }

        /** Represents a CreateUserService. */
        class CreateUserService {

            /**
             * Constructs a new CreateUserService.
             * @param [p] Properties to set
             */
            constructor(p?: user.v1.ICreateUserService);

            /**
             * Decodes a CreateUserService message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CreateUserService
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): user.v1.CreateUserService;

            /**
             * Creates a CreateUserService message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns CreateUserService
             */
            public static fromObject(d: { [k: string]: any }): user.v1.CreateUserService;

            /**
             * Creates a plain object from a CreateUserService message. Also converts values to other types if specified.
             * @param m CreateUserService
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: user.v1.CreateUserService, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateUserService to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace CreateUserService {

            /** Properties of a Request. */
            interface IRequest {

                /** Request user */
                user?: user.v1.IUser;
            }

            /** Represents a Request. */
            class Request {

                /**
                 * Constructs a new Request.
                 * @param [p] Properties to set
                 */
                constructor(p?: user.v1.CreateUserService.IRequest);

                /** Request user. */
                public user?: (user.v1.IUser|null);

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): user.v1.CreateUserService.Request;

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @param d Plain object
                 * @returns Request
                 */
                public static fromObject(d: { [k: string]: any }): user.v1.CreateUserService.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param m Request
                 * @param [o] Conversion options
                 * @returns Plain object
                 */
                public static toObject(m: user.v1.CreateUserService.Request, o?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GetUserService. */
        interface IGetUserService {
        }

        /** Represents a GetUserService. */
        class GetUserService {

            /**
             * Constructs a new GetUserService.
             * @param [p] Properties to set
             */
            constructor(p?: user.v1.IGetUserService);

            /**
             * Decodes a GetUserService message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns GetUserService
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): user.v1.GetUserService;

            /**
             * Creates a GetUserService message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns GetUserService
             */
            public static fromObject(d: { [k: string]: any }): user.v1.GetUserService;

            /**
             * Creates a plain object from a GetUserService message. Also converts values to other types if specified.
             * @param m GetUserService
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: user.v1.GetUserService, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetUserService to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GetUserService {

            /** Properties of a Request. */
            interface IRequest {

                /** Request id */
                id?: number;
            }

            /** Represents a Request. */
            class Request {

                /**
                 * Constructs a new Request.
                 * @param [p] Properties to set
                 */
                constructor(p?: user.v1.GetUserService.IRequest);

                /** Request id. */
                public id: number;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): user.v1.GetUserService.Request;

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @param d Plain object
                 * @returns Request
                 */
                public static fromObject(d: { [k: string]: any }): user.v1.GetUserService.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param m Request
                 * @param [o] Conversion options
                 * @returns Plain object
                 */
                public static toObject(m: user.v1.GetUserService.Request, o?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a LoginService. */
        interface ILoginService {
        }

        /** Represents a LoginService. */
        class LoginService {

            /**
             * Constructs a new LoginService.
             * @param [p] Properties to set
             */
            constructor(p?: user.v1.ILoginService);

            /**
             * Decodes a LoginService message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns LoginService
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): user.v1.LoginService;

            /**
             * Creates a LoginService message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns LoginService
             */
            public static fromObject(d: { [k: string]: any }): user.v1.LoginService;

            /**
             * Creates a plain object from a LoginService message. Also converts values to other types if specified.
             * @param m LoginService
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: user.v1.LoginService, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoginService to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace LoginService {

            /** Properties of a Response. */
            interface IResponse {

                /** Response token */
                token?: string;
            }

            /** Represents a Response. */
            class Response {

                /**
                 * Constructs a new Response.
                 * @param [p] Properties to set
                 */
                constructor(p?: user.v1.LoginService.IResponse);

                /** Response token. */
                public token: string;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): user.v1.LoginService.Response;

                /**
                 * Creates a Response message from a plain object. Also converts values to their respective internal types.
                 * @param d Plain object
                 * @returns Response
                 */
                public static fromObject(d: { [k: string]: any }): user.v1.LoginService.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param m Response
                 * @param [o] Conversion options
                 * @returns Plain object
                 */
                public static toObject(m: user.v1.LoginService.Response, o?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Represents a UserService */
        class UserService extends $protobuf.rpc.Service {

            /**
             * Constructs a new UserService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls CreateUser.
             * @param request Request message or plain object
             * @param callback Node-style callback called with the error, if any, and UserEntity
             */
            public createUser(request: user.v1.CreateUserService.IRequest, callback: user.v1.UserService.CreateUserCallback): void;

            /**
             * Calls CreateUser.
             * @param request Request message or plain object
             * @returns Promise
             */
            public createUser(request: user.v1.CreateUserService.IRequest): Promise<user.v1.UserEntity>;

            /**
             * Calls GetUser.
             * @param request Request message or plain object
             * @param callback Node-style callback called with the error, if any, and UserEntity
             */
            public getUser(request: user.v1.GetUserService.IRequest, callback: user.v1.UserService.GetUserCallback): void;

            /**
             * Calls GetUser.
             * @param request Request message or plain object
             * @returns Promise
             */
            public getUser(request: user.v1.GetUserService.IRequest): Promise<user.v1.UserEntity>;

            /**
             * Calls Login.
             * @param request Request message or plain object
             * @param callback Node-style callback called with the error, if any, and Response
             */
            public login(request: user.v1.CreateUserService.IRequest, callback: user.v1.UserService.LoginCallback): void;

            /**
             * Calls Login.
             * @param request Request message or plain object
             * @returns Promise
             */
            public login(request: user.v1.CreateUserService.IRequest): Promise<user.v1.LoginService.Response>;
        }

        namespace UserService {

            /**
             * Callback as used by {@link user.v1.UserService#createUser}.
             * @param error Error, if any
             * @param [response] UserEntity
             */
            type CreateUserCallback = (error: (Error|null), response?: user.v1.UserEntity) => void;

            /**
             * Callback as used by {@link user.v1.UserService#getUser}.
             * @param error Error, if any
             * @param [response] UserEntity
             */
            type GetUserCallback = (error: (Error|null), response?: user.v1.UserEntity) => void;

            /**
             * Callback as used by {@link user.v1.UserService#login}.
             * @param error Error, if any
             * @param [response] Response
             */
            type LoginCallback = (error: (Error|null), response?: user.v1.LoginService.Response) => void;
        }
    }
}
