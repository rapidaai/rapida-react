// source: assistant-api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
var assistant$deployment_pb = require('./assistant-deployment_pb.js');
goog.object.extend(proto, assistant$deployment_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.assistant_api.Assistant', null, global);
goog.exportSymbol('proto.assistant_api.AssistantAnalysis', null, global);
goog.exportSymbol('proto.assistant_api.AssistantAttribute', null, global);
goog.exportSymbol('proto.assistant_api.AssistantKnowledgeConfiguration', null, global);
goog.exportSymbol('proto.assistant_api.AssistantKnowledgeConfigurationAttribute', null, global);
goog.exportSymbol('proto.assistant_api.AssistantProviderModel', null, global);
goog.exportSymbol('proto.assistant_api.AssistantProviderModelAttribute', null, global);
goog.exportSymbol('proto.assistant_api.AssistantTool', null, global);
goog.exportSymbol('proto.assistant_api.AssistantToolConfigurationAttribute', null, global);
goog.exportSymbol('proto.assistant_api.AssistantWebhook', null, global);
goog.exportSymbol('proto.assistant_api.AssistantWebhookLog', null, global);
goog.exportSymbol('proto.assistant_api.CreateAssistantAnalysisRequest', null, global);
goog.exportSymbol('proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest', null, global);
goog.exportSymbol('proto.assistant_api.CreateAssistantProviderModelRequest', null, global);
goog.exportSymbol('proto.assistant_api.CreateAssistantRequest', null, global);
goog.exportSymbol('proto.assistant_api.CreateAssistantTagRequest', null, global);
goog.exportSymbol('proto.assistant_api.CreateAssistantToolConfigurationRequest', null, global);
goog.exportSymbol('proto.assistant_api.CreateAssistantWebhookRequest', null, global);
goog.exportSymbol('proto.assistant_api.DeleteAssistantAnalysisRequest', null, global);
goog.exportSymbol('proto.assistant_api.DeleteAssistantRequest', null, global);
goog.exportSymbol('proto.assistant_api.DeleteAssistantWebhookRequest', null, global);
goog.exportSymbol('proto.assistant_api.GetAllAssistantAnalysisRequest', null, global);
goog.exportSymbol('proto.assistant_api.GetAllAssistantAnalysisResponse', null, global);
goog.exportSymbol('proto.assistant_api.GetAllAssistantMessageRequest', null, global);
goog.exportSymbol('proto.assistant_api.GetAllAssistantMessageResponse', null, global);
goog.exportSymbol('proto.assistant_api.GetAllAssistantProviderModelRequest', null, global);
goog.exportSymbol('proto.assistant_api.GetAllAssistantProviderModelResponse', null, global);
goog.exportSymbol('proto.assistant_api.GetAllAssistantRequest', null, global);
goog.exportSymbol('proto.assistant_api.GetAllAssistantResponse', null, global);
goog.exportSymbol('proto.assistant_api.GetAllAssistantToolRequest', null, global);
goog.exportSymbol('proto.assistant_api.GetAllAssistantToolResponse', null, global);
goog.exportSymbol('proto.assistant_api.GetAllAssistantUserConversationRequest', null, global);
goog.exportSymbol('proto.assistant_api.GetAllAssistantUserConversationResponse', null, global);
goog.exportSymbol('proto.assistant_api.GetAllAssistantWebhookLogRequest', null, global);
goog.exportSymbol('proto.assistant_api.GetAllAssistantWebhookLogResponse', null, global);
goog.exportSymbol('proto.assistant_api.GetAllAssistantWebhookRequest', null, global);
goog.exportSymbol('proto.assistant_api.GetAllAssistantWebhookResponse', null, global);
goog.exportSymbol('proto.assistant_api.GetAllToolRequest', null, global);
goog.exportSymbol('proto.assistant_api.GetAllToolResponse', null, global);
goog.exportSymbol('proto.assistant_api.GetAssistantAnalysisRequest', null, global);
goog.exportSymbol('proto.assistant_api.GetAssistantAnalysisResponse', null, global);
goog.exportSymbol('proto.assistant_api.GetAssistantConversationRequest', null, global);
goog.exportSymbol('proto.assistant_api.GetAssistantConversationResponse', null, global);
goog.exportSymbol('proto.assistant_api.GetAssistantProviderModelResponse', null, global);
goog.exportSymbol('proto.assistant_api.GetAssistantRequest', null, global);
goog.exportSymbol('proto.assistant_api.GetAssistantResponse', null, global);
goog.exportSymbol('proto.assistant_api.GetAssistantWebhookLogRequest', null, global);
goog.exportSymbol('proto.assistant_api.GetAssistantWebhookLogResponse', null, global);
goog.exportSymbol('proto.assistant_api.GetAssistantWebhookRequest', null, global);
goog.exportSymbol('proto.assistant_api.GetAssistantWebhookResponse', null, global);
goog.exportSymbol('proto.assistant_api.GetToolRequest', null, global);
goog.exportSymbol('proto.assistant_api.GetToolResponse', null, global);
goog.exportSymbol('proto.assistant_api.Tool', null, global);
goog.exportSymbol('proto.assistant_api.UpdateAssistantAnalysisRequest', null, global);
goog.exportSymbol('proto.assistant_api.UpdateAssistantDetailRequest', null, global);
goog.exportSymbol('proto.assistant_api.UpdateAssistantVersionRequest', null, global);
goog.exportSymbol('proto.assistant_api.UpdateAssistantWebhookRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.AssistantTool = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.AssistantTool, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.AssistantTool.displayName = 'proto.assistant_api.AssistantTool';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.Assistant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.Assistant.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.Assistant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.Assistant.displayName = 'proto.assistant_api.Assistant';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.AssistantProviderModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.AssistantProviderModel.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.AssistantProviderModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.AssistantProviderModel.displayName = 'proto.assistant_api.AssistantProviderModel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.AssistantKnowledgeConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.AssistantKnowledgeConfiguration.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.AssistantKnowledgeConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.AssistantKnowledgeConfiguration.displayName = 'proto.assistant_api.AssistantKnowledgeConfiguration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.AssistantProviderModelAttribute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.AssistantProviderModelAttribute.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.AssistantProviderModelAttribute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.AssistantProviderModelAttribute.displayName = 'proto.assistant_api.AssistantProviderModelAttribute';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.AssistantAttribute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.AssistantAttribute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.AssistantAttribute.displayName = 'proto.assistant_api.AssistantAttribute';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.AssistantKnowledgeConfigurationAttribute.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.AssistantKnowledgeConfigurationAttribute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.AssistantKnowledgeConfigurationAttribute.displayName = 'proto.assistant_api.AssistantKnowledgeConfigurationAttribute';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.AssistantToolConfigurationAttribute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.AssistantToolConfigurationAttribute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.AssistantToolConfigurationAttribute.displayName = 'proto.assistant_api.AssistantToolConfigurationAttribute';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.CreateAssistantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.CreateAssistantRequest.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.CreateAssistantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.CreateAssistantRequest.displayName = 'proto.assistant_api.CreateAssistantRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.CreateAssistantProviderModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.CreateAssistantProviderModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.CreateAssistantProviderModelRequest.displayName = 'proto.assistant_api.CreateAssistantProviderModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAssistantProviderModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.GetAssistantProviderModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAssistantProviderModelResponse.displayName = 'proto.assistant_api.GetAssistantProviderModelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.displayName = 'proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.CreateAssistantToolConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.CreateAssistantToolConfigurationRequest.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.CreateAssistantToolConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.CreateAssistantToolConfigurationRequest.displayName = 'proto.assistant_api.CreateAssistantToolConfigurationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.CreateAssistantTagRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.CreateAssistantTagRequest.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.CreateAssistantTagRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.CreateAssistantTagRequest.displayName = 'proto.assistant_api.CreateAssistantTagRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAssistantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.GetAssistantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAssistantRequest.displayName = 'proto.assistant_api.GetAssistantRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.DeleteAssistantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.DeleteAssistantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.DeleteAssistantRequest.displayName = 'proto.assistant_api.DeleteAssistantRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAssistantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.GetAssistantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAssistantResponse.displayName = 'proto.assistant_api.GetAssistantResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllAssistantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllAssistantRequest.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllAssistantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllAssistantRequest.displayName = 'proto.assistant_api.GetAllAssistantRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllAssistantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllAssistantResponse.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllAssistantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllAssistantResponse.displayName = 'proto.assistant_api.GetAllAssistantResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllAssistantProviderModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllAssistantProviderModelRequest.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllAssistantProviderModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllAssistantProviderModelRequest.displayName = 'proto.assistant_api.GetAllAssistantProviderModelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllAssistantProviderModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllAssistantProviderModelResponse.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllAssistantProviderModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllAssistantProviderModelResponse.displayName = 'proto.assistant_api.GetAllAssistantProviderModelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllAssistantMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllAssistantMessageRequest.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllAssistantMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllAssistantMessageRequest.displayName = 'proto.assistant_api.GetAllAssistantMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllAssistantMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllAssistantMessageResponse.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllAssistantMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllAssistantMessageResponse.displayName = 'proto.assistant_api.GetAllAssistantMessageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.UpdateAssistantVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.UpdateAssistantVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.UpdateAssistantVersionRequest.displayName = 'proto.assistant_api.UpdateAssistantVersionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.UpdateAssistantDetailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.UpdateAssistantDetailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.UpdateAssistantDetailRequest.displayName = 'proto.assistant_api.UpdateAssistantDetailRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllAssistantUserConversationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllAssistantUserConversationRequest.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllAssistantUserConversationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllAssistantUserConversationRequest.displayName = 'proto.assistant_api.GetAllAssistantUserConversationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllAssistantUserConversationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllAssistantUserConversationResponse.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllAssistantUserConversationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllAssistantUserConversationResponse.displayName = 'proto.assistant_api.GetAllAssistantUserConversationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllAssistantToolRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllAssistantToolRequest.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllAssistantToolRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllAssistantToolRequest.displayName = 'proto.assistant_api.GetAllAssistantToolRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllAssistantToolResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllAssistantToolResponse.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllAssistantToolResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllAssistantToolResponse.displayName = 'proto.assistant_api.GetAllAssistantToolResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.AssistantAnalysis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.AssistantAnalysis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.AssistantAnalysis.displayName = 'proto.assistant_api.AssistantAnalysis';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.CreateAssistantAnalysisRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.CreateAssistantAnalysisRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.CreateAssistantAnalysisRequest.displayName = 'proto.assistant_api.CreateAssistantAnalysisRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.UpdateAssistantAnalysisRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.UpdateAssistantAnalysisRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.UpdateAssistantAnalysisRequest.displayName = 'proto.assistant_api.UpdateAssistantAnalysisRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAssistantAnalysisRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.GetAssistantAnalysisRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAssistantAnalysisRequest.displayName = 'proto.assistant_api.GetAssistantAnalysisRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.DeleteAssistantAnalysisRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.DeleteAssistantAnalysisRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.DeleteAssistantAnalysisRequest.displayName = 'proto.assistant_api.DeleteAssistantAnalysisRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAssistantAnalysisResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.GetAssistantAnalysisResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAssistantAnalysisResponse.displayName = 'proto.assistant_api.GetAssistantAnalysisResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllAssistantAnalysisRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllAssistantAnalysisRequest.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllAssistantAnalysisRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllAssistantAnalysisRequest.displayName = 'proto.assistant_api.GetAllAssistantAnalysisRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllAssistantAnalysisResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllAssistantAnalysisResponse.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllAssistantAnalysisResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllAssistantAnalysisResponse.displayName = 'proto.assistant_api.GetAllAssistantAnalysisResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.AssistantWebhook = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.AssistantWebhook.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.AssistantWebhook, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.AssistantWebhook.displayName = 'proto.assistant_api.AssistantWebhook';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.AssistantWebhookLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.AssistantWebhookLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.AssistantWebhookLog.displayName = 'proto.assistant_api.AssistantWebhookLog';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.CreateAssistantWebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.CreateAssistantWebhookRequest.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.CreateAssistantWebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.CreateAssistantWebhookRequest.displayName = 'proto.assistant_api.CreateAssistantWebhookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.UpdateAssistantWebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.UpdateAssistantWebhookRequest.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.UpdateAssistantWebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.UpdateAssistantWebhookRequest.displayName = 'proto.assistant_api.UpdateAssistantWebhookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAssistantWebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.GetAssistantWebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAssistantWebhookRequest.displayName = 'proto.assistant_api.GetAssistantWebhookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.DeleteAssistantWebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.DeleteAssistantWebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.DeleteAssistantWebhookRequest.displayName = 'proto.assistant_api.DeleteAssistantWebhookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAssistantWebhookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.GetAssistantWebhookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAssistantWebhookResponse.displayName = 'proto.assistant_api.GetAssistantWebhookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllAssistantWebhookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllAssistantWebhookRequest.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllAssistantWebhookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllAssistantWebhookRequest.displayName = 'proto.assistant_api.GetAllAssistantWebhookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllAssistantWebhookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllAssistantWebhookResponse.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllAssistantWebhookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllAssistantWebhookResponse.displayName = 'proto.assistant_api.GetAllAssistantWebhookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllAssistantWebhookLogRequest.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllAssistantWebhookLogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllAssistantWebhookLogRequest.displayName = 'proto.assistant_api.GetAllAssistantWebhookLogRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAssistantWebhookLogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.GetAssistantWebhookLogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAssistantWebhookLogRequest.displayName = 'proto.assistant_api.GetAssistantWebhookLogRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAssistantWebhookLogResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.GetAssistantWebhookLogResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAssistantWebhookLogResponse.displayName = 'proto.assistant_api.GetAssistantWebhookLogResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllAssistantWebhookLogResponse.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllAssistantWebhookLogResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllAssistantWebhookLogResponse.displayName = 'proto.assistant_api.GetAllAssistantWebhookLogResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAssistantConversationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAssistantConversationRequest.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAssistantConversationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAssistantConversationRequest.displayName = 'proto.assistant_api.GetAssistantConversationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAssistantConversationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.GetAssistantConversationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAssistantConversationResponse.displayName = 'proto.assistant_api.GetAssistantConversationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.Tool = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.Tool, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.Tool.displayName = 'proto.assistant_api.Tool';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetToolRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.GetToolRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetToolRequest.displayName = 'proto.assistant_api.GetToolRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetToolResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.assistant_api.GetToolResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetToolResponse.displayName = 'proto.assistant_api.GetToolResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllToolRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllToolRequest.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllToolRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllToolRequest.displayName = 'proto.assistant_api.GetAllToolRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.assistant_api.GetAllToolResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.assistant_api.GetAllToolResponse.repeatedFields_, null);
};
goog.inherits(proto.assistant_api.GetAllToolResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.assistant_api.GetAllToolResponse.displayName = 'proto.assistant_api.GetAllToolResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.AssistantTool.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.AssistantTool.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.AssistantTool} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantTool.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    assistantid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    toolid: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    projectid: jspb.Message.getFieldWithDefault(msg, 5, "0"),
    organizationid: jspb.Message.getFieldWithDefault(msg, 6, "0"),
    options: (f = msg.getOptions()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    tool: (f = msg.getTool()) && proto.assistant_api.Tool.toObject(includeInstance, f),
    code: jspb.Message.getFieldWithDefault(msg, 9, ""),
    status: jspb.Message.getFieldWithDefault(msg, 25, ""),
    createddate: (f = msg.getCreateddate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateddate: (f = msg.getUpdateddate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.AssistantTool}
 */
proto.assistant_api.AssistantTool.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.AssistantTool;
  return proto.assistant_api.AssistantTool.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.AssistantTool} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.AssistantTool}
 */
proto.assistant_api.AssistantTool.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setToolid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setProjectid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setOrganizationid(value);
      break;
    case 7:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 8:
      var value = new proto.assistant_api.Tool;
      reader.readMessage(value,proto.assistant_api.Tool.deserializeBinaryFromReader);
      msg.setTool(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 26:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateddate(value);
      break;
    case 27:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateddate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.AssistantTool.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.AssistantTool.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.AssistantTool} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantTool.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getToolid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProjectid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      5,
      f
    );
  }
  f = message.getOrganizationid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      6,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getTool();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.assistant_api.Tool.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getCreateddate();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateddate();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.AssistantTool.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantTool} returns this
 */
proto.assistant_api.AssistantTool.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 assistantId = 2;
 * @return {string}
 */
proto.assistant_api.AssistantTool.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantTool} returns this
 */
proto.assistant_api.AssistantTool.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 toolId = 3;
 * @return {string}
 */
proto.assistant_api.AssistantTool.prototype.getToolid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantTool} returns this
 */
proto.assistant_api.AssistantTool.prototype.setToolid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.assistant_api.AssistantTool.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantTool} returns this
 */
proto.assistant_api.AssistantTool.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 projectId = 5;
 * @return {string}
 */
proto.assistant_api.AssistantTool.prototype.getProjectid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantTool} returns this
 */
proto.assistant_api.AssistantTool.prototype.setProjectid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};


/**
 * optional uint64 organizationId = 6;
 * @return {string}
 */
proto.assistant_api.AssistantTool.prototype.getOrganizationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantTool} returns this
 */
proto.assistant_api.AssistantTool.prototype.setOrganizationid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 6, value);
};


/**
 * optional google.protobuf.Struct options = 7;
 * @return {?proto.google.protobuf.Struct}
 */
proto.assistant_api.AssistantTool.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 7));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.assistant_api.AssistantTool} returns this
*/
proto.assistant_api.AssistantTool.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantTool} returns this
 */
proto.assistant_api.AssistantTool.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantTool.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Tool tool = 8;
 * @return {?proto.assistant_api.Tool}
 */
proto.assistant_api.AssistantTool.prototype.getTool = function() {
  return /** @type{?proto.assistant_api.Tool} */ (
    jspb.Message.getWrapperField(this, proto.assistant_api.Tool, 8));
};


/**
 * @param {?proto.assistant_api.Tool|undefined} value
 * @return {!proto.assistant_api.AssistantTool} returns this
*/
proto.assistant_api.AssistantTool.prototype.setTool = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantTool} returns this
 */
proto.assistant_api.AssistantTool.prototype.clearTool = function() {
  return this.setTool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantTool.prototype.hasTool = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string code = 9;
 * @return {string}
 */
proto.assistant_api.AssistantTool.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantTool} returns this
 */
proto.assistant_api.AssistantTool.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string status = 25;
 * @return {string}
 */
proto.assistant_api.AssistantTool.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantTool} returns this
 */
proto.assistant_api.AssistantTool.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional google.protobuf.Timestamp createdDate = 26;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.assistant_api.AssistantTool.prototype.getCreateddate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 26));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.assistant_api.AssistantTool} returns this
*/
proto.assistant_api.AssistantTool.prototype.setCreateddate = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantTool} returns this
 */
proto.assistant_api.AssistantTool.prototype.clearCreateddate = function() {
  return this.setCreateddate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantTool.prototype.hasCreateddate = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional google.protobuf.Timestamp updatedDate = 27;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.assistant_api.AssistantTool.prototype.getUpdateddate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 27));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.assistant_api.AssistantTool} returns this
*/
proto.assistant_api.AssistantTool.prototype.setUpdateddate = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantTool} returns this
 */
proto.assistant_api.AssistantTool.prototype.clearUpdateddate = function() {
  return this.setUpdateddate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantTool.prototype.hasUpdateddate = function() {
  return jspb.Message.getField(this, 27) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.Assistant.repeatedFields_ = [6,18,35,36];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.Assistant.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.Assistant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.Assistant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.Assistant.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    status: jspb.Message.getFieldWithDefault(msg, 2, ""),
    visibility: jspb.Message.getFieldWithDefault(msg, 3, ""),
    source: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sourceidentifier: jspb.Message.getFieldWithDefault(msg, 5, "0"),
    assistanttoolsList: jspb.Message.toObjectList(msg.getAssistanttoolsList(),
    proto.assistant_api.AssistantTool.toObject, includeInstance),
    projectid: jspb.Message.getFieldWithDefault(msg, 7, "0"),
    organizationid: jspb.Message.getFieldWithDefault(msg, 8, "0"),
    assistantprovidermodelid: jspb.Message.getFieldWithDefault(msg, 9, "0"),
    assistantprovidermodel: (f = msg.getAssistantprovidermodel()) && proto.assistant_api.AssistantProviderModel.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 11, ""),
    description: jspb.Message.getFieldWithDefault(msg, 12, ""),
    assistanttag: (f = msg.getAssistanttag()) && common_pb.Tag.toObject(includeInstance, f),
    language: jspb.Message.getFieldWithDefault(msg, 16, ""),
    organization: (f = msg.getOrganization()) && common_pb.Organization.toObject(includeInstance, f),
    assistantknowledgeconfigurationsList: jspb.Message.toObjectList(msg.getAssistantknowledgeconfigurationsList(),
    proto.assistant_api.AssistantKnowledgeConfiguration.toObject, includeInstance),
    createdby: jspb.Message.getFieldWithDefault(msg, 22, "0"),
    createduser: (f = msg.getCreateduser()) && common_pb.User.toObject(includeInstance, f),
    updatedby: jspb.Message.getFieldWithDefault(msg, 24, "0"),
    updateduser: (f = msg.getUpdateduser()) && common_pb.User.toObject(includeInstance, f),
    createddate: (f = msg.getCreateddate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateddate: (f = msg.getUpdateddate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    debuggerdeployment: (f = msg.getDebuggerdeployment()) && assistant$deployment_pb.AssistantDebuggerDeployment.toObject(includeInstance, f),
    phonedeployment: (f = msg.getPhonedeployment()) && assistant$deployment_pb.AssistantPhoneDeployment.toObject(includeInstance, f),
    whatsappdeployment: (f = msg.getWhatsappdeployment()) && assistant$deployment_pb.AssistantWhatsappDeployment.toObject(includeInstance, f),
    webplugindeployment: (f = msg.getWebplugindeployment()) && assistant$deployment_pb.AssistantWebpluginDeployment.toObject(includeInstance, f),
    apideployment: (f = msg.getApideployment()) && assistant$deployment_pb.AssistantApiDeployment.toObject(includeInstance, f),
    assistantconversationsList: jspb.Message.toObjectList(msg.getAssistantconversationsList(),
    common_pb.AssistantConversation.toObject, includeInstance),
    assistantwebhooksList: jspb.Message.toObjectList(msg.getAssistantwebhooksList(),
    proto.assistant_api.AssistantWebhook.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.Assistant}
 */
proto.assistant_api.Assistant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.Assistant;
  return proto.assistant_api.Assistant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.Assistant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.Assistant}
 */
proto.assistant_api.Assistant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVisibility(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setSourceidentifier(value);
      break;
    case 6:
      var value = new proto.assistant_api.AssistantTool;
      reader.readMessage(value,proto.assistant_api.AssistantTool.deserializeBinaryFromReader);
      msg.addAssistanttools(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setProjectid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setOrganizationid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantprovidermodelid(value);
      break;
    case 10:
      var value = new proto.assistant_api.AssistantProviderModel;
      reader.readMessage(value,proto.assistant_api.AssistantProviderModel.deserializeBinaryFromReader);
      msg.setAssistantprovidermodel(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 14:
      var value = new common_pb.Tag;
      reader.readMessage(value,common_pb.Tag.deserializeBinaryFromReader);
      msg.setAssistanttag(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 17:
      var value = new common_pb.Organization;
      reader.readMessage(value,common_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 18:
      var value = new proto.assistant_api.AssistantKnowledgeConfiguration;
      reader.readMessage(value,proto.assistant_api.AssistantKnowledgeConfiguration.deserializeBinaryFromReader);
      msg.addAssistantknowledgeconfigurations(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setCreatedby(value);
      break;
    case 23:
      var value = new common_pb.User;
      reader.readMessage(value,common_pb.User.deserializeBinaryFromReader);
      msg.setCreateduser(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setUpdatedby(value);
      break;
    case 25:
      var value = new common_pb.User;
      reader.readMessage(value,common_pb.User.deserializeBinaryFromReader);
      msg.setUpdateduser(value);
      break;
    case 26:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateddate(value);
      break;
    case 27:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateddate(value);
      break;
    case 30:
      var value = new assistant$deployment_pb.AssistantDebuggerDeployment;
      reader.readMessage(value,assistant$deployment_pb.AssistantDebuggerDeployment.deserializeBinaryFromReader);
      msg.setDebuggerdeployment(value);
      break;
    case 31:
      var value = new assistant$deployment_pb.AssistantPhoneDeployment;
      reader.readMessage(value,assistant$deployment_pb.AssistantPhoneDeployment.deserializeBinaryFromReader);
      msg.setPhonedeployment(value);
      break;
    case 32:
      var value = new assistant$deployment_pb.AssistantWhatsappDeployment;
      reader.readMessage(value,assistant$deployment_pb.AssistantWhatsappDeployment.deserializeBinaryFromReader);
      msg.setWhatsappdeployment(value);
      break;
    case 33:
      var value = new assistant$deployment_pb.AssistantWebpluginDeployment;
      reader.readMessage(value,assistant$deployment_pb.AssistantWebpluginDeployment.deserializeBinaryFromReader);
      msg.setWebplugindeployment(value);
      break;
    case 34:
      var value = new assistant$deployment_pb.AssistantApiDeployment;
      reader.readMessage(value,assistant$deployment_pb.AssistantApiDeployment.deserializeBinaryFromReader);
      msg.setApideployment(value);
      break;
    case 35:
      var value = new common_pb.AssistantConversation;
      reader.readMessage(value,common_pb.AssistantConversation.deserializeBinaryFromReader);
      msg.addAssistantconversations(value);
      break;
    case 36:
      var value = new proto.assistant_api.AssistantWebhook;
      reader.readMessage(value,proto.assistant_api.AssistantWebhook.deserializeBinaryFromReader);
      msg.addAssistantwebhooks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.Assistant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.Assistant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.Assistant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.Assistant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVisibility();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSourceidentifier();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      5,
      f
    );
  }
  f = message.getAssistanttoolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.assistant_api.AssistantTool.serializeBinaryToWriter
    );
  }
  f = message.getProjectid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      7,
      f
    );
  }
  f = message.getOrganizationid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      8,
      f
    );
  }
  f = message.getAssistantprovidermodelid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      9,
      f
    );
  }
  f = message.getAssistantprovidermodel();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.assistant_api.AssistantProviderModel.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getAssistanttag();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      common_pb.Tag.serializeBinaryToWriter
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      common_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getAssistantknowledgeconfigurationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      proto.assistant_api.AssistantKnowledgeConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getCreatedby();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      22,
      f
    );
  }
  f = message.getCreateduser();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      common_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedby();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      24,
      f
    );
  }
  f = message.getUpdateduser();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      common_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getCreateddate();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateddate();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDebuggerdeployment();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      assistant$deployment_pb.AssistantDebuggerDeployment.serializeBinaryToWriter
    );
  }
  f = message.getPhonedeployment();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      assistant$deployment_pb.AssistantPhoneDeployment.serializeBinaryToWriter
    );
  }
  f = message.getWhatsappdeployment();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      assistant$deployment_pb.AssistantWhatsappDeployment.serializeBinaryToWriter
    );
  }
  f = message.getWebplugindeployment();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      assistant$deployment_pb.AssistantWebpluginDeployment.serializeBinaryToWriter
    );
  }
  f = message.getApideployment();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      assistant$deployment_pb.AssistantApiDeployment.serializeBinaryToWriter
    );
  }
  f = message.getAssistantconversationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      35,
      f,
      common_pb.AssistantConversation.serializeBinaryToWriter
    );
  }
  f = message.getAssistantwebhooksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      36,
      f,
      proto.assistant_api.AssistantWebhook.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.Assistant.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.assistant_api.Assistant.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string visibility = 3;
 * @return {string}
 */
proto.assistant_api.Assistant.prototype.getVisibility = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.setVisibility = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string source = 4;
 * @return {string}
 */
proto.assistant_api.Assistant.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.setSource = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 sourceIdentifier = 5;
 * @return {string}
 */
proto.assistant_api.Assistant.prototype.getSourceidentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.setSourceidentifier = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};


/**
 * repeated AssistantTool assistantTools = 6;
 * @return {!Array<!proto.assistant_api.AssistantTool>}
 */
proto.assistant_api.Assistant.prototype.getAssistanttoolsList = function() {
  return /** @type{!Array<!proto.assistant_api.AssistantTool>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.assistant_api.AssistantTool, 6));
};


/**
 * @param {!Array<!proto.assistant_api.AssistantTool>} value
 * @return {!proto.assistant_api.Assistant} returns this
*/
proto.assistant_api.Assistant.prototype.setAssistanttoolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.assistant_api.AssistantTool=} opt_value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.AssistantTool}
 */
proto.assistant_api.Assistant.prototype.addAssistanttools = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.assistant_api.AssistantTool, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.clearAssistanttoolsList = function() {
  return this.setAssistanttoolsList([]);
};


/**
 * optional uint64 projectId = 7;
 * @return {string}
 */
proto.assistant_api.Assistant.prototype.getProjectid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.setProjectid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};


/**
 * optional uint64 organizationId = 8;
 * @return {string}
 */
proto.assistant_api.Assistant.prototype.getOrganizationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.setOrganizationid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 8, value);
};


/**
 * optional uint64 assistantProviderModelId = 9;
 * @return {string}
 */
proto.assistant_api.Assistant.prototype.getAssistantprovidermodelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.setAssistantprovidermodelid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 9, value);
};


/**
 * optional AssistantProviderModel assistantProviderModel = 10;
 * @return {?proto.assistant_api.AssistantProviderModel}
 */
proto.assistant_api.Assistant.prototype.getAssistantprovidermodel = function() {
  return /** @type{?proto.assistant_api.AssistantProviderModel} */ (
    jspb.Message.getWrapperField(this, proto.assistant_api.AssistantProviderModel, 10));
};


/**
 * @param {?proto.assistant_api.AssistantProviderModel|undefined} value
 * @return {!proto.assistant_api.Assistant} returns this
*/
proto.assistant_api.Assistant.prototype.setAssistantprovidermodel = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.clearAssistantprovidermodel = function() {
  return this.setAssistantprovidermodel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.Assistant.prototype.hasAssistantprovidermodel = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string name = 11;
 * @return {string}
 */
proto.assistant_api.Assistant.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string description = 12;
 * @return {string}
 */
proto.assistant_api.Assistant.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional Tag assistantTag = 14;
 * @return {?proto.Tag}
 */
proto.assistant_api.Assistant.prototype.getAssistanttag = function() {
  return /** @type{?proto.Tag} */ (
    jspb.Message.getWrapperField(this, common_pb.Tag, 14));
};


/**
 * @param {?proto.Tag|undefined} value
 * @return {!proto.assistant_api.Assistant} returns this
*/
proto.assistant_api.Assistant.prototype.setAssistanttag = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.clearAssistanttag = function() {
  return this.setAssistanttag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.Assistant.prototype.hasAssistanttag = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string language = 16;
 * @return {string}
 */
proto.assistant_api.Assistant.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional Organization organization = 17;
 * @return {?proto.Organization}
 */
proto.assistant_api.Assistant.prototype.getOrganization = function() {
  return /** @type{?proto.Organization} */ (
    jspb.Message.getWrapperField(this, common_pb.Organization, 17));
};


/**
 * @param {?proto.Organization|undefined} value
 * @return {!proto.assistant_api.Assistant} returns this
*/
proto.assistant_api.Assistant.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.Assistant.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * repeated AssistantKnowledgeConfiguration assistantKnowledgeConfigurations = 18;
 * @return {!Array<!proto.assistant_api.AssistantKnowledgeConfiguration>}
 */
proto.assistant_api.Assistant.prototype.getAssistantknowledgeconfigurationsList = function() {
  return /** @type{!Array<!proto.assistant_api.AssistantKnowledgeConfiguration>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.assistant_api.AssistantKnowledgeConfiguration, 18));
};


/**
 * @param {!Array<!proto.assistant_api.AssistantKnowledgeConfiguration>} value
 * @return {!proto.assistant_api.Assistant} returns this
*/
proto.assistant_api.Assistant.prototype.setAssistantknowledgeconfigurationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.assistant_api.AssistantKnowledgeConfiguration=} opt_value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.AssistantKnowledgeConfiguration}
 */
proto.assistant_api.Assistant.prototype.addAssistantknowledgeconfigurations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.assistant_api.AssistantKnowledgeConfiguration, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.clearAssistantknowledgeconfigurationsList = function() {
  return this.setAssistantknowledgeconfigurationsList([]);
};


/**
 * optional uint64 createdBy = 22;
 * @return {string}
 */
proto.assistant_api.Assistant.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringIntField(this, 22, value);
};


/**
 * optional User createdUser = 23;
 * @return {?proto.User}
 */
proto.assistant_api.Assistant.prototype.getCreateduser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_pb.User, 23));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.assistant_api.Assistant} returns this
*/
proto.assistant_api.Assistant.prototype.setCreateduser = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.clearCreateduser = function() {
  return this.setCreateduser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.Assistant.prototype.hasCreateduser = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional uint64 updatedBy = 24;
 * @return {string}
 */
proto.assistant_api.Assistant.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringIntField(this, 24, value);
};


/**
 * optional User updatedUser = 25;
 * @return {?proto.User}
 */
proto.assistant_api.Assistant.prototype.getUpdateduser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_pb.User, 25));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.assistant_api.Assistant} returns this
*/
proto.assistant_api.Assistant.prototype.setUpdateduser = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.clearUpdateduser = function() {
  return this.setUpdateduser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.Assistant.prototype.hasUpdateduser = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional google.protobuf.Timestamp createdDate = 26;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.assistant_api.Assistant.prototype.getCreateddate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 26));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.assistant_api.Assistant} returns this
*/
proto.assistant_api.Assistant.prototype.setCreateddate = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.clearCreateddate = function() {
  return this.setCreateddate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.Assistant.prototype.hasCreateddate = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional google.protobuf.Timestamp updatedDate = 27;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.assistant_api.Assistant.prototype.getUpdateddate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 27));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.assistant_api.Assistant} returns this
*/
proto.assistant_api.Assistant.prototype.setUpdateddate = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.clearUpdateddate = function() {
  return this.setUpdateddate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.Assistant.prototype.hasUpdateddate = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional AssistantDebuggerDeployment debuggerDeployment = 30;
 * @return {?proto.assistant_api.AssistantDebuggerDeployment}
 */
proto.assistant_api.Assistant.prototype.getDebuggerdeployment = function() {
  return /** @type{?proto.assistant_api.AssistantDebuggerDeployment} */ (
    jspb.Message.getWrapperField(this, assistant$deployment_pb.AssistantDebuggerDeployment, 30));
};


/**
 * @param {?proto.assistant_api.AssistantDebuggerDeployment|undefined} value
 * @return {!proto.assistant_api.Assistant} returns this
*/
proto.assistant_api.Assistant.prototype.setDebuggerdeployment = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.clearDebuggerdeployment = function() {
  return this.setDebuggerdeployment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.Assistant.prototype.hasDebuggerdeployment = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional AssistantPhoneDeployment phoneDeployment = 31;
 * @return {?proto.assistant_api.AssistantPhoneDeployment}
 */
proto.assistant_api.Assistant.prototype.getPhonedeployment = function() {
  return /** @type{?proto.assistant_api.AssistantPhoneDeployment} */ (
    jspb.Message.getWrapperField(this, assistant$deployment_pb.AssistantPhoneDeployment, 31));
};


/**
 * @param {?proto.assistant_api.AssistantPhoneDeployment|undefined} value
 * @return {!proto.assistant_api.Assistant} returns this
*/
proto.assistant_api.Assistant.prototype.setPhonedeployment = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.clearPhonedeployment = function() {
  return this.setPhonedeployment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.Assistant.prototype.hasPhonedeployment = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional AssistantWhatsappDeployment whatsappDeployment = 32;
 * @return {?proto.assistant_api.AssistantWhatsappDeployment}
 */
proto.assistant_api.Assistant.prototype.getWhatsappdeployment = function() {
  return /** @type{?proto.assistant_api.AssistantWhatsappDeployment} */ (
    jspb.Message.getWrapperField(this, assistant$deployment_pb.AssistantWhatsappDeployment, 32));
};


/**
 * @param {?proto.assistant_api.AssistantWhatsappDeployment|undefined} value
 * @return {!proto.assistant_api.Assistant} returns this
*/
proto.assistant_api.Assistant.prototype.setWhatsappdeployment = function(value) {
  return jspb.Message.setWrapperField(this, 32, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.clearWhatsappdeployment = function() {
  return this.setWhatsappdeployment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.Assistant.prototype.hasWhatsappdeployment = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional AssistantWebpluginDeployment webPluginDeployment = 33;
 * @return {?proto.assistant_api.AssistantWebpluginDeployment}
 */
proto.assistant_api.Assistant.prototype.getWebplugindeployment = function() {
  return /** @type{?proto.assistant_api.AssistantWebpluginDeployment} */ (
    jspb.Message.getWrapperField(this, assistant$deployment_pb.AssistantWebpluginDeployment, 33));
};


/**
 * @param {?proto.assistant_api.AssistantWebpluginDeployment|undefined} value
 * @return {!proto.assistant_api.Assistant} returns this
*/
proto.assistant_api.Assistant.prototype.setWebplugindeployment = function(value) {
  return jspb.Message.setWrapperField(this, 33, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.clearWebplugindeployment = function() {
  return this.setWebplugindeployment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.Assistant.prototype.hasWebplugindeployment = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional AssistantApiDeployment apiDeployment = 34;
 * @return {?proto.assistant_api.AssistantApiDeployment}
 */
proto.assistant_api.Assistant.prototype.getApideployment = function() {
  return /** @type{?proto.assistant_api.AssistantApiDeployment} */ (
    jspb.Message.getWrapperField(this, assistant$deployment_pb.AssistantApiDeployment, 34));
};


/**
 * @param {?proto.assistant_api.AssistantApiDeployment|undefined} value
 * @return {!proto.assistant_api.Assistant} returns this
*/
proto.assistant_api.Assistant.prototype.setApideployment = function(value) {
  return jspb.Message.setWrapperField(this, 34, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.clearApideployment = function() {
  return this.setApideployment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.Assistant.prototype.hasApideployment = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * repeated AssistantConversation assistantConversations = 35;
 * @return {!Array<!proto.AssistantConversation>}
 */
proto.assistant_api.Assistant.prototype.getAssistantconversationsList = function() {
  return /** @type{!Array<!proto.AssistantConversation>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.AssistantConversation, 35));
};


/**
 * @param {!Array<!proto.AssistantConversation>} value
 * @return {!proto.assistant_api.Assistant} returns this
*/
proto.assistant_api.Assistant.prototype.setAssistantconversationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 35, value);
};


/**
 * @param {!proto.AssistantConversation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AssistantConversation}
 */
proto.assistant_api.Assistant.prototype.addAssistantconversations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 35, opt_value, proto.AssistantConversation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.clearAssistantconversationsList = function() {
  return this.setAssistantconversationsList([]);
};


/**
 * repeated AssistantWebhook assistantWebhooks = 36;
 * @return {!Array<!proto.assistant_api.AssistantWebhook>}
 */
proto.assistant_api.Assistant.prototype.getAssistantwebhooksList = function() {
  return /** @type{!Array<!proto.assistant_api.AssistantWebhook>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.assistant_api.AssistantWebhook, 36));
};


/**
 * @param {!Array<!proto.assistant_api.AssistantWebhook>} value
 * @return {!proto.assistant_api.Assistant} returns this
*/
proto.assistant_api.Assistant.prototype.setAssistantwebhooksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 36, value);
};


/**
 * @param {!proto.assistant_api.AssistantWebhook=} opt_value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.AssistantWebhook}
 */
proto.assistant_api.Assistant.prototype.addAssistantwebhooks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 36, opt_value, proto.assistant_api.AssistantWebhook, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.Assistant} returns this
 */
proto.assistant_api.Assistant.prototype.clearAssistantwebhooksList = function() {
  return this.setAssistantwebhooksList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.AssistantProviderModel.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.AssistantProviderModel.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.AssistantProviderModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.AssistantProviderModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantProviderModel.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    template: (f = msg.getTemplate()) && common_pb.TextChatCompletePrompt.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    modelproviderid: jspb.Message.getFieldWithDefault(msg, 6, "0"),
    modelprovidername: jspb.Message.getFieldWithDefault(msg, 7, ""),
    assistantmodeloptionsList: jspb.Message.toObjectList(msg.getAssistantmodeloptionsList(),
    common_pb.Metadata.toObject, includeInstance),
    status: jspb.Message.getFieldWithDefault(msg, 12, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 13, "0"),
    createduser: (f = msg.getCreateduser()) && common_pb.User.toObject(includeInstance, f),
    updatedby: jspb.Message.getFieldWithDefault(msg, 15, "0"),
    updateduser: (f = msg.getUpdateduser()) && common_pb.User.toObject(includeInstance, f),
    createddate: (f = msg.getCreateddate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateddate: (f = msg.getUpdateddate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.AssistantProviderModel}
 */
proto.assistant_api.AssistantProviderModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.AssistantProviderModel;
  return proto.assistant_api.AssistantProviderModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.AssistantProviderModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.AssistantProviderModel}
 */
proto.assistant_api.AssistantProviderModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    case 2:
      var value = new common_pb.TextChatCompletePrompt;
      reader.readMessage(value,common_pb.TextChatCompletePrompt.deserializeBinaryFromReader);
      msg.setTemplate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setModelproviderid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelprovidername(value);
      break;
    case 9:
      var value = new common_pb.Metadata;
      reader.readMessage(value,common_pb.Metadata.deserializeBinaryFromReader);
      msg.addAssistantmodeloptions(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setCreatedby(value);
      break;
    case 14:
      var value = new common_pb.User;
      reader.readMessage(value,common_pb.User.deserializeBinaryFromReader);
      msg.setCreateduser(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setUpdatedby(value);
      break;
    case 16:
      var value = new common_pb.User;
      reader.readMessage(value,common_pb.User.deserializeBinaryFromReader);
      msg.setUpdateduser(value);
      break;
    case 17:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateddate(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateddate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.AssistantProviderModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.AssistantProviderModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.AssistantProviderModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantProviderModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.TextChatCompletePrompt.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getModelproviderid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      6,
      f
    );
  }
  f = message.getModelprovidername();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAssistantmodeloptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      common_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCreatedby();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      13,
      f
    );
  }
  f = message.getCreateduser();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      common_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedby();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      15,
      f
    );
  }
  f = message.getUpdateduser();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      common_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getCreateddate();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateddate();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.AssistantProviderModel.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
 */
proto.assistant_api.AssistantProviderModel.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional TextChatCompletePrompt template = 2;
 * @return {?proto.TextChatCompletePrompt}
 */
proto.assistant_api.AssistantProviderModel.prototype.getTemplate = function() {
  return /** @type{?proto.TextChatCompletePrompt} */ (
    jspb.Message.getWrapperField(this, common_pb.TextChatCompletePrompt, 2));
};


/**
 * @param {?proto.TextChatCompletePrompt|undefined} value
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
*/
proto.assistant_api.AssistantProviderModel.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
 */
proto.assistant_api.AssistantProviderModel.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantProviderModel.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.assistant_api.AssistantProviderModel.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
 */
proto.assistant_api.AssistantProviderModel.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 modelProviderId = 6;
 * @return {string}
 */
proto.assistant_api.AssistantProviderModel.prototype.getModelproviderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
 */
proto.assistant_api.AssistantProviderModel.prototype.setModelproviderid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 6, value);
};


/**
 * optional string modelProviderName = 7;
 * @return {string}
 */
proto.assistant_api.AssistantProviderModel.prototype.getModelprovidername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
 */
proto.assistant_api.AssistantProviderModel.prototype.setModelprovidername = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated Metadata assistantModelOptions = 9;
 * @return {!Array<!proto.Metadata>}
 */
proto.assistant_api.AssistantProviderModel.prototype.getAssistantmodeloptionsList = function() {
  return /** @type{!Array<!proto.Metadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Metadata, 9));
};


/**
 * @param {!Array<!proto.Metadata>} value
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
*/
proto.assistant_api.AssistantProviderModel.prototype.setAssistantmodeloptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.Metadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Metadata}
 */
proto.assistant_api.AssistantProviderModel.prototype.addAssistantmodeloptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.Metadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
 */
proto.assistant_api.AssistantProviderModel.prototype.clearAssistantmodeloptionsList = function() {
  return this.setAssistantmodeloptionsList([]);
};


/**
 * optional string status = 12;
 * @return {string}
 */
proto.assistant_api.AssistantProviderModel.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
 */
proto.assistant_api.AssistantProviderModel.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional uint64 createdBy = 13;
 * @return {string}
 */
proto.assistant_api.AssistantProviderModel.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
 */
proto.assistant_api.AssistantProviderModel.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringIntField(this, 13, value);
};


/**
 * optional User createdUser = 14;
 * @return {?proto.User}
 */
proto.assistant_api.AssistantProviderModel.prototype.getCreateduser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_pb.User, 14));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
*/
proto.assistant_api.AssistantProviderModel.prototype.setCreateduser = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
 */
proto.assistant_api.AssistantProviderModel.prototype.clearCreateduser = function() {
  return this.setCreateduser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantProviderModel.prototype.hasCreateduser = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional uint64 updatedBy = 15;
 * @return {string}
 */
proto.assistant_api.AssistantProviderModel.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
 */
proto.assistant_api.AssistantProviderModel.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringIntField(this, 15, value);
};


/**
 * optional User updatedUser = 16;
 * @return {?proto.User}
 */
proto.assistant_api.AssistantProviderModel.prototype.getUpdateduser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_pb.User, 16));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
*/
proto.assistant_api.AssistantProviderModel.prototype.setUpdateduser = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
 */
proto.assistant_api.AssistantProviderModel.prototype.clearUpdateduser = function() {
  return this.setUpdateduser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantProviderModel.prototype.hasUpdateduser = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Timestamp createdDate = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.assistant_api.AssistantProviderModel.prototype.getCreateddate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 17));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
*/
proto.assistant_api.AssistantProviderModel.prototype.setCreateddate = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
 */
proto.assistant_api.AssistantProviderModel.prototype.clearCreateddate = function() {
  return this.setCreateddate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantProviderModel.prototype.hasCreateddate = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Timestamp updatedDate = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.assistant_api.AssistantProviderModel.prototype.getUpdateddate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
*/
proto.assistant_api.AssistantProviderModel.prototype.setUpdateddate = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantProviderModel} returns this
 */
proto.assistant_api.AssistantProviderModel.prototype.clearUpdateddate = function() {
  return this.setUpdateddate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantProviderModel.prototype.hasUpdateddate = function() {
  return jspb.Message.getField(this, 18) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.AssistantKnowledgeConfiguration.repeatedFields_ = [12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.AssistantKnowledgeConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.AssistantKnowledgeConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantKnowledgeConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    knowledgeid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    rerankerenable: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    rerankermodelproviderid: jspb.Message.getFieldWithDefault(msg, 10, "0"),
    rerankermodelprovidername: jspb.Message.getFieldWithDefault(msg, 11, ""),
    assistantknowledgererankeroptionsList: jspb.Message.toObjectList(msg.getAssistantknowledgererankeroptionsList(),
    common_pb.Metadata.toObject, includeInstance),
    topk: jspb.Message.getFieldWithDefault(msg, 6, 0),
    scorethreshold: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    knowledge: (f = msg.getKnowledge()) && common_pb.Knowledge.toObject(includeInstance, f),
    retrievalmethod: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.AssistantKnowledgeConfiguration}
 */
proto.assistant_api.AssistantKnowledgeConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.AssistantKnowledgeConfiguration;
  return proto.assistant_api.AssistantKnowledgeConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.AssistantKnowledgeConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.AssistantKnowledgeConfiguration}
 */
proto.assistant_api.AssistantKnowledgeConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setKnowledgeid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRerankerenable(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setRerankermodelproviderid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setRerankermodelprovidername(value);
      break;
    case 12:
      var value = new common_pb.Metadata;
      reader.readMessage(value,common_pb.Metadata.deserializeBinaryFromReader);
      msg.addAssistantknowledgererankeroptions(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTopk(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setScorethreshold(value);
      break;
    case 8:
      var value = new common_pb.Knowledge;
      reader.readMessage(value,common_pb.Knowledge.deserializeBinaryFromReader);
      msg.setKnowledge(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRetrievalmethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.AssistantKnowledgeConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.AssistantKnowledgeConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantKnowledgeConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getKnowledgeid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getRerankerenable();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRerankermodelproviderid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      10,
      f
    );
  }
  f = message.getRerankermodelprovidername();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getAssistantknowledgererankeroptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      common_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getTopk();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getScorethreshold();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getKnowledge();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      common_pb.Knowledge.serializeBinaryToWriter
    );
  }
  f = message.getRetrievalmethod();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfiguration} returns this
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 knowledgeId = 2;
 * @return {string}
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.getKnowledgeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfiguration} returns this
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.setKnowledgeid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional bool rerankerEnable = 3;
 * @return {boolean}
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.getRerankerenable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfiguration} returns this
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.setRerankerenable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint64 rerankerModelProviderId = 10;
 * @return {string}
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.getRerankermodelproviderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfiguration} returns this
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.setRerankermodelproviderid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 10, value);
};


/**
 * optional string rerankerModelProviderName = 11;
 * @return {string}
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.getRerankermodelprovidername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfiguration} returns this
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.setRerankermodelprovidername = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * repeated Metadata assistantKnowledgeRerankerOptions = 12;
 * @return {!Array<!proto.Metadata>}
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.getAssistantknowledgererankeroptionsList = function() {
  return /** @type{!Array<!proto.Metadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Metadata, 12));
};


/**
 * @param {!Array<!proto.Metadata>} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfiguration} returns this
*/
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.setAssistantknowledgererankeroptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.Metadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Metadata}
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.addAssistantknowledgererankeroptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.Metadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.AssistantKnowledgeConfiguration} returns this
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.clearAssistantknowledgererankeroptionsList = function() {
  return this.setAssistantknowledgererankeroptionsList([]);
};


/**
 * optional uint32 topK = 6;
 * @return {number}
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.getTopk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfiguration} returns this
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.setTopk = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional float scoreThreshold = 7;
 * @return {number}
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.getScorethreshold = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfiguration} returns this
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.setScorethreshold = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional Knowledge knowledge = 8;
 * @return {?proto.Knowledge}
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.getKnowledge = function() {
  return /** @type{?proto.Knowledge} */ (
    jspb.Message.getWrapperField(this, common_pb.Knowledge, 8));
};


/**
 * @param {?proto.Knowledge|undefined} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfiguration} returns this
*/
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.setKnowledge = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantKnowledgeConfiguration} returns this
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.clearKnowledge = function() {
  return this.setKnowledge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.hasKnowledge = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string retrievalMethod = 9;
 * @return {string}
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.getRetrievalmethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfiguration} returns this
 */
proto.assistant_api.AssistantKnowledgeConfiguration.prototype.setRetrievalmethod = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.AssistantProviderModelAttribute.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.AssistantProviderModelAttribute.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.AssistantProviderModelAttribute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.AssistantProviderModelAttribute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantProviderModelAttribute.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    template: (f = msg.getTemplate()) && common_pb.TextChatCompletePrompt.toObject(includeInstance, f),
    modelproviderid: jspb.Message.getFieldWithDefault(msg, 6, "0"),
    modelprovidername: jspb.Message.getFieldWithDefault(msg, 7, ""),
    assistantmodeloptionsList: jspb.Message.toObjectList(msg.getAssistantmodeloptionsList(),
    common_pb.Metadata.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.AssistantProviderModelAttribute}
 */
proto.assistant_api.AssistantProviderModelAttribute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.AssistantProviderModelAttribute;
  return proto.assistant_api.AssistantProviderModelAttribute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.AssistantProviderModelAttribute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.AssistantProviderModelAttribute}
 */
proto.assistant_api.AssistantProviderModelAttribute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new common_pb.TextChatCompletePrompt;
      reader.readMessage(value,common_pb.TextChatCompletePrompt.deserializeBinaryFromReader);
      msg.setTemplate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setModelproviderid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelprovidername(value);
      break;
    case 8:
      var value = new common_pb.Metadata;
      reader.readMessage(value,common_pb.Metadata.deserializeBinaryFromReader);
      msg.addAssistantmodeloptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.AssistantProviderModelAttribute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.AssistantProviderModelAttribute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.AssistantProviderModelAttribute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantProviderModelAttribute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.TextChatCompletePrompt.serializeBinaryToWriter
    );
  }
  f = message.getModelproviderid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      6,
      f
    );
  }
  f = message.getModelprovidername();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAssistantmodeloptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      common_pb.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.assistant_api.AssistantProviderModelAttribute.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantProviderModelAttribute} returns this
 */
proto.assistant_api.AssistantProviderModelAttribute.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TextChatCompletePrompt template = 3;
 * @return {?proto.TextChatCompletePrompt}
 */
proto.assistant_api.AssistantProviderModelAttribute.prototype.getTemplate = function() {
  return /** @type{?proto.TextChatCompletePrompt} */ (
    jspb.Message.getWrapperField(this, common_pb.TextChatCompletePrompt, 3));
};


/**
 * @param {?proto.TextChatCompletePrompt|undefined} value
 * @return {!proto.assistant_api.AssistantProviderModelAttribute} returns this
*/
proto.assistant_api.AssistantProviderModelAttribute.prototype.setTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantProviderModelAttribute} returns this
 */
proto.assistant_api.AssistantProviderModelAttribute.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantProviderModelAttribute.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 modelProviderId = 6;
 * @return {string}
 */
proto.assistant_api.AssistantProviderModelAttribute.prototype.getModelproviderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantProviderModelAttribute} returns this
 */
proto.assistant_api.AssistantProviderModelAttribute.prototype.setModelproviderid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 6, value);
};


/**
 * optional string modelProviderName = 7;
 * @return {string}
 */
proto.assistant_api.AssistantProviderModelAttribute.prototype.getModelprovidername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantProviderModelAttribute} returns this
 */
proto.assistant_api.AssistantProviderModelAttribute.prototype.setModelprovidername = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated Metadata assistantModelOptions = 8;
 * @return {!Array<!proto.Metadata>}
 */
proto.assistant_api.AssistantProviderModelAttribute.prototype.getAssistantmodeloptionsList = function() {
  return /** @type{!Array<!proto.Metadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Metadata, 8));
};


/**
 * @param {!Array<!proto.Metadata>} value
 * @return {!proto.assistant_api.AssistantProviderModelAttribute} returns this
*/
proto.assistant_api.AssistantProviderModelAttribute.prototype.setAssistantmodeloptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.Metadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Metadata}
 */
proto.assistant_api.AssistantProviderModelAttribute.prototype.addAssistantmodeloptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.Metadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.AssistantProviderModelAttribute} returns this
 */
proto.assistant_api.AssistantProviderModelAttribute.prototype.clearAssistantmodeloptionsList = function() {
  return this.setAssistantmodeloptionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.AssistantAttribute.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.AssistantAttribute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.AssistantAttribute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantAttribute.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceidentifier: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    visibility: jspb.Message.getFieldWithDefault(msg, 5, ""),
    language: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.AssistantAttribute}
 */
proto.assistant_api.AssistantAttribute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.AssistantAttribute;
  return proto.assistant_api.AssistantAttribute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.AssistantAttribute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.AssistantAttribute}
 */
proto.assistant_api.AssistantAttribute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setSourceidentifier(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setVisibility(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.AssistantAttribute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.AssistantAttribute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.AssistantAttribute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantAttribute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceidentifier();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVisibility();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string source = 1;
 * @return {string}
 */
proto.assistant_api.AssistantAttribute.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantAttribute} returns this
 */
proto.assistant_api.AssistantAttribute.prototype.setSource = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 sourceIdentifier = 2;
 * @return {string}
 */
proto.assistant_api.AssistantAttribute.prototype.getSourceidentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantAttribute} returns this
 */
proto.assistant_api.AssistantAttribute.prototype.setSourceidentifier = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.assistant_api.AssistantAttribute.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantAttribute} returns this
 */
proto.assistant_api.AssistantAttribute.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.assistant_api.AssistantAttribute.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantAttribute} returns this
 */
proto.assistant_api.AssistantAttribute.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string visibility = 5;
 * @return {string}
 */
proto.assistant_api.AssistantAttribute.prototype.getVisibility = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantAttribute} returns this
 */
proto.assistant_api.AssistantAttribute.prototype.setVisibility = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string language = 6;
 * @return {string}
 */
proto.assistant_api.AssistantAttribute.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantAttribute} returns this
 */
proto.assistant_api.AssistantAttribute.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.repeatedFields_ = [12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.AssistantKnowledgeConfigurationAttribute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.toObject = function(includeInstance, msg) {
  var f, obj = {
    knowledgeid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    rerankerenable: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    rerankermodelproviderid: jspb.Message.getFieldWithDefault(msg, 10, "0"),
    rerankermodelprovidername: jspb.Message.getFieldWithDefault(msg, 11, ""),
    assistantknowledgererankeroptionsList: jspb.Message.toObjectList(msg.getAssistantknowledgererankeroptionsList(),
    common_pb.Metadata.toObject, includeInstance),
    topk: jspb.Message.getFieldWithDefault(msg, 6, 0),
    scorethreshold: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    retrievalmethod: jspb.Message.getFieldWithDefault(msg, 8, ""),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute}
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.AssistantKnowledgeConfigurationAttribute;
  return proto.assistant_api.AssistantKnowledgeConfigurationAttribute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute}
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setKnowledgeid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRerankerenable(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setRerankermodelproviderid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setRerankermodelprovidername(value);
      break;
    case 12:
      var value = new common_pb.Metadata;
      reader.readMessage(value,common_pb.Metadata.deserializeBinaryFromReader);
      msg.addAssistantknowledgererankeroptions(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTopk(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setScorethreshold(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRetrievalmethod(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.AssistantKnowledgeConfigurationAttribute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKnowledgeid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getRerankerenable();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRerankermodelproviderid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      10,
      f
    );
  }
  f = message.getRerankermodelprovidername();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getAssistantknowledgererankeroptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      common_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getTopk();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getScorethreshold();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getRetrievalmethod();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional uint64 knowledgeId = 2;
 * @return {string}
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.getKnowledgeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute} returns this
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.setKnowledgeid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional bool rerankerEnable = 3;
 * @return {boolean}
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.getRerankerenable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute} returns this
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.setRerankerenable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint64 rerankerModelProviderId = 10;
 * @return {string}
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.getRerankermodelproviderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute} returns this
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.setRerankermodelproviderid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 10, value);
};


/**
 * optional string rerankerModelProviderName = 11;
 * @return {string}
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.getRerankermodelprovidername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute} returns this
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.setRerankermodelprovidername = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * repeated Metadata assistantKnowledgeRerankerOptions = 12;
 * @return {!Array<!proto.Metadata>}
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.getAssistantknowledgererankeroptionsList = function() {
  return /** @type{!Array<!proto.Metadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Metadata, 12));
};


/**
 * @param {!Array<!proto.Metadata>} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute} returns this
*/
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.setAssistantknowledgererankeroptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.Metadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Metadata}
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.addAssistantknowledgererankeroptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.Metadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute} returns this
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.clearAssistantknowledgererankeroptionsList = function() {
  return this.setAssistantknowledgererankeroptionsList([]);
};


/**
 * optional uint32 topK = 6;
 * @return {number}
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.getTopk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute} returns this
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.setTopk = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional float scoreThreshold = 7;
 * @return {number}
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.getScorethreshold = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute} returns this
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.setScorethreshold = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional string retrievalMethod = 8;
 * @return {string}
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.getRetrievalmethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute} returns this
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.setRetrievalmethod = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool active = 9;
 * @return {boolean}
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute} returns this
 */
proto.assistant_api.AssistantKnowledgeConfigurationAttribute.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.AssistantToolConfigurationAttribute.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.AssistantToolConfigurationAttribute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.AssistantToolConfigurationAttribute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantToolConfigurationAttribute.toObject = function(includeInstance, msg) {
  var f, obj = {
    toolid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    code: jspb.Message.getFieldWithDefault(msg, 2, ""),
    options: (f = msg.getOptions()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.AssistantToolConfigurationAttribute}
 */
proto.assistant_api.AssistantToolConfigurationAttribute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.AssistantToolConfigurationAttribute;
  return proto.assistant_api.AssistantToolConfigurationAttribute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.AssistantToolConfigurationAttribute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.AssistantToolConfigurationAttribute}
 */
proto.assistant_api.AssistantToolConfigurationAttribute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setToolid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.AssistantToolConfigurationAttribute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.AssistantToolConfigurationAttribute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.AssistantToolConfigurationAttribute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantToolConfigurationAttribute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToolid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 toolId = 1;
 * @return {string}
 */
proto.assistant_api.AssistantToolConfigurationAttribute.prototype.getToolid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantToolConfigurationAttribute} returns this
 */
proto.assistant_api.AssistantToolConfigurationAttribute.prototype.setToolid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.assistant_api.AssistantToolConfigurationAttribute.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantToolConfigurationAttribute} returns this
 */
proto.assistant_api.AssistantToolConfigurationAttribute.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct options = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.assistant_api.AssistantToolConfigurationAttribute.prototype.getOptions = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.assistant_api.AssistantToolConfigurationAttribute} returns this
*/
proto.assistant_api.AssistantToolConfigurationAttribute.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantToolConfigurationAttribute} returns this
 */
proto.assistant_api.AssistantToolConfigurationAttribute.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantToolConfigurationAttribute.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string status = 4;
 * @return {string}
 */
proto.assistant_api.AssistantToolConfigurationAttribute.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantToolConfigurationAttribute} returns this
 */
proto.assistant_api.AssistantToolConfigurationAttribute.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.CreateAssistantRequest.repeatedFields_ = [5,6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.CreateAssistantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.CreateAssistantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.CreateAssistantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.CreateAssistantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assistantprovidermodelattribute: (f = msg.getAssistantprovidermodelattribute()) && proto.assistant_api.AssistantProviderModelAttribute.toObject(includeInstance, f),
    assistantattribute: (f = msg.getAssistantattribute()) && proto.assistant_api.AssistantAttribute.toObject(includeInstance, f),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    assistantknowledgeconfigurationattributesList: jspb.Message.toObjectList(msg.getAssistantknowledgeconfigurationattributesList(),
    proto.assistant_api.AssistantKnowledgeConfigurationAttribute.toObject, includeInstance),
    assistanttoolconfigurationattributeList: jspb.Message.toObjectList(msg.getAssistanttoolconfigurationattributeList(),
    proto.assistant_api.AssistantToolConfigurationAttribute.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.CreateAssistantRequest}
 */
proto.assistant_api.CreateAssistantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.CreateAssistantRequest;
  return proto.assistant_api.CreateAssistantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.CreateAssistantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.CreateAssistantRequest}
 */
proto.assistant_api.CreateAssistantRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.assistant_api.AssistantProviderModelAttribute;
      reader.readMessage(value,proto.assistant_api.AssistantProviderModelAttribute.deserializeBinaryFromReader);
      msg.setAssistantprovidermodelattribute(value);
      break;
    case 2:
      var value = new proto.assistant_api.AssistantAttribute;
      reader.readMessage(value,proto.assistant_api.AssistantAttribute.deserializeBinaryFromReader);
      msg.setAssistantattribute(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 6:
      var value = new proto.assistant_api.AssistantKnowledgeConfigurationAttribute;
      reader.readMessage(value,proto.assistant_api.AssistantKnowledgeConfigurationAttribute.deserializeBinaryFromReader);
      msg.addAssistantknowledgeconfigurationattributes(value);
      break;
    case 7:
      var value = new proto.assistant_api.AssistantToolConfigurationAttribute;
      reader.readMessage(value,proto.assistant_api.AssistantToolConfigurationAttribute.deserializeBinaryFromReader);
      msg.addAssistanttoolconfigurationattribute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.CreateAssistantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.CreateAssistantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.CreateAssistantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.CreateAssistantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssistantprovidermodelattribute();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.assistant_api.AssistantProviderModelAttribute.serializeBinaryToWriter
    );
  }
  f = message.getAssistantattribute();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.assistant_api.AssistantAttribute.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getAssistantknowledgeconfigurationattributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.assistant_api.AssistantKnowledgeConfigurationAttribute.serializeBinaryToWriter
    );
  }
  f = message.getAssistanttoolconfigurationattributeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.assistant_api.AssistantToolConfigurationAttribute.serializeBinaryToWriter
    );
  }
};


/**
 * optional AssistantProviderModelAttribute assistantProviderModelAttribute = 1;
 * @return {?proto.assistant_api.AssistantProviderModelAttribute}
 */
proto.assistant_api.CreateAssistantRequest.prototype.getAssistantprovidermodelattribute = function() {
  return /** @type{?proto.assistant_api.AssistantProviderModelAttribute} */ (
    jspb.Message.getWrapperField(this, proto.assistant_api.AssistantProviderModelAttribute, 1));
};


/**
 * @param {?proto.assistant_api.AssistantProviderModelAttribute|undefined} value
 * @return {!proto.assistant_api.CreateAssistantRequest} returns this
*/
proto.assistant_api.CreateAssistantRequest.prototype.setAssistantprovidermodelattribute = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.CreateAssistantRequest} returns this
 */
proto.assistant_api.CreateAssistantRequest.prototype.clearAssistantprovidermodelattribute = function() {
  return this.setAssistantprovidermodelattribute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.CreateAssistantRequest.prototype.hasAssistantprovidermodelattribute = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AssistantAttribute assistantAttribute = 2;
 * @return {?proto.assistant_api.AssistantAttribute}
 */
proto.assistant_api.CreateAssistantRequest.prototype.getAssistantattribute = function() {
  return /** @type{?proto.assistant_api.AssistantAttribute} */ (
    jspb.Message.getWrapperField(this, proto.assistant_api.AssistantAttribute, 2));
};


/**
 * @param {?proto.assistant_api.AssistantAttribute|undefined} value
 * @return {!proto.assistant_api.CreateAssistantRequest} returns this
*/
proto.assistant_api.CreateAssistantRequest.prototype.setAssistantattribute = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.CreateAssistantRequest} returns this
 */
proto.assistant_api.CreateAssistantRequest.prototype.clearAssistantattribute = function() {
  return this.setAssistantattribute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.CreateAssistantRequest.prototype.hasAssistantattribute = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string tags = 5;
 * @return {!Array<string>}
 */
proto.assistant_api.CreateAssistantRequest.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.assistant_api.CreateAssistantRequest} returns this
 */
proto.assistant_api.CreateAssistantRequest.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.CreateAssistantRequest} returns this
 */
proto.assistant_api.CreateAssistantRequest.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.CreateAssistantRequest} returns this
 */
proto.assistant_api.CreateAssistantRequest.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * repeated AssistantKnowledgeConfigurationAttribute assistantKnowledgeConfigurationAttributes = 6;
 * @return {!Array<!proto.assistant_api.AssistantKnowledgeConfigurationAttribute>}
 */
proto.assistant_api.CreateAssistantRequest.prototype.getAssistantknowledgeconfigurationattributesList = function() {
  return /** @type{!Array<!proto.assistant_api.AssistantKnowledgeConfigurationAttribute>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.assistant_api.AssistantKnowledgeConfigurationAttribute, 6));
};


/**
 * @param {!Array<!proto.assistant_api.AssistantKnowledgeConfigurationAttribute>} value
 * @return {!proto.assistant_api.CreateAssistantRequest} returns this
*/
proto.assistant_api.CreateAssistantRequest.prototype.setAssistantknowledgeconfigurationattributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute}
 */
proto.assistant_api.CreateAssistantRequest.prototype.addAssistantknowledgeconfigurationattributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.assistant_api.AssistantKnowledgeConfigurationAttribute, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.CreateAssistantRequest} returns this
 */
proto.assistant_api.CreateAssistantRequest.prototype.clearAssistantknowledgeconfigurationattributesList = function() {
  return this.setAssistantknowledgeconfigurationattributesList([]);
};


/**
 * repeated AssistantToolConfigurationAttribute assistantToolConfigurationAttribute = 7;
 * @return {!Array<!proto.assistant_api.AssistantToolConfigurationAttribute>}
 */
proto.assistant_api.CreateAssistantRequest.prototype.getAssistanttoolconfigurationattributeList = function() {
  return /** @type{!Array<!proto.assistant_api.AssistantToolConfigurationAttribute>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.assistant_api.AssistantToolConfigurationAttribute, 7));
};


/**
 * @param {!Array<!proto.assistant_api.AssistantToolConfigurationAttribute>} value
 * @return {!proto.assistant_api.CreateAssistantRequest} returns this
*/
proto.assistant_api.CreateAssistantRequest.prototype.setAssistanttoolconfigurationattributeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.assistant_api.AssistantToolConfigurationAttribute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.AssistantToolConfigurationAttribute}
 */
proto.assistant_api.CreateAssistantRequest.prototype.addAssistanttoolconfigurationattribute = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.assistant_api.AssistantToolConfigurationAttribute, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.CreateAssistantRequest} returns this
 */
proto.assistant_api.CreateAssistantRequest.prototype.clearAssistanttoolconfigurationattributeList = function() {
  return this.setAssistanttoolconfigurationattributeList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.CreateAssistantProviderModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.CreateAssistantProviderModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.CreateAssistantProviderModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.CreateAssistantProviderModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assistantid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    assistantprovidermodelattribute: (f = msg.getAssistantprovidermodelattribute()) && proto.assistant_api.AssistantProviderModelAttribute.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.CreateAssistantProviderModelRequest}
 */
proto.assistant_api.CreateAssistantProviderModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.CreateAssistantProviderModelRequest;
  return proto.assistant_api.CreateAssistantProviderModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.CreateAssistantProviderModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.CreateAssistantProviderModelRequest}
 */
proto.assistant_api.CreateAssistantProviderModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 2:
      var value = new proto.assistant_api.AssistantProviderModelAttribute;
      reader.readMessage(value,proto.assistant_api.AssistantProviderModelAttribute.deserializeBinaryFromReader);
      msg.setAssistantprovidermodelattribute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.CreateAssistantProviderModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.CreateAssistantProviderModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.CreateAssistantProviderModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.CreateAssistantProviderModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getAssistantprovidermodelattribute();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.assistant_api.AssistantProviderModelAttribute.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 assistantId = 1;
 * @return {string}
 */
proto.assistant_api.CreateAssistantProviderModelRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.CreateAssistantProviderModelRequest} returns this
 */
proto.assistant_api.CreateAssistantProviderModelRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional AssistantProviderModelAttribute assistantProviderModelAttribute = 2;
 * @return {?proto.assistant_api.AssistantProviderModelAttribute}
 */
proto.assistant_api.CreateAssistantProviderModelRequest.prototype.getAssistantprovidermodelattribute = function() {
  return /** @type{?proto.assistant_api.AssistantProviderModelAttribute} */ (
    jspb.Message.getWrapperField(this, proto.assistant_api.AssistantProviderModelAttribute, 2));
};


/**
 * @param {?proto.assistant_api.AssistantProviderModelAttribute|undefined} value
 * @return {!proto.assistant_api.CreateAssistantProviderModelRequest} returns this
*/
proto.assistant_api.CreateAssistantProviderModelRequest.prototype.setAssistantprovidermodelattribute = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.CreateAssistantProviderModelRequest} returns this
 */
proto.assistant_api.CreateAssistantProviderModelRequest.prototype.clearAssistantprovidermodelattribute = function() {
  return this.setAssistantprovidermodelattribute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.CreateAssistantProviderModelRequest.prototype.hasAssistantprovidermodelattribute = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAssistantProviderModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAssistantProviderModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAssistantProviderModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantProviderModelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    data: (f = msg.getData()) && proto.assistant_api.AssistantProviderModel.toObject(includeInstance, f),
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAssistantProviderModelResponse}
 */
proto.assistant_api.GetAssistantProviderModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAssistantProviderModelResponse;
  return proto.assistant_api.GetAssistantProviderModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAssistantProviderModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAssistantProviderModelResponse}
 */
proto.assistant_api.GetAssistantProviderModelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new proto.assistant_api.AssistantProviderModel;
      reader.readMessage(value,proto.assistant_api.AssistantProviderModel.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 4:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAssistantProviderModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAssistantProviderModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAssistantProviderModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantProviderModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.assistant_api.AssistantProviderModel.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.assistant_api.GetAssistantProviderModelResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.GetAssistantProviderModelResponse} returns this
 */
proto.assistant_api.GetAssistantProviderModelResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.assistant_api.GetAssistantProviderModelResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.GetAssistantProviderModelResponse} returns this
 */
proto.assistant_api.GetAssistantProviderModelResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional AssistantProviderModel data = 3;
 * @return {?proto.assistant_api.AssistantProviderModel}
 */
proto.assistant_api.GetAssistantProviderModelResponse.prototype.getData = function() {
  return /** @type{?proto.assistant_api.AssistantProviderModel} */ (
    jspb.Message.getWrapperField(this, proto.assistant_api.AssistantProviderModel, 3));
};


/**
 * @param {?proto.assistant_api.AssistantProviderModel|undefined} value
 * @return {!proto.assistant_api.GetAssistantProviderModelResponse} returns this
*/
proto.assistant_api.GetAssistantProviderModelResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAssistantProviderModelResponse} returns this
 */
proto.assistant_api.GetAssistantProviderModelResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAssistantProviderModelResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Error error = 4;
 * @return {?proto.Error}
 */
proto.assistant_api.GetAssistantProviderModelResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 4));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.assistant_api.GetAssistantProviderModelResponse} returns this
*/
proto.assistant_api.GetAssistantProviderModelResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAssistantProviderModelResponse} returns this
 */
proto.assistant_api.GetAssistantProviderModelResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAssistantProviderModelResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assistantid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    assistantknowledgeconfigurationattributesList: jspb.Message.toObjectList(msg.getAssistantknowledgeconfigurationattributesList(),
    proto.assistant_api.AssistantKnowledgeConfigurationAttribute.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest}
 */
proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest;
  return proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest}
 */
proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 2:
      var value = new proto.assistant_api.AssistantKnowledgeConfigurationAttribute;
      reader.readMessage(value,proto.assistant_api.AssistantKnowledgeConfigurationAttribute.deserializeBinaryFromReader);
      msg.addAssistantknowledgeconfigurationattributes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getAssistantknowledgeconfigurationattributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.assistant_api.AssistantKnowledgeConfigurationAttribute.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 assistantId = 1;
 * @return {string}
 */
proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest} returns this
 */
proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * repeated AssistantKnowledgeConfigurationAttribute assistantKnowledgeConfigurationAttributes = 2;
 * @return {!Array<!proto.assistant_api.AssistantKnowledgeConfigurationAttribute>}
 */
proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.prototype.getAssistantknowledgeconfigurationattributesList = function() {
  return /** @type{!Array<!proto.assistant_api.AssistantKnowledgeConfigurationAttribute>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.assistant_api.AssistantKnowledgeConfigurationAttribute, 2));
};


/**
 * @param {!Array<!proto.assistant_api.AssistantKnowledgeConfigurationAttribute>} value
 * @return {!proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest} returns this
*/
proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.prototype.setAssistantknowledgeconfigurationattributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.AssistantKnowledgeConfigurationAttribute}
 */
proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.prototype.addAssistantknowledgeconfigurationattributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.assistant_api.AssistantKnowledgeConfigurationAttribute, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest} returns this
 */
proto.assistant_api.CreateAssistantKnowledgeConfigurationRequest.prototype.clearAssistantknowledgeconfigurationattributesList = function() {
  return this.setAssistantknowledgeconfigurationattributesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.CreateAssistantToolConfigurationRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.CreateAssistantToolConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.CreateAssistantToolConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.CreateAssistantToolConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.CreateAssistantToolConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assistantid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    assistanttoolconfigurationattributeList: jspb.Message.toObjectList(msg.getAssistanttoolconfigurationattributeList(),
    proto.assistant_api.AssistantToolConfigurationAttribute.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.CreateAssistantToolConfigurationRequest}
 */
proto.assistant_api.CreateAssistantToolConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.CreateAssistantToolConfigurationRequest;
  return proto.assistant_api.CreateAssistantToolConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.CreateAssistantToolConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.CreateAssistantToolConfigurationRequest}
 */
proto.assistant_api.CreateAssistantToolConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 2:
      var value = new proto.assistant_api.AssistantToolConfigurationAttribute;
      reader.readMessage(value,proto.assistant_api.AssistantToolConfigurationAttribute.deserializeBinaryFromReader);
      msg.addAssistanttoolconfigurationattribute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.CreateAssistantToolConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.CreateAssistantToolConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.CreateAssistantToolConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.CreateAssistantToolConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getAssistanttoolconfigurationattributeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.assistant_api.AssistantToolConfigurationAttribute.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 assistantId = 1;
 * @return {string}
 */
proto.assistant_api.CreateAssistantToolConfigurationRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.CreateAssistantToolConfigurationRequest} returns this
 */
proto.assistant_api.CreateAssistantToolConfigurationRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * repeated AssistantToolConfigurationAttribute assistantToolConfigurationAttribute = 2;
 * @return {!Array<!proto.assistant_api.AssistantToolConfigurationAttribute>}
 */
proto.assistant_api.CreateAssistantToolConfigurationRequest.prototype.getAssistanttoolconfigurationattributeList = function() {
  return /** @type{!Array<!proto.assistant_api.AssistantToolConfigurationAttribute>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.assistant_api.AssistantToolConfigurationAttribute, 2));
};


/**
 * @param {!Array<!proto.assistant_api.AssistantToolConfigurationAttribute>} value
 * @return {!proto.assistant_api.CreateAssistantToolConfigurationRequest} returns this
*/
proto.assistant_api.CreateAssistantToolConfigurationRequest.prototype.setAssistanttoolconfigurationattributeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.assistant_api.AssistantToolConfigurationAttribute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.AssistantToolConfigurationAttribute}
 */
proto.assistant_api.CreateAssistantToolConfigurationRequest.prototype.addAssistanttoolconfigurationattribute = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.assistant_api.AssistantToolConfigurationAttribute, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.CreateAssistantToolConfigurationRequest} returns this
 */
proto.assistant_api.CreateAssistantToolConfigurationRequest.prototype.clearAssistanttoolconfigurationattributeList = function() {
  return this.setAssistanttoolconfigurationattributeList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.CreateAssistantTagRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.CreateAssistantTagRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.CreateAssistantTagRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.CreateAssistantTagRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.CreateAssistantTagRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assistantid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.CreateAssistantTagRequest}
 */
proto.assistant_api.CreateAssistantTagRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.CreateAssistantTagRequest;
  return proto.assistant_api.CreateAssistantTagRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.CreateAssistantTagRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.CreateAssistantTagRequest}
 */
proto.assistant_api.CreateAssistantTagRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.CreateAssistantTagRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.CreateAssistantTagRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.CreateAssistantTagRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.CreateAssistantTagRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional uint64 assistantId = 1;
 * @return {string}
 */
proto.assistant_api.CreateAssistantTagRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.CreateAssistantTagRequest} returns this
 */
proto.assistant_api.CreateAssistantTagRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * repeated string tags = 2;
 * @return {!Array<string>}
 */
proto.assistant_api.CreateAssistantTagRequest.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.assistant_api.CreateAssistantTagRequest} returns this
 */
proto.assistant_api.CreateAssistantTagRequest.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.CreateAssistantTagRequest} returns this
 */
proto.assistant_api.CreateAssistantTagRequest.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.CreateAssistantTagRequest} returns this
 */
proto.assistant_api.CreateAssistantTagRequest.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAssistantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAssistantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAssistantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    assistantprovidermodelid: jspb.Message.getFieldWithDefault(msg, 4, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAssistantRequest}
 */
proto.assistant_api.GetAssistantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAssistantRequest;
  return proto.assistant_api.GetAssistantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAssistantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAssistantRequest}
 */
proto.assistant_api.GetAssistantRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantprovidermodelid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAssistantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAssistantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAssistantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64String(
      4,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.GetAssistantRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAssistantRequest} returns this
 */
proto.assistant_api.GetAssistantRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 assistantProviderModelId = 4;
 * @return {string}
 */
proto.assistant_api.GetAssistantRequest.prototype.getAssistantprovidermodelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAssistantRequest} returns this
 */
proto.assistant_api.GetAssistantRequest.prototype.setAssistantprovidermodelid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.assistant_api.GetAssistantRequest} returns this
 */
proto.assistant_api.GetAssistantRequest.prototype.clearAssistantprovidermodelid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAssistantRequest.prototype.hasAssistantprovidermodelid = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.DeleteAssistantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.DeleteAssistantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.DeleteAssistantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.DeleteAssistantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.DeleteAssistantRequest}
 */
proto.assistant_api.DeleteAssistantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.DeleteAssistantRequest;
  return proto.assistant_api.DeleteAssistantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.DeleteAssistantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.DeleteAssistantRequest}
 */
proto.assistant_api.DeleteAssistantRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.DeleteAssistantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.DeleteAssistantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.DeleteAssistantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.DeleteAssistantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.DeleteAssistantRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.DeleteAssistantRequest} returns this
 */
proto.assistant_api.DeleteAssistantRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAssistantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAssistantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAssistantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    data: (f = msg.getData()) && proto.assistant_api.Assistant.toObject(includeInstance, f),
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAssistantResponse}
 */
proto.assistant_api.GetAssistantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAssistantResponse;
  return proto.assistant_api.GetAssistantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAssistantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAssistantResponse}
 */
proto.assistant_api.GetAssistantResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new proto.assistant_api.Assistant;
      reader.readMessage(value,proto.assistant_api.Assistant.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 4:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAssistantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAssistantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAssistantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.assistant_api.Assistant.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.assistant_api.GetAssistantResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.GetAssistantResponse} returns this
 */
proto.assistant_api.GetAssistantResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.assistant_api.GetAssistantResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.GetAssistantResponse} returns this
 */
proto.assistant_api.GetAssistantResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional Assistant data = 3;
 * @return {?proto.assistant_api.Assistant}
 */
proto.assistant_api.GetAssistantResponse.prototype.getData = function() {
  return /** @type{?proto.assistant_api.Assistant} */ (
    jspb.Message.getWrapperField(this, proto.assistant_api.Assistant, 3));
};


/**
 * @param {?proto.assistant_api.Assistant|undefined} value
 * @return {!proto.assistant_api.GetAssistantResponse} returns this
*/
proto.assistant_api.GetAssistantResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAssistantResponse} returns this
 */
proto.assistant_api.GetAssistantResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAssistantResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Error error = 4;
 * @return {?proto.Error}
 */
proto.assistant_api.GetAssistantResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 4));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.assistant_api.GetAssistantResponse} returns this
*/
proto.assistant_api.GetAssistantResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAssistantResponse} returns this
 */
proto.assistant_api.GetAssistantResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAssistantResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllAssistantRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllAssistantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllAssistantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllAssistantRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paginate: (f = msg.getPaginate()) && common_pb.Paginate.toObject(includeInstance, f),
    criteriasList: jspb.Message.toObjectList(msg.getCriteriasList(),
    common_pb.Criteria.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllAssistantRequest}
 */
proto.assistant_api.GetAllAssistantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllAssistantRequest;
  return proto.assistant_api.GetAllAssistantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllAssistantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllAssistantRequest}
 */
proto.assistant_api.GetAllAssistantRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Paginate;
      reader.readMessage(value,common_pb.Paginate.deserializeBinaryFromReader);
      msg.setPaginate(value);
      break;
    case 2:
      var value = new common_pb.Criteria;
      reader.readMessage(value,common_pb.Criteria.deserializeBinaryFromReader);
      msg.addCriterias(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllAssistantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllAssistantRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllAssistantRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaginate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Paginate.serializeBinaryToWriter
    );
  }
  f = message.getCriteriasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional Paginate paginate = 1;
 * @return {?proto.Paginate}
 */
proto.assistant_api.GetAllAssistantRequest.prototype.getPaginate = function() {
  return /** @type{?proto.Paginate} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginate, 1));
};


/**
 * @param {?proto.Paginate|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantRequest} returns this
*/
proto.assistant_api.GetAllAssistantRequest.prototype.setPaginate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantRequest} returns this
 */
proto.assistant_api.GetAllAssistantRequest.prototype.clearPaginate = function() {
  return this.setPaginate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantRequest.prototype.hasPaginate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Criteria criterias = 2;
 * @return {!Array<!proto.Criteria>}
 */
proto.assistant_api.GetAllAssistantRequest.prototype.getCriteriasList = function() {
  return /** @type{!Array<!proto.Criteria>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Criteria, 2));
};


/**
 * @param {!Array<!proto.Criteria>} value
 * @return {!proto.assistant_api.GetAllAssistantRequest} returns this
*/
proto.assistant_api.GetAllAssistantRequest.prototype.setCriteriasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Criteria=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Criteria}
 */
proto.assistant_api.GetAllAssistantRequest.prototype.addCriterias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Criteria, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantRequest} returns this
 */
proto.assistant_api.GetAllAssistantRequest.prototype.clearCriteriasList = function() {
  return this.setCriteriasList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllAssistantResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllAssistantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllAssistantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllAssistantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.assistant_api.Assistant.toObject, includeInstance),
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    paginated: (f = msg.getPaginated()) && common_pb.Paginated.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllAssistantResponse}
 */
proto.assistant_api.GetAllAssistantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllAssistantResponse;
  return proto.assistant_api.GetAllAssistantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllAssistantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllAssistantResponse}
 */
proto.assistant_api.GetAllAssistantResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new proto.assistant_api.Assistant;
      reader.readMessage(value,proto.assistant_api.Assistant.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 4:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 5:
      var value = new common_pb.Paginated;
      reader.readMessage(value,common_pb.Paginated.deserializeBinaryFromReader);
      msg.setPaginated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllAssistantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllAssistantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllAssistantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.assistant_api.Assistant.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getPaginated();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.Paginated.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.assistant_api.GetAllAssistantResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.GetAllAssistantResponse} returns this
 */
proto.assistant_api.GetAllAssistantResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.GetAllAssistantResponse} returns this
 */
proto.assistant_api.GetAllAssistantResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated Assistant data = 3;
 * @return {!Array<!proto.assistant_api.Assistant>}
 */
proto.assistant_api.GetAllAssistantResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.assistant_api.Assistant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.assistant_api.Assistant, 3));
};


/**
 * @param {!Array<!proto.assistant_api.Assistant>} value
 * @return {!proto.assistant_api.GetAllAssistantResponse} returns this
*/
proto.assistant_api.GetAllAssistantResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.assistant_api.Assistant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.Assistant}
 */
proto.assistant_api.GetAllAssistantResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.assistant_api.Assistant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantResponse} returns this
 */
proto.assistant_api.GetAllAssistantResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional Error error = 4;
 * @return {?proto.Error}
 */
proto.assistant_api.GetAllAssistantResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 4));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantResponse} returns this
*/
proto.assistant_api.GetAllAssistantResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantResponse} returns this
 */
proto.assistant_api.GetAllAssistantResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Paginated paginated = 5;
 * @return {?proto.Paginated}
 */
proto.assistant_api.GetAllAssistantResponse.prototype.getPaginated = function() {
  return /** @type{?proto.Paginated} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginated, 5));
};


/**
 * @param {?proto.Paginated|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantResponse} returns this
*/
proto.assistant_api.GetAllAssistantResponse.prototype.setPaginated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantResponse} returns this
 */
proto.assistant_api.GetAllAssistantResponse.prototype.clearPaginated = function() {
  return this.setPaginated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantResponse.prototype.hasPaginated = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllAssistantProviderModelRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllAssistantProviderModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllAssistantProviderModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllAssistantProviderModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantProviderModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paginate: (f = msg.getPaginate()) && common_pb.Paginate.toObject(includeInstance, f),
    criteriasList: jspb.Message.toObjectList(msg.getCriteriasList(),
    common_pb.Criteria.toObject, includeInstance),
    assistantid: jspb.Message.getFieldWithDefault(msg, 5, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllAssistantProviderModelRequest}
 */
proto.assistant_api.GetAllAssistantProviderModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllAssistantProviderModelRequest;
  return proto.assistant_api.GetAllAssistantProviderModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllAssistantProviderModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllAssistantProviderModelRequest}
 */
proto.assistant_api.GetAllAssistantProviderModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Paginate;
      reader.readMessage(value,common_pb.Paginate.deserializeBinaryFromReader);
      msg.setPaginate(value);
      break;
    case 2:
      var value = new common_pb.Criteria;
      reader.readMessage(value,common_pb.Criteria.deserializeBinaryFromReader);
      msg.addCriterias(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllAssistantProviderModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllAssistantProviderModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllAssistantProviderModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantProviderModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaginate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Paginate.serializeBinaryToWriter
    );
  }
  f = message.getCriteriasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      5,
      f
    );
  }
};


/**
 * optional Paginate paginate = 1;
 * @return {?proto.Paginate}
 */
proto.assistant_api.GetAllAssistantProviderModelRequest.prototype.getPaginate = function() {
  return /** @type{?proto.Paginate} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginate, 1));
};


/**
 * @param {?proto.Paginate|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantProviderModelRequest} returns this
*/
proto.assistant_api.GetAllAssistantProviderModelRequest.prototype.setPaginate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantProviderModelRequest} returns this
 */
proto.assistant_api.GetAllAssistantProviderModelRequest.prototype.clearPaginate = function() {
  return this.setPaginate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantProviderModelRequest.prototype.hasPaginate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Criteria criterias = 2;
 * @return {!Array<!proto.Criteria>}
 */
proto.assistant_api.GetAllAssistantProviderModelRequest.prototype.getCriteriasList = function() {
  return /** @type{!Array<!proto.Criteria>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Criteria, 2));
};


/**
 * @param {!Array<!proto.Criteria>} value
 * @return {!proto.assistant_api.GetAllAssistantProviderModelRequest} returns this
*/
proto.assistant_api.GetAllAssistantProviderModelRequest.prototype.setCriteriasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Criteria=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Criteria}
 */
proto.assistant_api.GetAllAssistantProviderModelRequest.prototype.addCriterias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Criteria, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantProviderModelRequest} returns this
 */
proto.assistant_api.GetAllAssistantProviderModelRequest.prototype.clearCriteriasList = function() {
  return this.setCriteriasList([]);
};


/**
 * optional uint64 assistantId = 5;
 * @return {string}
 */
proto.assistant_api.GetAllAssistantProviderModelRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAllAssistantProviderModelRequest} returns this
 */
proto.assistant_api.GetAllAssistantProviderModelRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllAssistantProviderModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllAssistantProviderModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.assistant_api.AssistantProviderModel.toObject, includeInstance),
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    paginated: (f = msg.getPaginated()) && common_pb.Paginated.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllAssistantProviderModelResponse}
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllAssistantProviderModelResponse;
  return proto.assistant_api.GetAllAssistantProviderModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllAssistantProviderModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllAssistantProviderModelResponse}
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new proto.assistant_api.AssistantProviderModel;
      reader.readMessage(value,proto.assistant_api.AssistantProviderModel.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 4:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 5:
      var value = new common_pb.Paginated;
      reader.readMessage(value,common_pb.Paginated.deserializeBinaryFromReader);
      msg.setPaginated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllAssistantProviderModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllAssistantProviderModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.assistant_api.AssistantProviderModel.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getPaginated();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.Paginated.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.GetAllAssistantProviderModelResponse} returns this
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.GetAllAssistantProviderModelResponse} returns this
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated AssistantProviderModel data = 3;
 * @return {!Array<!proto.assistant_api.AssistantProviderModel>}
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.assistant_api.AssistantProviderModel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.assistant_api.AssistantProviderModel, 3));
};


/**
 * @param {!Array<!proto.assistant_api.AssistantProviderModel>} value
 * @return {!proto.assistant_api.GetAllAssistantProviderModelResponse} returns this
*/
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.assistant_api.AssistantProviderModel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.AssistantProviderModel}
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.assistant_api.AssistantProviderModel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantProviderModelResponse} returns this
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional Error error = 4;
 * @return {?proto.Error}
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 4));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantProviderModelResponse} returns this
*/
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantProviderModelResponse} returns this
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Paginated paginated = 5;
 * @return {?proto.Paginated}
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.getPaginated = function() {
  return /** @type{?proto.Paginated} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginated, 5));
};


/**
 * @param {?proto.Paginated|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantProviderModelResponse} returns this
*/
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.setPaginated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantProviderModelResponse} returns this
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.clearPaginated = function() {
  return this.setPaginated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantProviderModelResponse.prototype.hasPaginated = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllAssistantMessageRequest.repeatedFields_ = [2,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllAssistantMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllAssistantMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllAssistantMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paginate: (f = msg.getPaginate()) && common_pb.Paginate.toObject(includeInstance, f),
    criteriasList: jspb.Message.toObjectList(msg.getCriteriasList(),
    common_pb.Criteria.toObject, includeInstance),
    assistantid: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    order: (f = msg.getOrder()) && common_pb.Ordering.toObject(includeInstance, f),
    selectorsList: jspb.Message.toObjectList(msg.getSelectorsList(),
    common_pb.FieldSelector.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllAssistantMessageRequest}
 */
proto.assistant_api.GetAllAssistantMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllAssistantMessageRequest;
  return proto.assistant_api.GetAllAssistantMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllAssistantMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllAssistantMessageRequest}
 */
proto.assistant_api.GetAllAssistantMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Paginate;
      reader.readMessage(value,common_pb.Paginate.deserializeBinaryFromReader);
      msg.setPaginate(value);
      break;
    case 2:
      var value = new common_pb.Criteria;
      reader.readMessage(value,common_pb.Criteria.deserializeBinaryFromReader);
      msg.addCriterias(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 5:
      var value = new common_pb.Ordering;
      reader.readMessage(value,common_pb.Ordering.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    case 6:
      var value = new common_pb.FieldSelector;
      reader.readMessage(value,common_pb.FieldSelector.deserializeBinaryFromReader);
      msg.addSelectors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllAssistantMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllAssistantMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllAssistantMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaginate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Paginate.serializeBinaryToWriter
    );
  }
  f = message.getCriteriasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.Ordering.serializeBinaryToWriter
    );
  }
  f = message.getSelectorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      common_pb.FieldSelector.serializeBinaryToWriter
    );
  }
};


/**
 * optional Paginate paginate = 1;
 * @return {?proto.Paginate}
 */
proto.assistant_api.GetAllAssistantMessageRequest.prototype.getPaginate = function() {
  return /** @type{?proto.Paginate} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginate, 1));
};


/**
 * @param {?proto.Paginate|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantMessageRequest} returns this
*/
proto.assistant_api.GetAllAssistantMessageRequest.prototype.setPaginate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantMessageRequest} returns this
 */
proto.assistant_api.GetAllAssistantMessageRequest.prototype.clearPaginate = function() {
  return this.setPaginate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantMessageRequest.prototype.hasPaginate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Criteria criterias = 2;
 * @return {!Array<!proto.Criteria>}
 */
proto.assistant_api.GetAllAssistantMessageRequest.prototype.getCriteriasList = function() {
  return /** @type{!Array<!proto.Criteria>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Criteria, 2));
};


/**
 * @param {!Array<!proto.Criteria>} value
 * @return {!proto.assistant_api.GetAllAssistantMessageRequest} returns this
*/
proto.assistant_api.GetAllAssistantMessageRequest.prototype.setCriteriasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Criteria=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Criteria}
 */
proto.assistant_api.GetAllAssistantMessageRequest.prototype.addCriterias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Criteria, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantMessageRequest} returns this
 */
proto.assistant_api.GetAllAssistantMessageRequest.prototype.clearCriteriasList = function() {
  return this.setCriteriasList([]);
};


/**
 * optional uint64 assistantId = 3;
 * @return {string}
 */
proto.assistant_api.GetAllAssistantMessageRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAllAssistantMessageRequest} returns this
 */
proto.assistant_api.GetAllAssistantMessageRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional Ordering order = 5;
 * @return {?proto.Ordering}
 */
proto.assistant_api.GetAllAssistantMessageRequest.prototype.getOrder = function() {
  return /** @type{?proto.Ordering} */ (
    jspb.Message.getWrapperField(this, common_pb.Ordering, 5));
};


/**
 * @param {?proto.Ordering|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantMessageRequest} returns this
*/
proto.assistant_api.GetAllAssistantMessageRequest.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantMessageRequest} returns this
 */
proto.assistant_api.GetAllAssistantMessageRequest.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantMessageRequest.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated FieldSelector selectors = 6;
 * @return {!Array<!proto.FieldSelector>}
 */
proto.assistant_api.GetAllAssistantMessageRequest.prototype.getSelectorsList = function() {
  return /** @type{!Array<!proto.FieldSelector>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.FieldSelector, 6));
};


/**
 * @param {!Array<!proto.FieldSelector>} value
 * @return {!proto.assistant_api.GetAllAssistantMessageRequest} returns this
*/
proto.assistant_api.GetAllAssistantMessageRequest.prototype.setSelectorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.FieldSelector=} opt_value
 * @param {number=} opt_index
 * @return {!proto.FieldSelector}
 */
proto.assistant_api.GetAllAssistantMessageRequest.prototype.addSelectors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.FieldSelector, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantMessageRequest} returns this
 */
proto.assistant_api.GetAllAssistantMessageRequest.prototype.clearSelectorsList = function() {
  return this.setSelectorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllAssistantMessageResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllAssistantMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllAssistantMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllAssistantMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    common_pb.AssistantConversationMessage.toObject, includeInstance),
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    paginated: (f = msg.getPaginated()) && common_pb.Paginated.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllAssistantMessageResponse}
 */
proto.assistant_api.GetAllAssistantMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllAssistantMessageResponse;
  return proto.assistant_api.GetAllAssistantMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllAssistantMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllAssistantMessageResponse}
 */
proto.assistant_api.GetAllAssistantMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new common_pb.AssistantConversationMessage;
      reader.readMessage(value,common_pb.AssistantConversationMessage.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 4:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 5:
      var value = new common_pb.Paginated;
      reader.readMessage(value,common_pb.Paginated.deserializeBinaryFromReader);
      msg.setPaginated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllAssistantMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllAssistantMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllAssistantMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.AssistantConversationMessage.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getPaginated();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.Paginated.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.assistant_api.GetAllAssistantMessageResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.GetAllAssistantMessageResponse} returns this
 */
proto.assistant_api.GetAllAssistantMessageResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantMessageResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.GetAllAssistantMessageResponse} returns this
 */
proto.assistant_api.GetAllAssistantMessageResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated AssistantConversationMessage data = 3;
 * @return {!Array<!proto.AssistantConversationMessage>}
 */
proto.assistant_api.GetAllAssistantMessageResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.AssistantConversationMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.AssistantConversationMessage, 3));
};


/**
 * @param {!Array<!proto.AssistantConversationMessage>} value
 * @return {!proto.assistant_api.GetAllAssistantMessageResponse} returns this
*/
proto.assistant_api.GetAllAssistantMessageResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.AssistantConversationMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AssistantConversationMessage}
 */
proto.assistant_api.GetAllAssistantMessageResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.AssistantConversationMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantMessageResponse} returns this
 */
proto.assistant_api.GetAllAssistantMessageResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional Error error = 4;
 * @return {?proto.Error}
 */
proto.assistant_api.GetAllAssistantMessageResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 4));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantMessageResponse} returns this
*/
proto.assistant_api.GetAllAssistantMessageResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantMessageResponse} returns this
 */
proto.assistant_api.GetAllAssistantMessageResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantMessageResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Paginated paginated = 5;
 * @return {?proto.Paginated}
 */
proto.assistant_api.GetAllAssistantMessageResponse.prototype.getPaginated = function() {
  return /** @type{?proto.Paginated} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginated, 5));
};


/**
 * @param {?proto.Paginated|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantMessageResponse} returns this
*/
proto.assistant_api.GetAllAssistantMessageResponse.prototype.setPaginated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantMessageResponse} returns this
 */
proto.assistant_api.GetAllAssistantMessageResponse.prototype.clearPaginated = function() {
  return this.setPaginated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantMessageResponse.prototype.hasPaginated = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.UpdateAssistantVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.UpdateAssistantVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.UpdateAssistantVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.UpdateAssistantVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assistantid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    assistantprovidermodelid: jspb.Message.getFieldWithDefault(msg, 2, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.UpdateAssistantVersionRequest}
 */
proto.assistant_api.UpdateAssistantVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.UpdateAssistantVersionRequest;
  return proto.assistant_api.UpdateAssistantVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.UpdateAssistantVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.UpdateAssistantVersionRequest}
 */
proto.assistant_api.UpdateAssistantVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantprovidermodelid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.UpdateAssistantVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.UpdateAssistantVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.UpdateAssistantVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.UpdateAssistantVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getAssistantprovidermodelid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
};


/**
 * optional uint64 assistantId = 1;
 * @return {string}
 */
proto.assistant_api.UpdateAssistantVersionRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.UpdateAssistantVersionRequest} returns this
 */
proto.assistant_api.UpdateAssistantVersionRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 assistantProviderModelId = 2;
 * @return {string}
 */
proto.assistant_api.UpdateAssistantVersionRequest.prototype.getAssistantprovidermodelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.UpdateAssistantVersionRequest} returns this
 */
proto.assistant_api.UpdateAssistantVersionRequest.prototype.setAssistantprovidermodelid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.UpdateAssistantDetailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.UpdateAssistantDetailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.UpdateAssistantDetailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.UpdateAssistantDetailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assistantid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.UpdateAssistantDetailRequest}
 */
proto.assistant_api.UpdateAssistantDetailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.UpdateAssistantDetailRequest;
  return proto.assistant_api.UpdateAssistantDetailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.UpdateAssistantDetailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.UpdateAssistantDetailRequest}
 */
proto.assistant_api.UpdateAssistantDetailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.UpdateAssistantDetailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.UpdateAssistantDetailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.UpdateAssistantDetailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.UpdateAssistantDetailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint64 assistantId = 1;
 * @return {string}
 */
proto.assistant_api.UpdateAssistantDetailRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.UpdateAssistantDetailRequest} returns this
 */
proto.assistant_api.UpdateAssistantDetailRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.assistant_api.UpdateAssistantDetailRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.UpdateAssistantDetailRequest} returns this
 */
proto.assistant_api.UpdateAssistantDetailRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.assistant_api.UpdateAssistantDetailRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.UpdateAssistantDetailRequest} returns this
 */
proto.assistant_api.UpdateAssistantDetailRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllAssistantUserConversationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllAssistantUserConversationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assistantid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    paginate: (f = msg.getPaginate()) && common_pb.Paginate.toObject(includeInstance, f),
    criteriasList: jspb.Message.toObjectList(msg.getCriteriasList(),
    common_pb.Criteria.toObject, includeInstance),
    source: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllAssistantUserConversationRequest}
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllAssistantUserConversationRequest;
  return proto.assistant_api.GetAllAssistantUserConversationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllAssistantUserConversationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllAssistantUserConversationRequest}
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 2:
      var value = new common_pb.Paginate;
      reader.readMessage(value,common_pb.Paginate.deserializeBinaryFromReader);
      msg.setPaginate(value);
      break;
    case 3:
      var value = new common_pb.Criteria;
      reader.readMessage(value,common_pb.Criteria.deserializeBinaryFromReader);
      msg.addCriterias(value);
      break;
    case 7:
      var value = /** @type {!proto.Source} */ (reader.readEnum());
      msg.setSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllAssistantUserConversationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllAssistantUserConversationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getPaginate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Paginate.serializeBinaryToWriter
    );
  }
  f = message.getCriteriasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional uint64 assistantId = 1;
 * @return {string}
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAllAssistantUserConversationRequest} returns this
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional Paginate paginate = 2;
 * @return {?proto.Paginate}
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.prototype.getPaginate = function() {
  return /** @type{?proto.Paginate} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginate, 2));
};


/**
 * @param {?proto.Paginate|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantUserConversationRequest} returns this
*/
proto.assistant_api.GetAllAssistantUserConversationRequest.prototype.setPaginate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantUserConversationRequest} returns this
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.prototype.clearPaginate = function() {
  return this.setPaginate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.prototype.hasPaginate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Criteria criterias = 3;
 * @return {!Array<!proto.Criteria>}
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.prototype.getCriteriasList = function() {
  return /** @type{!Array<!proto.Criteria>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Criteria, 3));
};


/**
 * @param {!Array<!proto.Criteria>} value
 * @return {!proto.assistant_api.GetAllAssistantUserConversationRequest} returns this
*/
proto.assistant_api.GetAllAssistantUserConversationRequest.prototype.setCriteriasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Criteria=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Criteria}
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.prototype.addCriterias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Criteria, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantUserConversationRequest} returns this
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.prototype.clearCriteriasList = function() {
  return this.setCriteriasList([]);
};


/**
 * optional Source source = 7;
 * @return {!proto.Source}
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.prototype.getSource = function() {
  return /** @type {!proto.Source} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.Source} value
 * @return {!proto.assistant_api.GetAllAssistantUserConversationRequest} returns this
 */
proto.assistant_api.GetAllAssistantUserConversationRequest.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllAssistantUserConversationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllAssistantUserConversationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    common_pb.AssistantConversation.toObject, includeInstance),
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    paginated: (f = msg.getPaginated()) && common_pb.Paginated.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllAssistantUserConversationResponse}
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllAssistantUserConversationResponse;
  return proto.assistant_api.GetAllAssistantUserConversationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllAssistantUserConversationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllAssistantUserConversationResponse}
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new common_pb.AssistantConversation;
      reader.readMessage(value,common_pb.AssistantConversation.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 4:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 5:
      var value = new common_pb.Paginated;
      reader.readMessage(value,common_pb.Paginated.deserializeBinaryFromReader);
      msg.setPaginated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllAssistantUserConversationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllAssistantUserConversationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.AssistantConversation.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getPaginated();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.Paginated.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.GetAllAssistantUserConversationResponse} returns this
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.GetAllAssistantUserConversationResponse} returns this
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated AssistantConversation data = 3;
 * @return {!Array<!proto.AssistantConversation>}
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.AssistantConversation>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.AssistantConversation, 3));
};


/**
 * @param {!Array<!proto.AssistantConversation>} value
 * @return {!proto.assistant_api.GetAllAssistantUserConversationResponse} returns this
*/
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.AssistantConversation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AssistantConversation}
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.AssistantConversation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantUserConversationResponse} returns this
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional Error error = 4;
 * @return {?proto.Error}
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 4));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantUserConversationResponse} returns this
*/
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantUserConversationResponse} returns this
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Paginated paginated = 5;
 * @return {?proto.Paginated}
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.getPaginated = function() {
  return /** @type{?proto.Paginated} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginated, 5));
};


/**
 * @param {?proto.Paginated|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantUserConversationResponse} returns this
*/
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.setPaginated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantUserConversationResponse} returns this
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.clearPaginated = function() {
  return this.setPaginated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantUserConversationResponse.prototype.hasPaginated = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllAssistantToolRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllAssistantToolRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllAssistantToolRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllAssistantToolRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantToolRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assistantid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    paginate: (f = msg.getPaginate()) && common_pb.Paginate.toObject(includeInstance, f),
    criteriasList: jspb.Message.toObjectList(msg.getCriteriasList(),
    common_pb.Criteria.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllAssistantToolRequest}
 */
proto.assistant_api.GetAllAssistantToolRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllAssistantToolRequest;
  return proto.assistant_api.GetAllAssistantToolRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllAssistantToolRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllAssistantToolRequest}
 */
proto.assistant_api.GetAllAssistantToolRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 2:
      var value = new common_pb.Paginate;
      reader.readMessage(value,common_pb.Paginate.deserializeBinaryFromReader);
      msg.setPaginate(value);
      break;
    case 3:
      var value = new common_pb.Criteria;
      reader.readMessage(value,common_pb.Criteria.deserializeBinaryFromReader);
      msg.addCriterias(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllAssistantToolRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllAssistantToolRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllAssistantToolRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantToolRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getPaginate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Paginate.serializeBinaryToWriter
    );
  }
  f = message.getCriteriasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 assistantId = 1;
 * @return {string}
 */
proto.assistant_api.GetAllAssistantToolRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAllAssistantToolRequest} returns this
 */
proto.assistant_api.GetAllAssistantToolRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional Paginate paginate = 2;
 * @return {?proto.Paginate}
 */
proto.assistant_api.GetAllAssistantToolRequest.prototype.getPaginate = function() {
  return /** @type{?proto.Paginate} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginate, 2));
};


/**
 * @param {?proto.Paginate|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantToolRequest} returns this
*/
proto.assistant_api.GetAllAssistantToolRequest.prototype.setPaginate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantToolRequest} returns this
 */
proto.assistant_api.GetAllAssistantToolRequest.prototype.clearPaginate = function() {
  return this.setPaginate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantToolRequest.prototype.hasPaginate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Criteria criterias = 3;
 * @return {!Array<!proto.Criteria>}
 */
proto.assistant_api.GetAllAssistantToolRequest.prototype.getCriteriasList = function() {
  return /** @type{!Array<!proto.Criteria>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Criteria, 3));
};


/**
 * @param {!Array<!proto.Criteria>} value
 * @return {!proto.assistant_api.GetAllAssistantToolRequest} returns this
*/
proto.assistant_api.GetAllAssistantToolRequest.prototype.setCriteriasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Criteria=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Criteria}
 */
proto.assistant_api.GetAllAssistantToolRequest.prototype.addCriterias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Criteria, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantToolRequest} returns this
 */
proto.assistant_api.GetAllAssistantToolRequest.prototype.clearCriteriasList = function() {
  return this.setCriteriasList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllAssistantToolResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllAssistantToolResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllAssistantToolResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllAssistantToolResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantToolResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.assistant_api.AssistantTool.toObject, includeInstance),
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    paginated: (f = msg.getPaginated()) && common_pb.Paginated.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllAssistantToolResponse}
 */
proto.assistant_api.GetAllAssistantToolResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllAssistantToolResponse;
  return proto.assistant_api.GetAllAssistantToolResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllAssistantToolResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllAssistantToolResponse}
 */
proto.assistant_api.GetAllAssistantToolResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new proto.assistant_api.AssistantTool;
      reader.readMessage(value,proto.assistant_api.AssistantTool.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 4:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 5:
      var value = new common_pb.Paginated;
      reader.readMessage(value,common_pb.Paginated.deserializeBinaryFromReader);
      msg.setPaginated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllAssistantToolResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllAssistantToolResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllAssistantToolResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantToolResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.assistant_api.AssistantTool.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getPaginated();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.Paginated.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.assistant_api.GetAllAssistantToolResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.GetAllAssistantToolResponse} returns this
 */
proto.assistant_api.GetAllAssistantToolResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantToolResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.GetAllAssistantToolResponse} returns this
 */
proto.assistant_api.GetAllAssistantToolResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated AssistantTool data = 3;
 * @return {!Array<!proto.assistant_api.AssistantTool>}
 */
proto.assistant_api.GetAllAssistantToolResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.assistant_api.AssistantTool>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.assistant_api.AssistantTool, 3));
};


/**
 * @param {!Array<!proto.assistant_api.AssistantTool>} value
 * @return {!proto.assistant_api.GetAllAssistantToolResponse} returns this
*/
proto.assistant_api.GetAllAssistantToolResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.assistant_api.AssistantTool=} opt_value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.AssistantTool}
 */
proto.assistant_api.GetAllAssistantToolResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.assistant_api.AssistantTool, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantToolResponse} returns this
 */
proto.assistant_api.GetAllAssistantToolResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional Error error = 4;
 * @return {?proto.Error}
 */
proto.assistant_api.GetAllAssistantToolResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 4));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantToolResponse} returns this
*/
proto.assistant_api.GetAllAssistantToolResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantToolResponse} returns this
 */
proto.assistant_api.GetAllAssistantToolResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantToolResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Paginated paginated = 5;
 * @return {?proto.Paginated}
 */
proto.assistant_api.GetAllAssistantToolResponse.prototype.getPaginated = function() {
  return /** @type{?proto.Paginated} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginated, 5));
};


/**
 * @param {?proto.Paginated|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantToolResponse} returns this
*/
proto.assistant_api.GetAllAssistantToolResponse.prototype.setPaginated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantToolResponse} returns this
 */
proto.assistant_api.GetAllAssistantToolResponse.prototype.clearPaginated = function() {
  return this.setPaginated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantToolResponse.prototype.hasPaginated = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.AssistantAnalysis.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.AssistantAnalysis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.AssistantAnalysis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantAnalysis.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    endpointid: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    endpointversion: jspb.Message.getFieldWithDefault(msg, 5, ""),
    endpointparametersMap: (f = msg.getEndpointparametersMap()) ? f.toObject(includeInstance, undefined) : [],
    assistantid: jspb.Message.getFieldWithDefault(msg, 10, "0"),
    status: jspb.Message.getFieldWithDefault(msg, 12, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 13, "0"),
    createduser: (f = msg.getCreateduser()) && common_pb.User.toObject(includeInstance, f),
    updatedby: jspb.Message.getFieldWithDefault(msg, 15, "0"),
    updateduser: (f = msg.getUpdateduser()) && common_pb.User.toObject(includeInstance, f),
    createddate: (f = msg.getCreateddate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateddate: (f = msg.getUpdateddate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    executionpriority: jspb.Message.getFieldWithDefault(msg, 20, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.AssistantAnalysis}
 */
proto.assistant_api.AssistantAnalysis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.AssistantAnalysis;
  return proto.assistant_api.AssistantAnalysis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.AssistantAnalysis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.AssistantAnalysis}
 */
proto.assistant_api.AssistantAnalysis.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setEndpointid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpointversion(value);
      break;
    case 7:
      var value = msg.getEndpointparametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 10:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setCreatedby(value);
      break;
    case 14:
      var value = new common_pb.User;
      reader.readMessage(value,common_pb.User.deserializeBinaryFromReader);
      msg.setCreateduser(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setUpdatedby(value);
      break;
    case 16:
      var value = new common_pb.User;
      reader.readMessage(value,common_pb.User.deserializeBinaryFromReader);
      msg.setUpdateduser(value);
      break;
    case 17:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateddate(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateddate(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExecutionpriority(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.AssistantAnalysis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.AssistantAnalysis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.AssistantAnalysis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantAnalysis.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEndpointid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      4,
      f
    );
  }
  f = message.getEndpointversion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEndpointparametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      10,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCreatedby();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      13,
      f
    );
  }
  f = message.getCreateduser();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      common_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedby();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      15,
      f
    );
  }
  f = message.getUpdateduser();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      common_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getCreateddate();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateddate();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExecutionpriority();
  if (f !== 0) {
    writer.writeUint32(
      20,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.AssistantAnalysis.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
 */
proto.assistant_api.AssistantAnalysis.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.assistant_api.AssistantAnalysis.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
 */
proto.assistant_api.AssistantAnalysis.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.assistant_api.AssistantAnalysis.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
 */
proto.assistant_api.AssistantAnalysis.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 endpointId = 4;
 * @return {string}
 */
proto.assistant_api.AssistantAnalysis.prototype.getEndpointid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
 */
proto.assistant_api.AssistantAnalysis.prototype.setEndpointid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional string endpointVersion = 5;
 * @return {string}
 */
proto.assistant_api.AssistantAnalysis.prototype.getEndpointversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
 */
proto.assistant_api.AssistantAnalysis.prototype.setEndpointversion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> endpointParameters = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.assistant_api.AssistantAnalysis.prototype.getEndpointparametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
 */
proto.assistant_api.AssistantAnalysis.prototype.clearEndpointparametersMap = function() {
  this.getEndpointparametersMap().clear();
  return this;};


/**
 * optional uint64 assistantId = 10;
 * @return {string}
 */
proto.assistant_api.AssistantAnalysis.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
 */
proto.assistant_api.AssistantAnalysis.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 10, value);
};


/**
 * optional string status = 12;
 * @return {string}
 */
proto.assistant_api.AssistantAnalysis.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
 */
proto.assistant_api.AssistantAnalysis.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional uint64 createdBy = 13;
 * @return {string}
 */
proto.assistant_api.AssistantAnalysis.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
 */
proto.assistant_api.AssistantAnalysis.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringIntField(this, 13, value);
};


/**
 * optional User createdUser = 14;
 * @return {?proto.User}
 */
proto.assistant_api.AssistantAnalysis.prototype.getCreateduser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_pb.User, 14));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
*/
proto.assistant_api.AssistantAnalysis.prototype.setCreateduser = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
 */
proto.assistant_api.AssistantAnalysis.prototype.clearCreateduser = function() {
  return this.setCreateduser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantAnalysis.prototype.hasCreateduser = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional uint64 updatedBy = 15;
 * @return {string}
 */
proto.assistant_api.AssistantAnalysis.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
 */
proto.assistant_api.AssistantAnalysis.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringIntField(this, 15, value);
};


/**
 * optional User updatedUser = 16;
 * @return {?proto.User}
 */
proto.assistant_api.AssistantAnalysis.prototype.getUpdateduser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_pb.User, 16));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
*/
proto.assistant_api.AssistantAnalysis.prototype.setUpdateduser = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
 */
proto.assistant_api.AssistantAnalysis.prototype.clearUpdateduser = function() {
  return this.setUpdateduser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantAnalysis.prototype.hasUpdateduser = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Timestamp createdDate = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.assistant_api.AssistantAnalysis.prototype.getCreateddate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 17));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
*/
proto.assistant_api.AssistantAnalysis.prototype.setCreateddate = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
 */
proto.assistant_api.AssistantAnalysis.prototype.clearCreateddate = function() {
  return this.setCreateddate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantAnalysis.prototype.hasCreateddate = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Timestamp updatedDate = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.assistant_api.AssistantAnalysis.prototype.getUpdateddate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
*/
proto.assistant_api.AssistantAnalysis.prototype.setUpdateddate = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
 */
proto.assistant_api.AssistantAnalysis.prototype.clearUpdateddate = function() {
  return this.setUpdateddate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantAnalysis.prototype.hasUpdateddate = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional uint32 executionPriority = 20;
 * @return {number}
 */
proto.assistant_api.AssistantAnalysis.prototype.getExecutionpriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.AssistantAnalysis} returns this
 */
proto.assistant_api.AssistantAnalysis.prototype.setExecutionpriority = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.CreateAssistantAnalysisRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.CreateAssistantAnalysisRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.CreateAssistantAnalysisRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.CreateAssistantAnalysisRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    endpointid: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    endpointversion: jspb.Message.getFieldWithDefault(msg, 5, ""),
    endpointparametersMap: (f = msg.getEndpointparametersMap()) ? f.toObject(includeInstance, undefined) : [],
    assistantid: jspb.Message.getFieldWithDefault(msg, 10, "0"),
    executionpriority: jspb.Message.getFieldWithDefault(msg, 20, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.CreateAssistantAnalysisRequest}
 */
proto.assistant_api.CreateAssistantAnalysisRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.CreateAssistantAnalysisRequest;
  return proto.assistant_api.CreateAssistantAnalysisRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.CreateAssistantAnalysisRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.CreateAssistantAnalysisRequest}
 */
proto.assistant_api.CreateAssistantAnalysisRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setEndpointid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpointversion(value);
      break;
    case 7:
      var value = msg.getEndpointparametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 10:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExecutionpriority(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.CreateAssistantAnalysisRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.CreateAssistantAnalysisRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.CreateAssistantAnalysisRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.CreateAssistantAnalysisRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEndpointid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      4,
      f
    );
  }
  f = message.getEndpointversion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEndpointparametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      10,
      f
    );
  }
  f = message.getExecutionpriority();
  if (f !== 0) {
    writer.writeUint32(
      20,
      f
    );
  }
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.assistant_api.CreateAssistantAnalysisRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.CreateAssistantAnalysisRequest} returns this
 */
proto.assistant_api.CreateAssistantAnalysisRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.assistant_api.CreateAssistantAnalysisRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.CreateAssistantAnalysisRequest} returns this
 */
proto.assistant_api.CreateAssistantAnalysisRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 endpointId = 4;
 * @return {string}
 */
proto.assistant_api.CreateAssistantAnalysisRequest.prototype.getEndpointid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.CreateAssistantAnalysisRequest} returns this
 */
proto.assistant_api.CreateAssistantAnalysisRequest.prototype.setEndpointid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional string endpointVersion = 5;
 * @return {string}
 */
proto.assistant_api.CreateAssistantAnalysisRequest.prototype.getEndpointversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.CreateAssistantAnalysisRequest} returns this
 */
proto.assistant_api.CreateAssistantAnalysisRequest.prototype.setEndpointversion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> endpointParameters = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.assistant_api.CreateAssistantAnalysisRequest.prototype.getEndpointparametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.assistant_api.CreateAssistantAnalysisRequest} returns this
 */
proto.assistant_api.CreateAssistantAnalysisRequest.prototype.clearEndpointparametersMap = function() {
  this.getEndpointparametersMap().clear();
  return this;};


/**
 * optional uint64 assistantId = 10;
 * @return {string}
 */
proto.assistant_api.CreateAssistantAnalysisRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.CreateAssistantAnalysisRequest} returns this
 */
proto.assistant_api.CreateAssistantAnalysisRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 10, value);
};


/**
 * optional uint32 executionPriority = 20;
 * @return {number}
 */
proto.assistant_api.CreateAssistantAnalysisRequest.prototype.getExecutionpriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.CreateAssistantAnalysisRequest} returns this
 */
proto.assistant_api.CreateAssistantAnalysisRequest.prototype.setExecutionpriority = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.UpdateAssistantAnalysisRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.UpdateAssistantAnalysisRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    endpointid: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    endpointversion: jspb.Message.getFieldWithDefault(msg, 5, ""),
    endpointparametersMap: (f = msg.getEndpointparametersMap()) ? f.toObject(includeInstance, undefined) : [],
    assistantid: jspb.Message.getFieldWithDefault(msg, 10, "0"),
    executionpriority: jspb.Message.getFieldWithDefault(msg, 20, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.UpdateAssistantAnalysisRequest}
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.UpdateAssistantAnalysisRequest;
  return proto.assistant_api.UpdateAssistantAnalysisRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.UpdateAssistantAnalysisRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.UpdateAssistantAnalysisRequest}
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setEndpointid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpointversion(value);
      break;
    case 7:
      var value = msg.getEndpointparametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 10:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExecutionpriority(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.UpdateAssistantAnalysisRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.UpdateAssistantAnalysisRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEndpointid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      4,
      f
    );
  }
  f = message.getEndpointversion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEndpointparametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      10,
      f
    );
  }
  f = message.getExecutionpriority();
  if (f !== 0) {
    writer.writeUint32(
      20,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.UpdateAssistantAnalysisRequest} returns this
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.UpdateAssistantAnalysisRequest} returns this
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.UpdateAssistantAnalysisRequest} returns this
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 endpointId = 4;
 * @return {string}
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.getEndpointid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.UpdateAssistantAnalysisRequest} returns this
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.setEndpointid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional string endpointVersion = 5;
 * @return {string}
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.getEndpointversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.UpdateAssistantAnalysisRequest} returns this
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.setEndpointversion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> endpointParameters = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.getEndpointparametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.assistant_api.UpdateAssistantAnalysisRequest} returns this
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.clearEndpointparametersMap = function() {
  this.getEndpointparametersMap().clear();
  return this;};


/**
 * optional uint64 assistantId = 10;
 * @return {string}
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.UpdateAssistantAnalysisRequest} returns this
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 10, value);
};


/**
 * optional uint32 executionPriority = 20;
 * @return {number}
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.getExecutionpriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.UpdateAssistantAnalysisRequest} returns this
 */
proto.assistant_api.UpdateAssistantAnalysisRequest.prototype.setExecutionpriority = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAssistantAnalysisRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAssistantAnalysisRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAssistantAnalysisRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantAnalysisRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    assistantid: jspb.Message.getFieldWithDefault(msg, 2, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAssistantAnalysisRequest}
 */
proto.assistant_api.GetAssistantAnalysisRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAssistantAnalysisRequest;
  return proto.assistant_api.GetAssistantAnalysisRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAssistantAnalysisRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAssistantAnalysisRequest}
 */
proto.assistant_api.GetAssistantAnalysisRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAssistantAnalysisRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAssistantAnalysisRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAssistantAnalysisRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantAnalysisRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.GetAssistantAnalysisRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAssistantAnalysisRequest} returns this
 */
proto.assistant_api.GetAssistantAnalysisRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 assistantId = 2;
 * @return {string}
 */
proto.assistant_api.GetAssistantAnalysisRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAssistantAnalysisRequest} returns this
 */
proto.assistant_api.GetAssistantAnalysisRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.DeleteAssistantAnalysisRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.DeleteAssistantAnalysisRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.DeleteAssistantAnalysisRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.DeleteAssistantAnalysisRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    assistantid: jspb.Message.getFieldWithDefault(msg, 2, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.DeleteAssistantAnalysisRequest}
 */
proto.assistant_api.DeleteAssistantAnalysisRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.DeleteAssistantAnalysisRequest;
  return proto.assistant_api.DeleteAssistantAnalysisRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.DeleteAssistantAnalysisRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.DeleteAssistantAnalysisRequest}
 */
proto.assistant_api.DeleteAssistantAnalysisRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.DeleteAssistantAnalysisRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.DeleteAssistantAnalysisRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.DeleteAssistantAnalysisRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.DeleteAssistantAnalysisRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.DeleteAssistantAnalysisRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.DeleteAssistantAnalysisRequest} returns this
 */
proto.assistant_api.DeleteAssistantAnalysisRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 assistantId = 2;
 * @return {string}
 */
proto.assistant_api.DeleteAssistantAnalysisRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.DeleteAssistantAnalysisRequest} returns this
 */
proto.assistant_api.DeleteAssistantAnalysisRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAssistantAnalysisResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAssistantAnalysisResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAssistantAnalysisResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantAnalysisResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    data: (f = msg.getData()) && proto.assistant_api.AssistantAnalysis.toObject(includeInstance, f),
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAssistantAnalysisResponse}
 */
proto.assistant_api.GetAssistantAnalysisResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAssistantAnalysisResponse;
  return proto.assistant_api.GetAssistantAnalysisResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAssistantAnalysisResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAssistantAnalysisResponse}
 */
proto.assistant_api.GetAssistantAnalysisResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new proto.assistant_api.AssistantAnalysis;
      reader.readMessage(value,proto.assistant_api.AssistantAnalysis.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 4:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAssistantAnalysisResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAssistantAnalysisResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAssistantAnalysisResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantAnalysisResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.assistant_api.AssistantAnalysis.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.assistant_api.GetAssistantAnalysisResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.GetAssistantAnalysisResponse} returns this
 */
proto.assistant_api.GetAssistantAnalysisResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.assistant_api.GetAssistantAnalysisResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.GetAssistantAnalysisResponse} returns this
 */
proto.assistant_api.GetAssistantAnalysisResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional AssistantAnalysis data = 3;
 * @return {?proto.assistant_api.AssistantAnalysis}
 */
proto.assistant_api.GetAssistantAnalysisResponse.prototype.getData = function() {
  return /** @type{?proto.assistant_api.AssistantAnalysis} */ (
    jspb.Message.getWrapperField(this, proto.assistant_api.AssistantAnalysis, 3));
};


/**
 * @param {?proto.assistant_api.AssistantAnalysis|undefined} value
 * @return {!proto.assistant_api.GetAssistantAnalysisResponse} returns this
*/
proto.assistant_api.GetAssistantAnalysisResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAssistantAnalysisResponse} returns this
 */
proto.assistant_api.GetAssistantAnalysisResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAssistantAnalysisResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Error error = 4;
 * @return {?proto.Error}
 */
proto.assistant_api.GetAssistantAnalysisResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 4));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.assistant_api.GetAssistantAnalysisResponse} returns this
*/
proto.assistant_api.GetAssistantAnalysisResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAssistantAnalysisResponse} returns this
 */
proto.assistant_api.GetAssistantAnalysisResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAssistantAnalysisResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllAssistantAnalysisRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllAssistantAnalysisRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllAssistantAnalysisRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllAssistantAnalysisRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantAnalysisRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assistantid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    paginate: (f = msg.getPaginate()) && common_pb.Paginate.toObject(includeInstance, f),
    criteriasList: jspb.Message.toObjectList(msg.getCriteriasList(),
    common_pb.Criteria.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllAssistantAnalysisRequest}
 */
proto.assistant_api.GetAllAssistantAnalysisRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllAssistantAnalysisRequest;
  return proto.assistant_api.GetAllAssistantAnalysisRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllAssistantAnalysisRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllAssistantAnalysisRequest}
 */
proto.assistant_api.GetAllAssistantAnalysisRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 2:
      var value = new common_pb.Paginate;
      reader.readMessage(value,common_pb.Paginate.deserializeBinaryFromReader);
      msg.setPaginate(value);
      break;
    case 3:
      var value = new common_pb.Criteria;
      reader.readMessage(value,common_pb.Criteria.deserializeBinaryFromReader);
      msg.addCriterias(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllAssistantAnalysisRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllAssistantAnalysisRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllAssistantAnalysisRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantAnalysisRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getPaginate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Paginate.serializeBinaryToWriter
    );
  }
  f = message.getCriteriasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 assistantId = 1;
 * @return {string}
 */
proto.assistant_api.GetAllAssistantAnalysisRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAllAssistantAnalysisRequest} returns this
 */
proto.assistant_api.GetAllAssistantAnalysisRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional Paginate paginate = 2;
 * @return {?proto.Paginate}
 */
proto.assistant_api.GetAllAssistantAnalysisRequest.prototype.getPaginate = function() {
  return /** @type{?proto.Paginate} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginate, 2));
};


/**
 * @param {?proto.Paginate|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantAnalysisRequest} returns this
*/
proto.assistant_api.GetAllAssistantAnalysisRequest.prototype.setPaginate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantAnalysisRequest} returns this
 */
proto.assistant_api.GetAllAssistantAnalysisRequest.prototype.clearPaginate = function() {
  return this.setPaginate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantAnalysisRequest.prototype.hasPaginate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Criteria criterias = 3;
 * @return {!Array<!proto.Criteria>}
 */
proto.assistant_api.GetAllAssistantAnalysisRequest.prototype.getCriteriasList = function() {
  return /** @type{!Array<!proto.Criteria>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Criteria, 3));
};


/**
 * @param {!Array<!proto.Criteria>} value
 * @return {!proto.assistant_api.GetAllAssistantAnalysisRequest} returns this
*/
proto.assistant_api.GetAllAssistantAnalysisRequest.prototype.setCriteriasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Criteria=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Criteria}
 */
proto.assistant_api.GetAllAssistantAnalysisRequest.prototype.addCriterias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Criteria, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantAnalysisRequest} returns this
 */
proto.assistant_api.GetAllAssistantAnalysisRequest.prototype.clearCriteriasList = function() {
  return this.setCriteriasList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllAssistantAnalysisResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllAssistantAnalysisResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.assistant_api.AssistantAnalysis.toObject, includeInstance),
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    paginated: (f = msg.getPaginated()) && common_pb.Paginated.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllAssistantAnalysisResponse}
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllAssistantAnalysisResponse;
  return proto.assistant_api.GetAllAssistantAnalysisResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllAssistantAnalysisResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllAssistantAnalysisResponse}
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new proto.assistant_api.AssistantAnalysis;
      reader.readMessage(value,proto.assistant_api.AssistantAnalysis.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 4:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 5:
      var value = new common_pb.Paginated;
      reader.readMessage(value,common_pb.Paginated.deserializeBinaryFromReader);
      msg.setPaginated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllAssistantAnalysisResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllAssistantAnalysisResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.assistant_api.AssistantAnalysis.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getPaginated();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.Paginated.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.GetAllAssistantAnalysisResponse} returns this
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.GetAllAssistantAnalysisResponse} returns this
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated AssistantAnalysis data = 3;
 * @return {!Array<!proto.assistant_api.AssistantAnalysis>}
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.assistant_api.AssistantAnalysis>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.assistant_api.AssistantAnalysis, 3));
};


/**
 * @param {!Array<!proto.assistant_api.AssistantAnalysis>} value
 * @return {!proto.assistant_api.GetAllAssistantAnalysisResponse} returns this
*/
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.assistant_api.AssistantAnalysis=} opt_value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.AssistantAnalysis}
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.assistant_api.AssistantAnalysis, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantAnalysisResponse} returns this
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional Error error = 4;
 * @return {?proto.Error}
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 4));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantAnalysisResponse} returns this
*/
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantAnalysisResponse} returns this
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Paginated paginated = 5;
 * @return {?proto.Paginated}
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.getPaginated = function() {
  return /** @type{?proto.Paginated} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginated, 5));
};


/**
 * @param {?proto.Paginated|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantAnalysisResponse} returns this
*/
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.setPaginated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantAnalysisResponse} returns this
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.clearPaginated = function() {
  return this.setPaginated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantAnalysisResponse.prototype.hasPaginated = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.AssistantWebhook.repeatedFields_ = [2,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.AssistantWebhook.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.AssistantWebhook.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.AssistantWebhook} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantWebhook.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    assistanteventsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    httpmethod: jspb.Message.getFieldWithDefault(msg, 4, ""),
    httpurl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    httpheadersMap: (f = msg.getHttpheadersMap()) ? f.toObject(includeInstance, undefined) : [],
    httpbodyMap: (f = msg.getHttpbodyMap()) ? f.toObject(includeInstance, undefined) : [],
    timeoutsecond: jspb.Message.getFieldWithDefault(msg, 19, 0),
    executionpriority: jspb.Message.getFieldWithDefault(msg, 20, 0),
    retrystatuscodesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    retrycount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    assistantid: jspb.Message.getFieldWithDefault(msg, 10, "0"),
    status: jspb.Message.getFieldWithDefault(msg, 12, ""),
    createdby: jspb.Message.getFieldWithDefault(msg, 13, "0"),
    createduser: (f = msg.getCreateduser()) && common_pb.User.toObject(includeInstance, f),
    updatedby: jspb.Message.getFieldWithDefault(msg, 15, "0"),
    updateduser: (f = msg.getUpdateduser()) && common_pb.User.toObject(includeInstance, f),
    createddate: (f = msg.getCreateddate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateddate: (f = msg.getUpdateddate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.AssistantWebhook}
 */
proto.assistant_api.AssistantWebhook.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.AssistantWebhook;
  return proto.assistant_api.AssistantWebhook.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.AssistantWebhook} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.AssistantWebhook}
 */
proto.assistant_api.AssistantWebhook.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAssistantevents(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHttpmethod(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHttpurl(value);
      break;
    case 6:
      var value = msg.getHttpheadersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 7:
      var value = msg.getHttpbodyMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeoutsecond(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExecutionpriority(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addRetrystatuscodes(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRetrycount(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setCreatedby(value);
      break;
    case 14:
      var value = new common_pb.User;
      reader.readMessage(value,common_pb.User.deserializeBinaryFromReader);
      msg.setCreateduser(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setUpdatedby(value);
      break;
    case 16:
      var value = new common_pb.User;
      reader.readMessage(value,common_pb.User.deserializeBinaryFromReader);
      msg.setUpdateduser(value);
      break;
    case 17:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateddate(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateddate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.AssistantWebhook.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.AssistantWebhook.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.AssistantWebhook} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantWebhook.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getAssistanteventsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHttpmethod();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHttpurl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getHttpheadersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getHttpbodyMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getTimeoutsecond();
  if (f !== 0) {
    writer.writeUint32(
      19,
      f
    );
  }
  f = message.getExecutionpriority();
  if (f !== 0) {
    writer.writeUint32(
      20,
      f
    );
  }
  f = message.getRetrystatuscodesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getRetrycount();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      10,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCreatedby();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      13,
      f
    );
  }
  f = message.getCreateduser();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      common_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedby();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      15,
      f
    );
  }
  f = message.getUpdateduser();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      common_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getCreateddate();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateddate();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.AssistantWebhook.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * repeated string assistantEvents = 2;
 * @return {!Array<string>}
 */
proto.assistant_api.AssistantWebhook.prototype.getAssistanteventsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.setAssistanteventsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.addAssistantevents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.clearAssistanteventsList = function() {
  return this.setAssistanteventsList([]);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.assistant_api.AssistantWebhook.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string httpMethod = 4;
 * @return {string}
 */
proto.assistant_api.AssistantWebhook.prototype.getHttpmethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.setHttpmethod = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string httpUrl = 5;
 * @return {string}
 */
proto.assistant_api.AssistantWebhook.prototype.getHttpurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.setHttpurl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> httpHeaders = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.assistant_api.AssistantWebhook.prototype.getHttpheadersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.clearHttpheadersMap = function() {
  this.getHttpheadersMap().clear();
  return this;};


/**
 * map<string, string> httpBody = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.assistant_api.AssistantWebhook.prototype.getHttpbodyMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.clearHttpbodyMap = function() {
  this.getHttpbodyMap().clear();
  return this;};


/**
 * optional uint32 timeoutSecond = 19;
 * @return {number}
 */
proto.assistant_api.AssistantWebhook.prototype.getTimeoutsecond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.setTimeoutsecond = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional uint32 executionPriority = 20;
 * @return {number}
 */
proto.assistant_api.AssistantWebhook.prototype.getExecutionpriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.setExecutionpriority = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * repeated string retryStatusCodes = 8;
 * @return {!Array<string>}
 */
proto.assistant_api.AssistantWebhook.prototype.getRetrystatuscodesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.setRetrystatuscodesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.addRetrystatuscodes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.clearRetrystatuscodesList = function() {
  return this.setRetrystatuscodesList([]);
};


/**
 * optional uint32 retryCount = 9;
 * @return {number}
 */
proto.assistant_api.AssistantWebhook.prototype.getRetrycount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.setRetrycount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 assistantId = 10;
 * @return {string}
 */
proto.assistant_api.AssistantWebhook.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 10, value);
};


/**
 * optional string status = 12;
 * @return {string}
 */
proto.assistant_api.AssistantWebhook.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional uint64 createdBy = 13;
 * @return {string}
 */
proto.assistant_api.AssistantWebhook.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringIntField(this, 13, value);
};


/**
 * optional User createdUser = 14;
 * @return {?proto.User}
 */
proto.assistant_api.AssistantWebhook.prototype.getCreateduser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_pb.User, 14));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
*/
proto.assistant_api.AssistantWebhook.prototype.setCreateduser = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.clearCreateduser = function() {
  return this.setCreateduser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantWebhook.prototype.hasCreateduser = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional uint64 updatedBy = 15;
 * @return {string}
 */
proto.assistant_api.AssistantWebhook.prototype.getUpdatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.setUpdatedby = function(value) {
  return jspb.Message.setProto3StringIntField(this, 15, value);
};


/**
 * optional User updatedUser = 16;
 * @return {?proto.User}
 */
proto.assistant_api.AssistantWebhook.prototype.getUpdateduser = function() {
  return /** @type{?proto.User} */ (
    jspb.Message.getWrapperField(this, common_pb.User, 16));
};


/**
 * @param {?proto.User|undefined} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
*/
proto.assistant_api.AssistantWebhook.prototype.setUpdateduser = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.clearUpdateduser = function() {
  return this.setUpdateduser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantWebhook.prototype.hasUpdateduser = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Timestamp createdDate = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.assistant_api.AssistantWebhook.prototype.getCreateddate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 17));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
*/
proto.assistant_api.AssistantWebhook.prototype.setCreateddate = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.clearCreateddate = function() {
  return this.setCreateddate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantWebhook.prototype.hasCreateddate = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Timestamp updatedDate = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.assistant_api.AssistantWebhook.prototype.getUpdateddate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.assistant_api.AssistantWebhook} returns this
*/
proto.assistant_api.AssistantWebhook.prototype.setUpdateddate = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantWebhook} returns this
 */
proto.assistant_api.AssistantWebhook.prototype.clearUpdateddate = function() {
  return this.setUpdateddate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantWebhook.prototype.hasUpdateddate = function() {
  return jspb.Message.getField(this, 18) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.AssistantWebhookLog.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.AssistantWebhookLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.AssistantWebhookLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantWebhookLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    webhookid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    request: (f = msg.getRequest()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    response: (f = msg.getResponse()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createddate: (f = msg.getCreateddate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateddate: (f = msg.getUpdateddate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    assistantid: jspb.Message.getFieldWithDefault(msg, 8, "0"),
    projectid: jspb.Message.getFieldWithDefault(msg, 9, "0"),
    organizationid: jspb.Message.getFieldWithDefault(msg, 10, "0"),
    conversationid: jspb.Message.getFieldWithDefault(msg, 11, "0"),
    assetprefix: jspb.Message.getFieldWithDefault(msg, 12, ""),
    event: jspb.Message.getFieldWithDefault(msg, 13, ""),
    responsestatus: jspb.Message.getFieldWithDefault(msg, 14, "0"),
    timetaken: jspb.Message.getFieldWithDefault(msg, 15, "0"),
    retrycount: jspb.Message.getFieldWithDefault(msg, 16, 0),
    httpmethod: jspb.Message.getFieldWithDefault(msg, 17, ""),
    httpurl: jspb.Message.getFieldWithDefault(msg, 18, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.AssistantWebhookLog}
 */
proto.assistant_api.AssistantWebhookLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.AssistantWebhookLog;
  return proto.assistant_api.AssistantWebhookLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.AssistantWebhookLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.AssistantWebhookLog}
 */
proto.assistant_api.AssistantWebhookLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setWebhookid(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateddate(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateddate(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setProjectid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setOrganizationid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setConversationid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetprefix(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setEvent(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setResponsestatus(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setTimetaken(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRetrycount(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setHttpmethod(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setHttpurl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.AssistantWebhookLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.AssistantWebhookLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.AssistantWebhookLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.AssistantWebhookLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getWebhookid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreateddate();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateddate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      8,
      f
    );
  }
  f = message.getProjectid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      9,
      f
    );
  }
  f = message.getOrganizationid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      10,
      f
    );
  }
  f = message.getConversationid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      11,
      f
    );
  }
  f = message.getAssetprefix();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getEvent();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getResponsestatus();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      14,
      f
    );
  }
  f = message.getTimetaken();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      15,
      f
    );
  }
  f = message.getRetrycount();
  if (f !== 0) {
    writer.writeUint32(
      16,
      f
    );
  }
  f = message.getHttpmethod();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getHttpurl();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 webhookId = 2;
 * @return {string}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getWebhookid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.setWebhookid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional google.protobuf.Struct request = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getRequest = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
*/
proto.assistant_api.AssistantWebhookLog.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantWebhookLog.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Struct response = 4;
 * @return {?proto.google.protobuf.Struct}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getResponse = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
*/
proto.assistant_api.AssistantWebhookLog.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantWebhookLog.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string status = 5;
 * @return {string}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp createdDate = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getCreateddate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
*/
proto.assistant_api.AssistantWebhookLog.prototype.setCreateddate = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.clearCreateddate = function() {
  return this.setCreateddate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantWebhookLog.prototype.hasCreateddate = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp updatedDate = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getUpdateddate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
*/
proto.assistant_api.AssistantWebhookLog.prototype.setUpdateddate = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.clearUpdateddate = function() {
  return this.setUpdateddate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.AssistantWebhookLog.prototype.hasUpdateddate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint64 assistantId = 8;
 * @return {string}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 8, value);
};


/**
 * optional uint64 projectId = 9;
 * @return {string}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getProjectid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.setProjectid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 9, value);
};


/**
 * optional uint64 organizationId = 10;
 * @return {string}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getOrganizationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.setOrganizationid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 10, value);
};


/**
 * optional uint64 conversationId = 11;
 * @return {string}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 11, value);
};


/**
 * optional string assetPrefix = 12;
 * @return {string}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getAssetprefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.setAssetprefix = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string event = 13;
 * @return {string}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getEvent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.setEvent = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional uint64 responseStatus = 14;
 * @return {string}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getResponsestatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.setResponsestatus = function(value) {
  return jspb.Message.setProto3StringIntField(this, 14, value);
};


/**
 * optional uint64 timeTaken = 15;
 * @return {string}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getTimetaken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.setTimetaken = function(value) {
  return jspb.Message.setProto3StringIntField(this, 15, value);
};


/**
 * optional uint32 retryCount = 16;
 * @return {number}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getRetrycount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.setRetrycount = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional string httpMethod = 17;
 * @return {string}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getHttpmethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.setHttpmethod = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string httpUrl = 18;
 * @return {string}
 */
proto.assistant_api.AssistantWebhookLog.prototype.getHttpurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.AssistantWebhookLog} returns this
 */
proto.assistant_api.AssistantWebhookLog.prototype.setHttpurl = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.CreateAssistantWebhookRequest.repeatedFields_ = [2,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.CreateAssistantWebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.CreateAssistantWebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.CreateAssistantWebhookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assistanteventsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    httpmethod: jspb.Message.getFieldWithDefault(msg, 4, ""),
    httpurl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    httpheadersMap: (f = msg.getHttpheadersMap()) ? f.toObject(includeInstance, undefined) : [],
    httpbodyMap: (f = msg.getHttpbodyMap()) ? f.toObject(includeInstance, undefined) : [],
    timeoutsecond: jspb.Message.getFieldWithDefault(msg, 7, 0),
    retrystatuscodesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    maxretrycount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    assistantid: jspb.Message.getFieldWithDefault(msg, 10, "0"),
    executionpriority: jspb.Message.getFieldWithDefault(msg, 20, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest}
 */
proto.assistant_api.CreateAssistantWebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.CreateAssistantWebhookRequest;
  return proto.assistant_api.CreateAssistantWebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.CreateAssistantWebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest}
 */
proto.assistant_api.CreateAssistantWebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAssistantevents(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHttpmethod(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHttpurl(value);
      break;
    case 6:
      var value = msg.getHttpheadersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 11:
      var value = msg.getHttpbodyMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeoutsecond(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addRetrystatuscodes(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxretrycount(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExecutionpriority(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.CreateAssistantWebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.CreateAssistantWebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.CreateAssistantWebhookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssistanteventsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHttpmethod();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHttpurl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getHttpheadersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getHttpbodyMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(11, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getTimeoutsecond();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getRetrystatuscodesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getMaxretrycount();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      10,
      f
    );
  }
  f = message.getExecutionpriority();
  if (f !== 0) {
    writer.writeUint32(
      20,
      f
    );
  }
};


/**
 * repeated string assistantEvents = 2;
 * @return {!Array<string>}
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.getAssistanteventsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest} returns this
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.setAssistanteventsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest} returns this
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.addAssistantevents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest} returns this
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.clearAssistanteventsList = function() {
  return this.setAssistanteventsList([]);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest} returns this
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string httpMethod = 4;
 * @return {string}
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.getHttpmethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest} returns this
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.setHttpmethod = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string httpUrl = 5;
 * @return {string}
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.getHttpurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest} returns this
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.setHttpurl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> httpHeaders = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.getHttpheadersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest} returns this
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.clearHttpheadersMap = function() {
  this.getHttpheadersMap().clear();
  return this;};


/**
 * map<string, string> httpBody = 11;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.getHttpbodyMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 11, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest} returns this
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.clearHttpbodyMap = function() {
  this.getHttpbodyMap().clear();
  return this;};


/**
 * optional uint32 timeoutSecond = 7;
 * @return {number}
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.getTimeoutsecond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest} returns this
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.setTimeoutsecond = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated string retryStatusCodes = 8;
 * @return {!Array<string>}
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.getRetrystatuscodesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest} returns this
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.setRetrystatuscodesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest} returns this
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.addRetrystatuscodes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest} returns this
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.clearRetrystatuscodesList = function() {
  return this.setRetrystatuscodesList([]);
};


/**
 * optional uint32 maxRetryCount = 9;
 * @return {number}
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.getMaxretrycount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest} returns this
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.setMaxretrycount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 assistantId = 10;
 * @return {string}
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest} returns this
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 10, value);
};


/**
 * optional uint32 executionPriority = 20;
 * @return {number}
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.getExecutionpriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.CreateAssistantWebhookRequest} returns this
 */
proto.assistant_api.CreateAssistantWebhookRequest.prototype.setExecutionpriority = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.UpdateAssistantWebhookRequest.repeatedFields_ = [2,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.UpdateAssistantWebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.UpdateAssistantWebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.UpdateAssistantWebhookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    assistanteventsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    httpmethod: jspb.Message.getFieldWithDefault(msg, 4, ""),
    httpurl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    httpheadersMap: (f = msg.getHttpheadersMap()) ? f.toObject(includeInstance, undefined) : [],
    httpbodyMap: (f = msg.getHttpbodyMap()) ? f.toObject(includeInstance, undefined) : [],
    timeoutsecond: jspb.Message.getFieldWithDefault(msg, 7, 0),
    retrystatuscodesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    maxretrycount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    assistantid: jspb.Message.getFieldWithDefault(msg, 10, "0"),
    executionpriority: jspb.Message.getFieldWithDefault(msg, 20, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest}
 */
proto.assistant_api.UpdateAssistantWebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.UpdateAssistantWebhookRequest;
  return proto.assistant_api.UpdateAssistantWebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.UpdateAssistantWebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest}
 */
proto.assistant_api.UpdateAssistantWebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAssistantevents(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHttpmethod(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHttpurl(value);
      break;
    case 6:
      var value = msg.getHttpheadersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 11:
      var value = msg.getHttpbodyMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeoutsecond(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addRetrystatuscodes(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxretrycount(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExecutionpriority(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.UpdateAssistantWebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.UpdateAssistantWebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.UpdateAssistantWebhookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getAssistanteventsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHttpmethod();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHttpurl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getHttpheadersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getHttpbodyMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(11, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getTimeoutsecond();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getRetrystatuscodesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getMaxretrycount();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      10,
      f
    );
  }
  f = message.getExecutionpriority();
  if (f !== 0) {
    writer.writeUint32(
      20,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest} returns this
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * repeated string assistantEvents = 2;
 * @return {!Array<string>}
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.getAssistanteventsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest} returns this
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.setAssistanteventsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest} returns this
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.addAssistantevents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest} returns this
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.clearAssistanteventsList = function() {
  return this.setAssistanteventsList([]);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest} returns this
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string httpMethod = 4;
 * @return {string}
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.getHttpmethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest} returns this
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.setHttpmethod = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string httpUrl = 5;
 * @return {string}
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.getHttpurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest} returns this
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.setHttpurl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> httpHeaders = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.getHttpheadersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest} returns this
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.clearHttpheadersMap = function() {
  this.getHttpheadersMap().clear();
  return this;};


/**
 * map<string, string> httpBody = 11;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.getHttpbodyMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 11, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest} returns this
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.clearHttpbodyMap = function() {
  this.getHttpbodyMap().clear();
  return this;};


/**
 * optional uint32 timeoutSecond = 7;
 * @return {number}
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.getTimeoutsecond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest} returns this
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.setTimeoutsecond = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated string retryStatusCodes = 8;
 * @return {!Array<string>}
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.getRetrystatuscodesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest} returns this
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.setRetrystatuscodesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest} returns this
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.addRetrystatuscodes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest} returns this
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.clearRetrystatuscodesList = function() {
  return this.setRetrystatuscodesList([]);
};


/**
 * optional uint32 maxRetryCount = 9;
 * @return {number}
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.getMaxretrycount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest} returns this
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.setMaxretrycount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 assistantId = 10;
 * @return {string}
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest} returns this
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 10, value);
};


/**
 * optional uint32 executionPriority = 20;
 * @return {number}
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.getExecutionpriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.UpdateAssistantWebhookRequest} returns this
 */
proto.assistant_api.UpdateAssistantWebhookRequest.prototype.setExecutionpriority = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAssistantWebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAssistantWebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAssistantWebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantWebhookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    assistantid: jspb.Message.getFieldWithDefault(msg, 2, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAssistantWebhookRequest}
 */
proto.assistant_api.GetAssistantWebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAssistantWebhookRequest;
  return proto.assistant_api.GetAssistantWebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAssistantWebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAssistantWebhookRequest}
 */
proto.assistant_api.GetAssistantWebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAssistantWebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAssistantWebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAssistantWebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantWebhookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.GetAssistantWebhookRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAssistantWebhookRequest} returns this
 */
proto.assistant_api.GetAssistantWebhookRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 assistantId = 2;
 * @return {string}
 */
proto.assistant_api.GetAssistantWebhookRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAssistantWebhookRequest} returns this
 */
proto.assistant_api.GetAssistantWebhookRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.DeleteAssistantWebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.DeleteAssistantWebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.DeleteAssistantWebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.DeleteAssistantWebhookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    assistantid: jspb.Message.getFieldWithDefault(msg, 2, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.DeleteAssistantWebhookRequest}
 */
proto.assistant_api.DeleteAssistantWebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.DeleteAssistantWebhookRequest;
  return proto.assistant_api.DeleteAssistantWebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.DeleteAssistantWebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.DeleteAssistantWebhookRequest}
 */
proto.assistant_api.DeleteAssistantWebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.DeleteAssistantWebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.DeleteAssistantWebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.DeleteAssistantWebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.DeleteAssistantWebhookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.DeleteAssistantWebhookRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.DeleteAssistantWebhookRequest} returns this
 */
proto.assistant_api.DeleteAssistantWebhookRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 assistantId = 2;
 * @return {string}
 */
proto.assistant_api.DeleteAssistantWebhookRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.DeleteAssistantWebhookRequest} returns this
 */
proto.assistant_api.DeleteAssistantWebhookRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAssistantWebhookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAssistantWebhookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAssistantWebhookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantWebhookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    data: (f = msg.getData()) && proto.assistant_api.AssistantWebhook.toObject(includeInstance, f),
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAssistantWebhookResponse}
 */
proto.assistant_api.GetAssistantWebhookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAssistantWebhookResponse;
  return proto.assistant_api.GetAssistantWebhookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAssistantWebhookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAssistantWebhookResponse}
 */
proto.assistant_api.GetAssistantWebhookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new proto.assistant_api.AssistantWebhook;
      reader.readMessage(value,proto.assistant_api.AssistantWebhook.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 4:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAssistantWebhookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAssistantWebhookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAssistantWebhookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantWebhookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.assistant_api.AssistantWebhook.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.assistant_api.GetAssistantWebhookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.GetAssistantWebhookResponse} returns this
 */
proto.assistant_api.GetAssistantWebhookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.assistant_api.GetAssistantWebhookResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.GetAssistantWebhookResponse} returns this
 */
proto.assistant_api.GetAssistantWebhookResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional AssistantWebhook data = 3;
 * @return {?proto.assistant_api.AssistantWebhook}
 */
proto.assistant_api.GetAssistantWebhookResponse.prototype.getData = function() {
  return /** @type{?proto.assistant_api.AssistantWebhook} */ (
    jspb.Message.getWrapperField(this, proto.assistant_api.AssistantWebhook, 3));
};


/**
 * @param {?proto.assistant_api.AssistantWebhook|undefined} value
 * @return {!proto.assistant_api.GetAssistantWebhookResponse} returns this
*/
proto.assistant_api.GetAssistantWebhookResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAssistantWebhookResponse} returns this
 */
proto.assistant_api.GetAssistantWebhookResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAssistantWebhookResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Error error = 4;
 * @return {?proto.Error}
 */
proto.assistant_api.GetAssistantWebhookResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 4));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.assistant_api.GetAssistantWebhookResponse} returns this
*/
proto.assistant_api.GetAssistantWebhookResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAssistantWebhookResponse} returns this
 */
proto.assistant_api.GetAssistantWebhookResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAssistantWebhookResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllAssistantWebhookRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllAssistantWebhookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllAssistantWebhookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllAssistantWebhookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantWebhookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    webhookid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    assistantid: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    paginate: (f = msg.getPaginate()) && common_pb.Paginate.toObject(includeInstance, f),
    criteriasList: jspb.Message.toObjectList(msg.getCriteriasList(),
    common_pb.Criteria.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllAssistantWebhookRequest}
 */
proto.assistant_api.GetAllAssistantWebhookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllAssistantWebhookRequest;
  return proto.assistant_api.GetAllAssistantWebhookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllAssistantWebhookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllAssistantWebhookRequest}
 */
proto.assistant_api.GetAllAssistantWebhookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setWebhookid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 2:
      var value = new common_pb.Paginate;
      reader.readMessage(value,common_pb.Paginate.deserializeBinaryFromReader);
      msg.setPaginate(value);
      break;
    case 3:
      var value = new common_pb.Criteria;
      reader.readMessage(value,common_pb.Criteria.deserializeBinaryFromReader);
      msg.addCriterias(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllAssistantWebhookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllAssistantWebhookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllAssistantWebhookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantWebhookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWebhookid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      4,
      f
    );
  }
  f = message.getPaginate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Paginate.serializeBinaryToWriter
    );
  }
  f = message.getCriteriasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 webhookId = 1;
 * @return {string}
 */
proto.assistant_api.GetAllAssistantWebhookRequest.prototype.getWebhookid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookRequest} returns this
 */
proto.assistant_api.GetAllAssistantWebhookRequest.prototype.setWebhookid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 assistantId = 4;
 * @return {string}
 */
proto.assistant_api.GetAllAssistantWebhookRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookRequest} returns this
 */
proto.assistant_api.GetAllAssistantWebhookRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional Paginate paginate = 2;
 * @return {?proto.Paginate}
 */
proto.assistant_api.GetAllAssistantWebhookRequest.prototype.getPaginate = function() {
  return /** @type{?proto.Paginate} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginate, 2));
};


/**
 * @param {?proto.Paginate|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookRequest} returns this
*/
proto.assistant_api.GetAllAssistantWebhookRequest.prototype.setPaginate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantWebhookRequest} returns this
 */
proto.assistant_api.GetAllAssistantWebhookRequest.prototype.clearPaginate = function() {
  return this.setPaginate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantWebhookRequest.prototype.hasPaginate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Criteria criterias = 3;
 * @return {!Array<!proto.Criteria>}
 */
proto.assistant_api.GetAllAssistantWebhookRequest.prototype.getCriteriasList = function() {
  return /** @type{!Array<!proto.Criteria>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Criteria, 3));
};


/**
 * @param {!Array<!proto.Criteria>} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookRequest} returns this
*/
proto.assistant_api.GetAllAssistantWebhookRequest.prototype.setCriteriasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Criteria=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Criteria}
 */
proto.assistant_api.GetAllAssistantWebhookRequest.prototype.addCriterias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Criteria, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantWebhookRequest} returns this
 */
proto.assistant_api.GetAllAssistantWebhookRequest.prototype.clearCriteriasList = function() {
  return this.setCriteriasList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllAssistantWebhookResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllAssistantWebhookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllAssistantWebhookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantWebhookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.assistant_api.AssistantWebhook.toObject, includeInstance),
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    paginated: (f = msg.getPaginated()) && common_pb.Paginated.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllAssistantWebhookResponse}
 */
proto.assistant_api.GetAllAssistantWebhookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllAssistantWebhookResponse;
  return proto.assistant_api.GetAllAssistantWebhookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllAssistantWebhookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllAssistantWebhookResponse}
 */
proto.assistant_api.GetAllAssistantWebhookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new proto.assistant_api.AssistantWebhook;
      reader.readMessage(value,proto.assistant_api.AssistantWebhook.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 4:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 5:
      var value = new common_pb.Paginated;
      reader.readMessage(value,common_pb.Paginated.deserializeBinaryFromReader);
      msg.setPaginated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllAssistantWebhookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllAssistantWebhookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantWebhookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.assistant_api.AssistantWebhook.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getPaginated();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.Paginated.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookResponse} returns this
 */
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookResponse} returns this
 */
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated AssistantWebhook data = 3;
 * @return {!Array<!proto.assistant_api.AssistantWebhook>}
 */
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.assistant_api.AssistantWebhook>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.assistant_api.AssistantWebhook, 3));
};


/**
 * @param {!Array<!proto.assistant_api.AssistantWebhook>} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookResponse} returns this
*/
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.assistant_api.AssistantWebhook=} opt_value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.AssistantWebhook}
 */
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.assistant_api.AssistantWebhook, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantWebhookResponse} returns this
 */
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional Error error = 4;
 * @return {?proto.Error}
 */
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 4));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookResponse} returns this
*/
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantWebhookResponse} returns this
 */
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Paginated paginated = 5;
 * @return {?proto.Paginated}
 */
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.getPaginated = function() {
  return /** @type{?proto.Paginated} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginated, 5));
};


/**
 * @param {?proto.Paginated|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookResponse} returns this
*/
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.setPaginated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantWebhookResponse} returns this
 */
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.clearPaginated = function() {
  return this.setPaginated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantWebhookResponse.prototype.hasPaginated = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllAssistantWebhookLogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllAssistantWebhookLogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    paginate: (f = msg.getPaginate()) && common_pb.Paginate.toObject(includeInstance, f),
    criteriasList: jspb.Message.toObjectList(msg.getCriteriasList(),
    common_pb.Criteria.toObject, includeInstance),
    order: (f = msg.getOrder()) && common_pb.Ordering.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogRequest}
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllAssistantWebhookLogRequest;
  return proto.assistant_api.GetAllAssistantWebhookLogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllAssistantWebhookLogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogRequest}
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setProjectid(value);
      break;
    case 3:
      var value = new common_pb.Paginate;
      reader.readMessage(value,common_pb.Paginate.deserializeBinaryFromReader);
      msg.setPaginate(value);
      break;
    case 4:
      var value = new common_pb.Criteria;
      reader.readMessage(value,common_pb.Criteria.deserializeBinaryFromReader);
      msg.addCriterias(value);
      break;
    case 5:
      var value = new common_pb.Ordering;
      reader.readMessage(value,common_pb.Ordering.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllAssistantWebhookLogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllAssistantWebhookLogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getPaginate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.Paginate.serializeBinaryToWriter
    );
  }
  f = message.getCriteriasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.Ordering.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 projectId = 2;
 * @return {string}
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.prototype.getProjectid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogRequest} returns this
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.prototype.setProjectid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional Paginate paginate = 3;
 * @return {?proto.Paginate}
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.prototype.getPaginate = function() {
  return /** @type{?proto.Paginate} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginate, 3));
};


/**
 * @param {?proto.Paginate|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogRequest} returns this
*/
proto.assistant_api.GetAllAssistantWebhookLogRequest.prototype.setPaginate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogRequest} returns this
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.prototype.clearPaginate = function() {
  return this.setPaginate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.prototype.hasPaginate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Criteria criterias = 4;
 * @return {!Array<!proto.Criteria>}
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.prototype.getCriteriasList = function() {
  return /** @type{!Array<!proto.Criteria>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Criteria, 4));
};


/**
 * @param {!Array<!proto.Criteria>} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogRequest} returns this
*/
proto.assistant_api.GetAllAssistantWebhookLogRequest.prototype.setCriteriasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.Criteria=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Criteria}
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.prototype.addCriterias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.Criteria, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogRequest} returns this
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.prototype.clearCriteriasList = function() {
  return this.setCriteriasList([]);
};


/**
 * optional Ordering order = 5;
 * @return {?proto.Ordering}
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.prototype.getOrder = function() {
  return /** @type{?proto.Ordering} */ (
    jspb.Message.getWrapperField(this, common_pb.Ordering, 5));
};


/**
 * @param {?proto.Ordering|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogRequest} returns this
*/
proto.assistant_api.GetAllAssistantWebhookLogRequest.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogRequest} returns this
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantWebhookLogRequest.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAssistantWebhookLogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAssistantWebhookLogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAssistantWebhookLogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantWebhookLogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    id: jspb.Message.getFieldWithDefault(msg, 3, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAssistantWebhookLogRequest}
 */
proto.assistant_api.GetAssistantWebhookLogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAssistantWebhookLogRequest;
  return proto.assistant_api.GetAssistantWebhookLogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAssistantWebhookLogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAssistantWebhookLogRequest}
 */
proto.assistant_api.GetAssistantWebhookLogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setProjectid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAssistantWebhookLogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAssistantWebhookLogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAssistantWebhookLogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantWebhookLogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
};


/**
 * optional uint64 projectId = 2;
 * @return {string}
 */
proto.assistant_api.GetAssistantWebhookLogRequest.prototype.getProjectid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAssistantWebhookLogRequest} returns this
 */
proto.assistant_api.GetAssistantWebhookLogRequest.prototype.setProjectid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 id = 3;
 * @return {string}
 */
proto.assistant_api.GetAssistantWebhookLogRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAssistantWebhookLogRequest} returns this
 */
proto.assistant_api.GetAssistantWebhookLogRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAssistantWebhookLogResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAssistantWebhookLogResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAssistantWebhookLogResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantWebhookLogResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    data: (f = msg.getData()) && proto.assistant_api.AssistantWebhookLog.toObject(includeInstance, f),
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAssistantWebhookLogResponse}
 */
proto.assistant_api.GetAssistantWebhookLogResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAssistantWebhookLogResponse;
  return proto.assistant_api.GetAssistantWebhookLogResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAssistantWebhookLogResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAssistantWebhookLogResponse}
 */
proto.assistant_api.GetAssistantWebhookLogResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new proto.assistant_api.AssistantWebhookLog;
      reader.readMessage(value,proto.assistant_api.AssistantWebhookLog.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 4:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAssistantWebhookLogResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAssistantWebhookLogResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAssistantWebhookLogResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantWebhookLogResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.assistant_api.AssistantWebhookLog.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.assistant_api.GetAssistantWebhookLogResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.GetAssistantWebhookLogResponse} returns this
 */
proto.assistant_api.GetAssistantWebhookLogResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.assistant_api.GetAssistantWebhookLogResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.GetAssistantWebhookLogResponse} returns this
 */
proto.assistant_api.GetAssistantWebhookLogResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional AssistantWebhookLog data = 3;
 * @return {?proto.assistant_api.AssistantWebhookLog}
 */
proto.assistant_api.GetAssistantWebhookLogResponse.prototype.getData = function() {
  return /** @type{?proto.assistant_api.AssistantWebhookLog} */ (
    jspb.Message.getWrapperField(this, proto.assistant_api.AssistantWebhookLog, 3));
};


/**
 * @param {?proto.assistant_api.AssistantWebhookLog|undefined} value
 * @return {!proto.assistant_api.GetAssistantWebhookLogResponse} returns this
*/
proto.assistant_api.GetAssistantWebhookLogResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAssistantWebhookLogResponse} returns this
 */
proto.assistant_api.GetAssistantWebhookLogResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAssistantWebhookLogResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Error error = 4;
 * @return {?proto.Error}
 */
proto.assistant_api.GetAssistantWebhookLogResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 4));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.assistant_api.GetAssistantWebhookLogResponse} returns this
*/
proto.assistant_api.GetAssistantWebhookLogResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAssistantWebhookLogResponse} returns this
 */
proto.assistant_api.GetAssistantWebhookLogResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAssistantWebhookLogResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllAssistantWebhookLogResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllAssistantWebhookLogResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.assistant_api.AssistantWebhookLog.toObject, includeInstance),
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    paginated: (f = msg.getPaginated()) && common_pb.Paginated.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogResponse}
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllAssistantWebhookLogResponse;
  return proto.assistant_api.GetAllAssistantWebhookLogResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllAssistantWebhookLogResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogResponse}
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new proto.assistant_api.AssistantWebhookLog;
      reader.readMessage(value,proto.assistant_api.AssistantWebhookLog.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 4:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 5:
      var value = new common_pb.Paginated;
      reader.readMessage(value,common_pb.Paginated.deserializeBinaryFromReader);
      msg.setPaginated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllAssistantWebhookLogResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllAssistantWebhookLogResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.assistant_api.AssistantWebhookLog.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getPaginated();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.Paginated.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogResponse} returns this
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogResponse} returns this
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated AssistantWebhookLog data = 3;
 * @return {!Array<!proto.assistant_api.AssistantWebhookLog>}
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.assistant_api.AssistantWebhookLog>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.assistant_api.AssistantWebhookLog, 3));
};


/**
 * @param {!Array<!proto.assistant_api.AssistantWebhookLog>} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogResponse} returns this
*/
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.assistant_api.AssistantWebhookLog=} opt_value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.AssistantWebhookLog}
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.assistant_api.AssistantWebhookLog, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogResponse} returns this
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional Error error = 4;
 * @return {?proto.Error}
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 4));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogResponse} returns this
*/
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogResponse} returns this
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Paginated paginated = 5;
 * @return {?proto.Paginated}
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.getPaginated = function() {
  return /** @type{?proto.Paginated} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginated, 5));
};


/**
 * @param {?proto.Paginated|undefined} value
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogResponse} returns this
*/
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.setPaginated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllAssistantWebhookLogResponse} returns this
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.clearPaginated = function() {
  return this.setPaginated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllAssistantWebhookLogResponse.prototype.hasPaginated = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAssistantConversationRequest.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAssistantConversationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAssistantConversationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAssistantConversationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantConversationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assistantid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    conversationid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    paginate: (f = msg.getPaginate()) && common_pb.Paginate.toObject(includeInstance, f),
    criteriasList: jspb.Message.toObjectList(msg.getCriteriasList(),
    common_pb.Criteria.toObject, includeInstance),
    selectorsList: jspb.Message.toObjectList(msg.getSelectorsList(),
    common_pb.FieldSelector.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAssistantConversationRequest}
 */
proto.assistant_api.GetAssistantConversationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAssistantConversationRequest;
  return proto.assistant_api.GetAssistantConversationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAssistantConversationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAssistantConversationRequest}
 */
proto.assistant_api.GetAssistantConversationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAssistantid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setConversationid(value);
      break;
    case 3:
      var value = new common_pb.Paginate;
      reader.readMessage(value,common_pb.Paginate.deserializeBinaryFromReader);
      msg.setPaginate(value);
      break;
    case 4:
      var value = new common_pb.Criteria;
      reader.readMessage(value,common_pb.Criteria.deserializeBinaryFromReader);
      msg.addCriterias(value);
      break;
    case 5:
      var value = new common_pb.FieldSelector;
      reader.readMessage(value,common_pb.FieldSelector.deserializeBinaryFromReader);
      msg.addSelectors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAssistantConversationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAssistantConversationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAssistantConversationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantConversationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssistantid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getConversationid();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getPaginate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.Paginate.serializeBinaryToWriter
    );
  }
  f = message.getCriteriasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getSelectorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      common_pb.FieldSelector.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 assistantId = 1;
 * @return {string}
 */
proto.assistant_api.GetAssistantConversationRequest.prototype.getAssistantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAssistantConversationRequest} returns this
 */
proto.assistant_api.GetAssistantConversationRequest.prototype.setAssistantid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 conversationId = 2;
 * @return {string}
 */
proto.assistant_api.GetAssistantConversationRequest.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetAssistantConversationRequest} returns this
 */
proto.assistant_api.GetAssistantConversationRequest.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional Paginate paginate = 3;
 * @return {?proto.Paginate}
 */
proto.assistant_api.GetAssistantConversationRequest.prototype.getPaginate = function() {
  return /** @type{?proto.Paginate} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginate, 3));
};


/**
 * @param {?proto.Paginate|undefined} value
 * @return {!proto.assistant_api.GetAssistantConversationRequest} returns this
*/
proto.assistant_api.GetAssistantConversationRequest.prototype.setPaginate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAssistantConversationRequest} returns this
 */
proto.assistant_api.GetAssistantConversationRequest.prototype.clearPaginate = function() {
  return this.setPaginate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAssistantConversationRequest.prototype.hasPaginate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Criteria criterias = 4;
 * @return {!Array<!proto.Criteria>}
 */
proto.assistant_api.GetAssistantConversationRequest.prototype.getCriteriasList = function() {
  return /** @type{!Array<!proto.Criteria>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Criteria, 4));
};


/**
 * @param {!Array<!proto.Criteria>} value
 * @return {!proto.assistant_api.GetAssistantConversationRequest} returns this
*/
proto.assistant_api.GetAssistantConversationRequest.prototype.setCriteriasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.Criteria=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Criteria}
 */
proto.assistant_api.GetAssistantConversationRequest.prototype.addCriterias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.Criteria, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAssistantConversationRequest} returns this
 */
proto.assistant_api.GetAssistantConversationRequest.prototype.clearCriteriasList = function() {
  return this.setCriteriasList([]);
};


/**
 * repeated FieldSelector selectors = 5;
 * @return {!Array<!proto.FieldSelector>}
 */
proto.assistant_api.GetAssistantConversationRequest.prototype.getSelectorsList = function() {
  return /** @type{!Array<!proto.FieldSelector>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.FieldSelector, 5));
};


/**
 * @param {!Array<!proto.FieldSelector>} value
 * @return {!proto.assistant_api.GetAssistantConversationRequest} returns this
*/
proto.assistant_api.GetAssistantConversationRequest.prototype.setSelectorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.FieldSelector=} opt_value
 * @param {number=} opt_index
 * @return {!proto.FieldSelector}
 */
proto.assistant_api.GetAssistantConversationRequest.prototype.addSelectors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.FieldSelector, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAssistantConversationRequest} returns this
 */
proto.assistant_api.GetAssistantConversationRequest.prototype.clearSelectorsList = function() {
  return this.setSelectorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAssistantConversationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAssistantConversationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAssistantConversationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantConversationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    data: (f = msg.getData()) && common_pb.AssistantConversation.toObject(includeInstance, f),
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    paginated: (f = msg.getPaginated()) && common_pb.Paginated.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAssistantConversationResponse}
 */
proto.assistant_api.GetAssistantConversationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAssistantConversationResponse;
  return proto.assistant_api.GetAssistantConversationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAssistantConversationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAssistantConversationResponse}
 */
proto.assistant_api.GetAssistantConversationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new common_pb.AssistantConversation;
      reader.readMessage(value,common_pb.AssistantConversation.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 4:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 5:
      var value = new common_pb.Paginated;
      reader.readMessage(value,common_pb.Paginated.deserializeBinaryFromReader);
      msg.setPaginated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAssistantConversationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAssistantConversationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAssistantConversationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAssistantConversationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.AssistantConversation.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getPaginated();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.Paginated.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.assistant_api.GetAssistantConversationResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.GetAssistantConversationResponse} returns this
 */
proto.assistant_api.GetAssistantConversationResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.assistant_api.GetAssistantConversationResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.GetAssistantConversationResponse} returns this
 */
proto.assistant_api.GetAssistantConversationResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional AssistantConversation data = 3;
 * @return {?proto.AssistantConversation}
 */
proto.assistant_api.GetAssistantConversationResponse.prototype.getData = function() {
  return /** @type{?proto.AssistantConversation} */ (
    jspb.Message.getWrapperField(this, common_pb.AssistantConversation, 3));
};


/**
 * @param {?proto.AssistantConversation|undefined} value
 * @return {!proto.assistant_api.GetAssistantConversationResponse} returns this
*/
proto.assistant_api.GetAssistantConversationResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAssistantConversationResponse} returns this
 */
proto.assistant_api.GetAssistantConversationResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAssistantConversationResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Error error = 4;
 * @return {?proto.Error}
 */
proto.assistant_api.GetAssistantConversationResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 4));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.assistant_api.GetAssistantConversationResponse} returns this
*/
proto.assistant_api.GetAssistantConversationResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAssistantConversationResponse} returns this
 */
proto.assistant_api.GetAssistantConversationResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAssistantConversationResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Paginated paginated = 5;
 * @return {?proto.Paginated}
 */
proto.assistant_api.GetAssistantConversationResponse.prototype.getPaginated = function() {
  return /** @type{?proto.Paginated} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginated, 5));
};


/**
 * @param {?proto.Paginated|undefined} value
 * @return {!proto.assistant_api.GetAssistantConversationResponse} returns this
*/
proto.assistant_api.GetAssistantConversationResponse.prototype.setPaginated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAssistantConversationResponse} returns this
 */
proto.assistant_api.GetAssistantConversationResponse.prototype.clearPaginated = function() {
  return this.setPaginated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAssistantConversationResponse.prototype.hasPaginated = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.Tool.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.Tool.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.Tool} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.Tool.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    code: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    setupoptions: (f = msg.getSetupoptions()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    intializeoptions: (f = msg.getIntializeoptions()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    icon: jspb.Message.getFieldWithDefault(msg, 7, ""),
    visibility: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.Tool}
 */
proto.assistant_api.Tool.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.Tool;
  return proto.assistant_api.Tool.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.Tool} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.Tool}
 */
proto.assistant_api.Tool.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setSetupoptions(value);
      break;
    case 6:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setIntializeoptions(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setVisibility(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.Tool.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.Tool.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.Tool} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.Tool.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSetupoptions();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getIntializeoptions();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getVisibility();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.Tool.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Tool} returns this
 */
proto.assistant_api.Tool.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.assistant_api.Tool.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Tool} returns this
 */
proto.assistant_api.Tool.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.assistant_api.Tool.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Tool} returns this
 */
proto.assistant_api.Tool.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.assistant_api.Tool.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Tool} returns this
 */
proto.assistant_api.Tool.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Struct setupOptions = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.assistant_api.Tool.prototype.getSetupoptions = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 5));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.assistant_api.Tool} returns this
*/
proto.assistant_api.Tool.prototype.setSetupoptions = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.Tool} returns this
 */
proto.assistant_api.Tool.prototype.clearSetupoptions = function() {
  return this.setSetupoptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.Tool.prototype.hasSetupoptions = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Struct intializeOptions = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.assistant_api.Tool.prototype.getIntializeoptions = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.assistant_api.Tool} returns this
*/
proto.assistant_api.Tool.prototype.setIntializeoptions = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.Tool} returns this
 */
proto.assistant_api.Tool.prototype.clearIntializeoptions = function() {
  return this.setIntializeoptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.Tool.prototype.hasIntializeoptions = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string icon = 7;
 * @return {string}
 */
proto.assistant_api.Tool.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Tool} returns this
 */
proto.assistant_api.Tool.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string visibility = 8;
 * @return {string}
 */
proto.assistant_api.Tool.prototype.getVisibility = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.Tool} returns this
 */
proto.assistant_api.Tool.prototype.setVisibility = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetToolRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetToolRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetToolRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetToolRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetToolRequest}
 */
proto.assistant_api.GetToolRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetToolRequest;
  return proto.assistant_api.GetToolRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetToolRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetToolRequest}
 */
proto.assistant_api.GetToolRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetToolRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetToolRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetToolRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetToolRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.assistant_api.GetToolRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.assistant_api.GetToolRequest} returns this
 */
proto.assistant_api.GetToolRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetToolResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetToolResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetToolResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetToolResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    data: (f = msg.getData()) && proto.assistant_api.Tool.toObject(includeInstance, f),
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetToolResponse}
 */
proto.assistant_api.GetToolResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetToolResponse;
  return proto.assistant_api.GetToolResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetToolResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetToolResponse}
 */
proto.assistant_api.GetToolResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new proto.assistant_api.Tool;
      reader.readMessage(value,proto.assistant_api.Tool.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 4:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetToolResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetToolResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetToolResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetToolResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.assistant_api.Tool.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.assistant_api.GetToolResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.GetToolResponse} returns this
 */
proto.assistant_api.GetToolResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.assistant_api.GetToolResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.GetToolResponse} returns this
 */
proto.assistant_api.GetToolResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional Tool data = 3;
 * @return {?proto.assistant_api.Tool}
 */
proto.assistant_api.GetToolResponse.prototype.getData = function() {
  return /** @type{?proto.assistant_api.Tool} */ (
    jspb.Message.getWrapperField(this, proto.assistant_api.Tool, 3));
};


/**
 * @param {?proto.assistant_api.Tool|undefined} value
 * @return {!proto.assistant_api.GetToolResponse} returns this
*/
proto.assistant_api.GetToolResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetToolResponse} returns this
 */
proto.assistant_api.GetToolResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetToolResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Error error = 4;
 * @return {?proto.Error}
 */
proto.assistant_api.GetToolResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 4));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.assistant_api.GetToolResponse} returns this
*/
proto.assistant_api.GetToolResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetToolResponse} returns this
 */
proto.assistant_api.GetToolResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetToolResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllToolRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllToolRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllToolRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllToolRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllToolRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paginate: (f = msg.getPaginate()) && common_pb.Paginate.toObject(includeInstance, f),
    criteriasList: jspb.Message.toObjectList(msg.getCriteriasList(),
    common_pb.Criteria.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllToolRequest}
 */
proto.assistant_api.GetAllToolRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllToolRequest;
  return proto.assistant_api.GetAllToolRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllToolRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllToolRequest}
 */
proto.assistant_api.GetAllToolRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Paginate;
      reader.readMessage(value,common_pb.Paginate.deserializeBinaryFromReader);
      msg.setPaginate(value);
      break;
    case 2:
      var value = new common_pb.Criteria;
      reader.readMessage(value,common_pb.Criteria.deserializeBinaryFromReader);
      msg.addCriterias(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllToolRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllToolRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllToolRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllToolRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPaginate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Paginate.serializeBinaryToWriter
    );
  }
  f = message.getCriteriasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional Paginate paginate = 1;
 * @return {?proto.Paginate}
 */
proto.assistant_api.GetAllToolRequest.prototype.getPaginate = function() {
  return /** @type{?proto.Paginate} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginate, 1));
};


/**
 * @param {?proto.Paginate|undefined} value
 * @return {!proto.assistant_api.GetAllToolRequest} returns this
*/
proto.assistant_api.GetAllToolRequest.prototype.setPaginate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllToolRequest} returns this
 */
proto.assistant_api.GetAllToolRequest.prototype.clearPaginate = function() {
  return this.setPaginate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllToolRequest.prototype.hasPaginate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Criteria criterias = 2;
 * @return {!Array<!proto.Criteria>}
 */
proto.assistant_api.GetAllToolRequest.prototype.getCriteriasList = function() {
  return /** @type{!Array<!proto.Criteria>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Criteria, 2));
};


/**
 * @param {!Array<!proto.Criteria>} value
 * @return {!proto.assistant_api.GetAllToolRequest} returns this
*/
proto.assistant_api.GetAllToolRequest.prototype.setCriteriasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Criteria=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Criteria}
 */
proto.assistant_api.GetAllToolRequest.prototype.addCriterias = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Criteria, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllToolRequest} returns this
 */
proto.assistant_api.GetAllToolRequest.prototype.clearCriteriasList = function() {
  return this.setCriteriasList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.assistant_api.GetAllToolResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.assistant_api.GetAllToolResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.assistant_api.GetAllToolResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.assistant_api.GetAllToolResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllToolResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.assistant_api.Tool.toObject, includeInstance),
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    paginated: (f = msg.getPaginated()) && common_pb.Paginated.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.assistant_api.GetAllToolResponse}
 */
proto.assistant_api.GetAllToolResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.assistant_api.GetAllToolResponse;
  return proto.assistant_api.GetAllToolResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.assistant_api.GetAllToolResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.assistant_api.GetAllToolResponse}
 */
proto.assistant_api.GetAllToolResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = new proto.assistant_api.Tool;
      reader.readMessage(value,proto.assistant_api.Tool.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 4:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 5:
      var value = new common_pb.Paginated;
      reader.readMessage(value,common_pb.Paginated.deserializeBinaryFromReader);
      msg.setPaginated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.assistant_api.GetAllToolResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.assistant_api.GetAllToolResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.assistant_api.GetAllToolResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.assistant_api.GetAllToolResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.assistant_api.Tool.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getPaginated();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_pb.Paginated.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.assistant_api.GetAllToolResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.assistant_api.GetAllToolResponse} returns this
 */
proto.assistant_api.GetAllToolResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.assistant_api.GetAllToolResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.assistant_api.GetAllToolResponse} returns this
 */
proto.assistant_api.GetAllToolResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated Tool data = 3;
 * @return {!Array<!proto.assistant_api.Tool>}
 */
proto.assistant_api.GetAllToolResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.assistant_api.Tool>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.assistant_api.Tool, 3));
};


/**
 * @param {!Array<!proto.assistant_api.Tool>} value
 * @return {!proto.assistant_api.GetAllToolResponse} returns this
*/
proto.assistant_api.GetAllToolResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.assistant_api.Tool=} opt_value
 * @param {number=} opt_index
 * @return {!proto.assistant_api.Tool}
 */
proto.assistant_api.GetAllToolResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.assistant_api.Tool, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.assistant_api.GetAllToolResponse} returns this
 */
proto.assistant_api.GetAllToolResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional Error error = 4;
 * @return {?proto.Error}
 */
proto.assistant_api.GetAllToolResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 4));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.assistant_api.GetAllToolResponse} returns this
*/
proto.assistant_api.GetAllToolResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllToolResponse} returns this
 */
proto.assistant_api.GetAllToolResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllToolResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Paginated paginated = 5;
 * @return {?proto.Paginated}
 */
proto.assistant_api.GetAllToolResponse.prototype.getPaginated = function() {
  return /** @type{?proto.Paginated} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginated, 5));
};


/**
 * @param {?proto.Paginated|undefined} value
 * @return {!proto.assistant_api.GetAllToolResponse} returns this
*/
proto.assistant_api.GetAllToolResponse.prototype.setPaginated = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.assistant_api.GetAllToolResponse} returns this
 */
proto.assistant_api.GetAllToolResponse.prototype.clearPaginated = function() {
  return this.setPaginated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.assistant_api.GetAllToolResponse.prototype.hasPaginated = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.assistant_api);
