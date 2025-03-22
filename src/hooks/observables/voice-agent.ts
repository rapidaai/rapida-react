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
import { Subject, map, Observable, startWith, finalize, concat } from "rxjs";
import { VoiceAgent } from "@/rapida/agents/voice-agent";
import { AgentEvent } from "@/rapida/events/agent-event";
import { AgentEventCallback } from "@/rapida/events/agent-event-callback";
import { ConnectionState } from "@/rapida/connections/connection-state";

/**
 *
 * @param agent
 * @param events
 * @returns
 */
export function observeVoiceAgentEvents(
  agent: VoiceAgent,
  ...events: AgentEvent[]
): Observable<VoiceAgent> {
  const observable = new Observable<VoiceAgent>((subscribe) => {
    const onVoiceAgentUpdate = () => {
      subscribe.next(agent);
    };

    events.forEach((evt) => {
      agent.on(evt, onVoiceAgentUpdate);
    });

    const unsubscribe = () => {
      events.forEach((evt) => {
        agent.off(evt, onVoiceAgentUpdate);
      });
    };
    return unsubscribe;
  }).pipe(startWith(agent));

  return observable;
}

/**
 *
 * @param agent
 * @param event
 * @returns
 */
export function agentEventSelector<T extends AgentEvent>(
  agent: VoiceAgent,
  event: T
) {
  const observable = new Observable<Parameters<AgentEventCallback[T]>>(
    (subscribe) => {
      const update = (...params: Parameters<AgentEventCallback[T]>) => {
        subscribe.next(params);
      };
      agent.on(event as keyof AgentEventCallback, update);
      const unsubscribe = () => {
        agent.off(event as keyof AgentEventCallback, update);
      };
      return unsubscribe;
    }
  );
  return observable;
}

/**
 *
 * @param agent
 * @returns
 */
export function agentObserver(agent: VoiceAgent) {
  const observable = observeVoiceAgentEvents(
    agent,
    AgentEvent.ServerEvent,
    AgentEvent.DataReceived,
    // swiching channel event
    AgentEvent.OutputChannelSwitch,
    AgentEvent.InputChannelSwitch,

    //
    AgentEvent.ConnectionChanged,

    //
    AgentEvent.AudioInputMuteToggle,
    AgentEvent.AudioInputMuteToggle
  ).pipe(startWith(agent));

  return observable;
}

/**
 *
 * @param kind
 * @param onError
 * @param requestPermissions
 * @returns
 */
export function browserMediaDeviceObserver(
  kind?: MediaDeviceKind,
  onError?: (e: Error) => void,
  requestPermissions = true
) {
  const onDeviceChange = async () => {
    try {
      const newDevices = await VoiceAgent.getLocalDevices(
        kind,
        requestPermissions
      );
      deviceSubject.next(newDevices);
    } catch (e: any) {
      onError?.(e);
    }
  };
  const deviceSubject = new Subject<MediaDeviceInfo[]>();

  const observable = deviceSubject.pipe(
    finalize(() => {
      navigator?.mediaDevices?.removeEventListener(
        "devicechange",
        onDeviceChange
      );
    })
  );

  if (typeof window !== "undefined") {
    if (!window.isSecureContext) {
      throw new Error(
        `Accessing media devices is available only in secure contexts (HTTPS and localhost), in some or all supporting browsers. See: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices`
      );
    }
    navigator?.mediaDevices?.addEventListener("devicechange", onDeviceChange);
  }
  // because we rely on an async function, concat the promise to retrieve the initial values with the observable
  return concat(
    VoiceAgent.getLocalDevices(kind, requestPermissions).catch((e) => {
      onError?.(e);
      return [] as MediaDeviceInfo[];
    }),
    observable
  );
}

export function createDataObserver(agent: VoiceAgent) {
  return agentEventSelector(agent, AgentEvent.DataReceived);
}

/**
 *
 * @param agent
 * @returns
 */

export function agentInputMediaDeviceChangeObservable(agent: VoiceAgent) {
  return agentEventSelector(agent, AgentEvent.InputMediaDeviceChanged).pipe(
    map(([deviceId]: [string]) => {
      return deviceId;
    })
  );
}

/**
 * for observable of mute and unmute of the input and output of audio
 * @param agent
 * @returns
 */
export function agentAudioInputMuteObservable(agent: VoiceAgent) {
  const observable = observeVoiceAgentEvents(
    agent,
    AgentEvent.AudioInputMuteToggle
  ).pipe(
    map((_agn: VoiceAgent) => {
      return { isEnable: _agn.isAudioInputEnable };
    })
  );
  return observable;
}

/**
 * for observable of mute and unmute of the input and output of audio
 * @param agent
 * @returns
 */
export function agentAudioOutputMuteObservable(agent: VoiceAgent) {
  const observable = observeVoiceAgentEvents(
    agent,
    AgentEvent.AudioOutputMuteToggle
  ).pipe(
    map((_agn: VoiceAgent) => {
      return { isEnable: _agn.isAudioOutputEnable };
    })
  );
  return observable;
}

/**
 * when connection of agent get changed
 * @param agent
 * @returns
 */
export function agentConnectionStateObservable(agent: VoiceAgent) {
  const observable = observeVoiceAgentEvents(
    agent,
    AgentEvent.ConnectionChanged
  ).pipe(
    map((_a: VoiceAgent) => {
      return { isConnected: agent.state === ConnectionState.Connected };
    })
  );
  return observable;
}

/**
 * overserving the input channel
 * @param agent
 * @returns
 */
export function agentInputObservable(agent: VoiceAgent) {
  const observable = observeVoiceAgentEvents(
    agent,
    AgentEvent.InputChannelSwitch
  ).pipe(
    map((_agent: VoiceAgent) => {
      return { channel: _agent.inputChannel };
    })
  );
  return observable;
}

/**
 *
 * @param agent
 * @returns
 */
export function agentMessageChangeEventObserver(agent: VoiceAgent) {
  const observable = observeVoiceAgentEvents(
    agent,
    AgentEvent.ServerEvent,
    AgentEvent.MessageFeedback
  ).pipe(
    map((v) => {
      return {
        eventType: v,
        events: agent.events,
        chats: agent.messages,
        transcript: agent.transcript,
      };
    }),
    startWith({
      eventType: undefined,
      events: agent.events,
      chats: agent.messages,
      transcript: agent.transcript,
    })
  );
  return observable;
}

/**
 *
 * @param agent
 * @returns
 */
export function agentServerEventObserver(agent: VoiceAgent) {
  const observable = agentEventSelector(agent, AgentEvent.ServerEvent).pipe(
    map(([v]) => {
      return {
        eventType: v,
        events: agent.events,
        chats: agent.messages,
        transcript: agent.transcript,
      };
    }),
    startWith({
      eventType: undefined,
      events: agent.events,
      chats: agent.messages,
      transcript: agent.transcript,
    })
  );
  return observable;
}
