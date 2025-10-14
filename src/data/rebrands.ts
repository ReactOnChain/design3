export interface Rebrand {
  id: string;
  name: string;
  logo: string;
  description: string;
  oldName?: string;
  newName?: string;
  year: number;
  colors: string[];
  beforeImage?: string;
  afterImage?: string;
  caseStudyUrl?: string;
  designAgency?: string;
  sector: string;
  announcementTweet?: string;
}

export type SortOption = 'newest' | 'oldest' | 'a-z' | 'z-a';

// Example data
export const rebrands: Rebrand[] = [
  {
    id: "phantom",
    name: "Phantom",
    logo: "/images/rebrands/phantom/logo.svg",
    description: "Our mission is to make crypto safe and easy-to-use for everyone.",
    oldName: "Phantom",
    newName: "Phantom",
    year: 2023,
    colors: ["#1c1c1c", "#ab9ff2", "#fffdf8"],
    beforeImage: "/images/rebrands/phantom/before.png",
    afterImage: "/images/rebrands/phantom/after.svg",
    designAgency: "bakkenbaeck",
    sector: "Wallet",
    announcementTweet: "https://x.com/phantom/status/1674513272115175424"
  },
  {
    id: "cowdao",
    name: "CowDAO",
    logo: "/images/rebrands/cowdao/logo.svg",
    description: "CoW DAO is an open collective of developers, market makers, and community contributors on a mission to protect users from the dangers of DeFi.",
    oldName: "CowProtocol / CowSwap",
    newName: "CowDAO",
    year: 2024,
    colors: ["#23181A", "#F0DEDE", "#F0DEDE"],
    beforeImage: "/images/rebrands/cowdao/before.jpeg",
    afterImage: "/images/rebrands/cowdao/after.svg",
    designAgency: "Unknown",
    sector: "DAO",
    announcementTweet: "https://x.com/CoWSwap/status/1805606262744531260?lang=en"
  },
  {
    id: "metamask",
    name: "Metamask",
    logo: "/images/rebrands/metamask/logo.svg",
    description: "Your home in web3 · The Everything Wallet · Buy, sell, swap, send, receive",
    oldName: "Metamask",
    newName: "Metamask",
    year: 2025,
    colors: ["#FF5C16", "#FFFFFF", "#01332F"],
    beforeImage: "/images/rebrands/metamask/Before.png",
    afterImage: "/images/rebrands/metamask/After.svg",
    designAgency: "Unknown",
    sector: "Wallet",
    announcementTweet: "https://x.com/MetaMask/status/1895187255297482802"
  },
  {
    id: "ondo",
    name: "Ondo Finance",
    logo: "/images/rebrands/ondo/logo.svg",
    description: "At Ondo, we design institutional-grade platforms, assets, and infrastructure to bring financial markets onchain.",
    oldName: "Ondo Finance",
    newName: "Ondo Finance",
    year: 2025,
    colors: ["#000000", "#FFFFFF"],
    beforeImage: "/images/rebrands/ondo/before.png",
    afterImage: "/images/rebrands/ondo/before.svg",
    designAgency: "Unknown",
    sector: "DeFi",
    announcementTweet: "https://x.com/OndoFinance/status/1886528595801334155"
  },
  {
    id: "aave",
    name: "AAVE",
    logo: "/images/rebrands/aave/logo.svg",
    description: "Aave is a decentralised non-custodial liquidity protocol where users can participate as suppliers or borrowers.",
    oldName: "AAVE",
    newName: "AAVE / Avara",
    year: 2024,
    colors: ["#9391f7", "#BCBBFF", "#201D1D"],
    beforeImage: "/images/rebrands/aave/before.png",
    afterImage: "/images/rebrands/aave/after.svg",
    designAgency: "Benji Taylor",
    sector: "DeFi",
    announcementTweet: "https://x.com/aave/status/1785749941614240232"
  },
  {
    id: "kpk",
    name: "kpk",
    logo: "/images/rebrands/kpk/after.svg",
    description: "kpk helps organisations secure, manage, and grow their onchain assets. We're building the largest liquidity network in crypto.",
    oldName: "karpatkey",
    newName: "kpk",
    year: 2025,
    colors: ["#232323", "#EEEDED"],
    beforeImage: "/images/rebrands/kpk/before.png",
    afterImage: "/images/rebrands/kpk/after.svg",
    designAgency: "unkown",
    sector: "DeFi",
    announcementTweet: "https://x.com/kpk_io/status/1901968218706833905"
  },
  {
    id: "maker-sky",
    name: "Sky",
    description: "MakerDAO's rebrand to Sky, focusing on a more accessible and user-friendly identity",
    oldName: "MakerDAO",
    newName: "Sky",
    year: 2024,
    colors: ["#1AAB9B", "#FFFFFF"],
    logo: "/images/rebrands/sky/after.png",
    beforeImage: "/images/rebrands/sky/before.svg",
    afterImage: "/images/rebrands/sky/after.png",
    designAgency: "Unknown",
    sector: "DeFi",
    announcementTweet: "https://twitter.com/SkyProtocol/status/1750000000000000000"
  },
  {
    id: "a16z",
    name: "A16z",
    description: "We invest in software eating the world",
    oldName: "A16z",
    newName: "A16z",
    year: 2025,
    colors: ["#751d2b", "#132239", "#774f23"],
    logo: "/images/rebrands/a16z/current.png",
    beforeImage: "/images/rebrands/a16z/before.jpeg",
    afterImage: "/images/rebrands/a16z/current.png",
    designAgency: "Unknown",
    sector: "VC"
  },
  {
    id: "safe",
    name: "Safe",
    logo: "/images/rebrands/safe/after.svg",
    description: "Safe{Wallet} is the go-to multisig wallet supporting the Safe smart account.",
    oldName: "Gnosis Safe",
    newName: "Safe",
    year: 2024,
    colors: ["#12ff80", "#A1A3A7", "#FFFFFF"],
    beforeImage: "/images/rebrands/safe/before.png",
    afterImage: "/images/rebrands/safe/after.svg",
    designAgency: "Unknown",
    sector: "Wallet",
    announcementTweet: "https://x.com/gnosisSafe/status/1566779457041416192"
  },
  {
    id: "privy",
    name: "Privy",
    logo: "/images/rebrands/privy/after.svg",
    description: "Privy makes it easy to build on crypto rails. Securely spin up wallets, sign transactions, and integrate onchain infrastructure—all through one simple API.",
    oldName: "Privy",
    newName: "Privy",
    year: 2024,
    colors: ["#010110", "#FFFFFF", "#FF8271"],
    beforeImage: "/images/rebrands/privy/before.webp",
    afterImage: "/images/rebrands/privy/after.svg",
    designAgency: "Unknown",
    sector: "Infra",
    announcementTweet: "https://x.com/privy_io/status/1841145878851305694"
  },
  {
    id: "ethereum-name-service",
    name: "Ethereum Name Service",
    logo: "/images/rebrands/ens/after.svg",
    description: "Your ENS name is anchored in Web3, but works across the internet. It's your identity: simple, memorable, unmistakably yours. Farewell to complexity.",
    oldName: "ENS",
    newName: "ENS",
    year: 2024,
    colors: ["#0080BC", "#CEE1E8", "#011A25", "#f6f6f6"],
    beforeImage: "/images/rebrands/ens/before.webp",
    afterImage: "/images/rebrands/ens/after.svg",
    designAgency: "@omgadamho",
    sector: "Domains",
    announcementTweet: "https://x.com/omgadamho/status/1810683732296077578"
  },
  {
    id: "1inch",
    name: "1inch",
    logo: "/images/rebrands/1inch/after.svg",
    description: "1inch Network offers a DeFi ecosystem with products like 1inch dApp, Wallet, Developer Portal, Portfolio, and Fusion for secure Web3 operations.",
    oldName: "1inch",
    newName: "1inch / 1”",
    year: 2025,
    colors: ["#000000", "#19191C", "#F0F0F5", "#FFFFFF"],
    beforeImage: "/images/rebrands/1inch/before.svg",
    afterImage: "/images/rebrands/1inch/after.svg",
    designAgency: "Unknown",
    sector: "DEX",
    announcementTweet: "https://x.com/1inch/status/1973194015240757358"
  }
];

// Dynamically generate sector options from rebrand data
export const getSectorOptions = () => {
  const sectors = rebrands.map((rebrand) => rebrand.sector);
  const uniqueSectors = [...new Set(sectors)].sort();
  return ['All', ...uniqueSectors];
}; 