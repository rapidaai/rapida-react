PROTOC_GEN_TS_PATH="/Users/prashant.srivastav/Documents/codes/lexatic/web-app/ui/node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_WEB_PATH="/Users/prashant.srivastav/Documents/codes/lexatic/web-app/ui/node_modules/.bin/protoc-gen-grpc-web"
OUT_DIR="./src/clients/protos"
PROTO_DIR="./src/clients/protos/artifacts"

rm -rf ./src/clients/protos/*.js
rm -rf ./src/clients/protos/*.ts

#  --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}"
# Generate TypeScript code
# protoc --proto_path="${PROTO_DIR}" --js_out="import_style=commonjs,binary:${OUT_DIR}" --ts_out="service=grpc-web:${OUT_DIR}" "${PROTO_DIR}"/*.proto


# protoc -I=$PROTO_DIR "${PROTO_DIR}"/*.proto --plugin="protoc-gen-grpc-web=${PROTOC_GEN_TS_PATH}" --js_out=import_style=commonjs,binary:$OUT_DIR  --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT_DIR
# protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --plugin="protoc-gen-grpc-web=${PROTOC_GEN_WEB_PATH}" --js_out=import_style=commonjs,binary:$OUT_DIR --ts_out=service=grpc-web:$OUT_DIR --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT_DIR -I=$PROTO_DIR "${PROTO_DIR}"/*.proto
# protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --js_out=import_style=commonjs,binary:$OUT_DIR --ts_out=service=grpc-web:$OUT_DIR  -I=$PROTO_DIR "${PROTO_DIR}"/*.proto
protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --js_out=import_style=commonjs,binary:$OUT_DIR --ts_out=service=grpc-web:$OUT_DIR  -I=$PROTO_DIR "${PROTO_DIR}"/*.proto