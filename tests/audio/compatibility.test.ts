/**
 * Tests for audio compatibility utilities
 */

// We need to test the compatibility module
// Let's first check what it exports
import { isAndroidDevice, isIosDevice } from '@/rapida/audio/compatibility';

describe('Audio Compatibility Utils', () => {
  const originalNavigator = window.navigator;
  const originalUserAgent = window.navigator.userAgent;

  beforeEach(() => {
    // Reset navigator.userAgent for each test
    Object.defineProperty(window.navigator, 'userAgent', {
      value: originalUserAgent,
      writable: true,
      configurable: true,
    });
  });

  afterAll(() => {
    // Restore original navigator
    Object.defineProperty(window, 'navigator', {
      value: originalNavigator,
      writable: true,
    });
  });

  describe('isAndroidDevice()', () => {
    it('should return true for Android user agent', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36',
        configurable: true,
      });

      expect(isAndroidDevice()).toBe(true);
    });

    it('should return false for iOS user agent', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)',
        configurable: true,
      });

      expect(isAndroidDevice()).toBe(false);
    });

    it('should return false for desktop user agent', () => {
      Object.defineProperty(window.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
        configurable: true,
      });

      expect(isAndroidDevice()).toBe(false);
    });
  });

  describe('isIosDevice()', () => {
    it('should return true for iPhone platform', () => {
      Object.defineProperty(window.navigator, 'platform', {
        value: 'iPhone',
        configurable: true,
      });

      expect(isIosDevice()).toBe(true);
    });

    it('should return true for iPad platform', () => {
      Object.defineProperty(window.navigator, 'platform', {
        value: 'iPad',
        configurable: true,
      });

      expect(isIosDevice()).toBe(true);
    });

    it('should return false for Android platform', () => {
      Object.defineProperty(window.navigator, 'platform', {
        value: 'Linux armv8l',
        configurable: true,
      });

      expect(isIosDevice()).toBe(false);
    });

    it('should return false for desktop platform', () => {
      Object.defineProperty(window.navigator, 'platform', {
        value: 'Win32',
        configurable: true,
      });

      expect(isIosDevice()).toBe(false);
    });
  });
});
