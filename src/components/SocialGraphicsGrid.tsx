'use client';

import { useState } from "react";
import { SocialGraphic } from "../data/socialGraphics";
import Image from "next/image";

interface SocialGraphicsGridProps {
  graphics: SocialGraphic[];
}

export default function SocialGraphicsGrid({ graphics }: SocialGraphicsGridProps) {
  // Track loaded images to apply custom sizing
  const [loadedImages, setLoadedImages] = useState<Record<string, { width: number, height: number }>>({});

  const handleImageLoad = (id: string, event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    if (img.naturalWidth && img.naturalHeight) {
      setLoadedImages(prev => ({
        ...prev,
        [id]: { width: img.naturalWidth, height: img.naturalHeight }
      }));
    }
  };

  return (
    <div className="masonry-container">
      {graphics.map((graphic) => (
        <div className="masonry-item" key={graphic.id}>
          <a
            href={graphic.tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#181818] rounded-xl overflow-hidden border border-[#333] transition-all duration-300 hover:border-[#AB9FF2]/50 hover:shadow-[0_0_20px_rgba(171,159,242,0.1)] group block flex flex-col h-full"
          >
            <div className="relative overflow-hidden flex-shrink-0">
              <div className="relative w-full" style={{ 
                paddingTop: loadedImages[graphic.id] ? 
                  `${(loadedImages[graphic.id].height / loadedImages[graphic.id].width) * 100}%` : 
                  '56.25%' // Default 16:9 aspect ratio
              }}>
                <Image
                  src={graphic.imageUrl}
                  alt={graphic.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                  onLoad={(e) => handleImageLoad(graphic.id, e)}
                  priority
                />
                <div className="absolute top-3 right-3 bg-black/70 rounded-full p-1.5 z-10">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="#1DA1F2"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4 flex-grow">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-white">{graphic.title}</h3>
                <span className="text-xs text-[#8a8a8a]">{graphic.year}</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">{graphic.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {graphic.categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full bg-[#AB9FF2]/10 px-2 py-1 text-xs text-[#AB9FF2]"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>
      ))}

      {/* CSS for True Masonry Layout */}
      <style jsx global>{`
        .masonry-container {
          column-count: 1;
          column-gap: 1.5rem;
          width: 100%;
        }
        
        @media (min-width: 768px) {
          .masonry-container {
            column-count: 2;
          }
        }
        
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1.5rem;
          display: inline-block;
          width: 100%;
        }
      `}</style>
    </div>
  );
} 