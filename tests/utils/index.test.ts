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
