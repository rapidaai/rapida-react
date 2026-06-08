import { MessageProtocolHandler } from '@/rapida/audio/message-protocol-handler';
import {
  ICECandidate,
  ServerSignaling,
  WebRTCConfig,
  WebRTCSDP,
  WebTalkResponse,
} from '@/rapida/clients/protos/webrtc_pb';
import { ConversationDisconnection } from '@/rapida/clients/protos/talk-api_pb';
import { MockMediaStream } from '../setup';

function createHandler() {
  const callbacks = {
    onConnectionStateChange: jest.fn(),
    onError: jest.fn(),
    onConversationDisconnected: jest.fn(),
    onDisconnected: jest.fn(),
  };
  const signaling = {
    setSessionId: jest.fn(),
    sendWebRTCAnswer: jest.fn(),
  };
  const peer = {
    setup: jest.fn(),
    handleOffer: jest.fn().mockResolvedValue('v=0\r\nanswer'),
    handleAnswer: jest.fn().mockResolvedValue(undefined),
    getLocalSDP: jest.fn().mockReturnValue('v=0\r\nanswer'),
    addICECandidate: jest.fn().mockResolvedValue(undefined),
    close: jest.fn(),
  };
  const audio = {
    mediaStream: new MockMediaStream() as unknown as MediaStream,
    ensurePlayback: jest.fn().mockResolvedValue(undefined),
  };

  return {
    callbacks,
    signaling,
    peer,
    audio,
    handler: new MessageProtocolHandler(callbacks as any, signaling as any, peer as any, audio as any),
  };
}

function responseWithDisconnection(): WebTalkResponse {
  const response = new WebTalkResponse();
  response.setDisconnection(new ConversationDisconnection());
  return response;
}

function responseWithSignaling(signaling: ServerSignaling): WebTalkResponse {
  const response = new WebTalkResponse();
  response.setSignaling(signaling);
  return response;
}

function configSignaling(sessionId: string): ServerSignaling {
  const signaling = new ServerSignaling();
  signaling.setSessionid(sessionId);
  signaling.setConfig(new WebRTCConfig());
  return signaling;
}

function offerSignaling(sessionId: string): ServerSignaling {
  const signaling = new ServerSignaling();
  signaling.setSessionid(sessionId);
  const sdp = new WebRTCSDP();
  sdp.setType(WebRTCSDP.SDPType.OFFER);
  sdp.setSdp('v=0\r\noffer');
  signaling.setSdp(sdp);
  return signaling;
}

function iceSignaling(sessionId: string): ServerSignaling {
  const signaling = new ServerSignaling();
  signaling.setSessionid(sessionId);
  const ice = new ICECandidate();
  ice.setCandidate('candidate:1 1 udp 2130706431 127.0.0.1 9 typ host');
  ice.setSdpmid('audio');
  ice.setSdpmlineindex(0);
  signaling.setIcecandidate(ice);
  return signaling;
}

describe('MessageProtocolHandler WebRTC signaling sessions', () => {
  it('answers offers only for the active signaling session', async () => {
    const { handler, signaling, peer } = createHandler();

    await handler.handleMessage(responseWithSignaling(configSignaling('session-new')));
    await handler.handleMessage(responseWithSignaling(offerSignaling('session-old')));
    await handler.handleMessage(responseWithSignaling(offerSignaling('session-new')));

    expect(signaling.setSessionId).toHaveBeenCalledTimes(1);
    expect(signaling.setSessionId).toHaveBeenCalledWith('session-new');
    expect(peer.handleOffer).toHaveBeenCalledTimes(1);
    expect(peer.handleOffer).toHaveBeenCalledWith('v=0\r\noffer', expect.any(Object));
    expect(signaling.sendWebRTCAnswer).toHaveBeenCalledTimes(1);
  });

  it('ignores stale ICE candidates instead of mutating the current peer', async () => {
    const { handler, peer } = createHandler();

    await handler.handleMessage(responseWithSignaling(configSignaling('session-current')));
    await handler.handleMessage(responseWithSignaling(iceSignaling('session-stale')));
    await handler.handleMessage(responseWithSignaling(iceSignaling('session-current')));

    expect(peer.addICECandidate).toHaveBeenCalledTimes(1);
    expect(peer.addICECandidate).toHaveBeenCalledWith(
      'candidate:1 1 udp 2130706431 127.0.0.1 9 typ host',
      'audio',
      0,
    );
  });

  it('treats a new config as the next active signaling session', async () => {
    const { handler, signaling, peer } = createHandler();

    await handler.handleMessage(responseWithSignaling(configSignaling('session-old')));
    await handler.handleMessage(responseWithSignaling(configSignaling('session-new')));
    await handler.handleMessage(responseWithSignaling(offerSignaling('session-old')));
    await handler.handleMessage(responseWithSignaling(offerSignaling('session-new')));

    expect(signaling.setSessionId).toHaveBeenNthCalledWith(1, 'session-old');
    expect(signaling.setSessionId).toHaveBeenNthCalledWith(2, 'session-new');
    expect(peer.setup).toHaveBeenCalledTimes(2);
    expect(peer.handleOffer).toHaveBeenCalledTimes(1);
    expect(signaling.sendWebRTCAnswer).toHaveBeenCalledTimes(1);
  });

  it('routes server disconnection through terminal conversation callback', async () => {
    const { handler, callbacks } = createHandler();

    await handler.handleMessage(responseWithDisconnection());

    expect(callbacks.onConversationDisconnected).toHaveBeenCalledTimes(1);
    expect(callbacks.onDisconnected).toHaveBeenCalledTimes(1);
  });
});
