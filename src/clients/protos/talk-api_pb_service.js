// package: talk_api
// file: talk-api.proto

var talk_api_pb = require("./talk-api_pb");
var common_pb = require("./common_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TalkService = (function () {
  function TalkService() {}
  TalkService.serviceName = "talk_api.TalkService";
  return TalkService;
}());

TalkService.AssistantMessaging = {
  methodName: "AssistantMessaging",
  service: TalkService,
  requestStream: false,
  responseStream: true,
  requestType: talk_api_pb.AssistantMessagingRequest,
  responseType: talk_api_pb.AssistantMessagingResponse
};

TalkService.AssistantTalk = {
  methodName: "AssistantTalk",
  service: TalkService,
  requestStream: true,
  responseStream: true,
  requestType: talk_api_pb.AssistantMessagingRequest,
  responseType: talk_api_pb.AssistantMessagingResponse
};

TalkService.GetAllAssistantConversation = {
  methodName: "GetAllAssistantConversation",
  service: TalkService,
  requestStream: false,
  responseStream: false,
  requestType: common_pb.GetAllAssistantConversationRequest,
  responseType: common_pb.GetAllAssistantConversationResponse
};

TalkService.GetAllConversationMessage = {
  methodName: "GetAllConversationMessage",
  service: TalkService,
  requestStream: false,
  responseStream: false,
  requestType: common_pb.GetAllConversationMessageRequest,
  responseType: common_pb.GetAllConversationMessageResponse
};

TalkService.CreateMessageMetric = {
  methodName: "CreateMessageMetric",
  service: TalkService,
  requestStream: false,
  responseStream: false,
  requestType: talk_api_pb.CreateMessageMetricRequest,
  responseType: talk_api_pb.CreateMessageMetricResponse
};

TalkService.CreateConversationMetric = {
  methodName: "CreateConversationMetric",
  service: TalkService,
  requestStream: false,
  responseStream: false,
  requestType: talk_api_pb.CreateConversationMetricRequest,
  responseType: talk_api_pb.CreateConversationMetricResponse
};

TalkService.InitiateAssistantTalk = {
  methodName: "InitiateAssistantTalk",
  service: TalkService,
  requestStream: false,
  responseStream: false,
  requestType: talk_api_pb.InitiateAssistantTalkRequest,
  responseType: talk_api_pb.InitiateAssistantTalkResponse
};

TalkService.InitiateBulkAssistantTalk = {
  methodName: "InitiateBulkAssistantTalk",
  service: TalkService,
  requestStream: false,
  responseStream: false,
  requestType: talk_api_pb.InitiateBulkAssistantTalkRequest,
  responseType: talk_api_pb.InitiateBulkAssistantTalkResponse
};

exports.TalkService = TalkService;

function TalkServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TalkServiceClient.prototype.assistantMessaging = function assistantMessaging(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(TalkService.AssistantMessaging, {
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

TalkServiceClient.prototype.assistantTalk = function assistantTalk(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(TalkService.AssistantTalk, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

TalkServiceClient.prototype.getAllAssistantConversation = function getAllAssistantConversation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TalkService.GetAllAssistantConversation, {
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

TalkServiceClient.prototype.getAllConversationMessage = function getAllConversationMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TalkService.GetAllConversationMessage, {
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

TalkServiceClient.prototype.createMessageMetric = function createMessageMetric(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TalkService.CreateMessageMetric, {
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

TalkServiceClient.prototype.createConversationMetric = function createConversationMetric(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TalkService.CreateConversationMetric, {
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

TalkServiceClient.prototype.initiateAssistantTalk = function initiateAssistantTalk(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TalkService.InitiateAssistantTalk, {
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

TalkServiceClient.prototype.initiateBulkAssistantTalk = function initiateBulkAssistantTalk(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TalkService.InitiateBulkAssistantTalk, {
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

exports.TalkServiceClient = TalkServiceClient;

