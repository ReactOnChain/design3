export interface DesignSystem {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  url: string;
  type: 'live' | 'figma' | 'figma-profile';
  organization: string;
  year?: number;
  categories: string[];
}

export const designSystems: DesignSystem[] = [
  {
    id: "degen",
    name: "Degen Design System",
    description: "Design system for Mirror.xyz built with React and vanilla-extract. A comprehensive component library with tokens, borders, colors, and typography.",
    thumbnailUrl: "/images/design-systems/Mirror.jpeg",
    url: "https://degen-xyz.vercel.app/",
    type: "live",
    organization: "Mirror",
    year: 2024,
    categories: ["React", "Components", "Typography"]
  },
  {
    id: "thorin",
    name: "Thorin (ENS Design System)",
    description: "Design system for ENS built with React. Organized according to Atomic Design Methodology with atoms, molecules, and organisms.",
    thumbnailUrl: "/images/design-systems/ENS.png",
    url: "https://thorin.ens.domains/",
    type: "live",
    organization: "ENS",
    year: 2024,
    categories: ["React", "Atomic Design", "Web3"]
  },
  {
    id: "thirdweb",
    name: "Thirdweb Design System",
    description: "Comprehensive design system for Thirdweb's Web3 development platform, featuring components and patterns for decentralized applications.",
    thumbnailUrl: "/images/design-systems/thirdweb.png",
    url: "https://www.figma.com/community/file/1436074607342792293/thirdweb-design-system",
    type: "figma",
    organization: "Thirdweb",
    year: 2024,
    categories: ["Web3", "Components", "Developer Tools"]
  },
  {
    id: "safe",
    name: "Safe Design System",
    description: "Design system for Safe multisig wallet, providing consistent UI patterns and components for secure Web3 interactions.",
    thumbnailUrl: "/images/design-systems/Safe.png",
    url: "https://www.figma.com/community/file/1337417127407098506/safe-design-system",
    type: "figma",
    organization: "Safe",
    year: 2024,
    categories: ["Wallet", "Security", "Multisig"]
  },
  {
    id: "kleros",
    name: "Kleros Design System",
    description: "Design system for Kleros decentralized arbitration protocol, featuring justice and legal-themed UI components.",
    thumbnailUrl: "/images/design-systems/Kleros.png",
    url: "https://www.figma.com/community/file/999852250110186964/kleros-design-system",
    type: "figma",
    organization: "Kleros",
    year: 2023,
    categories: ["Justice", "Arbitration", "Legal"]
  },
  {
    id: "finity",
    name: "Finity Design System",
    description: "Modern design system focused on DeFi and financial applications, providing clean and professional UI components.",
    thumbnailUrl: "/images/design-systems/Finity.png",
    url: "https://www.figma.com/community/file/1073921725197233598/finity-design-system",
    type: "figma",
    organization: "Finity",
    year: 2022,
    categories: ["DeFi", "Finance", "Modern"]
  },
  {
    id: "ethereum",
    name: "Ethereum Foundation",
    description: "Official design resources and brand guidelines from the Ethereum Foundation, including logos, colors, and design principles.",
    thumbnailUrl: "/images/design-systems/Ethereum.png",
    url: "https://www.figma.com/@ethdotorg",
    type: "figma-profile",
    organization: "Ethereum Foundation",
    year: 2024,
    categories: ["Blockchain", "Foundation", "Brand"]
  },
  {
    id: "optimism",
    name: "Optimism",
    description: "Design resources from Optimism, the Ethereum Layer 2 scaling solution, featuring vibrant and optimistic design elements.",
    thumbnailUrl: "/images/design-systems/Optimism.png",
    url: "https://www.figma.com/@optimism",
    type: "figma-profile",
    organization: "Optimism",
    year: 2024,
    categories: ["Layer 2", "Scaling", "Ethereum"]
  }
]; 