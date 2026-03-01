/**
 * Tests for utility functions
 */

// Mock rapida_client
jest.mock('@/rapida/utils/rapida_client', () => ({
  getBrowser: jest.fn().mockReturnValue({
    name: 'Chrome',
    os: 'macOS',
    version: '100',
  }),
}));

import {
  isSafari,
  isChrome,
  isFirefox,
  isInternetExplorer,
  isEdge,
  isMacOs,
  isIOS,
  hasFullWebRTCAudioSupport,
  toDate,
  toHumanReadableDate,
} from '@/rapida/utils';
import { getBrowser } from '@/rapida/utils/rapida_client';

describe('Browser Detection Utils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('isSafari()', () => {
    it('should return true for Safari browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Safari' });
      expect(isSafari()).toBe(true);
    });

    it('should return false for non-Safari browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Chrome' });
      expect(isSafari()).toBe(false);
    });
  });

  describe('isChrome()', () => {
    it('should return true for Chrome browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Chrome' });
      expect(isChrome()).toBe(true);
    });

    it('should return false for non-Chrome browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Firefox' });
      expect(isChrome()).toBe(false);
    });
  });

  describe('isFirefox()', () => {
    it('should return true for Firefox browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Firefox' });
      expect(isFirefox()).toBe(true);
    });

    it('should return false for non-Firefox browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Chrome' });
      expect(isFirefox()).toBe(false);
    });
  });

  describe('isInternetExplorer()', () => {
    it('should return true for Internet Explorer', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Internet Explorer' });
      expect(isInternetExplorer()).toBe(true);
    });

    it('should return false for non-IE browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Edge' });
      expect(isInternetExplorer()).toBe(false);
    });
  });

  describe('isEdge()', () => {
    it('should return true for Edge browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Edge' });
      expect(isEdge()).toBe(true);
    });

    it('should return false for non-Edge browser', () => {
      (getBrowser as jest.Mock).mockReturnValue({ name: 'Chrome' });
      expect(isEdge()).toBe(false);
    });
  });

  describe('isMacOs()', () => {
    it('should return true for macOS', () => {
      (getBrowser as jest.Mock).mockReturnValue({ os: 'macOS' });
      expect(isMacOs()).toBe(true);
    });

    it('should return false for non-macOS', () => {
      (getBrowser as jest.Mock).mockReturnValue({ os: 'Windows' });
      expect(isMacOs()).toBe(false);
    });
  });

  describe('isIOS()', () => {
    it('should return true for iOS', () => {
      (getBrowser as jest.Mock).mockReturnValue({ os: 'iOS' });
      expect(isIOS()).toBe(true);
    });

    it('should return false for non-iOS', () => {
      (getBrowser as jest.Mock).mockReturnValue({ os: 'Android' });
      expect(isIOS()).toBe(false);
    });
  });
});

describe('Date Utils', () => {
  describe('toDate()', () => {
    it('should convert protobuf Timestamp to Date', () => {
      const mockTimestamp = {
        getSeconds: () => 1706198400, // 2024-01-25 12:00:00 UTC
        getNanos: () => 0,
      };

      const result = toDate(mockTimestamp as any);

      expect(result).toBeInstanceOf(Date);
      expect(result.getUTCFullYear()).toBe(2024);
      expect(result.getUTCMonth()).toBe(0); // January
      expect(result.getUTCDate()).toBe(25);
    });

    it('should handle nanoseconds', () => {
      const mockTimestamp = {
        getSeconds: () => 1706198400,
        getNanos: () => 500000000, // 0.5 seconds
      };

      const result = toDate(mockTimestamp as any);

      expect(result).toBeInstanceOf(Date);
    });

    it('should handle zero timestamp', () => {
      const mockTimestamp = {
        getSeconds: () => 0,
        getNanos: () => 0,
      };

      const result = toDate(mockTimestamp as any);

      expect(result).toBeInstanceOf(Date);
      expect(result.getTime()).toBe(0);
    });
  });

  describe('toHumanReadableDate()', () => {
    it('should format date in human readable format', () => {
      const mockTimestamp = {
        getSeconds: () => 1706198400,
        getNanos: () => 0,
      };

      const result = toHumanReadableDate(mockTimestamp as any);

      expect(typeof result).toBe('string');
      expect(result).toContain('2024');
      expect(result).toContain('Jan');
    });
  });
});

// ---------------------------------------------------------------------------
// hasFullWebRTCAudioSupport()
// ---------------------------------------------------------------------------

describe('hasFullWebRTCAudioSupport()', () => {
  const originalRTCPeerConnection = (global as any).RTCPeerConnection;
  const originalAudioContext = (window as any).AudioContext;
  const originalWebkitAudioContext = (window as any).webkitAudioContext;

  afterEach(() => {
    // Restore globals modified per-test
    if (originalRTCPeerConnection !== undefined) {
      (global as any).RTCPeerConnection = originalRTCPeerConnection;
    } else {
      delete (global as any).RTCPeerConnection;
    }
    if (originalAudioContext !== undefined) {
      (window as any).AudioContext = originalAudioContext;
    } else {
      delete (window as any).AudioContext;
    }
    if (originalWebkitAudioContext !== undefined) {
      (window as any).webkitAudioContext = originalWebkitAudioContext;
    } else {
      delete (window as any).webkitAudioContext;
    }
  });

  it('returns false when RTCPeerConnection is not available', () => {
    delete (global as any).RTCPeerConnection;
    expect(hasFullWebRTCAudioSupport()).toBe(false);
  });

  it('returns true when RTCPeerConnection and AudioContext are both available', () => {
    (global as any).RTCPeerConnection = jest.fn();
    // AudioContext is set in setup.ts via MockAudioContext
    expect(hasFullWebRTCAudioSupport()).toBe(true);
  });

  /**
   * BUG FIX: Safari < 14.1 only exposes webkitAudioContext, not the
   * standard AudioContext.  The old check returned false for these browsers,
   * causing consumers to incorrectly block the SDK.
   *
   * The fix adds a webkitAudioContext fallback so the function returns true
   * on Safari 13 / iOS 14.0 where the SDK actually works.
   */
  it('returns true when only webkitAudioContext is available (Safari < 14.1)', () => {
    (global as any).RTCPeerConnection = jest.fn();
    delete (window as any).AudioContext;
    (window as any).webkitAudioContext = jest.fn();

    expect(hasFullWebRTCAudioSupport()).toBe(true);
  });

  it('returns false when neither AudioContext nor webkitAudioContext is available', () => {
    (global as any).RTCPeerConnection = jest.fn();
    // setup.ts defines AudioContext via Object.defineProperty without configurable:true,
    // so delete fails silently.  Use assignment to undefined instead — the property
    // was created with writable:true so assignment works.
    (window as any).AudioContext = undefined;
    (window as any).webkitAudioContext = undefined;

    expect(hasFullWebRTCAudioSupport()).toBe(false);
  });

  it('returns false when getUserMedia is not available', () => {
    (global as any).RTCPeerConnection = jest.fn();
    const originalGetUserMedia = navigator.mediaDevices.getUserMedia;
    // @ts-ignore
    delete navigator.mediaDevices.getUserMedia;

    expect(hasFullWebRTCAudioSupport()).toBe(false);

    (navigator.mediaDevices as any).getUserMedia = originalGetUserMedia;
  });
});
