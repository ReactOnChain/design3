'use client';

import { ReactNode } from 'react';
import { useWalletSafety } from '../hooks/useWalletSafety';

interface WalletSafetyProviderProps {
  children: ReactNode;
}

/**
 * Client component that applies wallet safety measures to prevent
 * conflicts with wallet browser extensions like MetaMask
 */
export default function WalletSafetyProvider({ children }: WalletSafetyProviderProps) {
  // Initialize wallet safety measures
  useWalletSafety();
  
  // Just render children, the hook handles the safety internally
  return <>{children}</>;
} 