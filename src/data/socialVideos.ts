export interface SocialVideo {
  id: string;
  title: string;
  description: string;
  tweetId: string;
  tweetUrl: string;
  thumbnailUrl: string;
  year: number;
  categories: string[];
  author?: string;
}

export const socialVideos: SocialVideo[] = [
  {
    id: "family-search",
    title: "Family's New Search Feature",
    description: "Search feature for quickly discovering trending tokens and tracking wallet addresses",
    tweetId: "1899547030906888471",
    tweetUrl: "https://twitter.com/i/status/1899547030906888471",
    thumbnailUrl: "/images/videos/family-search.jpg",
    year: 2024,
    categories: ["UI", "Feature"],
    author: "Family"
  },
  {
    id: "movement-network",
    title: "Movement Network Launch",
    description: "Movement Network Foundation announces $MOVE token launch",
    tweetId: "1866095021897699383",
    tweetUrl: "https://twitter.com/i/status/1866095021897699383",
    thumbnailUrl: "/images/videos/movement-network.jpg",
    year: 2024,
    categories: ["Launch", "Token"],
    author: "Movement Network"
  },
  {
    id: "phantom-features",
    title: "Phantom Wallet Update",
    description: "New features and improvements to the Phantom wallet experience",
    tweetId: "1854853498456625385",
    tweetUrl: "https://twitter.com/i/status/1854853498456625385",
    thumbnailUrl: "/images/videos/phantom-features.jpg",
    year: 2024,
    categories: ["Wallet", "Update"],
    author: "Phantom"
  },
  {
    id: "solana-showcase",
    title: "Solana Ecosystem Showcase",
    description: "Highlighting the growing Solana ecosystem and developer tools",
    tweetId: "1851234567891234567",
    tweetUrl: "https://twitter.com/i/status/1851234567891234567",
    thumbnailUrl: "/images/videos/solana-showcase.jpg",
    year: 2024,
    categories: ["Ecosystem", "Development"],
    author: "Solana"
  }
]; 