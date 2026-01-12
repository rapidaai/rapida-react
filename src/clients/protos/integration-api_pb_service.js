// package: integration_api
// file: integration-api.proto

var integration_api_pb = require("./integration-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BedrockService = (function () {
  function BedrockService() {}
  BedrockService.serviceName = "integration_api.BedrockService";
  return BedrockService;
}());

BedrockService.Embedding = {
  methodName: "Embedding",
  service: BedrockService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.EmbeddingRequest,
  responseType: integration_api_pb.EmbeddingResponse
};

BedrockService.Chat = {
  methodName: "Chat",
  service: BedrockService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

BedrockService.VerifyCredential = {
  methodName: "VerifyCredential",
  service: BedrockService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.VerifyCredentialRequest,
  responseType: integration_api_pb.VerifyCredentialResponse
};

exports.BedrockService = BedrockService;

function BedrockServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BedrockServiceClient.prototype.embedding = function embedding(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BedrockService.Embedding, {
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

BedrockServiceClient.prototype.chat = function chat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BedrockService.Chat, {
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

BedrockServiceClient.prototype.verifyCredential = function verifyCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BedrockService.VerifyCredential, {
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

exports.BedrockServiceClient = BedrockServiceClient;

var OpenAiService = (function () {
  function OpenAiService() {}
  OpenAiService.serviceName = "integration_api.OpenAiService";
  return OpenAiService;
}());

OpenAiService.Embedding = {
  methodName: "Embedding",
  service: OpenAiService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.EmbeddingRequest,
  responseType: integration_api_pb.EmbeddingResponse
};

OpenAiService.Chat = {
  methodName: "Chat",
  service: OpenAiService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

OpenAiService.StreamChat = {
  methodName: "StreamChat",
  service: OpenAiService,
  requestStream: false,
  responseStream: true,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

OpenAiService.VerifyCredential = {
  methodName: "VerifyCredential",
  service: OpenAiService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.VerifyCredentialRequest,
  responseType: integration_api_pb.VerifyCredentialResponse
};

OpenAiService.GetModeration = {
  methodName: "GetModeration",
  service: OpenAiService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.GetModerationRequest,
  responseType: integration_api_pb.GetModerationResponse
};

exports.OpenAiService = OpenAiService;

function OpenAiServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

OpenAiServiceClient.prototype.embedding = function embedding(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OpenAiService.Embedding, {
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

OpenAiServiceClient.prototype.chat = function chat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OpenAiService.Chat, {
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

OpenAiServiceClient.prototype.streamChat = function streamChat(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(OpenAiService.StreamChat, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

OpenAiServiceClient.prototype.verifyCredential = function verifyCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OpenAiService.VerifyCredential, {
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

OpenAiServiceClient.prototype.getModeration = function getModeration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OpenAiService.GetModeration, {
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

exports.OpenAiServiceClient = OpenAiServiceClient;

var AzureService = (function () {
  function AzureService() {}
  AzureService.serviceName = "integration_api.AzureService";
  return AzureService;
}());

AzureService.Embedding = {
  methodName: "Embedding",
  service: AzureService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.EmbeddingRequest,
  responseType: integration_api_pb.EmbeddingResponse
};

AzureService.Chat = {
  methodName: "Chat",
  service: AzureService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

AzureService.StreamChat = {
  methodName: "StreamChat",
  service: AzureService,
  requestStream: false,
  responseStream: true,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

AzureService.VerifyCredential = {
  methodName: "VerifyCredential",
  service: AzureService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.VerifyCredentialRequest,
  responseType: integration_api_pb.VerifyCredentialResponse
};

AzureService.GetModeration = {
  methodName: "GetModeration",
  service: AzureService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.GetModerationRequest,
  responseType: integration_api_pb.GetModerationResponse
};

exports.AzureService = AzureService;

function AzureServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AzureServiceClient.prototype.embedding = function embedding(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AzureService.Embedding, {
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

AzureServiceClient.prototype.chat = function chat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AzureService.Chat, {
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

AzureServiceClient.prototype.streamChat = function streamChat(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(AzureService.StreamChat, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

AzureServiceClient.prototype.verifyCredential = function verifyCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AzureService.VerifyCredential, {
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

AzureServiceClient.prototype.getModeration = function getModeration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AzureService.GetModeration, {
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

exports.AzureServiceClient = AzureServiceClient;

var GeminiService = (function () {
  function GeminiService() {}
  GeminiService.serviceName = "integration_api.GeminiService";
  return GeminiService;
}());

GeminiService.Embedding = {
  methodName: "Embedding",
  service: GeminiService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.EmbeddingRequest,
  responseType: integration_api_pb.EmbeddingResponse
};

GeminiService.Chat = {
  methodName: "Chat",
  service: GeminiService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

GeminiService.StreamChat = {
  methodName: "StreamChat",
  service: GeminiService,
  requestStream: false,
  responseStream: true,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

GeminiService.VerifyCredential = {
  methodName: "VerifyCredential",
  service: GeminiService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.VerifyCredentialRequest,
  responseType: integration_api_pb.VerifyCredentialResponse
};

exports.GeminiService = GeminiService;

function GeminiServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GeminiServiceClient.prototype.embedding = function embedding(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GeminiService.Embedding, {
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

GeminiServiceClient.prototype.chat = function chat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GeminiService.Chat, {
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

GeminiServiceClient.prototype.streamChat = function streamChat(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(GeminiService.StreamChat, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

GeminiServiceClient.prototype.verifyCredential = function verifyCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(GeminiService.VerifyCredential, {
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

exports.GeminiServiceClient = GeminiServiceClient;

var VertexAiService = (function () {
  function VertexAiService() {}
  VertexAiService.serviceName = "integration_api.VertexAiService";
  return VertexAiService;
}());

VertexAiService.Embedding = {
  methodName: "Embedding",
  service: VertexAiService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.EmbeddingRequest,
  responseType: integration_api_pb.EmbeddingResponse
};

VertexAiService.Chat = {
  methodName: "Chat",
  service: VertexAiService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

VertexAiService.StreamChat = {
  methodName: "StreamChat",
  service: VertexAiService,
  requestStream: false,
  responseStream: true,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

VertexAiService.VerifyCredential = {
  methodName: "VerifyCredential",
  service: VertexAiService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.VerifyCredentialRequest,
  responseType: integration_api_pb.VerifyCredentialResponse
};

exports.VertexAiService = VertexAiService;

function VertexAiServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VertexAiServiceClient.prototype.embedding = function embedding(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VertexAiService.Embedding, {
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

VertexAiServiceClient.prototype.chat = function chat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VertexAiService.Chat, {
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

VertexAiServiceClient.prototype.streamChat = function streamChat(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(VertexAiService.StreamChat, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

VertexAiServiceClient.prototype.verifyCredential = function verifyCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VertexAiService.VerifyCredential, {
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

exports.VertexAiServiceClient = VertexAiServiceClient;

var ReplicateService = (function () {
  function ReplicateService() {}
  ReplicateService.serviceName = "integration_api.ReplicateService";
  return ReplicateService;
}());

ReplicateService.Chat = {
  methodName: "Chat",
  service: ReplicateService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

ReplicateService.StreamChat = {
  methodName: "StreamChat",
  service: ReplicateService,
  requestStream: false,
  responseStream: true,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

ReplicateService.VerifyCredential = {
  methodName: "VerifyCredential",
  service: ReplicateService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.VerifyCredentialRequest,
  responseType: integration_api_pb.VerifyCredentialResponse
};

exports.ReplicateService = ReplicateService;

function ReplicateServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ReplicateServiceClient.prototype.chat = function chat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ReplicateService.Chat, {
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

ReplicateServiceClient.prototype.streamChat = function streamChat(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(ReplicateService.StreamChat, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

ReplicateServiceClient.prototype.verifyCredential = function verifyCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ReplicateService.VerifyCredential, {
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

exports.ReplicateServiceClient = ReplicateServiceClient;

var AnthropicService = (function () {
  function AnthropicService() {}
  AnthropicService.serviceName = "integration_api.AnthropicService";
  return AnthropicService;
}());

AnthropicService.Chat = {
  methodName: "Chat",
  service: AnthropicService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

AnthropicService.StreamChat = {
  methodName: "StreamChat",
  service: AnthropicService,
  requestStream: false,
  responseStream: true,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

AnthropicService.VerifyCredential = {
  methodName: "VerifyCredential",
  service: AnthropicService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.VerifyCredentialRequest,
  responseType: integration_api_pb.VerifyCredentialResponse
};

exports.AnthropicService = AnthropicService;

function AnthropicServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AnthropicServiceClient.prototype.chat = function chat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AnthropicService.Chat, {
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

AnthropicServiceClient.prototype.streamChat = function streamChat(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(AnthropicService.StreamChat, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

AnthropicServiceClient.prototype.verifyCredential = function verifyCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AnthropicService.VerifyCredential, {
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

exports.AnthropicServiceClient = AnthropicServiceClient;

var CohereService = (function () {
  function CohereService() {}
  CohereService.serviceName = "integration_api.CohereService";
  return CohereService;
}());

CohereService.Embedding = {
  methodName: "Embedding",
  service: CohereService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.EmbeddingRequest,
  responseType: integration_api_pb.EmbeddingResponse
};

CohereService.Reranking = {
  methodName: "Reranking",
  service: CohereService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.RerankingRequest,
  responseType: integration_api_pb.RerankingResponse
};

CohereService.Chat = {
  methodName: "Chat",
  service: CohereService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

CohereService.StreamChat = {
  methodName: "StreamChat",
  service: CohereService,
  requestStream: false,
  responseStream: true,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

CohereService.VerifyCredential = {
  methodName: "VerifyCredential",
  service: CohereService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.VerifyCredentialRequest,
  responseType: integration_api_pb.VerifyCredentialResponse
};

exports.CohereService = CohereService;

function CohereServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CohereServiceClient.prototype.embedding = function embedding(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CohereService.Embedding, {
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

CohereServiceClient.prototype.reranking = function reranking(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CohereService.Reranking, {
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

CohereServiceClient.prototype.chat = function chat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CohereService.Chat, {
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

CohereServiceClient.prototype.streamChat = function streamChat(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(CohereService.StreamChat, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

CohereServiceClient.prototype.verifyCredential = function verifyCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CohereService.VerifyCredential, {
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

exports.CohereServiceClient = CohereServiceClient;

var HuggingfaceService = (function () {
  function HuggingfaceService() {}
  HuggingfaceService.serviceName = "integration_api.HuggingfaceService";
  return HuggingfaceService;
}());

HuggingfaceService.Chat = {
  methodName: "Chat",
  service: HuggingfaceService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

HuggingfaceService.VerifyCredential = {
  methodName: "VerifyCredential",
  service: HuggingfaceService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.VerifyCredentialRequest,
  responseType: integration_api_pb.VerifyCredentialResponse
};

exports.HuggingfaceService = HuggingfaceService;

function HuggingfaceServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

HuggingfaceServiceClient.prototype.chat = function chat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuggingfaceService.Chat, {
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

HuggingfaceServiceClient.prototype.verifyCredential = function verifyCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HuggingfaceService.VerifyCredential, {
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

exports.HuggingfaceServiceClient = HuggingfaceServiceClient;

var MistralService = (function () {
  function MistralService() {}
  MistralService.serviceName = "integration_api.MistralService";
  return MistralService;
}());

MistralService.Chat = {
  methodName: "Chat",
  service: MistralService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

MistralService.StreamChat = {
  methodName: "StreamChat",
  service: MistralService,
  requestStream: false,
  responseStream: true,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

MistralService.VerifyCredential = {
  methodName: "VerifyCredential",
  service: MistralService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.VerifyCredentialRequest,
  responseType: integration_api_pb.VerifyCredentialResponse
};

exports.MistralService = MistralService;

function MistralServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MistralServiceClient.prototype.chat = function chat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MistralService.Chat, {
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

MistralServiceClient.prototype.streamChat = function streamChat(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MistralService.StreamChat, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MistralServiceClient.prototype.verifyCredential = function verifyCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MistralService.VerifyCredential, {
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

exports.MistralServiceClient = MistralServiceClient;

var StabilityAiService = (function () {
  function StabilityAiService() {}
  StabilityAiService.serviceName = "integration_api.StabilityAiService";
  return StabilityAiService;
}());

StabilityAiService.VerifyCredential = {
  methodName: "VerifyCredential",
  service: StabilityAiService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.VerifyCredentialRequest,
  responseType: integration_api_pb.VerifyCredentialResponse
};

exports.StabilityAiService = StabilityAiService;

function StabilityAiServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

StabilityAiServiceClient.prototype.verifyCredential = function verifyCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(StabilityAiService.VerifyCredential, {
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

exports.StabilityAiServiceClient = StabilityAiServiceClient;

var TogetherAiService = (function () {
  function TogetherAiService() {}
  TogetherAiService.serviceName = "integration_api.TogetherAiService";
  return TogetherAiService;
}());

TogetherAiService.Chat = {
  methodName: "Chat",
  service: TogetherAiService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.ChatRequest,
  responseType: integration_api_pb.ChatResponse
};

TogetherAiService.VerifyCredential = {
  methodName: "VerifyCredential",
  service: TogetherAiService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.VerifyCredentialRequest,
  responseType: integration_api_pb.VerifyCredentialResponse
};

exports.TogetherAiService = TogetherAiService;

function TogetherAiServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TogetherAiServiceClient.prototype.chat = function chat(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TogetherAiService.Chat, {
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

TogetherAiServiceClient.prototype.verifyCredential = function verifyCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TogetherAiService.VerifyCredential, {
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

exports.TogetherAiServiceClient = TogetherAiServiceClient;

var DeepInfraService = (function () {
  function DeepInfraService() {}
  DeepInfraService.serviceName = "integration_api.DeepInfraService";
  return DeepInfraService;
}());

DeepInfraService.VerifyCredential = {
  methodName: "VerifyCredential",
  service: DeepInfraService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.VerifyCredentialRequest,
  responseType: integration_api_pb.VerifyCredentialResponse
};

exports.DeepInfraService = DeepInfraService;

function DeepInfraServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DeepInfraServiceClient.prototype.verifyCredential = function verifyCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeepInfraService.VerifyCredential, {
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

exports.DeepInfraServiceClient = DeepInfraServiceClient;

var VoyageAiService = (function () {
  function VoyageAiService() {}
  VoyageAiService.serviceName = "integration_api.VoyageAiService";
  return VoyageAiService;
}());

VoyageAiService.Embedding = {
  methodName: "Embedding",
  service: VoyageAiService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.EmbeddingRequest,
  responseType: integration_api_pb.EmbeddingResponse
};

VoyageAiService.Reranking = {
  methodName: "Reranking",
  service: VoyageAiService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.RerankingRequest,
  responseType: integration_api_pb.RerankingResponse
};

VoyageAiService.VerifyCredential = {
  methodName: "VerifyCredential",
  service: VoyageAiService,
  requestStream: false,
  responseStream: false,
  requestType: integration_api_pb.VerifyCredentialRequest,
  responseType: integration_api_pb.VerifyCredentialResponse
};

exports.VoyageAiService = VoyageAiService;

function VoyageAiServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

VoyageAiServiceClient.prototype.embedding = function embedding(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VoyageAiService.Embedding, {
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

VoyageAiServiceClient.prototype.reranking = function reranking(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VoyageAiService.Reranking, {
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

VoyageAiServiceClient.prototype.verifyCredential = function verifyCredential(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(VoyageAiService.VerifyCredential, {
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

exports.VoyageAiServiceClient = VoyageAiServiceClient;

