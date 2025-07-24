// package: vault_api
// file: vault-api.proto

var vault_api_pb = require("./vault-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var VaultService = (function () {
  function VaultService() {}
  VaultService.serviceName = "vault_api.VaultService";
  return VaultService;
}());

VaultService.CreateProviderCredential = {
  methodName: "CreateProviderCredential",
  service: VaultService,
  requestStream: false,
  responseStream: false,
  requestType: vault_api_pb.CreateProviderCredentialRequest,
  responseType: vault_api_pb.CreateProviderCredentialResponse
};

VaultService.CreateToolCredential = {
  methodName: "CreateToolCredential",
  service: VaultService,
  requestStream: false,
  responseStream: false,
  requestType: vault_api_pb.CreateToolCredentialRequest,
  responseType: vault_api_pb.CreateToolCredentialResponse
};

VaultService.DeleteProviderCredential = {
  methodName: "DeleteProviderCredential",
  service: VaultService,
  requestStream: false,
  responseStream: false,
  requestType: vault_api_pb.DeleteProviderCredentialRequest,
  responseType: vault_api_pb.DeleteProviderCredentialResponse
};

VaultService.GetAllOrganizationCredential = {
  methodName: "GetAllOrganizationCredential",
  service: VaultService,
  requestStream: false,
  responseStream: false,
  requestType: vault_api_pb.GetAllOrganizationCredentialRequest,
  responseType: vault_api_pb.GetAllOrganizationCredentialResponse
};

VaultService.GetProviderCredential = {
  methodName: "GetProviderCredential",
  service: VaultService,
  requestStream: false,
  responseStream: false,
  requestType: vault_api_pb.GetProviderCredentialRequest,
  responseType: vault_api_pb.GetProviderCredentialResponse
};

VaultService.GetOauth2VaultCredential = {
  methodName: "GetOauth2VaultCredential",
  service: VaultService,
  requestStream: false,
  responseStream: false,
  requestType: vault_api_pb.GetOauth2VaultCredentialRequest,
  responseType: vault_api_pb.GetOauth2VaultCredentialResponse
};

exports.VaultService = VaultService;

function VaultServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VaultServiceClient.prototype.createProviderCredential = function createProviderCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VaultService.CreateProviderCredential, {
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

VaultServiceClient.prototype.createToolCredential = function createToolCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VaultService.CreateToolCredential, {
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

VaultServiceClient.prototype.deleteProviderCredential = function deleteProviderCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VaultService.DeleteProviderCredential, {
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

VaultServiceClient.prototype.getAllOrganizationCredential = function getAllOrganizationCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VaultService.GetAllOrganizationCredential, {
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

VaultServiceClient.prototype.getProviderCredential = function getProviderCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VaultService.GetProviderCredential, {
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

VaultServiceClient.prototype.getOauth2VaultCredential = function getOauth2VaultCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VaultService.GetOauth2VaultCredential, {
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

exports.VaultServiceClient = VaultServiceClient;

