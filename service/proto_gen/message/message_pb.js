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

        v1.Message = (function() {

            /**
             * Properties of a Message.
             * @memberof message.v1
             * @interface IMessage
             * @property {number} [id] Message id
             * @property {string} [content] Message content
             * @property {number} [sender_id] Message sender_id
             * @property {number} [send_time_second] Message send_time_second
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

        v1.GetMessageListSerivce = (function() {

            /**
             * Properties of a GetMessageListSerivce.
             * @memberof message.v1
             * @interface IGetMessageListSerivce
             */

            /**
             * Constructs a new GetMessageListSerivce.
             * @memberof message.v1
             * @classdesc Represents a GetMessageListSerivce.
             * @constructor
             * @param {message.v1.IGetMessageListSerivce=} [p] Properties to set
             */
            function GetMessageListSerivce(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * Decodes a GetMessageListSerivce message from the specified reader or buffer.
             * @function decode
             * @memberof message.v1.GetMessageListSerivce
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {message.v1.GetMessageListSerivce} GetMessageListSerivce
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMessageListSerivce.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.GetMessageListSerivce();
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
             * Creates a GetMessageListSerivce message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.v1.GetMessageListSerivce
             * @static
             * @param {Object.<string,*>} d Plain object
             * @returns {message.v1.GetMessageListSerivce} GetMessageListSerivce
             */
            GetMessageListSerivce.fromObject = function fromObject(d) {
                if (d instanceof $root.message.v1.GetMessageListSerivce)
                    return d;
                return new $root.message.v1.GetMessageListSerivce();
            };

            /**
             * Creates a plain object from a GetMessageListSerivce message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.v1.GetMessageListSerivce
             * @static
             * @param {message.v1.GetMessageListSerivce} m GetMessageListSerivce
             * @param {$protobuf.IConversionOptions} [o] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetMessageListSerivce.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this GetMessageListSerivce to JSON.
             * @function toJSON
             * @memberof message.v1.GetMessageListSerivce
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetMessageListSerivce.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GetMessageListSerivce.Request = (function() {

                /**
                 * Properties of a Request.
                 * @memberof message.v1.GetMessageListSerivce
                 * @interface IRequest
                 * @property {number} [session_id] Request session_id
                 */

                /**
                 * Constructs a new Request.
                 * @memberof message.v1.GetMessageListSerivce
                 * @classdesc Represents a Request.
                 * @constructor
                 * @param {message.v1.GetMessageListSerivce.IRequest=} [p] Properties to set
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
                 * @memberof message.v1.GetMessageListSerivce.Request
                 * @instance
                 */
                Request.prototype.session_id = 0;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @function decode
                 * @memberof message.v1.GetMessageListSerivce.Request
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {message.v1.GetMessageListSerivce.Request} Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Request.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.GetMessageListSerivce.Request();
                    while (r.pos < c) {
                        var t = r.uint32();
                        switch (t >>> 3) {
                        case 1:
                            m.session_id = r.int32();
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
                 * @memberof message.v1.GetMessageListSerivce.Request
                 * @static
                 * @param {Object.<string,*>} d Plain object
                 * @returns {message.v1.GetMessageListSerivce.Request} Request
                 */
                Request.fromObject = function fromObject(d) {
                    if (d instanceof $root.message.v1.GetMessageListSerivce.Request)
                        return d;
                    var m = new $root.message.v1.GetMessageListSerivce.Request();
                    if (d.session_id != null) {
                        m.session_id = d.session_id | 0;
                    }
                    return m;
                };

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof message.v1.GetMessageListSerivce.Request
                 * @static
                 * @param {message.v1.GetMessageListSerivce.Request} m Request
                 * @param {$protobuf.IConversionOptions} [o] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Request.toObject = function toObject(m, o) {
                    if (!o)
                        o = {};
                    var d = {};
                    if (o.defaults) {
                        d.session_id = 0;
                    }
                    if (m.session_id != null && m.hasOwnProperty("session_id")) {
                        d.session_id = m.session_id;
                    }
                    return d;
                };

                /**
                 * Converts this Request to JSON.
                 * @function toJSON
                 * @memberof message.v1.GetMessageListSerivce.Request
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Request.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Request;
            })();

            GetMessageListSerivce.Response = (function() {

                /**
                 * Properties of a Response.
                 * @memberof message.v1.GetMessageListSerivce
                 * @interface IResponse
                 * @property {Array.<message.v1.IMessage>} [message_list] Response message_list
                 */

                /**
                 * Constructs a new Response.
                 * @memberof message.v1.GetMessageListSerivce
                 * @classdesc Represents a Response.
                 * @constructor
                 * @param {message.v1.GetMessageListSerivce.IResponse=} [p] Properties to set
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
                 * @memberof message.v1.GetMessageListSerivce.Response
                 * @instance
                 */
                Response.prototype.message_list = $util.emptyArray;

                /**
                 * Decodes a Response message from the specified reader or buffer.
                 * @function decode
                 * @memberof message.v1.GetMessageListSerivce.Response
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {message.v1.GetMessageListSerivce.Response} Response
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Response.decode = function decode(r, l) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    var c = l === undefined ? r.len : r.pos + l, m = new $root.message.v1.GetMessageListSerivce.Response();
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
                 * @memberof message.v1.GetMessageListSerivce.Response
                 * @static
                 * @param {Object.<string,*>} d Plain object
                 * @returns {message.v1.GetMessageListSerivce.Response} Response
                 */
                Response.fromObject = function fromObject(d) {
                    if (d instanceof $root.message.v1.GetMessageListSerivce.Response)
                        return d;
                    var m = new $root.message.v1.GetMessageListSerivce.Response();
                    if (d.message_list) {
                        if (!Array.isArray(d.message_list))
                            throw TypeError(".message.v1.GetMessageListSerivce.Response.message_list: array expected");
                        m.message_list = [];
                        for (var i = 0; i < d.message_list.length; ++i) {
                            if (typeof d.message_list[i] !== "object")
                                throw TypeError(".message.v1.GetMessageListSerivce.Response.message_list: object expected");
                            m.message_list[i] = $root.message.v1.Message.fromObject(d.message_list[i]);
                        }
                    }
                    return m;
                };

                /**
                 * Creates a plain object from a Response message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof message.v1.GetMessageListSerivce.Response
                 * @static
                 * @param {message.v1.GetMessageListSerivce.Response} m Response
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
                 * @memberof message.v1.GetMessageListSerivce.Response
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Response.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Response;
            })();

            return GetMessageListSerivce;
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
             * @param {message.v1.GetMessageListSerivce.Response} [response] Response
             */

            /**
             * Calls GetMessageList.
             * @function .getMessageList
             * @memberof message.v1.MessageService
             * @instance
             * @param {message.v1.GetMessageListSerivce.IRequest} request Request message or plain object
             * @param {message.v1.MessageService.GetMessageListCallback} callback Node-style callback called with the error, if any, and Response
             * @returns {undefined}
             * @variation 1
             */
            MessageService.prototype.getMessageList = function getMessageList(request, callback) {
                return this.rpcCall(getMessageList, $root.message.v1.GetMessageListSerivce.Request, $root.message.v1.GetMessageListSerivce.Response, request, callback);
            };

            /**
             * Calls GetMessageList.
             * @function getMessageList
             * @memberof message.v1.MessageService
             * @instance
             * @param {message.v1.GetMessageListSerivce.IRequest} request Request message or plain object
             * @returns {Promise<message.v1.GetMessageListSerivce.Response>} Promise
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

            return MessageService;
        })();

        return v1;
    })();

    return message;
})();