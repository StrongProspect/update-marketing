import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for static websites
  // Optional: Only if your URL has a subfolder (like GitHub Pages)
  basePath: "/update-monorepo",
  images: {
    unoptimized: true, // Static sites cannot use Next.js's default Image Optimization
  },
};

export default withNextVideo(nextConfig);
