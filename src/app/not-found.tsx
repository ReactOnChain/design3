import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-[family-name:var(--font-geist-sans)] flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-6 text-[#AB9FF2]">404</h1>
        <h2 className="text-2xl font-medium mb-4">Page Not Found</h2>
        <p className="text-[#8a8a8a] mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-5 py-2.5 bg-[#AB9FF2] text-black rounded-md font-medium text-sm hover:bg-[#9A8CE0] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 