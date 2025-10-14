export interface UIComponent {
  id: string;
  name: string;
  description: string;
  videoUrl: string;
  year: number;
  categories: string[];
  sourceUrl: string;
  tags: string[];
}

export const components: UIComponent[] = [
  {
    id: "animated-button",
    name: "Animated Button",
    description: "A sleek, interactive button with hover and click animations",
    videoUrl: "/videos/components/animated-button.mp4",
    year: 2023,
    categories: ["UI", "Animation"],
    sourceUrl: "https://example.com/animated-button",
    tags: ["Button", "Animation", "Interactive"]
  },
  {
    id: "gradient-card",
    name: "Gradient Card",
    description: "A modern card component with dynamic gradient effects",
    videoUrl: "/videos/components/gradient-card.mp4",
    year: 2023,
    categories: ["UI", "Effects"],
    sourceUrl: "https://example.com/gradient-card",
    tags: ["Card", "Gradient", "Modern"]
  }
]; 