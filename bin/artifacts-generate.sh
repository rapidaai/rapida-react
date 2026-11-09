PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
OUT_DIR="./src/clients/protos"
PROTO_DIR="./src/clients/protos/artifacts"
PROTOC_BIN="${PROTOC:-protoc}"

if ! "${PROTOC_BIN}" --version | grep -q '^libprotoc 3\.'; then
    if command -v brew >/dev/null 2>&1 && [ -x "$(brew --prefix protobuf@3)/bin/protoc" ]; then
        PROTOC_BIN="$(brew --prefix protobuf@3)/bin/protoc"
    else
        echo "protoc 3 is required to generate the established JavaScript artifacts" >&2
        exit 1
    fi
fi

rm -rf ./src/clients/protos/*.js
rm -rf ./src/clients/protos/*.ts
# protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --js_out=import_style=commonjs,binary:$OUT_DIR --ts_out=service=grpc-web:$OUT_DIR -I=$PROTO_DIR "${PROTO_DIR}"/*.proto
# protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --js_out=import_style=commonjs,binary:$OUT_DIR --ts_out=service=grpc-web:$OUT_DIR -I=$PROTO_DIR "${PROTO_DIR}"/*.proto

"${PROTOC_BIN}" \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-web:${OUT_DIR}" \
    -I=$PROTO_DIR \
    "${PROTO_DIR}"/*.proto
