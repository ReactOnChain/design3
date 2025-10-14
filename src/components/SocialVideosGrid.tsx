'use client';

import { SocialVideo } from "../data/socialVideos";
import Image from "next/image";

interface SocialVideosGridProps {
  videos: SocialVideo[];
}

export default function SocialVideosGrid({ videos }: SocialVideosGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videos.map((video) => (
        <div
          key={video.id}
          className="bg-[#181818] rounded-xl overflow-hidden border border-[#333] transition-all duration-300 hover:border-[#AB9FF2]/50 hover:shadow-[0_0_20px_rgba(171,159,242,0.1)] group"
        >
          {/* Video Thumbnail */}
          <div className="relative aspect-video bg-[#AB9FF2]/5 overflow-hidden">
            <Image
              src={video.thumbnailUrl}
              alt={`${video.title} thumbnail`}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            {/* Year badge */}
            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-md px-2 py-1">
              <span className="text-xs text-white font-medium">{video.year}</span>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-5">
            <div className="mb-3">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-white text-lg leading-tight">{video.title}</h3>
              </div>
              {video.author && (
                <p className="text-sm text-[#AB9FF2] mb-2">by {video.author}</p>
              )}
              <p className="text-sm text-gray-400 leading-relaxed">{video.description}</p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {video.categories.map((category) => (
                <span
                  key={category}
                  className="inline-block text-xs bg-[#242424] text-[#AB9FF2] px-2 py-1 rounded-md"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <a
              href={video.tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-[#AB9FF2] hover:bg-[#9A8CE0] text-black font-medium text-sm px-4 py-2.5 rounded-lg transition-colors duration-300"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="mr-2"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Watch on Twitter
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