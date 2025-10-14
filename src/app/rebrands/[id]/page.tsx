import { notFound } from "next/navigation";
import { rebrands } from "../../../data/rebrands";
import RebrandClientWrapper from "../../../components/RebrandClientWrapper";
import { Metadata } from 'next';
import type { ResolvingMetadata } from 'next';

interface Props {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return rebrands.map((rebrand) => ({
    id: rebrand.id,
  }));
}

// Generate dynamic metadata for the rebrand page based on its ID
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Find the specific rebrand by ID
  const rebrand = rebrands.find(r => r.id === params.id);
  
  // If rebrand not found, return parent metadata
  if (!rebrand) {
    const parentMetadata = await parent;
    return parentMetadata;
  }

  // Extract keywords based on available data
  const keywords = [
    rebrand.name, 
    'rebrand', 
    rebrand.sector, 
    'web3 design', 
    'blockchain design',
    'brand identity'
  ];

  // Add oldName and newName to keywords if they exist
  if (rebrand.oldName) keywords.push(rebrand.oldName);
  if (rebrand.newName) keywords.push(rebrand.newName);

  // Build optimized metadata for this specific rebrand
  const metadata: Metadata = {
    title: `${rebrand.name} Rebrand - ${rebrand.year}`,
    description: `Explore ${rebrand.name}'s rebrand from ${rebrand.year}. ${rebrand.description} Designed by ${rebrand.designAgency || 'their design team'} in the ${rebrand.sector} sector.`,
    keywords: keywords,
    openGraph: {
      title: `${rebrand.name} Rebrand - ${rebrand.year}`,
      description: `Explore ${rebrand.name}'s rebrand from ${rebrand.year}. ${rebrand.description} Designed by ${rebrand.designAgency || 'their design team'} in the ${rebrand.sector} sector.`,
      images: [
        {
          url: rebrand.logo || `/images/rebrands/${rebrand.id}/after.png`,
          width: 1200,
          height: 630,
          alt: `${rebrand.name} logo after rebrand`
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${rebrand.name} Rebrand - ${rebrand.year}`,
      description: `Explore ${rebrand.name}'s rebrand from ${rebrand.year} in the ${rebrand.sector} sector. ${rebrand.description.substring(0, 180)}...`,
      images: [rebrand.logo || `/images/rebrands/${rebrand.id}/after.png`],
    }
  };
  
  return metadata;
}

export default function RebrandDetail({ params }: Props) {
  const rebrand = rebrands.find((r) => r.id === params.id);

  if (!rebrand) {
    notFound();
  }

  return <RebrandClientWrapper rebrand={rebrand} />;
} 