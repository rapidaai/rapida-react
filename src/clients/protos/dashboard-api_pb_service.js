// package: dashboard_api
// file: dashboard-api.proto

var dashboard_api_pb = require("./dashboard-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DashboardService = (function () {
  function DashboardService() {}
  DashboardService.serviceName = "dashboard_api.DashboardService";
  return DashboardService;
}());

DashboardService.GetProjectDashboard = {
  methodName: "GetProjectDashboard",
  service: DashboardService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_api_pb.GetProjectDashboardRequest,
  responseType: dashboard_api_pb.GetProjectDashboardResponse
};

exports.DashboardService = DashboardService;

function DashboardServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DashboardServiceClient.prototype.getProjectDashboard = function getProjectDashboard(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DashboardService.GetProjectDashboard, {
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

exports.DashboardServiceClient = DashboardServiceClient;

var ProjectDashboardAnalyticsService = (function () {
  function ProjectDashboardAnalyticsService() {}
  ProjectDashboardAnalyticsService.serviceName = "dashboard_api.ProjectDashboardAnalyticsService";
  return ProjectDashboardAnalyticsService;
}());

ProjectDashboardAnalyticsService.GetProjectDashboardAnalytics = {
  methodName: "GetProjectDashboardAnalytics",
  service: ProjectDashboardAnalyticsService,
  requestStream: false,
  responseStream: false,
  requestType: dashboard_api_pb.GetProjectDashboardAnalyticsRequest,
  responseType: dashboard_api_pb.GetProjectDashboardAnalyticsResponse
};

exports.ProjectDashboardAnalyticsService = ProjectDashboardAnalyticsService;

function ProjectDashboardAnalyticsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProjectDashboardAnalyticsServiceClient.prototype.getProjectDashboardAnalytics = function getProjectDashboardAnalytics(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProjectDashboardAnalyticsService.GetProjectDashboardAnalytics, {
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

exports.ProjectDashboardAnalyticsServiceClient = ProjectDashboardAnalyticsServiceClient;

