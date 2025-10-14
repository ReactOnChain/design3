'use client';

import { useRef } from 'react';
import { UIComponent } from '@/data/components';

interface ComponentCardProps {
  component: UIComponent;
}

export default function ComponentCard({ component }: ComponentCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    window.open(component.sourceUrl, '_blank');
  };

  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-[#AB9FF2]/5 p-4 transition-all duration-300 hover:bg-[#AB9FF2]/10 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-md">
        <video
          ref={videoRef}
          src={component.videoUrl}
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white">{component.name}</h3>
        <p className="mt-1 text-sm text-gray-400">{component.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {component.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#AB9FF2]/10 px-2 py-1 text-xs text-[#AB9FF2]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 