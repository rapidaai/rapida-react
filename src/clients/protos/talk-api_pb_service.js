// package: talk_api
// file: talk-api.proto

var talk_api_pb = require("./talk-api_pb");
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
  requestType: talk_api_pb.GetAllAssistantConversationRequest,
  responseType: talk_api_pb.GetAllAssistantConversationResponse
};

TalkService.GetAllConversationMessage = {
  methodName: "GetAllConversationMessage",
  service: TalkService,
  requestStream: false,
  responseStream: false,
  requestType: talk_api_pb.GetAllConversationMessageRequest,
  responseType: talk_api_pb.GetAllConversationMessageResponse
};

TalkService.MessageFeedback = {
  methodName: "MessageFeedback",
  service: TalkService,
  requestStream: false,
  responseStream: false,
  requestType: talk_api_pb.MessageFeedbackRequest,
  responseType: talk_api_pb.MessageFeedbackResponse
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

TalkServiceClient.prototype.messageFeedback = function messageFeedback(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TalkService.MessageFeedback, {
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

