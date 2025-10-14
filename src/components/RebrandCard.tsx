'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Rebrand } from '@/data/rebrands';

interface RebrandCardProps {
  rebrand: Rebrand;
}

export default function RebrandCard({ rebrand }: RebrandCardProps) {
  return (
    <Link
      href={`/rebrands/${rebrand.id}`}
      className="group relative overflow-hidden rounded-lg bg-[#AB9FF2]/5 p-4 transition-all duration-300 hover:bg-[#AB9FF2]/10"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-md">
        <Image
          src={rebrand.logo}
          alt={rebrand.name}
          width={800}
          height={450}
          className="h-full w-full object-contain"
        />
      </div>
      
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{rebrand.name}</h3>
          <span className="text-sm text-gray-400">{rebrand.year}</span>
        </div>
        <p className="mt-1 text-sm text-gray-400 line-clamp-2">{rebrand.description}</p>
        <div className="mt-2">
          <span className="rounded-full bg-[#AB9FF2]/10 px-2 py-1 text-xs text-[#AB9FF2]">
            {rebrand.sector}
          </span>
        </div>
      </div>
    </Link>
  );
} 