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
  responseType: assistant_api_pb.GetAssistantResponse
};

AssistantService.CreateAssistantProviderModel = {
  methodName: "CreateAssistantProviderModel",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.CreateAssistantProviderModelRequest,
  responseType: assistant_api_pb.GetAssistantProviderModelResponse
};

AssistantService.CreateAssistantKnowledgeConfiguration = {
  methodName: "CreateAssistantKnowledgeConfiguration",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.CreateAssistantKnowledgeConfigurationRequest,
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
  responseType: assistant_api_pb.GetAssistantResponse
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

AssistantService.CreateAssistantToolConfiguration = {
  methodName: "CreateAssistantToolConfiguration",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.CreateAssistantToolConfigurationRequest,
  responseType: assistant_api_pb.GetAssistantResponse
};

AssistantService.GetAllAssistantTool = {
  methodName: "GetAllAssistantTool",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllAssistantToolRequest,
  responseType: assistant_api_pb.GetAllAssistantToolResponse
};

AssistantService.GetAssistantConversation = {
  methodName: "GetAssistantConversation",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAssistantConversationRequest,
  responseType: assistant_api_pb.GetAssistantConversationResponse
};

AssistantService.DeleteAssistant = {
  methodName: "DeleteAssistant",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.DeleteAssistantRequest,
  responseType: assistant_api_pb.GetAssistantResponse
};

AssistantService.GetAssistantWebhookLog = {
  methodName: "GetAssistantWebhookLog",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAssistantWebhookLogRequest,
  responseType: assistant_api_pb.GetAssistantWebhookLogResponse
};

AssistantService.GetAllAssistantWebhookLog = {
  methodName: "GetAllAssistantWebhookLog",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllAssistantWebhookLogRequest,
  responseType: assistant_api_pb.GetAllAssistantWebhookLogResponse
};

AssistantService.GetAllAssistantWebhook = {
  methodName: "GetAllAssistantWebhook",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllAssistantWebhookRequest,
  responseType: assistant_api_pb.GetAllAssistantWebhookResponse
};

AssistantService.GetAssistantWebhook = {
  methodName: "GetAssistantWebhook",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAssistantWebhookRequest,
  responseType: assistant_api_pb.GetAssistantWebhookResponse
};

AssistantService.CreateAssistantWebhook = {
  methodName: "CreateAssistantWebhook",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.CreateAssistantWebhookRequest,
  responseType: assistant_api_pb.GetAssistantWebhookResponse
};

AssistantService.UpdateAssistantWebhook = {
  methodName: "UpdateAssistantWebhook",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.UpdateAssistantWebhookRequest,
  responseType: assistant_api_pb.GetAssistantWebhookResponse
};

AssistantService.DeleteAssistantWebhook = {
  methodName: "DeleteAssistantWebhook",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.DeleteAssistantWebhookRequest,
  responseType: assistant_api_pb.GetAssistantWebhookResponse
};

AssistantService.GetAssistantAnalysis = {
  methodName: "GetAssistantAnalysis",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAssistantAnalysisRequest,
  responseType: assistant_api_pb.GetAssistantAnalysisResponse
};

AssistantService.UpdateAssistantAnalysis = {
  methodName: "UpdateAssistantAnalysis",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.UpdateAssistantAnalysisRequest,
  responseType: assistant_api_pb.GetAssistantAnalysisResponse
};

AssistantService.CreateAssistantAnalysis = {
  methodName: "CreateAssistantAnalysis",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.CreateAssistantAnalysisRequest,
  responseType: assistant_api_pb.GetAssistantAnalysisResponse
};

AssistantService.DeleteAssistantAnalysis = {
  methodName: "DeleteAssistantAnalysis",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.DeleteAssistantAnalysisRequest,
  responseType: assistant_api_pb.GetAssistantAnalysisResponse
};

AssistantService.GetAllAssistantAnalysis = {
  methodName: "GetAllAssistantAnalysis",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllAssistantAnalysisRequest,
  responseType: assistant_api_pb.GetAllAssistantAnalysisResponse
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

AssistantServiceClient.prototype.getAllAssistantTool = function getAllAssistantTool(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantTool, {
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

AssistantServiceClient.prototype.getAssistantConversation = function getAssistantConversation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantConversation, {
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

AssistantServiceClient.prototype.deleteAssistant = function deleteAssistant(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.DeleteAssistant, {
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

AssistantServiceClient.prototype.getAssistantWebhookLog = function getAssistantWebhookLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantWebhookLog, {
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

AssistantServiceClient.prototype.getAllAssistantWebhookLog = function getAllAssistantWebhookLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantWebhookLog, {
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

AssistantServiceClient.prototype.getAllAssistantWebhook = function getAllAssistantWebhook(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantWebhook, {
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

AssistantServiceClient.prototype.getAssistantWebhook = function getAssistantWebhook(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantWebhook, {
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

AssistantServiceClient.prototype.createAssistantWebhook = function createAssistantWebhook(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantWebhook, {
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

AssistantServiceClient.prototype.updateAssistantWebhook = function updateAssistantWebhook(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.UpdateAssistantWebhook, {
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

AssistantServiceClient.prototype.deleteAssistantWebhook = function deleteAssistantWebhook(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.DeleteAssistantWebhook, {
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

AssistantServiceClient.prototype.getAssistantAnalysis = function getAssistantAnalysis(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantAnalysis, {
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

AssistantServiceClient.prototype.updateAssistantAnalysis = function updateAssistantAnalysis(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.UpdateAssistantAnalysis, {
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

AssistantServiceClient.prototype.createAssistantAnalysis = function createAssistantAnalysis(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantAnalysis, {
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

AssistantServiceClient.prototype.deleteAssistantAnalysis = function deleteAssistantAnalysis(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.DeleteAssistantAnalysis, {
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

AssistantServiceClient.prototype.getAllAssistantAnalysis = function getAllAssistantAnalysis(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantAnalysis, {
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

var ToolService = (function () {
  function ToolService() {}
  ToolService.serviceName = "assistant_api.ToolService";
  return ToolService;
}());

ToolService.GetAllTool = {
  methodName: "GetAllTool",
  service: ToolService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllToolRequest,
  responseType: assistant_api_pb.GetAllToolResponse
};

ToolService.GetTool = {
  methodName: "GetTool",
  service: ToolService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetToolRequest,
  responseType: assistant_api_pb.GetToolResponse
};

exports.ToolService = ToolService;

function ToolServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ToolServiceClient.prototype.getAllTool = function getAllTool(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ToolService.GetAllTool, {
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

ToolServiceClient.prototype.getTool = function getTool(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ToolService.GetTool, {
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

exports.ToolServiceClient = ToolServiceClient;

