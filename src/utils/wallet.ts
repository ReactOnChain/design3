// Utility functions to safely detect and handle wallet injections
// This helps prevent conflicts between wallet extensions and our application

interface Web3Provider {
  currentProvider?: unknown;
}

/**
 * Safely checks if a wallet extension is present in the browser
 * @returns true if a wallet is detected
 */
export const isWalletDetected = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    // Check for common wallet injection points
    return (
      typeof window.ethereum !== 'undefined' || 
      typeof (window as { web3?: Web3Provider }).web3 !== 'undefined'
    );
  } catch (error) {
    console.warn('Error checking for wallet:', error);
    return false;
  }
};

/**
 * Gets the wallet provider safely
 * @returns The ethereum provider if available, or null
 */
export const getWalletProvider = () => {
  if (typeof window === 'undefined') return null;
  
  try {
    if (typeof window.ethereum !== 'undefined') {
      return window.ethereum;
    } else if (typeof (window as { web3?: Web3Provider }).web3 !== 'undefined') {
      const web3 = (window as { web3?: Web3Provider }).web3;
      return web3?.currentProvider || null;
    }
    return null;
  } catch (error) {
    console.warn('Error accessing wallet provider:', error);
    return null;
  }
};

/**
 * Prevents conflicts between wallet extensions and our application
 * This is particularly important for handling MetaMask and other Web3 wallet extensions
 * that might cause "Invalid property descriptor" errors
 */
export const preventWalletConflicts = (): void => {
  if (typeof window === 'undefined') return;

  try {
    // Create a safe reference to the original ethereum object
    const originalDescriptor = Object.getOwnPropertyDescriptor(window, 'ethereum');
    
    // Only proceed if there's a conflict potential
    if (originalDescriptor && (originalDescriptor.configurable || originalDescriptor.writable)) {
      // Store the current value safely
      const ethereumValue = window.ethereum;
      
      // Define a safer property descriptor that prevents conflicts
      Object.defineProperty(window, 'ethereum', {
        configurable: true,
        get: function() {
          return ethereumValue;
        },
        set: function(newValue) {
          // Allow the value to be set only if it's undefined
          if (typeof ethereumValue === 'undefined') {
            Object.defineProperty(window, 'ethereum', {
              configurable: true,
              writable: true,
              value: newValue
            });
          }
        }
      });
    }
  } catch (error) {
    console.warn('Error setting up wallet conflict prevention:', error);
  }
}; 