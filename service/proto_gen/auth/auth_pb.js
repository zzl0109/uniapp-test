import * as $protobuf from "protobufjs";

// Common aliases
const $Reader = $protobuf.Reader, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const auth = $root.auth = (() => {

    /**
     * Namespace auth.
     * @exports auth
     * @namespace
     */
    const auth = {};

    auth.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof auth
         * @namespace
         */
        const v1 = {};

        /**
         * Gender enum.
         * @enum {string}
         * @property {number} gender_not_specified=0 gender_not_specified value
         * @property {number} male=1 male value
         * @property {number} female=2 female value
         */
        v1.Gender = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "gender_not_specified"] = 0;
            values[valuesById[1] = "male"] = 1;
            values[valuesById[2] = "female"] = 2;
            return values;
        })();

        v1.UserEntity = (function() {

            /**
             * Properties of a UserEntity.
             * @memberof auth.v1
             * @interface IUserEntity
             * @property {number} [id] UserEntity id
             * @property {auth.v1.IUser} [user] UserEntity user
             */

            /**
             * Constructs a new UserEntity.
             * @memberof auth.v1
             * @classdesc Represents a UserEntity.
             * @constructor
             * @param {auth.v1.IUserEntity=} [p] Properties to set
             */
            function UserEntity(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * UserEntity id.
             * @member {number}id
             * @memberof auth.v1.UserEntity
             * @instance
             */
            UserEntity.prototype.id = 0;

            /**
             * UserEntity user.
             * @member {(auth.v1.IUser|null|undefined)}user
             * @memberof auth.v1.UserEntity
             * @instance
             */
            UserEntity.prototype.user = null;

            /**
             * Decodes a UserEntity message from the specified reader or buffer.
             * @function decode
             * @memberof auth.v1.UserEntity
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {auth.v1.UserEntity} UserEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserEntity.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.auth.v1.UserEntity();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.id = r.int32();
                        break;
                    case 2:
                        m.user = $root.auth.v1.User.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a UserEntity message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof auth.v1.UserEntity
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {auth.v1.UserEntity} UserEntity
             */
            UserEntity.fromObject = function fromObject(d) {
                if (d instanceof $root.auth.v1.UserEntity)
                    return d;
                var m = new $root.auth.v1.UserEntity();
                if (d.id != null) {
                    m.id = d.id | 0;
                }
                if (d.user != null) {
                    if (typeof d.user !== "object")
                        throw TypeError(".auth.v1.UserEntity.user: object expected");
                    m.user = $root.auth.v1.User.fromObject(d.user);
                }
                return m;
            };

            /**
             * Creates a plain object from a UserEntity message. Also converts values to other types if specified.
             * @function toObject
             * @memberof auth.v1.UserEntity
             * @static
             * @param {auth.v1.UserEntity} m UserEntity
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserEntity.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.id = 0;
                    d.user = null;
                }
                if (m.id != null && m.hasOwnProperty("id")) {
                    d.id = m.id;
                }
                if (m.user != null && m.hasOwnProperty("user")) {
                    d.user = $root.auth.v1.User.toObject(m.user, o);
                }
                return d;
            };

            /**
             * Converts this UserEntity to JSON.
             * @function toJSON
             * @memberof auth.v1.UserEntity
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserEntity.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UserEntity;
        })();

        v1.User = (function() {

            /**
             * Properties of a User.
             * @memberof auth.v1
             * @interface IUser
             * @property {string} [name] User name
             * @property {auth.v1.Gender} [gender] User gender
             * @property {string} [token] User token
             */

            /**
             * Constructs a new User.
             * @memberof auth.v1
             * @classdesc Represents a User.
             * @constructor
             * @param {auth.v1.IUser=} [p] Properties to set
             */
            function User(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * User name.
             * @member {string}name
             * @memberof auth.v1.User
             * @instance
             */
            User.prototype.name = "";

            /**
             * User gender.
             * @member {auth.v1.Gender}gender
             * @memberof auth.v1.User
             * @instance
             */
            User.prototype.gender = 0;

            /**
             * User token.
             * @member {string}token
             * @memberof auth.v1.User
             * @instance
             */
            User.prototype.token = "";

            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof auth.v1.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {auth.v1.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.auth.v1.User();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.name = r.string();
                        break;
                    case 2:
                        m.gender = r.int32();
                        break;
                    case 3:
                        m.token = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof auth.v1.User
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {auth.v1.User} User
             */
            User.fromObject = function fromObject(d) {
                if (d instanceof $root.auth.v1.User)
                    return d;
                var m = new $root.auth.v1.User();
                if (d.name != null) {
                    m.name = String(d.name);
                }
                switch (d.gender) {
                case "gender_not_specified":
                case 0:
                    m.gender = 0;
                    break;
                case "male":
                case 1:
                    m.gender = 1;
                    break;
                case "female":
                case 2:
                    m.gender = 2;
                    break;
                }
                if (d.token != null) {
                    m.token = String(d.token);
                }
                return m;
            };

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof auth.v1.User
             * @static
             * @param {auth.v1.User} m User
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.name = "";
                    d.gender = o.enums === String ? "gender_not_specified" : 0;
                    d.token = "";
                }
                if (m.name != null && m.hasOwnProperty("name")) {
                    d.name = m.name;
                }
                if (m.gender != null && m.hasOwnProperty("gender")) {
                    d.gender = o.enums === String ? $root.auth.v1.Gender[m.gender] : m.gender;
                }
                if (m.token != null && m.hasOwnProperty("token")) {
                    d.token = m.token;
                }
                return d;
            };

            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof auth.v1.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return User;
        })();

        v1.LoginService = (function() {

            /**
             * Properties of a LoginService.
             * @memberof auth.v1
             * @interface ILoginService
             */

            /**
             * Constructs a new LoginService.
             * @memberof auth.v1
             * @classdesc Represents a LoginService.
             * @constructor
             * @param {auth.v1.ILoginService=} [p] Properties to set
             */
            function LoginService(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * Decodes a LoginService message from the specified reader or buffer.
             * @function decode
             * @memberof auth.v1.LoginService
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {auth.v1.LoginService} LoginService
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginService.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.auth.v1.LoginService();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a LoginService message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof auth.v1.LoginService
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {auth.v1.LoginService} LoginService
             */
            LoginService.fromObject = function fromObject(d) {
                if (d instanceof $root.auth.v1.LoginService)
                    return d;
                return new $root.auth.v1.LoginService();
            };

            /**
             * Creates a plain object from a LoginService message. Also converts values to other types if specified.
             * @function toObject
             * @memberof auth.v1.LoginService
             * @static
             * @param {auth.v1.LoginService} m LoginService
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginService.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this LoginService to JSON.
             * @function toJSON
             * @memberof auth.v1.LoginService
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginService.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            LoginService.Request = (function() {

                /**
                 * Properties of a Request.
                 * @memberof auth.v1.LoginService
                 * @interface IRequest
                 * @property {auth.v1.IUser} [user] Request user
                 */

                /**
                 * Constructs a new Request.
                 * @memberof auth.v1.LoginService
                 * @classdesc Represents a Request.
                 * @constructor
                 * @param {auth.v1.LoginService.IRequest=} [p] Properties to set
                 */
                function Request(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * Request user.
                 * @member {(auth.v1.IUser|null|undefined)}user
                 * @memberof auth.v1.LoginService.Request
                 * @instance
                 */
                Request.prototype.user = null;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.v1.LoginService.Request
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {auth.v1.LoginService.Request} Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Request.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.auth.v1.LoginService.Request();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.user = $root.auth.v1.User.decode(r, r.uint32());
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.v1.LoginService.Request
                 * @static
                 * @param {Object.<string,*>} d Plain object
                 * @returns {auth.v1.LoginService.Request} Request
                 */
                Request.fromObject = function fromObject(d) {
                    if (d instanceof $root.auth.v1.LoginService.Request)
                        return d;
                    var m = new $root.auth.v1.LoginService.Request();
                    if (d.user != null) {
                        if (typeof d.user !== "object")
                            throw TypeError(".auth.v1.LoginService.Request.user: object expected");
                        m.user = $root.auth.v1.User.fromObject(d.user);
                    }
                    return m;
                };

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.v1.LoginService.Request
                 * @static
                 * @param {auth.v1.LoginService.Request} m Request
                 * @param {$protobuf.IConversionOptions} [o] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Request.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (o.defaults) {
                        d.user = null;
                    }
                    if (m.user != null && m.hasOwnProperty("user")) {
                        d.user = $root.auth.v1.User.toObject(m.user, o);
                    }
                    return d;
                };

                /**
                 * Converts this Request to JSON.
                 * @function toJSON
                 * @memberof auth.v1.LoginService.Request
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Request.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Request;
            })();

            LoginService.Response = (function() {

                /**
                 * Properties of a Response.
                 * @memberof auth.v1.LoginService
                 * @interface IResponse
                 * @property {string} [token] Response token
                 */

                /**
                 * Constructs a new Response.
                 * @memberof auth.v1.LoginService
                 * @classdesc Represents a Response.
                 * @constructor
                 * @param {auth.v1.LoginService.IResponse=} [p] Properties to set
                 */
                function Response(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * Response token.
                 * @member {string}token
                 * @memberof auth.v1.LoginService.Response
                 * @instance
                 */
                Response.prototype.token = "";

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @function decode
                 * @memberof auth.v1.LoginService.Response
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {auth.v1.LoginService.Response} Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Response.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.auth.v1.LoginService.Response();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.token = r.string();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                /**
                 * Creates a Response message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof auth.v1.LoginService.Response
                 * @static
                 * @param {Object.<string,*>} d Plain object
                 * @returns {auth.v1.LoginService.Response} Response
                 */
                Response.fromObject = function fromObject(d) {
                    if (d instanceof $root.auth.v1.LoginService.Response)
                        return d;
                    var m = new $root.auth.v1.LoginService.Response();
                    if (d.token != null) {
                        m.token = String(d.token);
                    }
                    return m;
                };

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof auth.v1.LoginService.Response
                 * @static
                 * @param {auth.v1.LoginService.Response} m Response
                 * @param {$protobuf.IConversionOptions} [o] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Response.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (o.defaults) {
                        d.token = "";
                    }
                    if (m.token != null && m.hasOwnProperty("token")) {
                        d.token = m.token;
                    }
                    return d;
                };

                /**
                 * Converts this Response to JSON.
                 * @function toJSON
                 * @memberof auth.v1.LoginService.Response
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Response.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Response;
            })();

            return LoginService;
        })();

        v1.AuthService = (function() {

            /**
             * Constructs a new AuthService service.
             * @memberof auth.v1
             * @classdesc Represents an AuthService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function AuthService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (AuthService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AuthService;

            /**
             * Callback as used by {@link auth.v1.AuthService#login}.
             * @memberof auth.v1.AuthService
             * @typedef LoginCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {auth.v1.LoginService.Response} [response] Response
             */

            /**
             * Calls Login.
             * @function .login
             * @memberof auth.v1.AuthService
             * @instance
             * @param {auth.v1.LoginService.IRequest} request Request message or plain object
             * @param {auth.v1.AuthService.LoginCallback} callback Node-style callback called with the error, if any, and Response
             * @returns {undefined}
             * @variation 1
             */
            AuthService.prototype.login = function login(request, callback) {
                return this.rpcCall(login, $root.auth.v1.LoginService.Request, $root.auth.v1.LoginService.Response, request, callback);
            };

            /**
             * Calls Login.
             * @function login
             * @memberof auth.v1.AuthService
             * @instance
             * @param {auth.v1.LoginService.IRequest} request Request message or plain object
             * @returns {Promise<auth.v1.LoginService.Response>} Promise
             * @variation 2
             */

            return AuthService;
        })();

        return v1;
    })();

    return auth;
})();