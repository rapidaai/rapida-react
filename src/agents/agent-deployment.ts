/*
 *  Copyright (c) 2024. Rapida
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *
 *  Author: Prashant <prashant@rapida.ai>
 *
 */
import { RapidaSource } from "@/rapida/utils/rapida_source";
import { Assistant } from "@/rapida/clients/protos/assistant-api_pb";
import {
  AssistantDeploymentCapturer,
  DeploymentAudioProvider,
} from "@/rapida/clients/protos/assistant-deployment_pb";

export interface AgentDebuggerDeployment {
  id: string;

  assistantid: string;
  name: string;
  role: string;
  tone: string;
  experties: string;
  greeting: string;
  mistake: string;
  ending: string;
  url: string;
  suggestionList: Array<string>;
  status: string;
}

export interface AgentApiDeployment {
  id: string;

  assistantid: string;
  name: string;
  role: string;
  tone: string;
  experties: string;
  greeting: string;
  mistake: string;
  ending: string;
  inputaudioList: Array<DeploymentAudioProvider.AsObject>;
  outputaudioList: Array<DeploymentAudioProvider.AsObject>;
  capturersList: Array<AssistantDeploymentCapturer.AsObject>;
  status: string;
}

export interface AgentWebpluginDeployment {
  id: string;
  assistantid: string;
  name: string;
  role: string;
  tone: string;
  experties: string;
  greeting: string;
  mistake: string;
  ending: string;
  inputaudioList: Array<DeploymentAudioProvider.AsObject>;
  outputaudioList: Array<DeploymentAudioProvider.AsObject>;
  capturersList: Array<AssistantDeploymentCapturer.AsObject>;
  url: string;
  suggestionList: Array<string>;
  helpcenterenabled: boolean;
  productcatalogenabled: boolean;
  articlecatalogenabled: boolean;
  uploadfileenabled: boolean;
  status: string;
}

export type AgentDeployment =
  | {
      type: "debugger";
      deployment: AgentDebuggerDeployment;
      inAudio: boolean;
      outAudio: boolean;
    }
  | {
      type: "web-plugin";
      deployment: AgentWebpluginDeployment;
      inAudio: boolean;
      outAudio: boolean;
    }
  | {
      type: "api";
      deployment: AgentApiDeployment;
      inAudio: boolean;
      outAudio: boolean;
    };

export const GetDeployment = (
  assistant: Assistant,
  source: RapidaSource
): AgentDeployment | undefined => {
  switch (source) {
    case "debugger": {
      const deployment = assistant.getDebuggerdeployment()?.toObject();
      return deployment
        ? {
            type: "debugger",
            deployment,
            inAudio: deployment.inputaudioList.length > 0,
            outAudio: deployment.outputaudioList.length > 0,
          }
        : undefined;
    }
    case "web-plugin": {
      const deployment = assistant.getWebplugindeployment()?.toObject();
      return deployment
        ? {
            type: "web-plugin",
            deployment,
            inAudio: deployment.inputaudioList.length > 0,
            outAudio: deployment.outputaudioList.length > 0,
          }
        : undefined;
    }
    default: {
      const deployment = assistant.getApideployment()?.toObject();
      return deployment
        ? {
            type: "api",
            deployment,
            inAudio: deployment.inputaudioList.length > 0,
            outAudio: deployment.outputaudioList.length > 0,
          }
        : undefined;
    }
  }
};
