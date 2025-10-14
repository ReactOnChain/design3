'use client';

import Image from "next/image";
import Link from "next/link";
import { rebrands, getSectorOptions, SortOption } from "../data/rebrands";
import { useState, useEffect, useMemo } from "react";
import SubmitModal from "../components/SubmitModal";
import { designSystems } from "../data/designSystems";
import DesignSystemsGrid from "../components/DesignSystemsGrid";

type TabType = 'rebrands' | 'design-systems';

export default function Home() {
  // Client-side state
  const [activeTab, setActiveTab] = useState<TabType>('rebrands');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [sectorOptions, setSectorOptions] = useState<string[]>(['All']);

  // Set isMounted to true when component mounts
  useEffect(() => {
    setIsMounted(true);
    setSectorOptions(getSectorOptions());
  }, []);

  // Filter and sort rebrands
  const filteredRebrands = useMemo(() => {
    let result = [...rebrands];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(rebrand => 
        rebrand.name.toLowerCase().includes(query) || 
        rebrand.description.toLowerCase().includes(query) ||
        rebrand.sector.toLowerCase().includes(query)
      );
    }
    
    // Filter by sector
    if (selectedSector !== 'All') {
      result = result.filter(rebrand => rebrand.sector === selectedSector);
    }
    
    // Sort
    switch (sortOption) {
      case 'newest':
        result.sort((a, b) => b.year - a.year);
        break;
      case 'oldest':
        result.sort((a, b) => a.year - b.year);
        break;
      case 'a-z':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'z-a':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
    
    return result;
  }, [searchQuery, selectedSector, sortOption]);

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
          <div className="mb-8">
            <div className="inline-flex items-center px-2 py-1 bg-[#AB9FF2]/10 rounded-md text-[#AB9FF2] text-xs mb-4">
              <a href="https://twitter.com/HarveyWodos" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Built By @HarveyWodos
              </a>
            </div>
            <h1 className="text-4xl font-medium mb-4">
            Showcasing the Best in Web3 Design
            </h1>
            <p className="text-[#8a8a8a] max-w-2xl">
            Explore the rebrands, UI, and visuals that shaped Web3.
            Then submit the ones that inspired you.
            </p>
          </div>

          <div className="flex space-x-2 mb-8">
            <button
              onClick={() => setActiveTab('rebrands')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'rebrands'
                  ? 'bg-[#AB9FF2] text-black'
                  : 'bg-[#181818] border border-[#333] hover:border-[#AB9FF2]'
              }`}
            >
              Rebrands
            </button>
            <button
              onClick={() => setActiveTab('design-systems')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'design-systems'
                  ? 'bg-[#AB9FF2] text-black'
                  : 'bg-[#181818] border border-[#333] hover:border-[#AB9FF2]'
              }`}
            >
              Design Systems
            </button>
          </div>

          {activeTab === 'rebrands' && (
            <div id="featured" className="mb-16">
              <h2 className="text-2xl font-medium mb-6">design3 Rebrands</h2>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search rebrand..." 
                    className="bg-[#181818] border border-[#333] rounded-lg py-2 pl-10 pr-4 text-sm min-w-[200px] w-full sm:w-[200px] focus:outline-none focus:ring-1 focus:ring-[#AB9FF2]"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="flex space-x-2 w-full sm:w-auto">
                  <div className="relative">
                    <button 
                      className="flex items-center space-x-1 bg-[#181818] border border-[#333] rounded-lg px-3 py-1.5 text-sm w-full sm:w-auto"
                      onClick={() => {
                        setShowFilterDropdown(!showFilterDropdown);
                        setShowSortDropdown(false);
                      }}
                    >
                      <span>Filter by {selectedSector !== 'All' ? selectedSector : ''}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="21" y1="6" x2="3" y2="6"></line>
                        <line x1="17" y1="12" x2="3" y2="12"></line>
                        <line x1="13" y1="18" x2="3" y2="18"></line>
                      </svg>
                    </button>
                    {showFilterDropdown && (
                      <div className="absolute z-10 mt-1 bg-[#181818] border border-[#333] rounded-lg shadow-lg py-2 w-48 right-0 max-h-60 overflow-y-auto">
                        {sectorOptions.map(sector => (
                          <button
                            key={sector}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-[#242424] ${selectedSector === sector ? 'text-[#AB9FF2]' : ''}`}
                            onClick={() => {
                              setSelectedSector(sector);
                              setShowFilterDropdown(false);
                            }}
                          >
                            {sector}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="relative">
                    <button 
                      className="flex items-center space-x-1 bg-[#181818] border border-[#333] rounded-lg px-3 py-1.5 text-sm w-full sm:w-auto"
                      onClick={() => {
                        setShowSortDropdown(!showSortDropdown);
                        setShowFilterDropdown(false);
                      }}
                    >
                      <span>Sort by</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    {showSortDropdown && (
                      <div className="absolute z-10 mt-1 bg-[#181818] border border-[#333] rounded-lg shadow-lg py-2 w-48 right-0">
                        <button
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-[#242424] ${sortOption === 'newest' ? 'text-[#AB9FF2]' : ''}`}
                          onClick={() => {
                            setSortOption('newest');
                            setShowSortDropdown(false);
                          }}
                        >
                          Newest First
                        </button>
                        <button
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-[#242424] ${sortOption === 'oldest' ? 'text-[#AB9FF2]' : ''}`}
                          onClick={() => {
                            setSortOption('oldest');
                            setShowSortDropdown(false);
                          }}
                        >
                          Oldest First
                        </button>
                        <button
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-[#242424] ${sortOption === 'a-z' ? 'text-[#AB9FF2]' : ''}`}
                          onClick={() => {
                            setSortOption('a-z');
                            setShowSortDropdown(false);
                          }}
                        >
                          Name (A-Z)
                        </button>
                        <button
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-[#242424] ${sortOption === 'z-a' ? 'text-[#AB9FF2]' : ''}`}
                          onClick={() => {
                            setSortOption('z-a');
                            setShowSortDropdown(false);
                          }}
                        >
                          Name (Z-A)
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Results count and reset filters */}
              {(searchQuery || selectedSector !== 'All' || sortOption !== 'newest') && (
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-[#8a8a8a]">
                    Found {filteredRebrands.length} result{filteredRebrands.length !== 1 ? 's' : ''}
                  </div>
                  <button 
                    className="text-sm text-[#AB9FF2] hover:underline"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedSector('All');
                      setSortOption('newest');
                    }}
                  >
                    Reset filters
                  </button>
                </div>
              )}

              {filteredRebrands.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRebrands.map((rebrand) => (
                    <Link href={`/rebrands/${rebrand.id}`} key={rebrand.id} className="group">
                      <div className="bg-[#181818] rounded-xl overflow-hidden border border-[#333] transition-all duration-300 hover:border-[#AB9FF2]/50 hover:shadow-[0_0_20px_rgba(171,159,242,0.1)]">
                        <div className="aspect-video bg-[#AB9FF2]/10 flex items-center justify-center p-6 md:p-8">
                          <div className="relative w-full h-full max-w-36 max-h-24 md:max-w-40 md:max-h-28">
                            {rebrand.logo && (
                              <Image
                                src={rebrand.logo} 
                                alt={`${rebrand.name} logo`} 
                                fill
                                style={{ objectFit: 'contain' }}
                                className="drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 144px, 160px"
                              />
                            )}
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-medium">{rebrand.name}</h3>
                            <span className="text-xs text-[#8a8a8a]">{rebrand.year}</span>
                          </div>
                          <p className="text-sm text-[#8a8a8a] line-clamp-2">{rebrand.description}</p>
                          <div className="mt-2">
                            <span className="inline-block text-xs bg-[#242424] text-[#AB9FF2] px-2 py-0.5 rounded mr-1 mb-1">
                              {rebrand.sector}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="bg-[#181818] rounded-xl p-8 text-center border border-[#333]">
                  <p className="text-lg mb-2">No rebrands found</p>
                  <p className="text-sm text-[#8a8a8a]">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          )}

          

          {activeTab === 'design-systems' && (
            <div className="mb-16">
              <h2 className="text-2xl font-medium mb-6">Design Systems</h2>
              <DesignSystemsGrid designSystems={designSystems} />
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-[#333] mt-16 py-8 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mt-8 text-xs text-[#8a8a8a] flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>© {new Date().getFullYear()} design3</p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-[#AB9FF2] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#AB9FF2] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Only render on client side after hydration */}
      {(showSortDropdown || showFilterDropdown) && isMounted && (
        <div 
          className="fixed inset-0 z-0"
          onClick={() => {
            setShowSortDropdown(false);
            setShowFilterDropdown(false);
          }}
        />
      )}
      
      {/* Only render modal on client side after hydration */}
      {isMounted && (
        <SubmitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
