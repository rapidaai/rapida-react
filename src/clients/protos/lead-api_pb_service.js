// package: lead_api
// file: lead-api.proto

var lead_api_pb = require("./lead-api_pb");
var common_pb = require("./common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var LeadGeneratorService = (function () {
  function LeadGeneratorService() {}
  LeadGeneratorService.serviceName = "lead_api.LeadGeneratorService";
  return LeadGeneratorService;
}());

LeadGeneratorService.CreateLead = {
  methodName: "CreateLead",
  service: LeadGeneratorService,
  requestStream: false,
  responseStream: false,
  requestType: lead_api_pb.CreateLeadRequest,
  responseType: common_pb.BaseResponse
};

exports.LeadGeneratorService = LeadGeneratorService;

function LeadGeneratorServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LeadGeneratorServiceClient.prototype.createLead = function createLead(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LeadGeneratorService.CreateLead, {
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

exports.LeadGeneratorServiceClient = LeadGeneratorServiceClient;

