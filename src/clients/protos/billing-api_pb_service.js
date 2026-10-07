// package: billing_api
// file: billing-api.proto

var billing_api_pb = require("./billing-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BillingService = (function () {
  function BillingService() {}
  BillingService.serviceName = "billing_api.BillingService";
  return BillingService;
}());

BillingService.GetAllPlans = {
  methodName: "GetAllPlans",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: billing_api_pb.GetAllPlansRequest,
  responseType: billing_api_pb.GetAllPlansResponse
};

BillingService.GetSubscription = {
  methodName: "GetSubscription",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: billing_api_pb.GetSubscriptionRequest,
  responseType: billing_api_pb.GetSubscriptionResponse
};

BillingService.UpdateSubscription = {
  methodName: "UpdateSubscription",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: billing_api_pb.UpdateSubscriptionRequest,
  responseType: billing_api_pb.UpdateSubscriptionResponse
};

exports.BillingService = BillingService;

function BillingServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BillingServiceClient.prototype.getAllPlans = function getAllPlans(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetAllPlans, {
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

BillingServiceClient.prototype.getSubscription = function getSubscription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetSubscription, {
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

BillingServiceClient.prototype.updateSubscription = function updateSubscription(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.UpdateSubscription, {
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

exports.BillingServiceClient = BillingServiceClient;

var ProductUsageService = (function () {
  function ProductUsageService() {}
  ProductUsageService.serviceName = "billing_api.ProductUsageService";
  return ProductUsageService;
}());

ProductUsageService.CreateProductUsage = {
  methodName: "CreateProductUsage",
  service: ProductUsageService,
  requestStream: false,
  responseStream: false,
  requestType: billing_api_pb.CreateProductUsageRequest,
  responseType: billing_api_pb.GetProductUsageResponse
};

ProductUsageService.GetProductUsages = {
  methodName: "GetProductUsages",
  service: ProductUsageService,
  requestStream: false,
  responseStream: false,
  requestType: billing_api_pb.GetProductUsagesRequest,
  responseType: billing_api_pb.GetUsagesResponse
};

ProductUsageService.GetOrganizationUsages = {
  methodName: "GetOrganizationUsages",
  service: ProductUsageService,
  requestStream: false,
  responseStream: false,
  requestType: billing_api_pb.GetOrganizationUsagesRequest,
  responseType: billing_api_pb.GetUsagesResponse
};

exports.ProductUsageService = ProductUsageService;

function ProductUsageServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProductUsageServiceClient.prototype.createProductUsage = function createProductUsage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductUsageService.CreateProductUsage, {
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

ProductUsageServiceClient.prototype.getProductUsages = function getProductUsages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductUsageService.GetProductUsages, {
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

ProductUsageServiceClient.prototype.getOrganizationUsages = function getOrganizationUsages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProductUsageService.GetOrganizationUsages, {
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

exports.ProductUsageServiceClient = ProductUsageServiceClient;

