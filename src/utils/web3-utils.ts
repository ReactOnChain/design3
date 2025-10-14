'use client';

// Define window.ethereum interface
declare global {
  interface Window {
    // Use a readonly property to prevent accidental writes
    readonly ethereum?: {
      isMetaMask?: boolean;
      selectedAddress?: string[];
      request?: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on?: (event: string, callback: (...args: unknown[]) => void) => void;
      removeListener?: (event: string, callback: (...args: unknown[]) => void) => void;
      // Add any other properties that might be needed
    };
  }
}

// Check if MetaMask or other Web3 provider is available (safely)
export const isWeb3Available = (): boolean => {
  // Check if running in browser context
  if (typeof window === 'undefined') return false;
  
  // Use try-catch to handle any property access errors
  try {
    return Boolean(window.ethereum);
  } catch (error) {
    console.error('Error accessing window.ethereum:', error);
    return false;
  }
};

// Safely check MetaMask connection status
export const getWeb3Status = (): { available: boolean; connected: boolean } => {
  try {
    if (typeof window === 'undefined') {
      return { available: false, connected: false };
    }
    
    // Use optional chaining to safely access ethereum properties
    const available = Boolean(window?.ethereum);
    const connected = available && Array.isArray(window?.ethereum?.selectedAddress);
    
    return { available, connected };
  } catch (error) {
    console.error('Error checking Web3 status:', error);
    return { available: false, connected: false };
  }
}; 