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
            }

            /** Represents a Request. */
            class Request {

                /**
                 * Constructs a new Request.
                 * @param [p] Properties to set
                 */
                constructor(p?: user.v1.GetUserService.IRequest);

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
        }

        namespace UserService {

            /**
             * Callback as used by {@link user.v1.UserService#getUser}.
             * @param error Error, if any
             * @param [response] UserEntity
             */
            type GetUserCallback = (error: (Error|null), response?: user.v1.UserEntity) => void;
        }
    }
}
