/**
 * Tests for audio utility functions
 */

import {
  arrayBufferToUint8,
  arrayBufferToBase64,
  base64ToArrayBuffer,
  floatTo16BitPCM,
} from '@/rapida/audio/audio';

describe('Audio Utils', () => {
  describe('arrayBufferToUint8()', () => {
    it('should convert ArrayBuffer to Uint8Array', () => {
      const buffer = new ArrayBuffer(4);
      const view = new Uint8Array(buffer);
      view[0] = 1;
      view[1] = 2;
      view[2] = 3;
      view[3] = 4;

      const result = arrayBufferToUint8(buffer);

      expect(result).toBeInstanceOf(Uint8Array);
      expect(result.length).toBe(4);
      expect(result[0]).toBe(1);
      expect(result[1]).toBe(2);
      expect(result[2]).toBe(3);
      expect(result[3]).toBe(4);
    });

    it('should handle empty ArrayBuffer', () => {
      const buffer = new ArrayBuffer(0);

      const result = arrayBufferToUint8(buffer);

      expect(result).toBeInstanceOf(Uint8Array);
      expect(result.length).toBe(0);
    });

    it('should handle large ArrayBuffer', () => {
      const size = 1024 * 1024; // 1MB
      const buffer = new ArrayBuffer(size);

      const result = arrayBufferToUint8(buffer);

      expect(result).toBeInstanceOf(Uint8Array);
      expect(result.length).toBe(size);
    });

    it('should preserve byte values', () => {
      const buffer = new ArrayBuffer(256);
      const view = new Uint8Array(buffer);

      // Fill with all possible byte values
      for (let i = 0; i < 256; i++) {
        view[i] = i;
      }

      const result = arrayBufferToUint8(buffer);

      for (let i = 0; i < 256; i++) {
        expect(result[i]).toBe(i);
      }
    });

    it('should convert Int16Array to Uint8Array', () => {
      const int16Array = new Int16Array([0, 32767, -32768]);

      const result = arrayBufferToUint8(int16Array);

      expect(result).toBeInstanceOf(Uint8Array);
      expect(result.length).toBe(6); // 3 int16 values = 6 bytes
    });

    it('should convert Float32Array to Uint8Array via PCM16', () => {
      const float32Array = new Float32Array([0, 0.5, -0.5, 1, -1]);

      const result = arrayBufferToUint8(float32Array);

      expect(result).toBeInstanceOf(Uint8Array);
      expect(result.length).toBe(10); // 5 float32 -> 5 int16 -> 10 bytes
    });
  });

  describe('arrayBufferToBase64()', () => {
    it('should convert ArrayBuffer to base64 string', () => {
      const buffer = new ArrayBuffer(3);
      const view = new Uint8Array(buffer);
      view[0] = 72;  // 'H'
      view[1] = 105; // 'i'
      view[2] = 33;  // '!'

      const result = arrayBufferToBase64(buffer);

      expect(typeof result).toBe('string');
      expect(result).toBe(btoa('Hi!'));
    });

    it('should handle empty buffer', () => {
      const buffer = new ArrayBuffer(0);

      const result = arrayBufferToBase64(buffer);

      expect(result).toBe('');
    });
  });

  describe('base64ToArrayBuffer()', () => {
    it('should convert base64 string to ArrayBuffer', () => {
      const base64 = btoa('Hello');

      const result = base64ToArrayBuffer(base64);

      expect(result).toBeInstanceOf(ArrayBuffer);
      const view = new Uint8Array(result);
      expect(String.fromCharCode(...view)).toBe('Hello');
    });

    it('should handle empty string', () => {
      const result = base64ToArrayBuffer('');

      expect(result).toBeInstanceOf(ArrayBuffer);
      expect(result.byteLength).toBe(0);
    });

    it('should roundtrip with arrayBufferToBase64', () => {
      const original = new ArrayBuffer(10);
      const view = new Uint8Array(original);
      for (let i = 0; i < 10; i++) {
        view[i] = i * 25;
      }

      const base64 = arrayBufferToBase64(original);
      const result = base64ToArrayBuffer(base64);
      const resultView = new Uint8Array(result);

      expect(resultView.length).toBe(view.length);
      for (let i = 0; i < 10; i++) {
        expect(resultView[i]).toBe(view[i]);
      }
    });
  });

  describe('floatTo16BitPCM()', () => {
    it('should convert Float32Array to 16-bit PCM ArrayBuffer', () => {
      const float32Array = new Float32Array([0, 1, -1]);

      const result = floatTo16BitPCM(float32Array);

      expect(result).toBeInstanceOf(ArrayBuffer);
      expect(result.byteLength).toBe(6); // 3 samples * 2 bytes each
    });

    it('should handle silence (zeros)', () => {
      const float32Array = new Float32Array([0, 0, 0, 0]);

      const result = floatTo16BitPCM(float32Array);
      const view = new DataView(result);

      for (let i = 0; i < 4; i++) {
        expect(view.getInt16(i * 2, true)).toBe(0);
      }
    });

    it('should clamp values outside [-1, 1] range', () => {
      const float32Array = new Float32Array([2, -2, 1.5, -1.5]);

      const result = floatTo16BitPCM(float32Array);
      const view = new DataView(result);

      // Values should be clamped to [-32768, 32767]
      expect(view.getInt16(0, true)).toBe(32767); // 2 clamped to 1
      expect(view.getInt16(2, true)).toBe(-32768); // -2 clamped to -1
    });

    it('should handle positive maximum', () => {
      const float32Array = new Float32Array([1]);

      const result = floatTo16BitPCM(float32Array);
      const view = new DataView(result);

      expect(view.getInt16(0, true)).toBe(32767);
    });

    it('should handle negative maximum', () => {
      const float32Array = new Float32Array([-1]);

      const result = floatTo16BitPCM(float32Array);
      const view = new DataView(result);

      expect(view.getInt16(0, true)).toBe(-32768);
    });
  });
});
