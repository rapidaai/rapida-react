// package: observability_api
// file: observability-api.proto

var observability_api_pb = require("./observability-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ObservabilityService = (function () {
  function ObservabilityService() {}
  ObservabilityService.serviceName = "observability_api.ObservabilityService";
  return ObservabilityService;
}());

ObservabilityService.GetAllTelemetry = {
  methodName: "GetAllTelemetry",
  service: ObservabilityService,
  requestStream: false,
  responseStream: false,
  requestType: observability_api_pb.GetAllTelemetryRequest,
  responseType: observability_api_pb.GetAllTelemetryResponse
};

exports.ObservabilityService = ObservabilityService;

function ObservabilityServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ObservabilityServiceClient.prototype.getAllTelemetry = function getAllTelemetry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ObservabilityService.GetAllTelemetry, {
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

exports.ObservabilityServiceClient = ObservabilityServiceClient;

