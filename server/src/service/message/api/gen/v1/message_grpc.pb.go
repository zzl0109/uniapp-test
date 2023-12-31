// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.12
// source: message.proto

package messagepb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	MessageService_StreamMessage_FullMethodName  = "/message.v1.MessageService/StreamMessage"
	MessageService_GetMessageList_FullMethodName = "/message.v1.MessageService/GetMessageList"
	MessageService_SendMessage_FullMethodName    = "/message.v1.MessageService/SendMessage"
	MessageService_GetSessionList_FullMethodName = "/message.v1.MessageService/GetSessionList"
	MessageService_GetSession_FullMethodName     = "/message.v1.MessageService/GetSession"
)

// MessageServiceClient is the client API for MessageService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MessageServiceClient interface {
	StreamMessage(ctx context.Context, opts ...grpc.CallOption) (MessageService_StreamMessageClient, error)
	GetMessageList(ctx context.Context, in *GetMessageListService_Request, opts ...grpc.CallOption) (*GetMessageListService_Response, error)
	SendMessage(ctx context.Context, opts ...grpc.CallOption) (MessageService_SendMessageClient, error)
	GetSessionList(ctx context.Context, in *GetSessionListService_Request, opts ...grpc.CallOption) (*GetSessionListService_Response, error)
	GetSession(ctx context.Context, in *GetSessionRequest, opts ...grpc.CallOption) (*GetSessionResponse, error)
}

type messageServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewMessageServiceClient(cc grpc.ClientConnInterface) MessageServiceClient {
	return &messageServiceClient{cc}
}

func (c *messageServiceClient) StreamMessage(ctx context.Context, opts ...grpc.CallOption) (MessageService_StreamMessageClient, error) {
	stream, err := c.cc.NewStream(ctx, &MessageService_ServiceDesc.Streams[0], MessageService_StreamMessage_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &messageServiceStreamMessageClient{stream}
	return x, nil
}

type MessageService_StreamMessageClient interface {
	Send(*StreamMessageRequest) error
	Recv() (*StreamMessageResponse, error)
	grpc.ClientStream
}

type messageServiceStreamMessageClient struct {
	grpc.ClientStream
}

func (x *messageServiceStreamMessageClient) Send(m *StreamMessageRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *messageServiceStreamMessageClient) Recv() (*StreamMessageResponse, error) {
	m := new(StreamMessageResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *messageServiceClient) GetMessageList(ctx context.Context, in *GetMessageListService_Request, opts ...grpc.CallOption) (*GetMessageListService_Response, error) {
	out := new(GetMessageListService_Response)
	err := c.cc.Invoke(ctx, MessageService_GetMessageList_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *messageServiceClient) SendMessage(ctx context.Context, opts ...grpc.CallOption) (MessageService_SendMessageClient, error) {
	stream, err := c.cc.NewStream(ctx, &MessageService_ServiceDesc.Streams[1], MessageService_SendMessage_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &messageServiceSendMessageClient{stream}
	return x, nil
}

type MessageService_SendMessageClient interface {
	Send(*SendMessageService_Request) error
	Recv() (*Message, error)
	grpc.ClientStream
}

type messageServiceSendMessageClient struct {
	grpc.ClientStream
}

func (x *messageServiceSendMessageClient) Send(m *SendMessageService_Request) error {
	return x.ClientStream.SendMsg(m)
}

func (x *messageServiceSendMessageClient) Recv() (*Message, error) {
	m := new(Message)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *messageServiceClient) GetSessionList(ctx context.Context, in *GetSessionListService_Request, opts ...grpc.CallOption) (*GetSessionListService_Response, error) {
	out := new(GetSessionListService_Response)
	err := c.cc.Invoke(ctx, MessageService_GetSessionList_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *messageServiceClient) GetSession(ctx context.Context, in *GetSessionRequest, opts ...grpc.CallOption) (*GetSessionResponse, error) {
	out := new(GetSessionResponse)
	err := c.cc.Invoke(ctx, MessageService_GetSession_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MessageServiceServer is the server API for MessageService service.
// All implementations should embed UnimplementedMessageServiceServer
// for forward compatibility
type MessageServiceServer interface {
	StreamMessage(MessageService_StreamMessageServer) error
	GetMessageList(context.Context, *GetMessageListService_Request) (*GetMessageListService_Response, error)
	SendMessage(MessageService_SendMessageServer) error
	GetSessionList(context.Context, *GetSessionListService_Request) (*GetSessionListService_Response, error)
	GetSession(context.Context, *GetSessionRequest) (*GetSessionResponse, error)
}

// UnimplementedMessageServiceServer should be embedded to have forward compatible implementations.
type UnimplementedMessageServiceServer struct {
}

func (UnimplementedMessageServiceServer) StreamMessage(MessageService_StreamMessageServer) error {
	return status.Errorf(codes.Unimplemented, "method StreamMessage not implemented")
}
func (UnimplementedMessageServiceServer) GetMessageList(context.Context, *GetMessageListService_Request) (*GetMessageListService_Response, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMessageList not implemented")
}
func (UnimplementedMessageServiceServer) SendMessage(MessageService_SendMessageServer) error {
	return status.Errorf(codes.Unimplemented, "method SendMessage not implemented")
}
func (UnimplementedMessageServiceServer) GetSessionList(context.Context, *GetSessionListService_Request) (*GetSessionListService_Response, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSessionList not implemented")
}
func (UnimplementedMessageServiceServer) GetSession(context.Context, *GetSessionRequest) (*GetSessionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSession not implemented")
}

// UnsafeMessageServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MessageServiceServer will
// result in compilation errors.
type UnsafeMessageServiceServer interface {
	mustEmbedUnimplementedMessageServiceServer()
}

func RegisterMessageServiceServer(s grpc.ServiceRegistrar, srv MessageServiceServer) {
	s.RegisterService(&MessageService_ServiceDesc, srv)
}

func _MessageService_StreamMessage_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(MessageServiceServer).StreamMessage(&messageServiceStreamMessageServer{stream})
}

type MessageService_StreamMessageServer interface {
	Send(*StreamMessageResponse) error
	Recv() (*StreamMessageRequest, error)
	grpc.ServerStream
}

type messageServiceStreamMessageServer struct {
	grpc.ServerStream
}

func (x *messageServiceStreamMessageServer) Send(m *StreamMessageResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *messageServiceStreamMessageServer) Recv() (*StreamMessageRequest, error) {
	m := new(StreamMessageRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _MessageService_GetMessageList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMessageListService_Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MessageServiceServer).GetMessageList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: MessageService_GetMessageList_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MessageServiceServer).GetMessageList(ctx, req.(*GetMessageListService_Request))
	}
	return interceptor(ctx, in, info, handler)
}

func _MessageService_SendMessage_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(MessageServiceServer).SendMessage(&messageServiceSendMessageServer{stream})
}

type MessageService_SendMessageServer interface {
	Send(*Message) error
	Recv() (*SendMessageService_Request, error)
	grpc.ServerStream
}

type messageServiceSendMessageServer struct {
	grpc.ServerStream
}

func (x *messageServiceSendMessageServer) Send(m *Message) error {
	return x.ServerStream.SendMsg(m)
}

func (x *messageServiceSendMessageServer) Recv() (*SendMessageService_Request, error) {
	m := new(SendMessageService_Request)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _MessageService_GetSessionList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetSessionListService_Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MessageServiceServer).GetSessionList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: MessageService_GetSessionList_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MessageServiceServer).GetSessionList(ctx, req.(*GetSessionListService_Request))
	}
	return interceptor(ctx, in, info, handler)
}

func _MessageService_GetSession_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetSessionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MessageServiceServer).GetSession(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: MessageService_GetSession_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MessageServiceServer).GetSession(ctx, req.(*GetSessionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// MessageService_ServiceDesc is the grpc.ServiceDesc for MessageService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MessageService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "message.v1.MessageService",
	HandlerType: (*MessageServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetMessageList",
			Handler:    _MessageService_GetMessageList_Handler,
		},
		{
			MethodName: "GetSessionList",
			Handler:    _MessageService_GetSessionList_Handler,
		},
		{
			MethodName: "GetSession",
			Handler:    _MessageService_GetSession_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "StreamMessage",
			Handler:       _MessageService_StreamMessage_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
		{
			StreamName:    "SendMessage",
			Handler:       _MessageService_SendMessage_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "message.proto",
}
