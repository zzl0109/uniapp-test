function genProto {
    DOMAIN=$1
    SKIP_GATEWAY=$2
    PROTO_PATH=./src/service/${DOMAIN}/api
    GO_OUT_PATH=./src/service/${DOMAIN}/api/gen/v1

    mkdir -p $GO_OUT_PATH
    protoc -I=$PROTO_PATH --go_out=$GO_OUT_PATH --go_opt=paths=source_relative --go-grpc_out=$GO_OUT_PATH --go-grpc_opt=paths=source_relative,require_unimplemented_servers=false ${DOMAIN}.proto

    if [ $SKIP_GATEWAY ]; then
        return 
    fi

    protoc -I=$PROTO_PATH --grpc-gateway_out=paths=source_relative,grpc_api_configuration=$PROTO_PATH/${DOMAIN}.yaml:$GO_OUT_PATH ${DOMAIN}.proto

    PBTS_BIN_DIR=../node_modules/.bin
    PBTS_OUT_DIR=../service/proto_gen/${DOMAIN}
    mkdir -p $PBTS_OUT_DIR
    # $PBTS_BIN_DIR/pbjs -t static -w es6 --no-create --no-encode --no-deocde --force-number --no-verify -o $PBTS_OUT_DIR/${DOMAIN}_pb_temp.js $PROTO_PATH/${DOMAIN}.proto
    $PBTS_BIN_DIR/pbjs -t static -w es6 --no-create --no-encode --no-deocde --force-number --no-verify --keep-case --keep-case-fieldnames --no-delimited  --no-beautify -o $PBTS_OUT_DIR/${DOMAIN}_pb_temp.js $PROTO_PATH/${DOMAIN}.proto
    echo 'import * as $protobuf from "protobufjs";\n' > $PBTS_OUT_DIR/${DOMAIN}_pb.js
    cat $PBTS_OUT_DIR/${DOMAIN}_pb_temp.js >> $PBTS_OUT_DIR/${DOMAIN}_pb.js
    rm $PBTS_OUT_DIR/${DOMAIN}_pb_temp.js
    $PBTS_BIN_DIR/pbts -o $PBTS_OUT_DIR/${DOMAIN}_pb.d.ts $PBTS_OUT_DIR/${DOMAIN}_pb.js
}

genProto message
genProto user
genProto auth