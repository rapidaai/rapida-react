// package: assistant_api
// file: assistant-deployment.proto

var assistant_deployment_pb = require("./assistant-deployment_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AssistantDeploymentService = (function () {
  function AssistantDeploymentService() {}
  AssistantDeploymentService.serviceName = "assistant_api.AssistantDeploymentService";
  return AssistantDeploymentService;
}());

AssistantDeploymentService.CreateAssistantApiDeployment = {
  methodName: "CreateAssistantApiDeployment",
  service: AssistantDeploymentService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_deployment_pb.CreateAssistantApiDeploymentRequest,
  responseType: assistant_deployment_pb.AssistantApiDeploymentResponse
};

AssistantDeploymentService.GetAssistantApiDeployment = {
  methodName: "GetAssistantApiDeployment",
  service: AssistantDeploymentService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_deployment_pb.GetAssistantDeploymentRequest,
  responseType: assistant_deployment_pb.AssistantApiDeploymentResponse
};

AssistantDeploymentService.CreateAssistantWebpluginDeployment = {
  methodName: "CreateAssistantWebpluginDeployment",
  service: AssistantDeploymentService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_deployment_pb.CreateAssistantWebpluginDeploymentRequest,
  responseType: assistant_deployment_pb.AssistantWebpluginDeploymentResponse
};

AssistantDeploymentService.GetAssistantWebpluginDeployment = {
  methodName: "GetAssistantWebpluginDeployment",
  service: AssistantDeploymentService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_deployment_pb.GetAssistantDeploymentRequest,
  responseType: assistant_deployment_pb.AssistantWebpluginDeploymentResponse
};

AssistantDeploymentService.CreateAssistantDebuggerDeployment = {
  methodName: "CreateAssistantDebuggerDeployment",
  service: AssistantDeploymentService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_deployment_pb.CreateAssistantDebuggerDeploymentRequest,
  responseType: assistant_deployment_pb.AssistantDebuggerDeploymentResponse
};

AssistantDeploymentService.GetAssistantDebuggerDeployment = {
  methodName: "GetAssistantDebuggerDeployment",
  service: AssistantDeploymentService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_deployment_pb.GetAssistantDeploymentRequest,
  responseType: assistant_deployment_pb.AssistantDebuggerDeploymentResponse
};

AssistantDeploymentService.CreateAssistantWhatsappDeployment = {
  methodName: "CreateAssistantWhatsappDeployment",
  service: AssistantDeploymentService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_deployment_pb.CreateAssistantWhatsappDeploymentRequest,
  responseType: assistant_deployment_pb.AssistantWhatsappDeploymentResponse
};

AssistantDeploymentService.GetAssistantWhatsappDeployment = {
  methodName: "GetAssistantWhatsappDeployment",
  service: AssistantDeploymentService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_deployment_pb.GetAssistantDeploymentRequest,
  responseType: assistant_deployment_pb.AssistantWhatsappDeploymentResponse
};

AssistantDeploymentService.CreateAssistantPhoneDeployment = {
  methodName: "CreateAssistantPhoneDeployment",
  service: AssistantDeploymentService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_deployment_pb.CreateAssistantPhoneDeploymentRequest,
  responseType: assistant_deployment_pb.AssistantPhoneDeploymentResponse
};

AssistantDeploymentService.GetAssistantPhoneDeployment = {
  methodName: "GetAssistantPhoneDeployment",
  service: AssistantDeploymentService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_deployment_pb.GetAssistantDeploymentRequest,
  responseType: assistant_deployment_pb.AssistantPhoneDeploymentResponse
};

exports.AssistantDeploymentService = AssistantDeploymentService;

function AssistantDeploymentServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AssistantDeploymentServiceClient.prototype.createAssistantApiDeployment = function createAssistantApiDeployment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantDeploymentService.CreateAssistantApiDeployment, {
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

AssistantDeploymentServiceClient.prototype.getAssistantApiDeployment = function getAssistantApiDeployment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantDeploymentService.GetAssistantApiDeployment, {
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

AssistantDeploymentServiceClient.prototype.createAssistantWebpluginDeployment = function createAssistantWebpluginDeployment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantDeploymentService.CreateAssistantWebpluginDeployment, {
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

AssistantDeploymentServiceClient.prototype.getAssistantWebpluginDeployment = function getAssistantWebpluginDeployment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantDeploymentService.GetAssistantWebpluginDeployment, {
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

AssistantDeploymentServiceClient.prototype.createAssistantDebuggerDeployment = function createAssistantDebuggerDeployment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantDeploymentService.CreateAssistantDebuggerDeployment, {
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

AssistantDeploymentServiceClient.prototype.getAssistantDebuggerDeployment = function getAssistantDebuggerDeployment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantDeploymentService.GetAssistantDebuggerDeployment, {
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

AssistantDeploymentServiceClient.prototype.createAssistantWhatsappDeployment = function createAssistantWhatsappDeployment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantDeploymentService.CreateAssistantWhatsappDeployment, {
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

AssistantDeploymentServiceClient.prototype.getAssistantWhatsappDeployment = function getAssistantWhatsappDeployment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantDeploymentService.GetAssistantWhatsappDeployment, {
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

AssistantDeploymentServiceClient.prototype.createAssistantPhoneDeployment = function createAssistantPhoneDeployment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantDeploymentService.CreateAssistantPhoneDeployment, {
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

AssistantDeploymentServiceClient.prototype.getAssistantPhoneDeployment = function getAssistantPhoneDeployment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantDeploymentService.GetAssistantPhoneDeployment, {
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

exports.AssistantDeploymentServiceClient = AssistantDeploymentServiceClient;

