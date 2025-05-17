/**
 *
 * @param b
 * @returns
 */
export function arrayBufferToBase64(b: ArrayBufferLike) {
  const buffer = new Uint8Array(b);
  // @ts-ignore
  const base64Data = window.btoa(String.fromCharCode(...buffer));
  return base64Data;
}

/**
 *
 * @param base64
 * @returns
 */
export function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

/**
 *
 * @param float32Array
 * @returns
 */
export function floatTo16BitPCM(float32Array) {
  const buffer = new ArrayBuffer(float32Array.length * 2);
  const view = new DataView(buffer);
  let offset = 0;
  for (let i = 0; i < float32Array.length; i++, offset += 2) {
    let s = Math.max(-1, Math.min(1, float32Array[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return buffer;
}

/**
 * Converts an ArrayBuffer, Int16Array or Float32Array to a base64 string
 * @param {ArrayBuffer|Int16Array|Float32Array} arrayBuffer
 * @returns {string}
 */
export function arrayBufferToUint8(arrayBuffer) {
  if (arrayBuffer instanceof Float32Array) {
    arrayBuffer = floatTo16BitPCM(arrayBuffer);
  } else if (arrayBuffer instanceof Int16Array) {
    arrayBuffer = arrayBuffer.buffer;
  }
  return new Uint8Array(arrayBuffer);
}
