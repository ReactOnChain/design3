'use client';

import { DesignSystem } from "../data/designSystems";
import Image from "next/image";

interface DesignSystemsGridProps {
  designSystems: DesignSystem[];
}

export default function DesignSystemsGrid({ designSystems }: DesignSystemsGridProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'live':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="12 6v12M6 12h12"/>
          </svg>
        );
      case 'figma':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12.001 18v-4.668h3.331a3.333 3.333 0 0 0 0-6.664z"/>
            <circle cx="15.332" cy="12" r="3.332"/>
          </svg>
        );
      case 'figma-profile':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'live':
        return 'Live Site';
      case 'figma':
        return 'Figma File';
      case 'figma-profile':
        return 'Figma Profile';
      default:
        return type;
    }
  };

  const getButtonText = (type: string) => {
    switch (type) {
      case 'live':
        return 'Visit Design System';
      case 'figma':
        return 'Open in Figma';
      case 'figma-profile':
        return 'View Profile';
      default:
        return 'View Resource';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {designSystems.map((system) => (
        <div
          key={system.id}
          className="bg-[#181818] rounded-xl overflow-hidden border border-[#333] transition-all duration-300 hover:border-[#AB9FF2]/50 hover:shadow-[0_0_20px_rgba(171,159,242,0.1)] group"
        >
          {/* Thumbnail */}
          <div className="relative aspect-video bg-[#AB9FF2]/5 overflow-hidden">
            <Image
              src={system.thumbnailUrl}
              alt={`${system.name} preview`}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Type badge */}
            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-md px-2 py-1 flex items-center gap-1">
              <span className="text-white opacity-70">{getTypeIcon(system.type)}</span>
              <span className="text-xs text-white font-medium">{getTypeLabel(system.type)}</span>
            </div>
            {/* Year badge */}
            {system.year && (
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm rounded-md px-2 py-1">
                <span className="text-xs text-white font-medium">{system.year}</span>
              </div>
            )}
          </div>

          {/* Card Content */}
          <div className="p-5">
            <div className="mb-3">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-white text-lg leading-tight">{system.name}</h3>
              </div>
              <p className="text-sm text-[#AB9FF2] mb-2">by {system.organization}</p>
              <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">{system.description}</p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {system.categories.slice(0, 3).map((category) => (
                <span
                  key={category}
                  className="inline-block text-xs bg-[#242424] text-[#AB9FF2] px-2 py-1 rounded-md"
                >
                  {category}
                </span>
              ))}
              {system.categories.length > 3 && (
                <span className="inline-block text-xs bg-[#242424] text-gray-400 px-2 py-1 rounded-md">
                  +{system.categories.length - 3}
                </span>
              )}
            </div>

            {/* Action Button */}
            <a
              href={system.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-[#AB9FF2] hover:bg-[#9A8CE0] text-black font-medium text-sm px-4 py-2.5 rounded-lg transition-colors duration-300"
            >
              {getTypeIcon(system.type) && (
                <span className="mr-2">{getTypeIcon(system.type)}</span>
              )}
              {getButtonText(system.type)}
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
} 