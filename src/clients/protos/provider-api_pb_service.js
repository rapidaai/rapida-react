// package: provider_api
// file: provider-api.proto

var provider_api_pb = require("./provider-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ProviderService = (function () {
  function ProviderService() {}
  ProviderService.serviceName = "provider_api.ProviderService";
  return ProviderService;
}());

ProviderService.GetAllToolProvider = {
  methodName: "GetAllToolProvider",
  service: ProviderService,
  requestStream: false,
  responseStream: false,
  requestType: provider_api_pb.GetAllToolProviderRequest,
  responseType: provider_api_pb.GetAllToolProviderResponse
};

ProviderService.GetAllModelProvider = {
  methodName: "GetAllModelProvider",
  service: ProviderService,
  requestStream: false,
  responseStream: false,
  requestType: provider_api_pb.GetAllModelProviderRequest,
  responseType: provider_api_pb.GetAllModelProviderResponse
};

exports.ProviderService = ProviderService;

function ProviderServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProviderServiceClient.prototype.getAllToolProvider = function getAllToolProvider(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProviderService.GetAllToolProvider, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProviderServiceClient.prototype.getAllModelProvider = function getAllModelProvider(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProviderService.GetAllModelProvider, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ProviderServiceClient = ProviderServiceClient;

