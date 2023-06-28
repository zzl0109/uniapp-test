import * as $protobuf from "protobufjs";

/** Namespace auth. */
export namespace auth {

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
            user?: auth.v1.IUser;
        }

        /** Represents a UserEntity. */
        class UserEntity {

            /**
             * Constructs a new UserEntity.
             * @param [p] Properties to set
             */
            constructor(p?: auth.v1.IUserEntity);

            /** UserEntity id. */
            public id: number;

            /** UserEntity user. */
            public user?: (auth.v1.IUser|null);

            /**
             * Decodes a UserEntity message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns UserEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): auth.v1.UserEntity;

            /**
             * Creates a UserEntity message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns UserEntity
             */
            public static fromObject(d: { [k: string]: any }): auth.v1.UserEntity;

            /**
             * Creates a plain object from a UserEntity message. Also converts values to other types if specified.
             * @param m UserEntity
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: auth.v1.UserEntity, o?: $protobuf.IConversionOptions): { [k: string]: any };

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
            gender?: auth.v1.Gender;

            /** User token */
            token?: string;
        }

        /** Represents a User. */
        class User {

            /**
             * Constructs a new User.
             * @param [p] Properties to set
             */
            constructor(p?: auth.v1.IUser);

            /** User name. */
            public name: string;

            /** User gender. */
            public gender: auth.v1.Gender;

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
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): auth.v1.User;

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns User
             */
            public static fromObject(d: { [k: string]: any }): auth.v1.User;

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @param m User
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: auth.v1.User, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this User to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
            constructor(p?: auth.v1.ILoginService);

            /**
             * Decodes a LoginService message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns LoginService
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): auth.v1.LoginService;

            /**
             * Creates a LoginService message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns LoginService
             */
            public static fromObject(d: { [k: string]: any }): auth.v1.LoginService;

            /**
             * Creates a plain object from a LoginService message. Also converts values to other types if specified.
             * @param m LoginService
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(m: auth.v1.LoginService, o?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoginService to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace LoginService {

            /** Properties of a Request. */
            interface IRequest {

                /** Request user */
                user?: auth.v1.IUser;
            }

            /** Represents a Request. */
            class Request {

                /**
                 * Constructs a new Request.
                 * @param [p] Properties to set
                 */
                constructor(p?: auth.v1.LoginService.IRequest);

                /** Request user. */
                public user?: (auth.v1.IUser|null);

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): auth.v1.LoginService.Request;

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @param d Plain object
                 * @returns Request
                 */
                public static fromObject(d: { [k: string]: any }): auth.v1.LoginService.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param m Request
                 * @param [o] Conversion options
                 * @returns Plain object
                 */
                public static toObject(m: auth.v1.LoginService.Request, o?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

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
                constructor(p?: auth.v1.LoginService.IResponse);

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
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): auth.v1.LoginService.Response;

                /**
                 * Creates a Response message from a plain object. Also converts values to their respective internal types.
                 * @param d Plain object
                 * @returns Response
                 */
                public static fromObject(d: { [k: string]: any }): auth.v1.LoginService.Response;

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @param m Response
                 * @param [o] Conversion options
                 * @returns Plain object
                 */
                public static toObject(m: auth.v1.LoginService.Response, o?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Response to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Represents an AuthService */
        class AuthService extends $protobuf.rpc.Service {

            /**
             * Constructs a new AuthService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls Login.
             * @param request Request message or plain object
             * @param callback Node-style callback called with the error, if any, and Response
             */
            public login(request: auth.v1.LoginService.IRequest, callback: auth.v1.AuthService.LoginCallback): void;

            /**
             * Calls Login.
             * @param request Request message or plain object
             * @returns Promise
             */
            public login(request: auth.v1.LoginService.IRequest): Promise<auth.v1.LoginService.Response>;
        }

        namespace AuthService {

            /**
             * Callback as used by {@link auth.v1.AuthService#login}.
             * @param error Error, if any
             * @param [response] Response
             */
            type LoginCallback = (error: (Error|null), response?: auth.v1.LoginService.Response) => void;
        }
    }
}
