// package: web_api
// file: access-management-api.proto

var access_management_api_pb = require("./access-management-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AccessManagementService = (function () {
  function AccessManagementService() {}
  AccessManagementService.serviceName = "web_api.AccessManagementService";
  return AccessManagementService;
}());

AccessManagementService.ListPermissions = {
  methodName: "ListPermissions",
  service: AccessManagementService,
  requestStream: false,
  responseStream: false,
  requestType: access_management_api_pb.ListPermissionsRequest,
  responseType: access_management_api_pb.ListPermissionsResponse
};

AccessManagementService.ListRoles = {
  methodName: "ListRoles",
  service: AccessManagementService,
  requestStream: false,
  responseStream: false,
  requestType: access_management_api_pb.ListRolesRequest,
  responseType: access_management_api_pb.ListRolesResponse
};

AccessManagementService.GetRole = {
  methodName: "GetRole",
  service: AccessManagementService,
  requestStream: false,
  responseStream: false,
  requestType: access_management_api_pb.GetRoleRequest,
  responseType: access_management_api_pb.GetRoleResponse
};

AccessManagementService.CreateCustomRole = {
  methodName: "CreateCustomRole",
  service: AccessManagementService,
  requestStream: false,
  responseStream: false,
  requestType: access_management_api_pb.CreateCustomRoleRequest,
  responseType: access_management_api_pb.CreateCustomRoleResponse
};

AccessManagementService.UpdateCustomRole = {
  methodName: "UpdateCustomRole",
  service: AccessManagementService,
  requestStream: false,
  responseStream: false,
  requestType: access_management_api_pb.UpdateCustomRoleRequest,
  responseType: access_management_api_pb.UpdateCustomRoleResponse
};

AccessManagementService.ReduceCustomRolePermissions = {
  methodName: "ReduceCustomRolePermissions",
  service: AccessManagementService,
  requestStream: false,
  responseStream: false,
  requestType: access_management_api_pb.ReduceCustomRolePermissionsRequest,
  responseType: access_management_api_pb.ReduceCustomRolePermissionsResponse
};

AccessManagementService.ArchiveCustomRole = {
  methodName: "ArchiveCustomRole",
  service: AccessManagementService,
  requestStream: false,
  responseStream: false,
  requestType: access_management_api_pb.ArchiveCustomRoleRequest,
  responseType: access_management_api_pb.ArchiveCustomRoleResponse
};

exports.AccessManagementService = AccessManagementService;

function AccessManagementServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AccessManagementServiceClient.prototype.listPermissions = function listPermissions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AccessManagementService.ListPermissions, {
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

AccessManagementServiceClient.prototype.listRoles = function listRoles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AccessManagementService.ListRoles, {
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

AccessManagementServiceClient.prototype.getRole = function getRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AccessManagementService.GetRole, {
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

AccessManagementServiceClient.prototype.createCustomRole = function createCustomRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AccessManagementService.CreateCustomRole, {
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

AccessManagementServiceClient.prototype.updateCustomRole = function updateCustomRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AccessManagementService.UpdateCustomRole, {
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

AccessManagementServiceClient.prototype.reduceCustomRolePermissions = function reduceCustomRolePermissions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AccessManagementService.ReduceCustomRolePermissions, {
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

AccessManagementServiceClient.prototype.archiveCustomRole = function archiveCustomRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AccessManagementService.ArchiveCustomRole, {
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

exports.AccessManagementServiceClient = AccessManagementServiceClient;
