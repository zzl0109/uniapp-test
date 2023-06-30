# 多阶段制作
# 基础镜像
FROM golang:1.20.1-alpine AS builder

# 配置编译环境
RUN go env -w GO111MODULE=on
RUN go env -w GOPROXY=https://goproxy.cn,direct

# 拷贝源代码到镜像
COPY . /go/src/qiji/server

# 编译
WORKDIR /go/src/qiji/server/src/service
RUN go install ./message/...
# 以上为临时镜像

# 从builder里拷贝可执行文件到alpine基础镜像里
FROM alpine:3.18.0
COPY --from=builder /go/bin/message /bin/message

# 定义环境变量
ENV WS_ADDR=:9090
ENV ADDR=:8081

# 暴露镜像端口
EXPOSE 9090
EXPOSE 8081

# 设置服务入口
ENTRYPOINT [ "/bin/message" ]
