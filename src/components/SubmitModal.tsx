'use client';

import { useEffect, useRef } from 'react';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubmitModal({ isOpen, onClose }: SubmitModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-[#181818] border border-[#333] rounded-xl p-6 max-w-md w-full animate-fade-in"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Submit a Rebrand</h2>
          <button 
            onClick={onClose}
            className="text-[#8a8a8a] hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-[#ededed] mb-4">
            Have a suggestion for a Web3 rebrand that should be featured? Please contact us on Twitter/X!
          </p>
          
          <div className="bg-[#242424] p-4 rounded-lg flex items-center mb-4">
            <div className="mr-3 text-xl">𝕏</div>
            <div>
              <p className="font-medium">DM or tag me on Twitter/X</p>
              <p className="text-sm text-[#8a8a8a]">@HarveyWoods</p>
            </div>
          </div>
          
          <p className="text-sm text-[#8a8a8a]">
            Please include the name of the project, relevant links, and why you think this rebrand stands out in the Web3 space.
          </p>
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#AB9FF2] text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-[#9A8CE0] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
} 