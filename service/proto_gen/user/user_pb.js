import * as $protobuf from "protobufjs";

// Common aliases
const $Reader = $protobuf.Reader, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const user = $root.user = (() => {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    const user = {};

    user.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof user
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
             * @memberof user.v1
             * @interface IUserEntity
             * @property {number} [id] UserEntity id
             * @property {user.v1.IUser} [user] UserEntity user
             */

            /**
             * Constructs a new UserEntity.
             * @memberof user.v1
             * @classdesc Represents a UserEntity.
             * @constructor
             * @param {user.v1.IUserEntity=} [p] Properties to set
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
             * @memberof user.v1.UserEntity
             * @instance
             */
            UserEntity.prototype.id = 0;

            /**
             * UserEntity user.
             * @member {(user.v1.IUser|null|undefined)}user
             * @memberof user.v1.UserEntity
             * @instance
             */
            UserEntity.prototype.user = null;

            /**
             * Decodes a UserEntity message from the specified reader or buffer.
             * @function decode
             * @memberof user.v1.UserEntity
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {user.v1.UserEntity} UserEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserEntity.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.user.v1.UserEntity();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.id = r.int32();
                        break;
                    case 2:
                        m.user = $root.user.v1.User.decode(r, r.uint32());
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
             * @memberof user.v1.UserEntity
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {user.v1.UserEntity} UserEntity
             */
            UserEntity.fromObject = function fromObject(d) {
                if (d instanceof $root.user.v1.UserEntity)
                    return d;
                var m = new $root.user.v1.UserEntity();
                if (d.id != null) {
                    m.id = d.id | 0;
                }
                if (d.user != null) {
                    if (typeof d.user !== "object")
                        throw TypeError(".user.v1.UserEntity.user: object expected");
                    m.user = $root.user.v1.User.fromObject(d.user);
                }
                return m;
            };

            /**
             * Creates a plain object from a UserEntity message. Also converts values to other types if specified.
             * @function toObject
             * @memberof user.v1.UserEntity
             * @static
             * @param {user.v1.UserEntity} m UserEntity
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
                    d.user = $root.user.v1.User.toObject(m.user, o);
                }
                return d;
            };

            /**
             * Converts this UserEntity to JSON.
             * @function toJSON
             * @memberof user.v1.UserEntity
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
             * @memberof user.v1
             * @interface IUser
             * @property {string} [name] User name
             * @property {user.v1.Gender} [gender] User gender
             * @property {string} [token] User token
             */

            /**
             * Constructs a new User.
             * @memberof user.v1
             * @classdesc Represents a User.
             * @constructor
             * @param {user.v1.IUser=} [p] Properties to set
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
             * @memberof user.v1.User
             * @instance
             */
            User.prototype.name = "";

            /**
             * User gender.
             * @member {user.v1.Gender}gender
             * @memberof user.v1.User
             * @instance
             */
            User.prototype.gender = 0;

            /**
             * User token.
             * @member {string}token
             * @memberof user.v1.User
             * @instance
             */
            User.prototype.token = "";

            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof user.v1.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {user.v1.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.user.v1.User();
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
             * @memberof user.v1.User
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {user.v1.User} User
             */
            User.fromObject = function fromObject(d) {
                if (d instanceof $root.user.v1.User)
                    return d;
                var m = new $root.user.v1.User();
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
             * @memberof user.v1.User
             * @static
             * @param {user.v1.User} m User
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
                    d.gender = o.enums === String ? $root.user.v1.Gender[m.gender] : m.gender;
                }
                if (m.token != null && m.hasOwnProperty("token")) {
                    d.token = m.token;
                }
                return d;
            };

            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof user.v1.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return User;
        })();

        v1.GetUserService = (function() {

            /**
             * Properties of a GetUserService.
             * @memberof user.v1
             * @interface IGetUserService
             */

            /**
             * Constructs a new GetUserService.
             * @memberof user.v1
             * @classdesc Represents a GetUserService.
             * @constructor
             * @param {user.v1.IGetUserService=} [p] Properties to set
             */
            function GetUserService(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * Decodes a GetUserService message from the specified reader or buffer.
             * @function decode
             * @memberof user.v1.GetUserService
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {user.v1.GetUserService} GetUserService
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUserService.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.user.v1.GetUserService();
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
             * Creates a GetUserService message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof user.v1.GetUserService
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {user.v1.GetUserService} GetUserService
             */
            GetUserService.fromObject = function fromObject(d) {
                if (d instanceof $root.user.v1.GetUserService)
                    return d;
                return new $root.user.v1.GetUserService();
            };

            /**
             * Creates a plain object from a GetUserService message. Also converts values to other types if specified.
             * @function toObject
             * @memberof user.v1.GetUserService
             * @static
             * @param {user.v1.GetUserService} m GetUserService
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetUserService.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this GetUserService to JSON.
             * @function toJSON
             * @memberof user.v1.GetUserService
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetUserService.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GetUserService.Request = (function() {

                /**
                 * Properties of a Request.
                 * @memberof user.v1.GetUserService
                 * @interface IRequest
                 */

                /**
                 * Constructs a new Request.
                 * @memberof user.v1.GetUserService
                 * @classdesc Represents a Request.
                 * @constructor
                 * @param {user.v1.GetUserService.IRequest=} [p] Properties to set
                 */
                function Request(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @function decode
                 * @memberof user.v1.GetUserService.Request
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {user.v1.GetUserService.Request} Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Request.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.user.v1.GetUserService.Request();
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
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof user.v1.GetUserService.Request
                 * @static
                 * @param {Object.<string,*>} d Plain object
                 * @returns {user.v1.GetUserService.Request} Request
                 */
                Request.fromObject = function fromObject(d) {
                    if (d instanceof $root.user.v1.GetUserService.Request)
                        return d;
                    return new $root.user.v1.GetUserService.Request();
                };

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof user.v1.GetUserService.Request
                 * @static
                 * @param {user.v1.GetUserService.Request} m Request
                 * @param {$protobuf.IConversionOptions} [o] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Request.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this Request to JSON.
                 * @function toJSON
                 * @memberof user.v1.GetUserService.Request
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Request.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Request;
            })();

            return GetUserService;
        })();

        v1.UserService = (function() {

            /**
             * Constructs a new UserService service.
             * @memberof user.v1
             * @classdesc Represents a UserService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function UserService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (UserService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UserService;

            /**
             * Callback as used by {@link user.v1.UserService#getUser}.
             * @memberof user.v1.UserService
             * @typedef GetUserCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {user.v1.UserEntity} [response] UserEntity
             */

            /**
             * Calls GetUser.
             * @function .getUser
             * @memberof user.v1.UserService
             * @instance
             * @param {user.v1.GetUserService.IRequest} request Request message or plain object
             * @param {user.v1.UserService.GetUserCallback} callback Node-style callback called with the error, if any, and UserEntity
             * @returns {undefined}
             * @variation 1
             */
            UserService.prototype.getUser = function getUser(request, callback) {
                return this.rpcCall(getUser, $root.user.v1.GetUserService.Request, $root.user.v1.UserEntity, request, callback);
            };

            /**
             * Calls GetUser.
             * @function getUser
             * @memberof user.v1.UserService
             * @instance
             * @param {user.v1.GetUserService.IRequest} request Request message or plain object
             * @returns {Promise<user.v1.UserEntity>} Promise
             * @variation 2
             */

            return UserService;
        })();

        return v1;
    })();

    return user;
})();