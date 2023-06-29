import * as $protobuf from "protobufjs";

// Common aliases
const $Reader = $protobuf.Reader, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const message = $root.message = (() => {

    /**
     * Namespace message.
     * @exports message
     * @namespace
     */
    const message = {};

    message.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof message
         * @namespace
         */
        const v1 = {};

        v1.StreamMessageRequest = (function() {

            /**
             * Properties of a StreamMessageRequest.
             * @memberof message.v1
             * @interface IStreamMessageRequest
             * @property {string} [name] StreamMessageRequest name
             */

            /**
             * Constructs a new StreamMessageRequest.
             * @memberof message.v1
             * @classdesc Represents a StreamMessageRequest.
             * @constructor
             * @param {message.v1.IStreamMessageRequest=} [p] Properties to set
             */
            function StreamMessageRequest(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * StreamMessageRequest name.
             * @member {string}name
             * @memberof message.v1.StreamMessageRequest
             * @instance
             */
            StreamMessageRequest.prototype.name = "";

            /**
             * Decodes a StreamMessageRequest message from the specified reader or buffer.
             * @function decode
             * @memberof message.v1.StreamMessageRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {message.v1.StreamMessageRequest} StreamMessageRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StreamMessageRequest.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.StreamMessageRequest();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.name = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a StreamMessageRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.v1.StreamMessageRequest
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {message.v1.StreamMessageRequest} StreamMessageRequest
             */
            StreamMessageRequest.fromObject = function fromObject(d) {
                if (d instanceof $root.message.v1.StreamMessageRequest)
                    return d;
                var m = new $root.message.v1.StreamMessageRequest();
                if (d.name != null) {
                    m.name = String(d.name);
                }
                return m;
            };

            /**
             * Creates a plain object from a StreamMessageRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.v1.StreamMessageRequest
             * @static
             * @param {message.v1.StreamMessageRequest} m StreamMessageRequest
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StreamMessageRequest.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.name = "";
                }
                if (m.name != null && m.hasOwnProperty("name")) {
                    d.name = m.name;
                }
                return d;
            };

            /**
             * Converts this StreamMessageRequest to JSON.
             * @function toJSON
             * @memberof message.v1.StreamMessageRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StreamMessageRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StreamMessageRequest;
        })();

        v1.StreamMessageResponse = (function() {

            /**
             * Properties of a StreamMessageResponse.
             * @memberof message.v1
             * @interface IStreamMessageResponse
             * @property {string} [message] StreamMessageResponse message
             */

            /**
             * Constructs a new StreamMessageResponse.
             * @memberof message.v1
             * @classdesc Represents a StreamMessageResponse.
             * @constructor
             * @param {message.v1.IStreamMessageResponse=} [p] Properties to set
             */
            function StreamMessageResponse(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * StreamMessageResponse message.
             * @member {string}message
             * @memberof message.v1.StreamMessageResponse
             * @instance
             */
            StreamMessageResponse.prototype.message = "";

            /**
             * Decodes a StreamMessageResponse message from the specified reader or buffer.
             * @function decode
             * @memberof message.v1.StreamMessageResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {message.v1.StreamMessageResponse} StreamMessageResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StreamMessageResponse.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.StreamMessageResponse();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.message = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a StreamMessageResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.v1.StreamMessageResponse
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {message.v1.StreamMessageResponse} StreamMessageResponse
             */
            StreamMessageResponse.fromObject = function fromObject(d) {
                if (d instanceof $root.message.v1.StreamMessageResponse)
                    return d;
                var m = new $root.message.v1.StreamMessageResponse();
                if (d.message != null) {
                    m.message = String(d.message);
                }
                return m;
            };

            /**
             * Creates a plain object from a StreamMessageResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.v1.StreamMessageResponse
             * @static
             * @param {message.v1.StreamMessageResponse} m StreamMessageResponse
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StreamMessageResponse.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.message = "";
                }
                if (m.message != null && m.hasOwnProperty("message")) {
                    d.message = m.message;
                }
                return d;
            };

            /**
             * Converts this StreamMessageResponse to JSON.
             * @function toJSON
             * @memberof message.v1.StreamMessageResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StreamMessageResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StreamMessageResponse;
        })();

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

        v1.User = (function() {

            /**
             * Properties of a User.
             * @memberof message.v1
             * @interface IUser
             * @property {string} [name] User name
             * @property {message.v1.Gender} [gender] User gender
             * @property {string} [token] User token
             */

            /**
             * Constructs a new User.
             * @memberof message.v1
             * @classdesc Represents a User.
             * @constructor
             * @param {message.v1.IUser=} [p] Properties to set
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
             * @memberof message.v1.User
             * @instance
             */
            User.prototype.name = "";

            /**
             * User gender.
             * @member {message.v1.Gender}gender
             * @memberof message.v1.User
             * @instance
             */
            User.prototype.gender = 0;

            /**
             * User token.
             * @member {string}token
             * @memberof message.v1.User
             * @instance
             */
            User.prototype.token = "";

            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof message.v1.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {message.v1.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.User();
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
             * @memberof message.v1.User
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {message.v1.User} User
             */
            User.fromObject = function fromObject(d) {
                if (d instanceof $root.message.v1.User)
                    return d;
                var m = new $root.message.v1.User();
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
             * @memberof message.v1.User
             * @static
             * @param {message.v1.User} m User
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
                    d.gender = o.enums === String ? $root.message.v1.Gender[m.gender] : m.gender;
                }
                if (m.token != null && m.hasOwnProperty("token")) {
                    d.token = m.token;
                }
                return d;
            };

            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof message.v1.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return User;
        })();

        v1.UserEntity = (function() {

            /**
             * Properties of a UserEntity.
             * @memberof message.v1
             * @interface IUserEntity
             * @property {number} [id] UserEntity id
             * @property {message.v1.IUser} [user] UserEntity user
             */

            /**
             * Constructs a new UserEntity.
             * @memberof message.v1
             * @classdesc Represents a UserEntity.
             * @constructor
             * @param {message.v1.IUserEntity=} [p] Properties to set
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
             * @memberof message.v1.UserEntity
             * @instance
             */
            UserEntity.prototype.id = 0;

            /**
             * UserEntity user.
             * @member {(message.v1.IUser|null|undefined)}user
             * @memberof message.v1.UserEntity
             * @instance
             */
            UserEntity.prototype.user = null;

            /**
             * Decodes a UserEntity message from the specified reader or buffer.
             * @function decode
             * @memberof message.v1.UserEntity
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {message.v1.UserEntity} UserEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserEntity.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.UserEntity();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.id = r.int32();
                        break;
                    case 2:
                        m.user = $root.message.v1.User.decode(r, r.uint32());
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
             * @memberof message.v1.UserEntity
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {message.v1.UserEntity} UserEntity
             */
            UserEntity.fromObject = function fromObject(d) {
                if (d instanceof $root.message.v1.UserEntity)
                    return d;
                var m = new $root.message.v1.UserEntity();
                if (d.id != null) {
                    m.id = d.id | 0;
                }
                if (d.user != null) {
                    if (typeof d.user !== "object")
                        throw TypeError(".message.v1.UserEntity.user: object expected");
                    m.user = $root.message.v1.User.fromObject(d.user);
                }
                return m;
            };

            /**
             * Creates a plain object from a UserEntity message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.v1.UserEntity
             * @static
             * @param {message.v1.UserEntity} m UserEntity
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
                    d.user = $root.message.v1.User.toObject(m.user, o);
                }
                return d;
            };

            /**
             * Converts this UserEntity to JSON.
             * @function toJSON
             * @memberof message.v1.UserEntity
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserEntity.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return UserEntity;
        })();

        v1.Message = (function() {

            /**
             * Properties of a Message.
             * @memberof message.v1
             * @interface IMessage
             * @property {number} [id] Message id
             * @property {string} [content] Message content
             * @property {number} [sender_id] Message sender_id
             * @property {number} [send_time_second] Message send_time_second
             * @property {message.v1.IUserEntity} [sender_info] Message sender_info
             */

            /**
             * Constructs a new Message.
             * @memberof message.v1
             * @classdesc Represents a Message.
             * @constructor
             * @param {message.v1.IMessage=} [p] Properties to set
             */
            function Message(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * Message id.
             * @member {number}id
             * @memberof message.v1.Message
             * @instance
             */
            Message.prototype.id = 0;

            /**
             * Message content.
             * @member {string}content
             * @memberof message.v1.Message
             * @instance
             */
            Message.prototype.content = "";

            /**
             * Message sender_id.
             * @member {number}sender_id
             * @memberof message.v1.Message
             * @instance
             */
            Message.prototype.sender_id = 0;

            /**
             * Message send_time_second.
             * @member {number}send_time_second
             * @memberof message.v1.Message
             * @instance
             */
            Message.prototype.send_time_second = 0;

            /**
             * Message sender_info.
             * @member {(message.v1.IUserEntity|null|undefined)}sender_info
             * @memberof message.v1.Message
             * @instance
             */
            Message.prototype.sender_info = null;

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @function decode
             * @memberof message.v1.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {message.v1.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.Message();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.id = r.int32();
                        break;
                    case 2:
                        m.content = r.string();
                        break;
                    case 3:
                        m.sender_id = r.int32();
                        break;
                    case 4:
                        m.send_time_second = r.int32();
                        break;
                    case 5:
                        m.sender_info = $root.message.v1.UserEntity.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.v1.Message
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {message.v1.Message} Message
             */
            Message.fromObject = function fromObject(d) {
                if (d instanceof $root.message.v1.Message)
                    return d;
                var m = new $root.message.v1.Message();
                if (d.id != null) {
                    m.id = d.id | 0;
                }
                if (d.content != null) {
                    m.content = String(d.content);
                }
                if (d.sender_id != null) {
                    m.sender_id = d.sender_id | 0;
                }
                if (d.send_time_second != null) {
                    m.send_time_second = d.send_time_second | 0;
                }
                if (d.sender_info != null) {
                    if (typeof d.sender_info !== "object")
                        throw TypeError(".message.v1.Message.sender_info: object expected");
                    m.sender_info = $root.message.v1.UserEntity.fromObject(d.sender_info);
                }
                return m;
            };

            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.v1.Message
             * @static
             * @param {message.v1.Message} m Message
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Message.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.id = 0;
                    d.content = "";
                    d.sender_id = 0;
                    d.send_time_second = 0;
                    d.sender_info = null;
                }
                if (m.id != null && m.hasOwnProperty("id")) {
                    d.id = m.id;
                }
                if (m.content != null && m.hasOwnProperty("content")) {
                    d.content = m.content;
                }
                if (m.sender_id != null && m.hasOwnProperty("sender_id")) {
                    d.sender_id = m.sender_id;
                }
                if (m.send_time_second != null && m.hasOwnProperty("send_time_second")) {
                    d.send_time_second = m.send_time_second;
                }
                if (m.sender_info != null && m.hasOwnProperty("sender_info")) {
                    d.sender_info = $root.message.v1.UserEntity.toObject(m.sender_info, o);
                }
                return d;
            };

            /**
             * Converts this Message to JSON.
             * @function toJSON
             * @memberof message.v1.Message
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Message.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Message;
        })();

        /**
         * SessionType enum.
         * @enum {string}
         * @property {number} session_type_not_specified=0 session_type_not_specified value
         * @property {number} private=1 private value
         * @property {number} group=2 group value
         */
        v1.SessionType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "session_type_not_specified"] = 0;
            values[valuesById[1] = "private"] = 1;
            values[valuesById[2] = "group"] = 2;
            return values;
        })();

        /**
         * MessageQueryDirection enum.
         * @enum {string}
         * @property {number} not_specified=0 not_specified value
         * @property {number} before=1 before value
         * @property {number} after=2 after value
         */
        v1.MessageQueryDirection = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "not_specified"] = 0;
            values[valuesById[1] = "before"] = 1;
            values[valuesById[2] = "after"] = 2;
            return values;
        })();

        v1.GetMessageListService = (function() {

            /**
             * Properties of a GetMessageListService.
             * @memberof message.v1
             * @interface IGetMessageListService
             */

            /**
             * Constructs a new GetMessageListService.
             * @memberof message.v1
             * @classdesc Represents a GetMessageListService.
             * @constructor
             * @param {message.v1.IGetMessageListService=} [p] Properties to set
             */
            function GetMessageListService(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * Decodes a GetMessageListService message from the specified reader or buffer.
             * @function decode
             * @memberof message.v1.GetMessageListService
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {message.v1.GetMessageListService} GetMessageListService
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMessageListService.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.GetMessageListService();
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
             * Creates a GetMessageListService message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.v1.GetMessageListService
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {message.v1.GetMessageListService} GetMessageListService
             */
            GetMessageListService.fromObject = function fromObject(d) {
                if (d instanceof $root.message.v1.GetMessageListService)
                    return d;
                return new $root.message.v1.GetMessageListService();
            };

            /**
             * Creates a plain object from a GetMessageListService message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.v1.GetMessageListService
             * @static
             * @param {message.v1.GetMessageListService} m GetMessageListService
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetMessageListService.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this GetMessageListService to JSON.
             * @function toJSON
             * @memberof message.v1.GetMessageListService
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetMessageListService.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GetMessageListService.Request = (function() {

                /**
                 * Properties of a Request.
                 * @memberof message.v1.GetMessageListService
                 * @interface IRequest
                 * @property {number} [session_id] Request session_id
                 * @property {number} [message_id] Request message_id
                 * @property {message.v1.MessageQueryDirection} [direction] Request direction
                 */

                /**
                 * Constructs a new Request.
                 * @memberof message.v1.GetMessageListService
                 * @classdesc Represents a Request.
                 * @constructor
                 * @param {message.v1.GetMessageListService.IRequest=} [p] Properties to set
                 */
                function Request(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * Request session_id.
                 * @member {number}session_id
                 * @memberof message.v1.GetMessageListService.Request
                 * @instance
                 */
                Request.prototype.session_id = 0;

                /**
                 * Request message_id.
                 * @member {number}message_id
                 * @memberof message.v1.GetMessageListService.Request
                 * @instance
                 */
                Request.prototype.message_id = 0;

                /**
                 * Request direction.
                 * @member {message.v1.MessageQueryDirection}direction
                 * @memberof message.v1.GetMessageListService.Request
                 * @instance
                 */
                Request.prototype.direction = 0;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @function decode
                 * @memberof message.v1.GetMessageListService.Request
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {message.v1.GetMessageListService.Request} Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Request.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.GetMessageListService.Request();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.session_id = r.int32();
                            break;
                        case 2:
                            m.message_id = r.int32();
                            break;
                        case 3:
                            m.direction = r.int32();
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
                 * @memberof message.v1.GetMessageListService.Request
                 * @static
                 * @param {Object.<string,*>} d Plain object
                 * @returns {message.v1.GetMessageListService.Request} Request
                 */
                Request.fromObject = function fromObject(d) {
                    if (d instanceof $root.message.v1.GetMessageListService.Request)
                        return d;
                    var m = new $root.message.v1.GetMessageListService.Request();
                    if (d.session_id != null) {
                        m.session_id = d.session_id | 0;
                    }
                    if (d.message_id != null) {
                        m.message_id = d.message_id | 0;
                    }
                    switch (d.direction) {
                    case "not_specified":
                    case 0:
                        m.direction = 0;
                        break;
                    case "before":
                    case 1:
                        m.direction = 1;
                        break;
                    case "after":
                    case 2:
                        m.direction = 2;
                        break;
                    }
                    return m;
                };

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof message.v1.GetMessageListService.Request
                 * @static
                 * @param {message.v1.GetMessageListService.Request} m Request
                 * @param {$protobuf.IConversionOptions} [o] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Request.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (o.defaults) {
                        d.session_id = 0;
                        d.message_id = 0;
                        d.direction = o.enums === String ? "not_specified" : 0;
                    }
                    if (m.session_id != null && m.hasOwnProperty("session_id")) {
                        d.session_id = m.session_id;
                    }
                    if (m.message_id != null && m.hasOwnProperty("message_id")) {
                        d.message_id = m.message_id;
                    }
                    if (m.direction != null && m.hasOwnProperty("direction")) {
                        d.direction = o.enums === String ? $root.message.v1.MessageQueryDirection[m.direction] : m.direction;
                    }
                    return d;
                };

                /**
                 * Converts this Request to JSON.
                 * @function toJSON
                 * @memberof message.v1.GetMessageListService.Request
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Request.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Request;
            })();

            GetMessageListService.Response = (function() {

                /**
                 * Properties of a Response.
                 * @memberof message.v1.GetMessageListService
                 * @interface IResponse
                 * @property {Array.<message.v1.IMessage>} [message_list] Response message_list
                 */

                /**
                 * Constructs a new Response.
                 * @memberof message.v1.GetMessageListService
                 * @classdesc Represents a Response.
                 * @constructor
                 * @param {message.v1.GetMessageListService.IResponse=} [p] Properties to set
                 */
                function Response(p) {
                    this.message_list = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * Response message_list.
                 * @member {Array.<message.v1.IMessage>}message_list
                 * @memberof message.v1.GetMessageListService.Response
                 * @instance
                 */
                Response.prototype.message_list = $util.emptyArray;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @function decode
                 * @memberof message.v1.GetMessageListService.Response
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {message.v1.GetMessageListService.Response} Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Response.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.GetMessageListService.Response();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            if (!(m.message_list && m.message_list.length))
                                m.message_list = [];
                            m.message_list.push($root.message.v1.Message.decode(r, r.uint32()));
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
                 * @memberof message.v1.GetMessageListService.Response
                 * @static
                 * @param {Object.<string,*>} d Plain object
                 * @returns {message.v1.GetMessageListService.Response} Response
                 */
                Response.fromObject = function fromObject(d) {
                    if (d instanceof $root.message.v1.GetMessageListService.Response)
                        return d;
                    var m = new $root.message.v1.GetMessageListService.Response();
                    if (d.message_list) {
                        if (!Array.isArray(d.message_list))
                            throw TypeError(".message.v1.GetMessageListService.Response.message_list: array expected");
                        m.message_list = [];
                        for (var i = 0; i < d.message_list.length; ++i) {
                            if (typeof d.message_list[i] !== "object")
                                throw TypeError(".message.v1.GetMessageListService.Response.message_list: object expected");
                            m.message_list[i] = $root.message.v1.Message.fromObject(d.message_list[i]);
                        }
                    }
                    return m;
                };

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof message.v1.GetMessageListService.Response
                 * @static
                 * @param {message.v1.GetMessageListService.Response} m Response
                 * @param {$protobuf.IConversionOptions} [o] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Response.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (o.arrays || o.defaults) {
                        d.message_list = [];
                    }
                    if (m.message_list && m.message_list.length) {
                        d.message_list = [];
                        for (var j = 0; j < m.message_list.length; ++j) {
                            d.message_list[j] = $root.message.v1.Message.toObject(m.message_list[j], o);
                        }
                    }
                    return d;
                };

                /**
                 * Converts this Response to JSON.
                 * @function toJSON
                 * @memberof message.v1.GetMessageListService.Response
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Response.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Response;
            })();

            return GetMessageListService;
        })();

        v1.SendMessageService = (function() {

            /**
             * Properties of a SendMessageService.
             * @memberof message.v1
             * @interface ISendMessageService
             */

            /**
             * Constructs a new SendMessageService.
             * @memberof message.v1
             * @classdesc Represents a SendMessageService.
             * @constructor
             * @param {message.v1.ISendMessageService=} [p] Properties to set
             */
            function SendMessageService(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * Decodes a SendMessageService message from the specified reader or buffer.
             * @function decode
             * @memberof message.v1.SendMessageService
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {message.v1.SendMessageService} SendMessageService
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SendMessageService.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.SendMessageService();
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
             * Creates a SendMessageService message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.v1.SendMessageService
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {message.v1.SendMessageService} SendMessageService
             */
            SendMessageService.fromObject = function fromObject(d) {
                if (d instanceof $root.message.v1.SendMessageService)
                    return d;
                return new $root.message.v1.SendMessageService();
            };

            /**
             * Creates a plain object from a SendMessageService message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.v1.SendMessageService
             * @static
             * @param {message.v1.SendMessageService} m SendMessageService
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SendMessageService.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this SendMessageService to JSON.
             * @function toJSON
             * @memberof message.v1.SendMessageService
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SendMessageService.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SendMessageService.Request = (function() {

                /**
                 * Properties of a Request.
                 * @memberof message.v1.SendMessageService
                 * @interface IRequest
                 * @property {string} [content] Request content
                 * @property {message.v1.SessionType} [session_type] Request session_type
                 * @property {number} [session_id] Request session_id
                 * @property {number} [sender_id] Request sender_id
                 */

                /**
                 * Constructs a new Request.
                 * @memberof message.v1.SendMessageService
                 * @classdesc Represents a Request.
                 * @constructor
                 * @param {message.v1.SendMessageService.IRequest=} [p] Properties to set
                 */
                function Request(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * Request content.
                 * @member {string}content
                 * @memberof message.v1.SendMessageService.Request
                 * @instance
                 */
                Request.prototype.content = "";

                /**
                 * Request session_type.
                 * @member {message.v1.SessionType}session_type
                 * @memberof message.v1.SendMessageService.Request
                 * @instance
                 */
                Request.prototype.session_type = 0;

                /**
                 * Request session_id.
                 * @member {number}session_id
                 * @memberof message.v1.SendMessageService.Request
                 * @instance
                 */
                Request.prototype.session_id = 0;

                /**
                 * Request sender_id.
                 * @member {number}sender_id
                 * @memberof message.v1.SendMessageService.Request
                 * @instance
                 */
                Request.prototype.sender_id = 0;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @function decode
                 * @memberof message.v1.SendMessageService.Request
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {message.v1.SendMessageService.Request} Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Request.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.SendMessageService.Request();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.content = r.string();
                            break;
                        case 2:
                            m.session_type = r.int32();
                            break;
                        case 3:
                            m.session_id = r.int32();
                            break;
                        case 4:
                            m.sender_id = r.int32();
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
                 * @memberof message.v1.SendMessageService.Request
                 * @static
                 * @param {Object.<string,*>} d Plain object
                 * @returns {message.v1.SendMessageService.Request} Request
                 */
                Request.fromObject = function fromObject(d) {
                    if (d instanceof $root.message.v1.SendMessageService.Request)
                        return d;
                    var m = new $root.message.v1.SendMessageService.Request();
                    if (d.content != null) {
                        m.content = String(d.content);
                    }
                    switch (d.session_type) {
                    case "session_type_not_specified":
                    case 0:
                        m.session_type = 0;
                        break;
                    case "private":
                    case 1:
                        m.session_type = 1;
                        break;
                    case "group":
                    case 2:
                        m.session_type = 2;
                        break;
                    }
                    if (d.session_id != null) {
                        m.session_id = d.session_id | 0;
                    }
                    if (d.sender_id != null) {
                        m.sender_id = d.sender_id | 0;
                    }
                    return m;
                };

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof message.v1.SendMessageService.Request
                 * @static
                 * @param {message.v1.SendMessageService.Request} m Request
                 * @param {$protobuf.IConversionOptions} [o] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Request.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (o.defaults) {
                        d.content = "";
                        d.session_type = o.enums === String ? "session_type_not_specified" : 0;
                        d.session_id = 0;
                        d.sender_id = 0;
                    }
                    if (m.content != null && m.hasOwnProperty("content")) {
                        d.content = m.content;
                    }
                    if (m.session_type != null && m.hasOwnProperty("session_type")) {
                        d.session_type = o.enums === String ? $root.message.v1.SessionType[m.session_type] : m.session_type;
                    }
                    if (m.session_id != null && m.hasOwnProperty("session_id")) {
                        d.session_id = m.session_id;
                    }
                    if (m.sender_id != null && m.hasOwnProperty("sender_id")) {
                        d.sender_id = m.sender_id;
                    }
                    return d;
                };

                /**
                 * Converts this Request to JSON.
                 * @function toJSON
                 * @memberof message.v1.SendMessageService.Request
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Request.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Request;
            })();

            return SendMessageService;
        })();

        v1.GetSessionListService = (function() {

            /**
             * Properties of a GetSessionListService.
             * @memberof message.v1
             * @interface IGetSessionListService
             */

            /**
             * Constructs a new GetSessionListService.
             * @memberof message.v1
             * @classdesc Represents a GetSessionListService.
             * @constructor
             * @param {message.v1.IGetSessionListService=} [p] Properties to set
             */
            function GetSessionListService(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * Decodes a GetSessionListService message from the specified reader or buffer.
             * @function decode
             * @memberof message.v1.GetSessionListService
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {message.v1.GetSessionListService} GetSessionListService
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetSessionListService.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.GetSessionListService();
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
             * Creates a GetSessionListService message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.v1.GetSessionListService
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {message.v1.GetSessionListService} GetSessionListService
             */
            GetSessionListService.fromObject = function fromObject(d) {
                if (d instanceof $root.message.v1.GetSessionListService)
                    return d;
                return new $root.message.v1.GetSessionListService();
            };

            /**
             * Creates a plain object from a GetSessionListService message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.v1.GetSessionListService
             * @static
             * @param {message.v1.GetSessionListService} m GetSessionListService
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetSessionListService.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this GetSessionListService to JSON.
             * @function toJSON
             * @memberof message.v1.GetSessionListService
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetSessionListService.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GetSessionListService.SessionInfo = (function() {

                /**
                 * Properties of a SessionInfo.
                 * @memberof message.v1.GetSessionListService
                 * @interface ISessionInfo
                 * @property {number} [id] SessionInfo id
                 * @property {string} [name] SessionInfo name
                 * @property {message.v1.SessionType} [session_type] SessionInfo session_type
                 */

                /**
                 * Constructs a new SessionInfo.
                 * @memberof message.v1.GetSessionListService
                 * @classdesc Represents a SessionInfo.
                 * @constructor
                 * @param {message.v1.GetSessionListService.ISessionInfo=} [p] Properties to set
                 */
                function SessionInfo(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * SessionInfo id.
                 * @member {number}id
                 * @memberof message.v1.GetSessionListService.SessionInfo
                 * @instance
                 */
                SessionInfo.prototype.id = 0;

                /**
                 * SessionInfo name.
                 * @member {string}name
                 * @memberof message.v1.GetSessionListService.SessionInfo
                 * @instance
                 */
                SessionInfo.prototype.name = "";

                /**
                 * SessionInfo session_type.
                 * @member {message.v1.SessionType}session_type
                 * @memberof message.v1.GetSessionListService.SessionInfo
                 * @instance
                 */
                SessionInfo.prototype.session_type = 0;

                /**
                 * Decodes a SessionInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof message.v1.GetSessionListService.SessionInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {message.v1.GetSessionListService.SessionInfo} SessionInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SessionInfo.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.GetSessionListService.SessionInfo();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.id = r.int32();
                            break;
                        case 2:
                            m.name = r.string();
                            break;
                        case 3:
                            m.session_type = r.int32();
                            break;
                        default:
                            r.skipType(t & 7);
                            break;
                        }
                    }
                    return m;
                };

                /**
                 * Creates a SessionInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof message.v1.GetSessionListService.SessionInfo
                 * @static
                 * @param {Object.<string,*>} d Plain object
                 * @returns {message.v1.GetSessionListService.SessionInfo} SessionInfo
                 */
                SessionInfo.fromObject = function fromObject(d) {
                    if (d instanceof $root.message.v1.GetSessionListService.SessionInfo)
                        return d;
                    var m = new $root.message.v1.GetSessionListService.SessionInfo();
                    if (d.id != null) {
                        m.id = d.id | 0;
                    }
                    if (d.name != null) {
                        m.name = String(d.name);
                    }
                    switch (d.session_type) {
                    case "session_type_not_specified":
                    case 0:
                        m.session_type = 0;
                        break;
                    case "private":
                    case 1:
                        m.session_type = 1;
                        break;
                    case "group":
                    case 2:
                        m.session_type = 2;
                        break;
                    }
                    return m;
                };

                /**
                 * Creates a plain object from a SessionInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof message.v1.GetSessionListService.SessionInfo
                 * @static
                 * @param {message.v1.GetSessionListService.SessionInfo} m SessionInfo
                 * @param {$protobuf.IConversionOptions} [o] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SessionInfo.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (o.defaults) {
                        d.id = 0;
                        d.name = "";
                        d.session_type = o.enums === String ? "session_type_not_specified" : 0;
                    }
                    if (m.id != null && m.hasOwnProperty("id")) {
                        d.id = m.id;
                    }
                    if (m.name != null && m.hasOwnProperty("name")) {
                        d.name = m.name;
                    }
                    if (m.session_type != null && m.hasOwnProperty("session_type")) {
                        d.session_type = o.enums === String ? $root.message.v1.SessionType[m.session_type] : m.session_type;
                    }
                    return d;
                };

                /**
                 * Converts this SessionInfo to JSON.
                 * @function toJSON
                 * @memberof message.v1.GetSessionListService.SessionInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SessionInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SessionInfo;
            })();

            GetSessionListService.Request = (function() {

                /**
                 * Properties of a Request.
                 * @memberof message.v1.GetSessionListService
                 * @interface IRequest
                 */

                /**
                 * Constructs a new Request.
                 * @memberof message.v1.GetSessionListService
                 * @classdesc Represents a Request.
                 * @constructor
                 * @param {message.v1.GetSessionListService.IRequest=} [p] Properties to set
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
                 * @memberof message.v1.GetSessionListService.Request
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {message.v1.GetSessionListService.Request} Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Request.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.GetSessionListService.Request();
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
                 * @memberof message.v1.GetSessionListService.Request
                 * @static
                 * @param {Object.<string,*>} d Plain object
                 * @returns {message.v1.GetSessionListService.Request} Request
                 */
                Request.fromObject = function fromObject(d) {
                    if (d instanceof $root.message.v1.GetSessionListService.Request)
                        return d;
                    return new $root.message.v1.GetSessionListService.Request();
                };

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof message.v1.GetSessionListService.Request
                 * @static
                 * @param {message.v1.GetSessionListService.Request} m Request
                 * @param {$protobuf.IConversionOptions} [o] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Request.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this Request to JSON.
                 * @function toJSON
                 * @memberof message.v1.GetSessionListService.Request
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Request.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Request;
            })();

            GetSessionListService.Response = (function() {

                /**
                 * Properties of a Response.
                 * @memberof message.v1.GetSessionListService
                 * @interface IResponse
                 * @property {Array.<message.v1.GetSessionListService.ISessionInfo>} [session_list] Response session_list
                 */

                /**
                 * Constructs a new Response.
                 * @memberof message.v1.GetSessionListService
                 * @classdesc Represents a Response.
                 * @constructor
                 * @param {message.v1.GetSessionListService.IResponse=} [p] Properties to set
                 */
                function Response(p) {
                    this.session_list = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null)
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * Response session_list.
                 * @member {Array.<message.v1.GetSessionListService.ISessionInfo>}session_list
                 * @memberof message.v1.GetSessionListService.Response
                 * @instance
                 */
                Response.prototype.session_list = $util.emptyArray;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @function decode
                 * @memberof message.v1.GetSessionListService.Response
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {message.v1.GetSessionListService.Response} Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Response.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.GetSessionListService.Response();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            if (!(m.session_list && m.session_list.length))
                                m.session_list = [];
                            m.session_list.push($root.message.v1.GetSessionListService.SessionInfo.decode(r, r.uint32()));
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
                 * @memberof message.v1.GetSessionListService.Response
                 * @static
                 * @param {Object.<string,*>} d Plain object
                 * @returns {message.v1.GetSessionListService.Response} Response
                 */
                Response.fromObject = function fromObject(d) {
                    if (d instanceof $root.message.v1.GetSessionListService.Response)
                        return d;
                    var m = new $root.message.v1.GetSessionListService.Response();
                    if (d.session_list) {
                        if (!Array.isArray(d.session_list))
                            throw TypeError(".message.v1.GetSessionListService.Response.session_list: array expected");
                        m.session_list = [];
                        for (var i = 0; i < d.session_list.length; ++i) {
                            if (typeof d.session_list[i] !== "object")
                                throw TypeError(".message.v1.GetSessionListService.Response.session_list: object expected");
                            m.session_list[i] = $root.message.v1.GetSessionListService.SessionInfo.fromObject(d.session_list[i]);
                        }
                    }
                    return m;
                };

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof message.v1.GetSessionListService.Response
                 * @static
                 * @param {message.v1.GetSessionListService.Response} m Response
                 * @param {$protobuf.IConversionOptions} [o] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Response.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (o.arrays || o.defaults) {
                        d.session_list = [];
                    }
                    if (m.session_list && m.session_list.length) {
                        d.session_list = [];
                        for (var j = 0; j < m.session_list.length; ++j) {
                            d.session_list[j] = $root.message.v1.GetSessionListService.SessionInfo.toObject(m.session_list[j], o);
                        }
                    }
                    return d;
                };

                /**
                 * Converts this Response to JSON.
                 * @function toJSON
                 * @memberof message.v1.GetSessionListService.Response
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Response.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Response;
            })();

            return GetSessionListService;
        })();

        v1.GetSessionRequest = (function() {

            /**
             * Properties of a GetSessionRequest.
             * @memberof message.v1
             * @interface IGetSessionRequest
             * @property {number} [id] GetSessionRequest id
             */

            /**
             * Constructs a new GetSessionRequest.
             * @memberof message.v1
             * @classdesc Represents a GetSessionRequest.
             * @constructor
             * @param {message.v1.IGetSessionRequest=} [p] Properties to set
             */
            function GetSessionRequest(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * GetSessionRequest id.
             * @member {number}id
             * @memberof message.v1.GetSessionRequest
             * @instance
             */
            GetSessionRequest.prototype.id = 0;

            /**
             * Decodes a GetSessionRequest message from the specified reader or buffer.
             * @function decode
             * @memberof message.v1.GetSessionRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {message.v1.GetSessionRequest} GetSessionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetSessionRequest.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.GetSessionRequest();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.id = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a GetSessionRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.v1.GetSessionRequest
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {message.v1.GetSessionRequest} GetSessionRequest
             */
            GetSessionRequest.fromObject = function fromObject(d) {
                if (d instanceof $root.message.v1.GetSessionRequest)
                    return d;
                var m = new $root.message.v1.GetSessionRequest();
                if (d.id != null) {
                    m.id = d.id | 0;
                }
                return m;
            };

            /**
             * Creates a plain object from a GetSessionRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.v1.GetSessionRequest
             * @static
             * @param {message.v1.GetSessionRequest} m GetSessionRequest
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetSessionRequest.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.id = 0;
                }
                if (m.id != null && m.hasOwnProperty("id")) {
                    d.id = m.id;
                }
                return d;
            };

            /**
             * Converts this GetSessionRequest to JSON.
             * @function toJSON
             * @memberof message.v1.GetSessionRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetSessionRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetSessionRequest;
        })();

        v1.GetSessionResponse = (function() {

            /**
             * Properties of a GetSessionResponse.
             * @memberof message.v1
             * @interface IGetSessionResponse
             * @property {message.v1.GetSessionListService.ISessionInfo} [session] GetSessionResponse session
             */

            /**
             * Constructs a new GetSessionResponse.
             * @memberof message.v1
             * @classdesc Represents a GetSessionResponse.
             * @constructor
             * @param {message.v1.IGetSessionResponse=} [p] Properties to set
             */
            function GetSessionResponse(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * GetSessionResponse session.
             * @member {(message.v1.GetSessionListService.ISessionInfo|null|undefined)}session
             * @memberof message.v1.GetSessionResponse
             * @instance
             */
            GetSessionResponse.prototype.session = null;

            /**
             * Decodes a GetSessionResponse message from the specified reader or buffer.
             * @function decode
             * @memberof message.v1.GetSessionResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {message.v1.GetSessionResponse} GetSessionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetSessionResponse.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.GetSessionResponse();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.session = $root.message.v1.GetSessionListService.SessionInfo.decode(r, r.uint32());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            /**
             * Creates a GetSessionResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.v1.GetSessionResponse
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {message.v1.GetSessionResponse} GetSessionResponse
             */
            GetSessionResponse.fromObject = function fromObject(d) {
                if (d instanceof $root.message.v1.GetSessionResponse)
                    return d;
                var m = new $root.message.v1.GetSessionResponse();
                if (d.session != null) {
                    if (typeof d.session !== "object")
                        throw TypeError(".message.v1.GetSessionResponse.session: object expected");
                    m.session = $root.message.v1.GetSessionListService.SessionInfo.fromObject(d.session);
                }
                return m;
            };

            /**
             * Creates a plain object from a GetSessionResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.v1.GetSessionResponse
             * @static
             * @param {message.v1.GetSessionResponse} m GetSessionResponse
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetSessionResponse.toObject = function toObject(m, o) {
                if (!o)
                    o = {};
                var d = {};
                if (o.defaults) {
                    d.session = null;
                }
                if (m.session != null && m.hasOwnProperty("session")) {
                    d.session = $root.message.v1.GetSessionListService.SessionInfo.toObject(m.session, o);
                }
                return d;
            };

            /**
             * Converts this GetSessionResponse to JSON.
             * @function toJSON
             * @memberof message.v1.GetSessionResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetSessionResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GetSessionResponse;
        })();

        v1.MessageService = (function() {

            /**
             * Constructs a new MessageService service.
             * @memberof message.v1
             * @classdesc Represents a MessageService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function MessageService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (MessageService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = MessageService;

            /**
             * Callback as used by {@link message.v1.MessageService#streamMessage}.
             * @memberof message.v1.MessageService
             * @typedef StreamMessageCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {message.v1.StreamMessageResponse} [response] StreamMessageResponse
             */

            /**
             * Calls StreamMessage.
             * @function .streamMessage
             * @memberof message.v1.MessageService
             * @instance
             * @param {message.v1.IStreamMessageRequest} request StreamMessageRequest message or plain object
             * @param {message.v1.MessageService.StreamMessageCallback} callback Node-style callback called with the error, if any, and StreamMessageResponse
             * @returns {undefined}
             * @variation 1
             */
            MessageService.prototype.streamMessage = function streamMessage(request, callback) {
                return this.rpcCall(streamMessage, $root.message.v1.StreamMessageRequest, $root.message.v1.StreamMessageResponse, request, callback);
            };

            /**
             * Calls StreamMessage.
             * @function streamMessage
             * @memberof message.v1.MessageService
             * @instance
             * @param {message.v1.IStreamMessageRequest} request StreamMessageRequest message or plain object
             * @returns {Promise<message.v1.StreamMessageResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link message.v1.MessageService#getMessageList}.
             * @memberof message.v1.MessageService
             * @typedef GetMessageListCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {message.v1.GetMessageListService.Response} [response] Response
             */

            /**
             * Calls GetMessageList.
             * @function .getMessageList
             * @memberof message.v1.MessageService
             * @instance
             * @param {message.v1.GetMessageListService.IRequest} request Request message or plain object
             * @param {message.v1.MessageService.GetMessageListCallback} callback Node-style callback called with the error, if any, and Response
             * @returns {undefined}
             * @variation 1
             */
            MessageService.prototype.getMessageList = function getMessageList(request, callback) {
                return this.rpcCall(getMessageList, $root.message.v1.GetMessageListService.Request, $root.message.v1.GetMessageListService.Response, request, callback);
            };

            /**
             * Calls GetMessageList.
             * @function getMessageList
             * @memberof message.v1.MessageService
             * @instance
             * @param {message.v1.GetMessageListService.IRequest} request Request message or plain object
             * @returns {Promise<message.v1.GetMessageListService.Response>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link message.v1.MessageService#sendMessage}.
             * @memberof message.v1.MessageService
             * @typedef SendMessageCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {message.v1.Message} [response] Message
             */

            /**
             * Calls SendMessage.
             * @function .sendMessage
             * @memberof message.v1.MessageService
             * @instance
             * @param {message.v1.SendMessageService.IRequest} request Request message or plain object
             * @param {message.v1.MessageService.SendMessageCallback} callback Node-style callback called with the error, if any, and Message
             * @returns {undefined}
             * @variation 1
             */
            MessageService.prototype.sendMessage = function sendMessage(request, callback) {
                return this.rpcCall(sendMessage, $root.message.v1.SendMessageService.Request, $root.message.v1.Message, request, callback);
            };

            /**
             * Calls SendMessage.
             * @function sendMessage
             * @memberof message.v1.MessageService
             * @instance
             * @param {message.v1.SendMessageService.IRequest} request Request message or plain object
             * @returns {Promise<message.v1.Message>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link message.v1.MessageService#getSessionList}.
             * @memberof message.v1.MessageService
             * @typedef GetSessionListCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {message.v1.GetSessionListService.Response} [response] Response
             */

            /**
             * Calls GetSessionList.
             * @function .getSessionList
             * @memberof message.v1.MessageService
             * @instance
             * @param {message.v1.GetSessionListService.IRequest} request Request message or plain object
             * @param {message.v1.MessageService.GetSessionListCallback} callback Node-style callback called with the error, if any, and Response
             * @returns {undefined}
             * @variation 1
             */
            MessageService.prototype.getSessionList = function getSessionList(request, callback) {
                return this.rpcCall(getSessionList, $root.message.v1.GetSessionListService.Request, $root.message.v1.GetSessionListService.Response, request, callback);
            };

            /**
             * Calls GetSessionList.
             * @function getSessionList
             * @memberof message.v1.MessageService
             * @instance
             * @param {message.v1.GetSessionListService.IRequest} request Request message or plain object
             * @returns {Promise<message.v1.GetSessionListService.Response>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link message.v1.MessageService#getSession}.
             * @memberof message.v1.MessageService
             * @typedef GetSessionCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {message.v1.GetSessionResponse} [response] GetSessionResponse
             */

            /**
             * Calls GetSession.
             * @function .getSession
             * @memberof message.v1.MessageService
             * @instance
             * @param {message.v1.IGetSessionRequest} request GetSessionRequest message or plain object
             * @param {message.v1.MessageService.GetSessionCallback} callback Node-style callback called with the error, if any, and GetSessionResponse
             * @returns {undefined}
             * @variation 1
             */
            MessageService.prototype.getSession = function getSession(request, callback) {
                return this.rpcCall(getSession, $root.message.v1.GetSessionRequest, $root.message.v1.GetSessionResponse, request, callback);
            };

            /**
             * Calls GetSession.
             * @function getSession
             * @memberof message.v1.MessageService
             * @instance
             * @param {message.v1.IGetSessionRequest} request GetSessionRequest message or plain object
             * @returns {Promise<message.v1.GetSessionResponse>} Promise
             * @variation 2
             */

            return MessageService;
        })();

        return v1;
    })();

    return message;
})();