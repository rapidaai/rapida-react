// package: assistant_api
// file: assistant-api.proto

var assistant_api_pb = require("./assistant-api_pb");
var common_pb = require("./common_pb");
var assistant_tool_pb = require("./assistant-tool_pb");
var assistant_http_log_pb = require("./assistant-http-log_pb");
var assistant_knowledge_pb = require("./assistant-knowledge_pb");
var assistant_provider_pb = require("./assistant-provider_pb");
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

AssistantService.CreateAssistant = {
  methodName: "CreateAssistant",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.CreateAssistantRequest,
  responseType: assistant_api_pb.GetAssistantResponse
};

AssistantService.DeleteAssistant = {
  methodName: "DeleteAssistant",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.DeleteAssistantRequest,
  responseType: assistant_api_pb.GetAssistantResponse
};

AssistantService.GetAllAssistantProvider = {
  methodName: "GetAllAssistantProvider",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_provider_pb.GetAllAssistantProviderRequest,
  responseType: assistant_provider_pb.GetAllAssistantProviderResponse
};

AssistantService.CreateAssistantProvider = {
  methodName: "CreateAssistantProvider",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_provider_pb.CreateAssistantProviderRequest,
  responseType: assistant_provider_pb.GetAssistantProviderResponse
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
  requestType: assistant_provider_pb.UpdateAssistantVersionRequest,
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

AssistantService.GetAllConversationMessage = {
  methodName: "GetAllConversationMessage",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: common_pb.GetAllConversationMessageRequest,
  responseType: common_pb.GetAllConversationMessageResponse
};

AssistantService.GetAllMessage = {
  methodName: "GetAllMessage",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllMessageRequest,
  responseType: assistant_api_pb.GetAllMessageResponse
};

AssistantService.GetAssistantConfiguration = {
  methodName: "GetAssistantConfiguration",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAssistantConfigurationRequest,
  responseType: assistant_api_pb.GetAssistantConfigurationResponse
};

AssistantService.GetAllAssistantConfiguration = {
  methodName: "GetAllAssistantConfiguration",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAllAssistantConfigurationRequest,
  responseType: assistant_api_pb.GetAllAssistantConfigurationResponse
};

AssistantService.CreateAssistantConfiguration = {
  methodName: "CreateAssistantConfiguration",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.CreateAssistantConfigurationRequest,
  responseType: assistant_api_pb.GetAssistantConfigurationResponse
};

AssistantService.UpdateAssistantConfiguration = {
  methodName: "UpdateAssistantConfiguration",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.UpdateAssistantConfigurationRequest,
  responseType: assistant_api_pb.GetAssistantConfigurationResponse
};

AssistantService.DeleteAssistantConfiguration = {
  methodName: "DeleteAssistantConfiguration",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.DeleteAssistantConfigurationRequest,
  responseType: assistant_api_pb.GetAssistantConfigurationResponse
};

AssistantService.GetAllAssistantConversation = {
  methodName: "GetAllAssistantConversation",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: common_pb.GetAllAssistantConversationRequest,
  responseType: common_pb.GetAllAssistantConversationResponse
};

AssistantService.GetAssistantConversation = {
  methodName: "GetAssistantConversation",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_api_pb.GetAssistantConversationRequest,
  responseType: assistant_api_pb.GetAssistantConversationResponse
};

AssistantService.GetAssistantHTTPLog = {
  methodName: "GetAssistantHTTPLog",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_http_log_pb.GetAssistantHTTPLogRequest,
  responseType: assistant_http_log_pb.GetAssistantHTTPLogResponse
};

AssistantService.GetAllAssistantHTTPLog = {
  methodName: "GetAllAssistantHTTPLog",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_http_log_pb.GetAllAssistantHTTPLogRequest,
  responseType: assistant_http_log_pb.GetAllAssistantHTTPLogResponse
};

AssistantService.RetryAssistantHTTPLog = {
  methodName: "RetryAssistantHTTPLog",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_http_log_pb.RetryAssistantHTTPLogRequest,
  responseType: assistant_http_log_pb.GetAssistantHTTPLogResponse
};

AssistantService.GetAssistantToolLog = {
  methodName: "GetAssistantToolLog",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_tool_pb.GetAssistantToolLogRequest,
  responseType: assistant_tool_pb.GetAssistantToolLogResponse
};

AssistantService.GetAllAssistantToolLog = {
  methodName: "GetAllAssistantToolLog",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_tool_pb.GetAllAssistantToolLogRequest,
  responseType: assistant_tool_pb.GetAllAssistantToolLogResponse
};

AssistantService.CreateAssistantTool = {
  methodName: "CreateAssistantTool",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_tool_pb.CreateAssistantToolRequest,
  responseType: assistant_tool_pb.GetAssistantToolResponse
};

AssistantService.GetAssistantTool = {
  methodName: "GetAssistantTool",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_tool_pb.GetAssistantToolRequest,
  responseType: assistant_tool_pb.GetAssistantToolResponse
};

AssistantService.GetAllAssistantTool = {
  methodName: "GetAllAssistantTool",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_tool_pb.GetAllAssistantToolRequest,
  responseType: assistant_tool_pb.GetAllAssistantToolResponse
};

AssistantService.DeleteAssistantTool = {
  methodName: "DeleteAssistantTool",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_tool_pb.DeleteAssistantToolRequest,
  responseType: assistant_tool_pb.GetAssistantToolResponse
};

AssistantService.UpdateAssistantTool = {
  methodName: "UpdateAssistantTool",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_tool_pb.UpdateAssistantToolRequest,
  responseType: assistant_tool_pb.GetAssistantToolResponse
};

AssistantService.CreateAssistantKnowledge = {
  methodName: "CreateAssistantKnowledge",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_knowledge_pb.CreateAssistantKnowledgeRequest,
  responseType: assistant_knowledge_pb.GetAssistantKnowledgeResponse
};

AssistantService.GetAssistantKnowledge = {
  methodName: "GetAssistantKnowledge",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_knowledge_pb.GetAssistantKnowledgeRequest,
  responseType: assistant_knowledge_pb.GetAssistantKnowledgeResponse
};

AssistantService.GetAllAssistantKnowledge = {
  methodName: "GetAllAssistantKnowledge",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_knowledge_pb.GetAllAssistantKnowledgeRequest,
  responseType: assistant_knowledge_pb.GetAllAssistantKnowledgeResponse
};

AssistantService.DeleteAssistantKnowledge = {
  methodName: "DeleteAssistantKnowledge",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_knowledge_pb.DeleteAssistantKnowledgeRequest,
  responseType: assistant_knowledge_pb.GetAssistantKnowledgeResponse
};

AssistantService.UpdateAssistantKnowledge = {
  methodName: "UpdateAssistantKnowledge",
  service: AssistantService,
  requestStream: false,
  responseStream: false,
  requestType: assistant_knowledge_pb.UpdateAssistantKnowledgeRequest,
  responseType: assistant_knowledge_pb.GetAssistantKnowledgeResponse
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

AssistantServiceClient.prototype.getAllAssistantProvider = function getAllAssistantProvider(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantProvider, {
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

AssistantServiceClient.prototype.createAssistantProvider = function createAssistantProvider(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantProvider, {
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

AssistantServiceClient.prototype.getAllMessage = function getAllMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllMessage, {
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

AssistantServiceClient.prototype.getAssistantConfiguration = function getAssistantConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantConfiguration, {
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

AssistantServiceClient.prototype.getAllAssistantConfiguration = function getAllAssistantConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantConfiguration, {
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

AssistantServiceClient.prototype.createAssistantConfiguration = function createAssistantConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantConfiguration, {
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

AssistantServiceClient.prototype.updateAssistantConfiguration = function updateAssistantConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.UpdateAssistantConfiguration, {
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

AssistantServiceClient.prototype.deleteAssistantConfiguration = function deleteAssistantConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.DeleteAssistantConfiguration, {
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

AssistantServiceClient.prototype.getAssistantHTTPLog = function getAssistantHTTPLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantHTTPLog, {
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

AssistantServiceClient.prototype.getAllAssistantHTTPLog = function getAllAssistantHTTPLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantHTTPLog, {
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

AssistantServiceClient.prototype.retryAssistantHTTPLog = function retryAssistantHTTPLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.RetryAssistantHTTPLog, {
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

AssistantServiceClient.prototype.getAssistantToolLog = function getAssistantToolLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantToolLog, {
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

AssistantServiceClient.prototype.getAllAssistantToolLog = function getAllAssistantToolLog(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantToolLog, {
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

AssistantServiceClient.prototype.createAssistantTool = function createAssistantTool(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantTool, {
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

AssistantServiceClient.prototype.getAssistantTool = function getAssistantTool(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantTool, {
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

AssistantServiceClient.prototype.deleteAssistantTool = function deleteAssistantTool(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.DeleteAssistantTool, {
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

AssistantServiceClient.prototype.updateAssistantTool = function updateAssistantTool(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.UpdateAssistantTool, {
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

AssistantServiceClient.prototype.createAssistantKnowledge = function createAssistantKnowledge(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.CreateAssistantKnowledge, {
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

AssistantServiceClient.prototype.getAssistantKnowledge = function getAssistantKnowledge(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAssistantKnowledge, {
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

AssistantServiceClient.prototype.getAllAssistantKnowledge = function getAllAssistantKnowledge(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.GetAllAssistantKnowledge, {
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

AssistantServiceClient.prototype.deleteAssistantKnowledge = function deleteAssistantKnowledge(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.DeleteAssistantKnowledge, {
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

AssistantServiceClient.prototype.updateAssistantKnowledge = function updateAssistantKnowledge(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AssistantService.UpdateAssistantKnowledge, {
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

