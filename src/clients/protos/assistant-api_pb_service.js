// package: assistant_api
// file: assistant-api.proto

var assistant_api_pb = require("./assistant-api_pb");
var common_pb = require("./common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AssistantService = (function () {
  function AssistantService() {}
  AssistantService.serviceName = "assistant_api.AssistantService";
  return AssistantService;
}());

AssistantService.GetAssistant = {
  methodName: "GetAssistant",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAssistantRequest,
  responseType: assistant_api_pb.GetAssistantResponse
};

AssistantService.GetAllAssistant = {
  methodName: "GetAllAssistant",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllAssistantRequest,
  responseType: assistant_api_pb.GetAllAssistantResponse
};

AssistantService.GetAllAssistantProviderModel = {
  methodName: "GetAllAssistantProviderModel",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllAssistantProviderModelRequest,
  responseType: assistant_api_pb.GetAllAssistantProviderModelResponse
};

AssistantService.CreateAssistant = {
  methodName: "CreateAssistant",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.CreateAssistantRequest,
  responseType: assistant_api_pb.CreateAssistantResponse
};

AssistantService.CreateAssistantProviderModel = {
  methodName: "CreateAssistantProviderModel",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.CreateAssistantProviderModelRequest,
  responseType: assistant_api_pb.CreateAssistantProviderModelResponse
};

AssistantService.CreateAssistantKnowledgeConfiguration = {
  methodName: "CreateAssistantKnowledgeConfiguration",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.CreateAssistantKnowledgeConfigurationRequest,
  responseType: assistant_api_pb.GetAssistantResponse
};

AssistantService.CreateAssistantToolConfiguration = {
  methodName: "CreateAssistantToolConfiguration",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.CreateAssistantToolConfigurationRequest,
  responseType: assistant_api_pb.GetAssistantResponse
};

AssistantService.CreateAssistantTag = {
  methodName: "CreateAssistantTag",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.CreateAssistantTagRequest,
  responseType: assistant_api_pb.GetAssistantResponse
};

AssistantService.UpdateAssistantVersion = {
  methodName: "UpdateAssistantVersion",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.UpdateAssistantVersionRequest,
  responseType: assistant_api_pb.UpdateAssistantVersionResponse
};

AssistantService.UpdateAssistantDetail = {
  methodName: "UpdateAssistantDetail",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.UpdateAssistantDetailRequest,
  responseType: assistant_api_pb.GetAssistantResponse
};

AssistantService.GetAllAssistantMessage = {
  methodName: "GetAllAssistantMessage",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllAssistantMessageRequest,
  responseType: assistant_api_pb.GetAllAssistantMessageResponse
};

AssistantService.GetAllAssistantConversation = {
  methodName: "GetAllAssistantConversation",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: common_pb.GetAllAssistantConversationRequest,
  responseType: common_pb.GetAllAssistantConversationResponse
};

AssistantService.GetAllConversationMessage = {
  methodName: "GetAllConversationMessage",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: common_pb.GetAllConversationMessageRequest,
  responseType: common_pb.GetAllConversationMessageResponse
};

AssistantService.GetAssistantSkill = {
  methodName: "GetAssistantSkill",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAssistantSkillRequest,
  responseType: assistant_api_pb.GetAssistantSkillResponse
};

AssistantService.GetAllAssistantSkill = {
  methodName: "GetAllAssistantSkill",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllAssistantSkillRequest,
  responseType: assistant_api_pb.GetAllAssistantSkillResponse
};

AssistantService.GetAllAssistantEmbeddedSkill = {
  methodName: "GetAllAssistantEmbeddedSkill",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllAssistantEmbeddedSkillRequest,
  responseType: assistant_api_pb.GetAllAssistantEmbeddedSkillResponse
};

exports.AssistantService = AssistantService;

function AssistantServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AssistantServiceClient.prototype.getAssistant = function getAssistant(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistant, {
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

AssistantServiceClient.prototype.getAllAssistant = function getAllAssistant(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistant, {
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

AssistantServiceClient.prototype.getAllAssistantProviderModel = function getAllAssistantProviderModel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantProviderModel, {
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

AssistantServiceClient.prototype.createAssistant = function createAssistant(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistant, {
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

AssistantServiceClient.prototype.createAssistantProviderModel = function createAssistantProviderModel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantProviderModel, {
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

AssistantServiceClient.prototype.createAssistantKnowledgeConfiguration = function createAssistantKnowledgeConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantKnowledgeConfiguration, {
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

AssistantServiceClient.prototype.createAssistantToolConfiguration = function createAssistantToolConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantToolConfiguration, {
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

AssistantServiceClient.prototype.createAssistantTag = function createAssistantTag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantTag, {
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

AssistantServiceClient.prototype.updateAssistantVersion = function updateAssistantVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.UpdateAssistantVersion, {
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

AssistantServiceClient.prototype.updateAssistantDetail = function updateAssistantDetail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.UpdateAssistantDetail, {
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

AssistantServiceClient.prototype.getAllAssistantMessage = function getAllAssistantMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantMessage, {
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

AssistantServiceClient.prototype.getAllAssistantConversation = function getAllAssistantConversation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantConversation, {
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

AssistantServiceClient.prototype.getAllConversationMessage = function getAllConversationMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllConversationMessage, {
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

AssistantServiceClient.prototype.getAssistantSkill = function getAssistantSkill(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantSkill, {
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

AssistantServiceClient.prototype.getAllAssistantSkill = function getAllAssistantSkill(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantSkill, {
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

AssistantServiceClient.prototype.getAllAssistantEmbeddedSkill = function getAllAssistantEmbeddedSkill(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantEmbeddedSkill, {
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

exports.AssistantServiceClient = AssistantServiceClient;

