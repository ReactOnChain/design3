'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import SubmitModal from "./SubmitModal";
import { Rebrand, rebrands } from "../data/rebrands";

interface RebrandClientWrapperProps {
  rebrand: Rebrand;
}

export default function RebrandClientWrapper({ rebrand }: RebrandClientWrapperProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true when component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-[family-name:var(--font-geist-sans)]">
      <header className="pt-6 px-4 md:px-8 border-b border-[#333] pb-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-lg font-medium">design3</Link>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => isMounted && setIsModalOpen(true)}
              className="bg-[#181818] border border-[#333] rounded-lg px-3 py-1.5 text-sm hover:border-[#AB9FF2] transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </header>

      <main className="px-4 md:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-sm text-[#8a8a8a] hover:text-[#AB9FF2]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to all rebrands
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center px-2 py-1 bg-[#AB9FF2]/10 rounded-md text-[#AB9FF2] text-xs mb-4">
                  {rebrand.sector}
                </div>
                <h1 className="text-3xl font-medium mb-3">{rebrand.name}</h1>
                <p className="text-[#8a8a8a]">{rebrand.description}</p>
              </div>

              <div className="mb-8">
                <div className="grid grid-cols-2 gap-6">
                  {rebrand.oldName && (
                    <div>
                      <h3 className="text-sm text-[#8a8a8a] mb-1">Old Name</h3>
                      <p className="font-medium">{rebrand.oldName}</p>
                    </div>
                  )}
                  {rebrand.newName && (
                    <div>
                      <h3 className="text-sm text-[#8a8a8a] mb-1">New Name</h3>
                      <p className="font-medium">{rebrand.newName}</p>
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm text-[#8a8a8a] mb-1">Year</h3>
                    <p className="font-medium">{rebrand.year}</p>
                  </div>
                  {rebrand.designAgency && (
                    <div>
                      <h3 className="text-sm text-[#8a8a8a] mb-1">Design Agency</h3>
                      <p className="font-medium">{rebrand.designAgency}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Brand Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {rebrand.colors.map((color, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="w-12 h-12 rounded-md border border-[#333]"
                        style={{ backgroundColor: color }}
                      ></div>
                      <span className="text-xs mt-1 text-[#8a8a8a]">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8 flex flex-wrap gap-3">
                {rebrand.caseStudyUrl && (
                  <a
                    href={rebrand.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-[#AB9FF2] text-black rounded-md font-medium text-sm hover:bg-[#9A8CE0] transition-colors"
                  >
                    View Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                )}
                
                {rebrand.announcementTweet && (
                  <a
                    href={rebrand.announcementTweet}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#181818] border border-[#333] rounded-lg px-3 py-1.5 text-sm hover:border-[#AB9FF2] transition-colors inline-flex items-center"
                  >
                    Announcement
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-2">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <div>
              <div className="bg-[#181818] rounded-xl p-6 border border-[#333]">
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Before & After</h3>
                  <div className="space-y-6">
                    {rebrand.afterImage && (
                      <div>
                        <h4 className="text-sm text-[#8a8a8a] mb-2">After</h4>
                        <div className="aspect-video bg-[#AB9FF2]/5 rounded-md flex items-center justify-center p-8">
                          <div className="w-full h-full relative">
                            <Image 
                              src={rebrand.afterImage} 
                              alt={`${rebrand.name} after rebrand`} 
                              fill
                              style={{ objectFit: 'contain' }}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {rebrand.beforeImage && (
                      <div>
                        <h4 className="text-sm text-[#8a8a8a] mb-2">Before</h4>
                        <div className="aspect-video bg-[#AB9FF2]/5 rounded-md flex items-center justify-center p-8">
                          <div className="w-full h-full relative">
                            <Image 
                              src={rebrand.beforeImage} 
                              alt={`${rebrand.name} before rebrand`} 
                              fill
                              style={{ objectFit: 'contain' }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-xl font-medium mb-6">More Rebrands</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rebrands
                .filter((r) => r.id !== rebrand.id)
                .slice(0, 3)
                .map((relatedRebrand) => (
                  <Link href={`/rebrands/${relatedRebrand.id}`} key={relatedRebrand.id} className="group">
                    <div className="bg-[#181818] rounded-xl overflow-hidden border border-[#333] transition-all duration-300 hover:border-[#AB9FF2]/50 hover:shadow-[0_0_20px_rgba(171,159,242,0.1)]">
                      <div className="aspect-video bg-[#AB9FF2]/10 flex items-center justify-center p-6 md:p-8">
                        <div className="relative w-full h-full max-w-32 max-h-20 md:max-w-36 md:max-h-24">
                          {relatedRebrand.logo && (
                            <Image 
                              src={relatedRebrand.logo} 
                              alt={`${relatedRebrand.name} logo`} 
                              fill
                              style={{ objectFit: 'contain' }}
                              className="drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 768px) 128px, 144px"
                            />
                          )}
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium">{relatedRebrand.name}</h3>
                          <span className="text-xs text-[#8a8a8a]">{relatedRebrand.year}</span>
                        </div>
                        <p className="text-sm text-[#8a8a8a] line-clamp-2">{relatedRebrand.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-[#333] mt-16 py-8 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-sm font-medium mb-3">Sections</h4>
              <ul className="space-y-2 text-sm text-[#8a8a8a]">
                <li><Link href="/" className="hover:text-[#AB9FF2] transition-colors">Rebrands</Link></li>
                <li><Link href="/#categories" className="hover:text-[#AB9FF2] transition-colors">Categories</Link></li>
                <li><Link href="/#featured" className="hover:text-[#AB9FF2] transition-colors">Featured</Link></li>
                <li><button onClick={() => isMounted && setIsModalOpen(true)} className="hover:text-[#AB9FF2] transition-colors">Submit</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-[#8a8a8a]">
                <li><Link href="/#about" className="hover:text-[#AB9FF2] transition-colors">About</Link></li>
                <li><Link href="/#blog" className="hover:text-[#AB9FF2] transition-colors">Blog</Link></li>
                <li><Link href="/#newsletter" className="hover:text-[#AB9FF2] transition-colors">Newsletter</Link></li>
                <li><Link href="/#contact" className="hover:text-[#AB9FF2] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">Filter by</h4>
              <ul className="space-y-2 text-sm text-[#8a8a8a]">
                <li><Link href="/?sector=DeFi" className="hover:text-[#AB9FF2] transition-colors">DeFi</Link></li>
                <li><Link href="/?sector=Wallet" className="hover:text-[#AB9FF2] transition-colors">Wallet</Link></li>
                <li><Link href="/?sector=Layer%201" className="hover:text-[#AB9FF2] transition-colors">Layer 1</Link></li>
                <li><Link href="/?sector=NFT" className="hover:text-[#AB9FF2] transition-colors">NFT</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-3">Follow us</h4>
              <ul className="space-y-2 text-sm text-[#8a8a8a]">
                <li><a href="https://twitter.com/design3xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[#AB9FF2] transition-colors">Twitter</a></li>
                <li><a href="https://discord.gg/design3xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[#AB9FF2] transition-colors">Discord</a></li>
                <li><a href="https://github.com/design3xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[#AB9FF2] transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-xs text-[#8a8a8a] flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>© {new Date().getFullYear()} design3</p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-[#AB9FF2] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#AB9FF2] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {isMounted && (
        <SubmitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
} 