import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// Define default metadata
export const metadata: Metadata = {
  title: {
    default: 'design3 | Showcasing the Best in Web3 Design',
    template: '%s | design3'
  },
  description: 'Explore the best rebrands, UI components, and social graphics that shaped Web3. A curated collection of design transformations in the blockchain space.',
  keywords: ['web3', 'rebrands', 'blockchain', 'design', 'crypto', 'UI', 'branding'],
  authors: [{ name: 'Harvey Woods', url: 'https://twitter.com/HarveyWodos' }],
  creator: 'Harvey Woods',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://design3.xyz',
    title: 'design3 | Showcasing the Best in Web3 Design',
    description: 'Explore the best rebrands, UI components, and social graphics that shaped Web3. A curated collection of design transformations in the blockchain space.',
    siteName: 'design3',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@HarveyWodos',
    title: 'design3 | Showcasing the Best in Web3 Design',
    description: 'Explore the best rebrands, UI components, and social graphics that shaped Web3. A curated collection of design transformations in the blockchain space.',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
