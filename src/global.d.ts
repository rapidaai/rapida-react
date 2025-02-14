export {};
/**
 * Extends the global Window interface to include Electron-specific properties.
 */
declare global {
  interface Window {
    /**
     * Indicates whether the current environment is Electron.
     * This property is typically set by Electron at runtime.
     */
    isElectron?: boolean;
  }
}
