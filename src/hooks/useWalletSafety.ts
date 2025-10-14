import { useEffect } from 'react';
import { preventWalletConflicts } from '../utils/wallet';

/**
 * A hook that initializes wallet safety measures to prevent extension conflicts
 */
export function useWalletSafety(): void {
  useEffect(() => {
    // Prevent wallet conflicts as soon as possible on client-side
    if (typeof window !== 'undefined') {
      preventWalletConflicts();
    }
  }, []);
} 