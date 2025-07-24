// package: integration_api
// file: sendgrid-api.proto

var sendgrid_api_pb = require("./sendgrid-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SendgridService = (function () {
  function SendgridService() {}
  SendgridService.serviceName = "integration_api.SendgridService";
  return SendgridService;
}());

SendgridService.WelcomeEmail = {
  methodName: "WelcomeEmail",
  service: SendgridService,
  requestStream: false,
  responseStream: false,
  requestType: sendgrid_api_pb.WelcomeEmailRequest,
  responseType: sendgrid_api_pb.WelcomeEmailResponse
};

SendgridService.ResetPasswordEmail = {
  methodName: "ResetPasswordEmail",
  service: SendgridService,
  requestStream: false,
  responseStream: false,
  requestType: sendgrid_api_pb.ResetPasswordEmailRequest,
  responseType: sendgrid_api_pb.ResetPasswordEmailResponse
};

SendgridService.InviteMemberEmail = {
  methodName: "InviteMemberEmail",
  service: SendgridService,
  requestStream: false,
  responseStream: false,
  requestType: sendgrid_api_pb.InviteMemeberEmailRequest,
  responseType: sendgrid_api_pb.InviteMemeberEmailResponse
};

exports.SendgridService = SendgridService;

function SendgridServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SendgridServiceClient.prototype.welcomeEmail = function welcomeEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SendgridService.WelcomeEmail, {
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

SendgridServiceClient.prototype.resetPasswordEmail = function resetPasswordEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SendgridService.ResetPasswordEmail, {
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

SendgridServiceClient.prototype.inviteMemberEmail = function inviteMemberEmail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SendgridService.InviteMemberEmail, {
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

exports.SendgridServiceClient = SendgridServiceClient;

