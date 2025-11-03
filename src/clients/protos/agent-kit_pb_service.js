// package: agent_kit
// file: agent-kit.proto

var agent_kit_pb = require("./agent-kit_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AgentAction = (function () {
  function AgentAction() {}
  AgentAction.serviceName = "agent_kit.AgentAction";
  return AgentAction;
}());

AgentAction.Action = {
  methodName: "Action",
  service: AgentAction,
  requestStream: true,
  responseStream: true,
  requestType: agent_kit_pb.AssistantActionRequest,
  responseType: agent_kit_pb.AssistantActionResponse
};

exports.AgentAction = AgentAction;

function AgentActionClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AgentActionClient.prototype.action = function action(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(AgentAction.Action, {
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

exports.AgentActionClient = AgentActionClient;

var AgentTalk = (function () {
  function AgentTalk() {}
  AgentTalk.serviceName = "agent_kit.AgentTalk";
  return AgentTalk;
}());

AgentTalk.Talk = {
  methodName: "Talk",
  service: AgentTalk,
  requestStream: true,
  responseStream: true,
  requestType: agent_kit_pb.AgentTalkRequest,
  responseType: agent_kit_pb.AgentTalkResponse
};

exports.AgentTalk = AgentTalk;

function AgentTalkClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AgentTalkClient.prototype.talk = function talk(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(AgentTalk.Talk, {
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

exports.AgentTalkClient = AgentTalkClient;

