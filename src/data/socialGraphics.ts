export interface SocialGraphic {
  id: string;
  title: string;
  description: string;
  tweetUrl: string;
  imageUrl: string;
  year: number;
  categories: string[];
}

export const socialGraphics: SocialGraphic[] = [
  {
    id: "backpack",
    title: "Backpack",
    description: "Announcing Backpack's new features and updates",
    tweetUrl: "https://twitter.com/Backpack/status/1906964829862244431",
    imageUrl: "/images/social/backpack.jpeg",
    year: 2024,
    categories: ["Wallet", "Product Update"]
  },
  {
    id: "kava",
    title: "Kava",
    description: "Kava's platform announcement",
    tweetUrl: "https://twitter.com/kava_platform/status/1596071214446829568",
    imageUrl: "/images/social/kava.jpeg",
    year: 2022,
    categories: ["Platform", "Announcement"]
  },
  {
    id: "traderjoe",
    title: "Trader Joe",
    description: "Trader Joe's platform update",
    tweetUrl: "https://twitter.com/traderjoe_xyz/status/1607733831573938177",
    imageUrl: "/images/social/traderjoe.jpeg",
    year: 2022,
    categories: ["DEX", "Update"]
  }
]; 