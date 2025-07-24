// package: marketplace_api
// file: marketplace-api.proto

var marketplace_api_pb = require("./marketplace-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MarketplaceService = (function () {
  function MarketplaceService() {}
  MarketplaceService.serviceName = "marketplace_api.MarketplaceService";
  return MarketplaceService;
}());

MarketplaceService.GetAllDeployment = {
  methodName: "GetAllDeployment",
  service: MarketplaceService,
  requestStream: false,
  responseStream: false,
  requestType: marketplace_api_pb.GetAllDeploymentRequest,
  responseType: marketplace_api_pb.GetAllDeploymentResponse
};

exports.MarketplaceService = MarketplaceService;

function MarketplaceServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MarketplaceServiceClient.prototype.getAllDeployment = function getAllDeployment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MarketplaceService.GetAllDeployment, {
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

exports.MarketplaceServiceClient = MarketplaceServiceClient;

