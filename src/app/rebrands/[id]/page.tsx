import { notFound } from "next/navigation";
import { rebrands } from "../../../data/rebrands";
import RebrandClientWrapper from "../../../components/RebrandClientWrapper";
import { Metadata } from 'next';
import type { ResolvingMetadata } from 'next';

interface RouteParams {
  id: string;
}

interface PageProps {
  params: Promise<RouteParams>;
}

export function generateStaticParams() {
  return rebrands.map((rebrand) => ({
    id: rebrand.id,
  }));
}

// Generate dynamic metadata for the rebrand page based on its ID
export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;

  const rebrand = rebrands.find(r => r.id === id);
  
  if (!rebrand) {
    await parent;
    return {};
  }

  const keywords = [
    rebrand.name, 
    'rebrand', 
    rebrand.sector, 
    'web3 design', 
    'blockchain design',
    'brand identity'
  ];

  if (rebrand.oldName) keywords.push(rebrand.oldName);
  if (rebrand.newName) keywords.push(rebrand.newName);

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

export default async function RebrandDetail({ params }: PageProps) {
  const { id } = await params;

  const rebrand = rebrands.find((r) => r.id === id);

  if (!rebrand) {
    notFound();
  }

  return <RebrandClientWrapper rebrand={rebrand} />;
} 